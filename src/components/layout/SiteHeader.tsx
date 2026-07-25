import { useCallback, useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getSectionPath } from "@/app/routes";
import { Container } from "@/components/layout/Container";
import { NavigationLink } from "@/components/navigation/NavigationLink";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { IconButton } from "@/components/ui/IconButton";
import { navigationItems } from "@/data/navigation.data";
import { personalInfo } from "@/data/personal.data";
import { useActiveSection } from "@/hooks/useActiveSection";

const initials = (name: string): string =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export function SiteHeader(): React.JSX.Element {
  const location = useLocation();
  const activeSection = useActiveSection();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const brand = personalInfo.displayName || personalInfo.fullName;
  const close = useCallback((restore: boolean): void => {
    setOpen(false);
    if (restore) requestAnimationFrame(() => buttonRef.current?.focus());
  }, []);
  useEffect(() => setOpen(false), [location.key]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
        <Container className="flex h-20 items-center justify-between gap-5">
          <Link
            to={getSectionPath("home")}
            aria-label={`${brand} home`}
            className="inline-flex items-center gap-3 rounded-lg"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-400/10 text-sm font-bold text-sky-300">
              {initials(brand)}
            </span>
            <span className="font-semibold text-slate-100">{brand}</span>
          </Link>
          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <NavigationLink item={item} activeSection={activeSection} />
                </li>
              ))}
            </ul>
          </nav>
          <IconButton
            ref={buttonRef}
            icon={Menu}
            label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="md:hidden"
            onClick={() => setOpen((value) => !value)}
          />
        </Container>
      </header>
      <MobileNavigation isOpen={open} activeSection={activeSection} onClose={close} />
    </>
  );
}
