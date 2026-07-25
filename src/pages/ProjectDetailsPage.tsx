import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Code2,
  GraduationCap,
  Lightbulb,
  ListChecks,
  Rocket,
  Star,
  Wrench,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getSectionPath } from "@/app/routes";
import { Container } from "@/components/layout/Container";
import { ProjectDetailList } from "@/components/projects/ProjectDetailList";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { SeoJsonLd } from "@/components/seo/SeoJsonLd";
import { Button, getButtonClassName } from "@/components/ui/Button";
import { PROJECT_CATEGORY_LABELS } from "@/data/project-options.data";
import { personalInfo } from "@/data/personal.data";
import { useSeo } from "@/hooks/useSeo";
import { getProjectBySlug } from "@/services/project.service";
import type { ImageAsset } from "@/types/portfolio.types";
import type { Project } from "@/types/project.types";
import { formatPortfolioDate } from "@/utils/date.utils";
import { createProjectStructuredData } from "@/utils/structured-data.utils";

type State =
  | { readonly status: "loading" }
  | { readonly status: "ready"; readonly project: Project }
  | { readonly status: "not-found" }
  | { readonly status: "error" };

const galleryImages = (project: Project): readonly ImageAsset[] => {
  const images = new Map<string, ImageAsset>();
  [project.thumbnail, ...project.screenshots].forEach((image) =>
    images.set(image.src, image),
  );
  return [...images.values()];
};

export function ProjectDetailsPage(): React.JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const [reload, setReload] = useState(0);
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let active = true;
    void getProjectBySlug(slug ?? "")
      .then(
        (project) =>
          active &&
          setState(project ? { status: "ready", project } : { status: "not-found" }),
      )
      .catch(() => active && setState({ status: "error" }));
    return () => {
      active = false;
    };
  }, [reload, slug]);

  const title =
    state.status === "ready"
      ? `${state.project.title} | ${personalInfo.fullName}`
      : state.status === "not-found"
        ? `Project Not Found | ${personalInfo.fullName}`
        : state.status === "error"
          ? `Project Error | ${personalInfo.fullName}`
          : `Loading Project | ${personalInfo.fullName}`;
  useSeo({
    title,
    description:
      state.status === "ready"
        ? state.project.shortDescription
        : "Project information is unavailable.",
    canonicalPath:
      state.status === "ready"
        ? `/projects/${encodeURIComponent(state.project.slug)}`
        : window.location.pathname,
    imagePath: state.status === "ready" ? state.project.thumbnail.src : undefined,
    imageAlt: state.status === "ready" ? state.project.thumbnail.alt : undefined,
    type: state.status === "ready" ? "article" : "website",
    robots: state.status === "ready" ? "index, follow" : "noindex, nofollow",
  });

  if (state.status === "loading")
    return (
      <Container className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20">
        <h1 data-route-heading="true" tabIndex={-1} className="text-4xl font-bold">
          Loading project
        </h1>
        <p role="status" className="mt-5 text-slate-300">
          Project information is being loaded.
        </p>
      </Container>
    );
  if (state.status === "error")
    return (
      <Container className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20">
        <h1 data-route-heading="true" tabIndex={-1} className="text-4xl font-bold">
          Unable to load the project
        </h1>
        <div className="mt-8 flex gap-4">
          <Button onClick={() => setReload((value) => value + 1)}>Try again</Button>
          <Link
            to={getSectionPath("projects")}
            className={getButtonClassName({ variant: "secondary" })}
          >
            Back to projects
          </Link>
        </div>
      </Container>
    );
  if (state.status === "not-found")
    return (
      <Container className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
          Invalid project
        </p>
        <h1 data-route-heading="true" tabIndex={-1} className="mt-4 text-4xl font-bold">
          Project not found
        </h1>
        <p className="mt-5 text-slate-300">
          The requested project does not exist or is not published.
        </p>
        <Link
          to={getSectionPath("projects")}
          className={getButtonClassName({ className: "mt-8 w-fit" })}
        >
          Back to projects
        </Link>
      </Container>
    );

  const project = state.project;
  return (
    <>
      <SeoJsonLd data={createProjectStructuredData(project)} />
      <article className="py-16">
        <Container>
          <Link
            to={getSectionPath("projects")}
            className={getButtonClassName({ variant: "secondary", size: "sm" })}
          >
            Back to projects
          </Link>
          <header className="mt-12 max-w-5xl">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-sky-400/10 px-3 py-1.5 text-sm font-semibold text-sky-300">
                {PROJECT_CATEGORY_LABELS[project.category]}
              </span>
              {project.isFeatured ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1.5 text-sm text-amber-300">
                  <Star aria-hidden size={15} />
                  Featured
                </span>
              ) : null}
            </div>
            <h1
              data-route-heading="true"
              tabIndex={-1}
              className="mt-6 text-balance text-4xl font-bold text-slate-50 sm:text-6xl"
            >
              {project.title}
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              {project.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={getButtonClassName()}
                >
                  Live project
                  <ArrowUpRight aria-hidden size={18} />
                </a>
              ) : null}
              {project.clientRepositoryUrl ? (
                <a
                  href={project.clientRepositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={getButtonClassName({
                    variant: "secondary",
                  })}
                >
                  <Code2 aria-hidden size={18} />
                  Client repository
                </a>
              ) : null}
            </div>
          </header>
          <div className="mt-12">
            <ProjectGallery
              projectTitle={project.title}
              images={galleryImages(project)}
            />
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-8">
              <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
                <div className="flex items-center gap-3">
                  <BookOpen aria-hidden className="text-sky-300" />
                  <h2 className="text-xl font-semibold">Project overview</h2>
                </div>
                <p className="mt-6 whitespace-pre-line leading-8 text-slate-400">
                  {project.fullDescription}
                </p>
              </section>
              <ProjectDetailList
                headingId="features-heading"
                title="Important features"
                icon={ListChecks}
                items={project.features}
              />
              <ProjectDetailList
                headingId="challenges-heading"
                title="Challenges"
                icon={Wrench}
                items={project.challenges}
              />
              <ProjectDetailList
                headingId="solutions-heading"
                title="Solutions"
                icon={Lightbulb}
                items={project.solutions}
              />
            </div>
            <aside className="space-y-8">
              <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
                <h2 className="text-xl font-semibold">Project information</h2>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays aria-hidden size={16} />
                      Completion date
                    </dt>
                    <dd className="mt-2">
                      {formatPortfolioDate(project.completionDate)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Technology stack</dt>
                    <dd>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <li
                            key={technology}
                            className="rounded-full border border-slate-700 px-3 py-1.5 text-sm"
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </section>
            </aside>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <ProjectDetailList
              headingId="learning-heading"
              title="Learning outcomes"
              icon={GraduationCap}
              items={project.learningOutcomes}
            />
            <ProjectDetailList
              headingId="improvements-heading"
              title="Improvements"
              icon={Wrench}
              items={project.improvements}
            />
            <ProjectDetailList
              headingId="future-heading"
              title="Future plans"
              icon={Rocket}
              items={project.futurePlans}
            />
          </div>
        </Container>
      </article>
    </>
  );
}
