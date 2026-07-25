import type { ContentStatus, DateRange } from "@/types/portfolio.types";

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "internship"
  | "freelance"
  | "temporary"
  | "other";

export interface ExperienceEntry {
  readonly id: string;
  readonly companyName: string;
  readonly jobTitle: string;
  readonly employmentType: EmploymentType | null;
  readonly period: DateRange;
  readonly location: string | null;
  readonly isRemote: boolean | null;
  readonly responsibilities: readonly string[];
  readonly achievements: readonly string[];
  readonly technologies: readonly string[];
  readonly status: ContentStatus;
}
