import { contactInfo } from "@/data/contact.data";
import { educationEntries } from "@/data/education.data";
import { experienceEntries } from "@/data/experience.data";
import { personalInfo, socialLinks } from "@/data/personal.data";
import { skillGroups } from "@/data/skills.data";
import type { PortfolioContent } from "@/types/portfolio-content.types";

export const getPortfolioContent = (): PortfolioContent => ({
  personal: personalInfo,
  contact: contactInfo,
  socialLinks: socialLinks.filter((link) => link.label.trim() && link.url.trim()),
  skillGroups: skillGroups
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) => skill.isConfirmed),
    }))
    .filter((group) => group.skills.length > 0),
  educationEntries: educationEntries.filter((entry) => entry.status === "published"),
  experienceEntries: experienceEntries.filter((entry) => entry.status === "published"),
});
