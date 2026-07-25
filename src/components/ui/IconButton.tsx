import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import {
  FOCUS_VISIBLE_CLASS,
  INTERACTIVE_TRANSITION_CLASS,
} from "@/styles/style.constants";
import { cn } from "@/utils/class-name.utils";

export const IconButton = forwardRef<
  HTMLButtonElement,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "aria-label"> & {
    readonly icon: LucideIcon;
    readonly label: string;
    readonly variant?: "solid" | "ghost";
  }
>(function IconButton(
  { icon: Icon, label, variant = "ghost", className, type = "button", ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      aria-label={label}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-lg disabled:pointer-events-none disabled:opacity-50",
        FOCUS_VISIBLE_CLASS,
        INTERACTIVE_TRANSITION_CLASS,
        variant === "solid"
          ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
          : "border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-sky-400/70 hover:text-sky-300",
        className,
      )}
    >
      <Icon aria-hidden size={19} />
    </button>
  );
});
