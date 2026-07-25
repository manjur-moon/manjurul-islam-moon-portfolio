import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navigationItems } from "@/data/navigation.data";
import type { PortfolioSectionId } from "@/types/navigation.types";
import { IconButton } from "@/components/ui/IconButton";
import { NavigationLink } from "@/components/navigation/NavigationLink";

export function MobileNavigation({
  isOpen,
  activeSection,
  onClose,
}: {
  readonly isOpen: boolean;
  readonly activeSection: PortfolioSectionId | null;
  readonly onClose: (restoreFocus: boolean) => void;
}): React.JSX.Element {
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return undefined;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") onClose(true);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close mobile navigation"
            className="fixed inset-0 z-40 bg-slate-950/75 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onClose(true)}
          />
          <motion.div
            ref={panelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="fixed inset-x-4 top-24 z-50 rounded-2xl border border-slate-700 bg-slate-950 p-4 shadow-2xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="flex items-center justify-between px-2 pb-3">
              <p
                id="mobile-navigation-title"
                className="text-sm font-semibold uppercase tracking-wider text-slate-400"
              >
                Navigation
              </p>
              <IconButton
                icon={X}
                label="Close navigation"
                onClick={() => onClose(true)}
              />
            </div>
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <NavigationLink
                      item={item}
                      activeSection={activeSection}
                      mobile
                      onNavigate={() => onClose(false)}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
