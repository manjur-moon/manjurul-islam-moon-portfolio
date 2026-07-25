import type { ProjectCategoryFilter, ProjectSortOption } from "@/types/project.types";

export const PROJECT_CATEGORY_OPTIONS: readonly {
  value: ProjectCategoryFilter;
  label: string;
}[] = [
  { value: "all", label: "All Projects" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "full-stack", label: "Full Stack" },
];

export const PROJECT_SORT_OPTIONS: readonly {
  value: ProjectSortOption;
  label: string;
}[] = [
  { value: "featured", label: "Featured First" },
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "name-asc", label: "Project Name: A–Z" },
  { value: "name-desc", label: "Project Name: Z–A" },
];

export const PROJECT_CATEGORY_LABELS = Object.freeze({
  frontend: "Frontend",
  backend: "Backend",
  "full-stack": "Full Stack",
});
