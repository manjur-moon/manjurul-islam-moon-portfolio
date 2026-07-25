import type { LucideIcon } from "lucide-react";
export function EmptyState({
  icon: Icon,
  title,
  description,
  filePath,
}: {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly filePath: string;
}): React.JSX.Element {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 p-8 text-center">
      <Icon aria-hidden className="mx-auto text-sky-300" />
      <h3 className="mt-5 text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-400">{description}</p>
      <code className="mt-5 inline-block rounded-md bg-slate-950 px-3 py-2 text-sm text-sky-300">
        {filePath}
      </code>
    </div>
  );
}
