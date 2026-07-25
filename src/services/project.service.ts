import { projects } from "@/data/projects.data";
import type {
  Project,
  ProjectCategoryFilter,
  ProjectQuery,
  ProjectQueryResult,
  ProjectSortOption,
} from "@/types/project.types";
import {
  filterProjectCollectionByCategory,
  getFeaturedProjectCollection,
  getProjectFromCollectionBySlug,
  getPublishedProjectCollection,
  queryProjectCollection,
  searchProjectCollection,
  sortProjectCollection,
} from "@/utils/project.utils";

const getAvailableProjects = (): readonly Project[] =>
  getPublishedProjectCollection(projects);

export const getAllProjects = (): Promise<readonly Project[]> =>
  Promise.resolve([...getAvailableProjects()]);

export const getFeaturedProjects = (): Promise<readonly Project[]> =>
  Promise.resolve(getFeaturedProjectCollection(getAvailableProjects()));

export const getProjectBySlug = (slug: string): Promise<Project | null> =>
  Promise.resolve(getProjectFromCollectionBySlug(getAvailableProjects(), slug));

export const searchProjects = (searchTerm: string): Promise<readonly Project[]> =>
  Promise.resolve(searchProjectCollection(getAvailableProjects(), searchTerm));

export const filterProjectsByCategory = (
  category: ProjectCategoryFilter,
): Promise<readonly Project[]> =>
  Promise.resolve(filterProjectCollectionByCategory(getAvailableProjects(), category));

export const sortProjects = (
  sortOption: ProjectSortOption,
): Promise<readonly Project[]> =>
  Promise.resolve(sortProjectCollection(getAvailableProjects(), sortOption));

export const queryProjects = (query: ProjectQuery): Promise<ProjectQueryResult> => {
  const items = queryProjectCollection(getAvailableProjects(), query);

  return Promise.resolve({
    items,
    total: items.length,
  });
};
