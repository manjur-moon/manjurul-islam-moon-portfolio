import { RotateCcw, Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  PROJECT_CATEGORY_OPTIONS,
  PROJECT_SORT_OPTIONS,
} from "@/data/project-options.data";
import type { ProjectCategoryFilter, ProjectSortOption } from "@/types/project.types";

export function ProjectSearchControls({
  searchTerm,
  category,
  sortOption,
  resultCount,
  isResetDisabled,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onReset,
}: {
  readonly searchTerm: string;
  readonly category: ProjectCategoryFilter;
  readonly sortOption: ProjectSortOption;
  readonly resultCount: number;
  readonly isResetDisabled: boolean;
  readonly onSearchChange: (value: string) => void;
  readonly onCategoryChange: (value: ProjectCategoryFilter) => void;
  readonly onSortChange: (value: ProjectSortOption) => void;
  readonly onReset: () => void;
}): React.JSX.Element {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
      <div className="grid gap-5 lg:grid-cols-[1fr_15rem]">
        <div>
          <label
            htmlFor="project-search"
            className="text-sm font-semibold text-slate-200"
          >
            Search projects
          </label>
          <div className="relative mt-2">
            <Search
              aria-hidden
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              id="project-search"
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search by title, technology or description"
              className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-12 text-sm"
            />
            {searchTerm ? (
              <button
                type="button"
                aria-label="Clear project search"
                onClick={() => onSearchChange("")}
                className="absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500"
              >
                <X aria-hidden size={17} />
              </button>
            ) : null}
          </div>
        </div>
        <div>
          <label htmlFor="project-sort" className="text-sm font-semibold text-slate-200">
            Sort projects
          </label>
          <select
            id="project-sort"
            value={sortOption}
            onChange={(event) => onSortChange(event.target.value as ProjectSortOption)}
            className="mt-2 min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm"
          >
            {PROJECT_SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-slate-200">
          Filter by category
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {PROJECT_CATEGORY_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={category === option.value}
              onClick={() => onCategoryChange(option.value)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium ${category === option.value ? "border-sky-400/60 bg-sky-400/10 text-sky-300" : "border-slate-700 bg-slate-950 text-slate-300"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">
        <p aria-live="polite" className="text-sm text-slate-400">
          {resultCount} {resultCount === 1 ? "project" : "projects"} found
        </p>
        <Button variant="ghost" size="sm" disabled={isResetDisabled} onClick={onReset}>
          <RotateCcw aria-hidden size={16} />
          Reset filters
        </Button>
      </div>
    </div>
  );
}
