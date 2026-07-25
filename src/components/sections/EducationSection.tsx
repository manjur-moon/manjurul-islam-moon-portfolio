import { GraduationCap } from "lucide-react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { EmptyState } from "@/components/ui/EmptyState";
import type { EducationEntry } from "@/types/education.types";

interface EducationSectionProps {
  readonly entries: readonly EducationEntry[];
}

export function EducationSection({ entries }: EducationSectionProps): React.JSX.Element {
  return (
    <SectionContainer
      id="education"
      labelledBy="education-heading"
      className="border-t border-slate-800/70"
    >
      <header className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="font-mono text-sm font-medium tracking-wide text-sky-500">
          Education
        </p>

        <h2
          id="education-heading"
          data-section-heading="true"
          tabIndex={-1}
          className="mt-5 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
        >
          Academic <span className="text-sky-500">Background</span>
        </h2>

        <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
          My academic journey and the foundation that shaped my technical knowledge and
          problem-solving skills.
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        {entries.length > 0 ? (
          <ol className="space-y-6">
            {entries.map((entry) => (
              <li key={entry.id}>
                <article className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-sky-950/20 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-sky-400">
                        {entry.qualification}
                      </h3>

                      <p className="mt-2 font-medium text-sky-400">{entry.institution}</p>

                      {entry.subject ? (
                        <p className="mt-2 text-slate-300">{entry.subject}</p>
                      ) : null}
                    </div>
                  </div>

                  {entry.description ? (
                    <p className="mt-6 leading-7 text-slate-300">{entry.description}</p>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {entry.location ? (
                      <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-sky-500/10 hover:text-sky-300">
                        {entry.location}
                      </span>
                    ) : null}

                    {entry.result ? (
                      <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-sky-500/10 hover:text-sky-300">
                        {entry.result}
                      </span>
                    ) : null}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <EmptyState
            icon={GraduationCap}
            title="Education details have not been published"
            description="Complete an education entry and change its status to published."
            filePath="src/data/education.data.ts"
          />
        )}
      </div>
    </SectionContainer>
  );
}
