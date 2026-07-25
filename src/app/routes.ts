import type { PortfolioSectionId } from "@/types/navigation.types";
export const ROUTES = Object.freeze({
  home: "/",
  projectDetailsPattern: "/projects/:slug",
  notFound: "*",
  projectDetails: (slug: string): string => `/projects/${encodeURIComponent(slug)}`,
});
export const getSectionPath = (sectionId: PortfolioSectionId): string => `/#${sectionId}`;
