import type { ContentStatus, DateRange } from "@/types/portfolio.types";

export interface EducationEntry {
  readonly id: string;
  readonly institution: string;
  readonly qualification: string;
  readonly subject: string | null;
  readonly period: DateRange;
  readonly location: string | null;
  readonly result: string | null;
  readonly description: string | null;
  readonly status: ContentStatus;
}
