import type { ReactNode } from "react";
import { cn } from "@/utils/class-name.utils";
export function Container({
  children,
  className,
}: {
  readonly children: ReactNode;
  readonly className?: string;
}): React.JSX.Element {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}
