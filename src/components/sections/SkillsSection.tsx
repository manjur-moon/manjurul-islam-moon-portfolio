import { Code2 } from "lucide-react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { EmptyState } from "@/components/ui/EmptyState";
import type { SkillGroup } from "@/types/skill.types";

interface SkillsSectionProps {
  readonly groups: readonly SkillGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps): React.JSX.Element {
  return (
    <SectionContainer
      id="skills"
      labelledBy="skills-heading"
      className="border-t border-slate-800/70"
    >
      <header className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm font-medium tracking-wide text-slate-200">
          What I work with
        </p>

        <h2
          id="skills-heading"
          data-section-heading="true"
          tabIndex={-1}
          className="mt-5 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
        >
          Tech <span className="text-sky-500">Stack</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-slate-300 sm:text-lg">
          Technologies and tools I use to bring ideas to life
        </p>
      </header>

      <div className="mt-24">
        {groups.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {groups.map((group) => (
              <article
                key={group.id}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-sky-950/20"
              >
                <h3 className="text-lg font-semibold text-slate-100 transition-colors duration-300 group-hover:text-sky-400">
                  {group.title}
                </h3>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.id}
                      className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-sky-500/10 hover:text-sky-300"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Code2}
            title="Confirmed skills have not been added"
            description="Add verified skills and set isConfirmed to true."
            filePath="src/data/skills.data.ts"
          />
        )}
      </div>
    </SectionContainer>
  );
}
