export type PortfolioSectionId =
  "home" | "about" | "skills" | "education" | "experience" | "projects" | "contact";

export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: `#${PortfolioSectionId}`;
  readonly sectionId: PortfolioSectionId;
  readonly order: number;
}
