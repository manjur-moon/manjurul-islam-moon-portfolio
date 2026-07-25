import type { ContactInfo } from "@/types/contact.types";
import type { EducationEntry } from "@/types/education.types";
import type { ExperienceEntry } from "@/types/experience.types";
import type { PersonalInfo, SocialLink } from "@/types/personal.types";
import type { SkillGroup } from "@/types/skill.types";

export interface PortfolioContent {
  readonly personal: PersonalInfo;
  readonly contact: ContactInfo;
  readonly socialLinks: readonly SocialLink[];
  readonly skillGroups: readonly SkillGroup[];
  readonly educationEntries: readonly EducationEntry[];
  readonly experienceEntries: readonly ExperienceEntry[];
}
