import type { NavigationItem } from "@/types/navigation.types";

export const navigationItems = Object.freeze([
  { id: "nav-home", label: "Home", href: "#home", sectionId: "home", order: 1 },
  { id: "nav-about", label: "About", href: "#about", sectionId: "about", order: 2 },
  { id: "nav-skills", label: "Skills", href: "#skills", sectionId: "skills", order: 3 },
  {
    id: "nav-education",
    label: "Education",
    href: "#education",
    sectionId: "education",
    order: 4,
  },
  {
    id: "nav-experience",
    label: "Experience",
    href: "#experience",
    sectionId: "experience",
    order: 5,
  },
  {
    id: "nav-projects",
    label: "Projects",
    href: "#projects",
    sectionId: "projects",
    order: 6,
  },
  {
    id: "nav-contact",
    label: "Contact",
    href: "#contact",
    sectionId: "contact",
    order: 7,
  },
] as const satisfies readonly NavigationItem[]);
