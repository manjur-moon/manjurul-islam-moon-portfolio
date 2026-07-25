import type { LucideIcon } from "lucide-react";

interface ProjectDetailListProps {
  readonly headingId: string;
  readonly title: string;
  readonly icon: LucideIcon;
  readonly items: readonly string[];
}

export function ProjectDetailList({
  headingId,
  title,
  icon: Icon,
  items,
}: ProjectDetailListProps): React.JSX.Element | null {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby={headingId}
      className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
          <Icon aria-hidden size={19} />
        </span>

        <h2 id={headingId} className="text-xl font-semibold text-slate-100">
          {title}
        </h2>
      </div>

      <ul className="mt-6 space-y-3">
        {items.map((item, index) => (
          <li
            key={`${headingId}-${String(index)}`}
            className="flex gap-3 leading-7 text-slate-400"
          >
            <span
              aria-hidden
              className="mt-3 size-1.5 shrink-0 rounded-full bg-sky-300"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
