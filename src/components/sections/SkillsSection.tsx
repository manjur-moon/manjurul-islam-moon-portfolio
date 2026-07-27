import { Code2 } from "lucide-react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { SkillMarqueeRow } from "@/components/skills/SkillMarqueeRow";
import { EmptyState } from "@/components/ui/EmptyState";
import type { SkillGroup } from "@/types/skill.types";

interface SkillsSectionProps {
  readonly groups: readonly SkillGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps): React.JSX.Element {
  const visibleGroups = groups.filter((group) => group.skills.length > 0);

  return (
    <SectionContainer
      id="skills"
      labelledBy="skills-heading"
      className="relative overflow-hidden border-t border-slate-800/70"
    >
      <header className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
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

        <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
          Technologies and tools I use to bring ideas to life
        </p>

        <p className="mt-2 text-sm text-slate-300">
          Hover to pause{" "}
          <span aria-hidden className="mx-1">
            •
          </span>
          Drag to scroll
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        {visibleGroups.length > 0 ? (
          <div className="space-y-12">
            {visibleGroups.map((group, index) => (
              <SkillMarqueeRow
                key={group.id}
                group={group}
                reverseDirection={index % 2 !== 0}
              />
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
