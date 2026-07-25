import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/routes";
import { ProjectImage } from "@/components/media/ProjectImage";
import { getButtonClassName } from "@/components/ui/Button";
import { PROJECT_CATEGORY_LABELS } from "@/data/project-options.data";
import type { Project } from "@/types/project.types";
export function ProjectCard({
  project,
}: {
  readonly project: Project;
}): React.JSX.Element {
  const technologies = project.technologies.slice(0, 5);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
      <div className="relative aspect-video overflow-hidden border-b border-slate-800">
        <ProjectImage
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          width={project.thumbnail.width}
          height={project.thumbnail.height}
          sizes="(max-width: 767px) 100vw, 33vw"
          className="transition group-hover:scale-[1.02] motion-reduce:transform-none"
        />
        {project.isFeatured ? (
          <span className="absolute left-4 top-4 rounded-full bg-slate-950/90 px-3 py-1 text-xs font-semibold text-sky-300">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-sky-300">
          {PROJECT_CATEGORY_LABELS[project.category]}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-slate-100">{project.title}</h3>
        <p className="mt-4 line-clamp-3 leading-7 text-slate-400">
          {project.shortDescription}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <Link
            to={ROUTES.projectDetails(project.slug)}
            className={getButtonClassName({ size: "sm" })}
          >
            View details
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live website`}
              className={getButtonClassName({ variant: "secondary", size: "sm" })}
            >
              Live site
              <ArrowUpRight aria-hidden size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
