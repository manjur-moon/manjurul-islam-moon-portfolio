import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "@/app/routes";
import { navigationItems } from "@/data/navigation.data";
import type { PortfolioSectionId } from "@/types/navigation.types";

const IDs = new Set<string>(navigationItems.map((item) => item.sectionId));
const parseHash = (hash: string): PortfolioSectionId | null => {
  try {
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    return IDs.has(id) ? (id as PortfolioSectionId) : null;
  } catch {
    return null;
  }
};

export const useActiveSection = (): PortfolioSectionId | null => {
  const location = useLocation();
  const [active, setActive] = useState<PortfolioSectionId | null>(
    location.pathname === ROUTES.home ? (parseHash(location.hash) ?? "home") : null,
  );

  useEffect(() => {
    setActive(
      location.pathname === ROUTES.home ? (parseHash(location.hash) ?? "home") : null,
    );
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (location.pathname !== ROUTES.home) return undefined;
    const sections = navigationItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && IDs.has(visible.target.id))
          setActive(visible.target.id as PortfolioSectionId);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  return active;
};
