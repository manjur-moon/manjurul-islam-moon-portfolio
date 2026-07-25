import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import type { PortfolioSectionId } from "@/types/navigation.types";
import { cn } from "@/utils/class-name.utils";
export function SectionContainer({
  id,
  labelledBy,
  children,
  className,
}: {
  readonly id: PortfolioSectionId;
  readonly labelledBy: string;
  readonly children: ReactNode;
  readonly className?: string;
}): React.JSX.Element {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-24 py-24 sm:py-28", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
