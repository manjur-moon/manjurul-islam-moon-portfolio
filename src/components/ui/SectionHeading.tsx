export function SectionHeading({
  headingId,
  eyebrow,
  title,
  description,
}: {
  readonly headingId: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
}): React.JSX.Element {
  return (
    <header className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        data-section-heading="true"
        tabIndex={-1}
        className="mt-4 text-balance text-3xl font-bold text-slate-50 sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
