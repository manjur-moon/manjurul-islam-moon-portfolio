import type { ButtonHTMLAttributes } from "react";

import { FOCUS_VISIBLE_CLASS } from "@/styles/style.constants";
import { cn } from "@/utils/class-name.utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

interface ButtonClassNameOptions {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly className?: string;
}

export const getButtonClassName = ({
  variant = "primary",
  size = "md",
  className,
}: ButtonClassNameOptions = {}): string => {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "border border-sky-500 bg-sky-700 text-white shadow-md shadow-sky-950/20 hover:-translate-y-1 hover:scale-[1.02] hover:border-sky-400 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/25 active:translate-y-0 active:scale-[0.98]",

    secondary:
      "border border-sky-500 bg-transparent text-sky-400 hover:-translate-y-1 hover:scale-[1.02] hover:bg-sky-500 hover:text-white hover:shadow-xl hover:shadow-sky-500/25 active:translate-y-0 active:scale-[0.98]",

    ghost:
      "border border-transparent bg-transparent text-sky-400 hover:-translate-y-1 hover:scale-[1.02] hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-300 active:translate-y-0 active:scale-[0.98]",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "min-h-9 px-3 py-2 text-sm",
    md: "min-h-11 px-5 py-2.5 text-sm",
    lg: "min-h-12 px-6 py-3 text-base",
  };

  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:transform-none",
    FOCUS_VISIBLE_CLASS,
    variants[variant],
    sizes[size],
    className,
  );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button
      {...props}
      type={type}
      className={getButtonClassName({
        variant,
        size,
        className,
      })}
    />
  );
}
