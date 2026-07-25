import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { getSectionPath } from "@/app/routes";
import type { PortfolioSectionId } from "@/types/navigation.types";
export function SectionLink({
  sectionId,
  children,
  className,
}: {
  readonly sectionId: PortfolioSectionId;
  readonly children: ReactNode;
  readonly className?: string;
}): React.JSX.Element {
  return (
    <Link to={getSectionPath(sectionId)} className={className}>
      {children}
    </Link>
  );
}
