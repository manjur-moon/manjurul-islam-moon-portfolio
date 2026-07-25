import { FolderSearch2, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectSearchControls } from "@/components/projects/ProjectSearchControls";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { queryProjects } from "@/services/project.service";
import type {
  Project,
  ProjectCategoryFilter,
  ProjectSortOption,
} from "@/types/project.types";

export function ProjectsSection(): React.JSX.Element {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProjectCategoryFilter>("all");
  const [sort, setSort] = useState<ProjectSortOption>("featured");
  const [reload, setReload] = useState(0);

  const [state, setState] = useState<{
    status: "loading" | "success" | "error";
    projects: readonly Project[];
  }>({
    status: "loading",
    projects: [],
  });

  useEffect(() => {
    let active = true;

    void queryProjects({
      search,
      category,
      sort,
    })
      .then((result) => {
        if (active) {
          setState({
            status: "success",
            projects: result.items,
          });
        }
      })
      .catch(() => {
        if (active) {
          setState({
            status: "error",
            projects: [],
          });
        }
      });

    return () => {
      active = false;
    };
  }, [category, reload, search, sort]);

  const changed = Boolean(search.trim() || category !== "all" || sort !== "featured");

  return (
    <SectionContainer
      id="projects"
      labelledBy="projects-heading"
      className="border-t border-slate-800/70"
    >
      <header className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm font-medium tracking-wide text-slate-200">
          My work
        </p>

        <h2
          id="projects-heading"
          data-section-heading="true"
          tabIndex={-1}
          className="mt-5 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
        >
          Featured <span className="text-sky-500">Projects</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
          A selection of projects that showcase my skills and passion for building
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        <ProjectSearchControls
          searchTerm={search}
          category={category}
          sortOption={sort}
          resultCount={state.projects.length}
          isResetDisabled={!changed}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onSortChange={setSort}
          onReset={() => {
            setSearch("");
            setCategory("all");
            setSort("featured");
          }}
        />
      </div>

      <div className="mt-10">
        {state.status === "loading" ? (
          <p role="status" className="text-slate-400">
            Loading projects…
          </p>
        ) : null}

        {state.status === "error" ? (
          <div className="rounded-2xl border border-red-500/30 p-8 text-center">
            <h3 className="text-lg font-semibold">Unable to load projects</h3>

            <Button
              variant="secondary"
              className="mt-5"
              onClick={() => {
                setReload((value) => value + 1);
              }}
            >
              <RefreshCcw aria-hidden size={17} />
              Try again
            </Button>
          </div>
        ) : null}

        {state.status === "success" && state.projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {state.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : null}

        {state.status === "success" && state.projects.length === 0 ? (
          <EmptyState
            icon={FolderSearch2}
            title={
              changed ? "No matching projects found" : "No projects have been published"
            }
            description={
              changed
                ? "Change or reset the search controls."
                : "Add a complete project entry and set its status to published."
            }
            filePath={changed ? "Reset filters" : "src/data/projects.data.ts"}
          />
        ) : null}
      </div>
    </SectionContainer>
  );
}
