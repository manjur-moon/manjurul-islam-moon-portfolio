import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
export function ContactLinkCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly value: string;
  readonly href: string | null;
  readonly external?: boolean;
}): React.JSX.Element {
  const content = (
    <>
      <span className="flex size-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
        <Icon aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-slate-500">{label}</span>
        <span className="mt-1 block break-words font-semibold text-slate-200">
          {value}
        </span>
      </span>
      {href ? <ArrowUpRight aria-hidden className="text-slate-500" size={18} /> : null}
    </>
  );
  const classes =
    "flex min-h-24 items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5";
  return href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${classes} hover:border-sky-400/50`}
    >
      {content}
    </a>
  ) : (
    <div aria-disabled="true" className={`${classes} opacity-70`}>
      {content}
    </div>
  );
}
