import type { ContentStatus, ImageAsset, IsoDateString } from "@/types/portfolio.types";

export type ProjectCategory = "frontend" | "backend" | "full-stack";
export type ProjectSortOption =
  "featured" | "newest" | "oldest" | "name-asc" | "name-desc";
export type ProjectCategoryFilter = ProjectCategory | "all";

export interface Project {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly category: ProjectCategory;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly technologies: readonly string[];
  readonly features: readonly string[];
  readonly thumbnail: ImageAsset;
  readonly screenshots: readonly ImageAsset[];
  readonly liveUrl: string | null;
  readonly clientRepositoryUrl: string | null;
  readonly challenges: readonly string[];
  readonly solutions: readonly string[];
  readonly learningOutcomes: readonly string[];
  readonly improvements: readonly string[];
  readonly futurePlans: readonly string[];
  readonly isFeatured: boolean;
  readonly completionDate: IsoDateString;
  readonly status: ContentStatus;
}

export interface ProjectQuery {
  readonly search?: string;
  readonly category?: ProjectCategoryFilter;
  readonly sort?: ProjectSortOption;
}

export interface ProjectQueryResult {
  readonly items: readonly Project[];
  readonly total: number;
}
