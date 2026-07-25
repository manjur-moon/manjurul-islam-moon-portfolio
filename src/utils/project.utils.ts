import type {
  Project,
  ProjectCategoryFilter,
  ProjectQuery,
  ProjectSortOption,
} from "@/types/project.types";

const normalize = (value: string): string => value.trim().toLowerCase();
const timestamp = (value: string): number | null => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const result = Date.parse(`${value}T00:00:00.000Z`);
  return Number.isNaN(result) ? null : result;
};
const compareNames = (a: Project, b: Project): number =>
  a.title.localeCompare(b.title, "en", { sensitivity: "base" });
const stableSort = (
  projects: readonly Project[],
  compare: (a: Project, b: Project) => number,
): readonly Project[] =>
  projects
    .map((project, index) => ({ project, index }))
    .sort((a, b) => compare(a.project, b.project) || a.index - b.index)
    .map(({ project }) => project);

export const getPublishedProjectCollection = (
  projects: readonly Project[],
): readonly Project[] => projects.filter((project) => project.status === "published");
export const getFeaturedProjectCollection = (
  projects: readonly Project[],
): readonly Project[] => projects.filter((project) => project.isFeatured);
export const getProjectFromCollectionBySlug = (
  projects: readonly Project[],
  slug: string,
): Project | null =>
  projects.find((project) => normalize(project.slug) === normalize(slug)) ?? null;
export const searchProjectCollection = (
  projects: readonly Project[],
  searchTerm: string,
): readonly Project[] => {
  const term = normalize(searchTerm);
  if (!term) return [...projects];
  return projects.filter((project) =>
    [
      project.title,
      project.category,
      project.shortDescription,
      project.fullDescription,
      ...project.technologies,
    ]
      .join(" ")
      .toLowerCase()
      .includes(term),
  );
};
export const filterProjectCollectionByCategory = (
  projects: readonly Project[],
  category: ProjectCategoryFilter,
): readonly Project[] =>
  category === "all"
    ? [...projects]
    : projects.filter((project) => project.category === category);
export const sortProjectCollection = (
  projects: readonly Project[],
  option: ProjectSortOption,
): readonly Project[] => {
  const compareDate = (a: Project, b: Project, newest: boolean): number => {
    const at = timestamp(a.completionDate);
    const bt = timestamp(b.completionDate);
    if (at === null && bt === null) return compareNames(a, b);
    if (at === null) return 1;
    if (bt === null) return -1;
    const result = newest ? bt - at : at - bt;
    return result || compareNames(a, b);
  };

  switch (option) {
    case "featured":
      return stableSort(
        projects,
        (a, b) => Number(b.isFeatured) - Number(a.isFeatured) || compareDate(a, b, true),
      );
    case "newest":
      return stableSort(projects, (a, b) => compareDate(a, b, true));
    case "oldest":
      return stableSort(projects, (a, b) => compareDate(a, b, false));
    case "name-asc":
      return stableSort(projects, compareNames);
    case "name-desc":
      return stableSort(projects, (a, b) => compareNames(b, a));
  }
};
export const queryProjectCollection = (
  projects: readonly Project[],
  query: ProjectQuery,
): readonly Project[] =>
  sortProjectCollection(
    filterProjectCollectionByCategory(
      searchProjectCollection(projects, query.search ?? ""),
      query.category ?? "all",
    ),
    query.sort ?? "featured",
  );
