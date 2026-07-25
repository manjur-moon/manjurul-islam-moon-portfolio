import { BriefcaseBusiness } from "lucide-react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { EmptyState } from "@/components/ui/EmptyState";
import type { ExperienceEntry } from "@/types/experience.types";

interface ExperienceSectionProps {
  readonly entries: readonly ExperienceEntry[];
}

export function ExperienceSection({
  entries,
}: ExperienceSectionProps): React.JSX.Element {
  return (
    <SectionContainer
      id="experience"
      labelledBy="experience-heading"
      className="border-t border-slate-800/70"
    >
      <header className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="font-mono text-sm font-medium tracking-wide text-sky-500">
          Experience
        </p>

        <h2
          id="experience-heading"
          data-section-heading="true"
          tabIndex={-1}
          className="mt-5 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
        >
          Professional <span className="text-sky-500">Experience</span>
        </h2>

        <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
          A summary of my professional background, responsibilities, and practical
          experience.
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
                        {entry.jobTitle}
                      </h3>

                      <p className="mt-2 font-medium text-sky-400">{entry.companyName}</p>
                    </div>
                  </div>

                  {entry.responsibilities.length > 0 ? (
                    <ul className="mt-6 space-y-3">
                      {entry.responsibilities.map((responsibility, index) => (
                        <li
                          key={`${entry.id}-responsibility-${String(index)}`}
                          className="flex gap-3 text-slate-300"
                        >
                          <span
                            aria-hidden
                            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-sky-400 transition-transform duration-300 group-hover:scale-125"
                          />

                          <span className="leading-7">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {entry.technologies.length > 0 ? (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {entry.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-sky-500/10 hover:text-sky-300"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <EmptyState
            icon={BriefcaseBusiness}
            title="Experience details have not been published"
            description="Complete the draft experience entry and publish it."
            filePath="src/data/experience.data.ts"
          />
        )}
      </div>
    </SectionContainer>
  );
}
