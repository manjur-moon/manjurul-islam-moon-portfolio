import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function RouteEffects(): null {
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const hash = location.hash.replace(/^#/, "");
      if (hash) {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "auto"
              : "smooth",
            block: "start",
          });
          (
            section.querySelector<HTMLElement>('[data-section-heading="true"]') ?? section
          ).focus({ preventScroll: true });
          previousPath.current = location.pathname;
          return;
        }
      }
      if (previousPath.current !== location.pathname) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        document
          .querySelector<HTMLElement>('[data-route-heading="true"]')
          ?.focus({ preventScroll: true });
      }
      previousPath.current = location.pathname;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.key, location.pathname]);
  return null;
}
