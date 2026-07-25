export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "authentication"
  | "state-and-data"
  | "forms-and-validation"
  | "testing"
  | "deployment"
  | "development-tools"
  | "soft-skills";

export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly isConfirmed: boolean;
}

export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly category: SkillCategory;
  readonly skills: readonly Skill[];
}
