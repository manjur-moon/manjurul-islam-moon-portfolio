import { Link } from "react-router-dom";
import { getSectionPath } from "@/app/routes";
import {
  FOCUS_VISIBLE_CLASS,
  INTERACTIVE_TRANSITION_CLASS,
} from "@/styles/style.constants";
import type { NavigationItem, PortfolioSectionId } from "@/types/navigation.types";
import { cn } from "@/utils/class-name.utils";
export function NavigationLink({
  item,
  activeSection,
  mobile = false,
  onNavigate,
}: {
  readonly item: NavigationItem;
  readonly activeSection: PortfolioSectionId | null;
  readonly mobile?: boolean;
  readonly onNavigate?: () => void;
}): React.JSX.Element {
  const active = item.sectionId === activeSection;
  return (
    <Link
      to={getSectionPath(item.sectionId)}
      aria-current={active ? "location" : undefined}
      onClick={onNavigate}
      className={cn(
        mobile
          ? "flex min-h-12 w-full items-center rounded-lg px-4 py-3"
          : "rounded-md px-3 py-2 text-sm",
        "font-medium",
        FOCUS_VISIBLE_CLASS,
        INTERACTIVE_TRANSITION_CLASS,
        active
          ? "bg-sky-400/10 text-sky-300"
          : "text-slate-300 hover:bg-slate-800/70 hover:text-slate-50",
      )}
    >
      {item.label}
    </Link>
  );
}
