import { Code2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { SkillBadge } from "@/components/skills/SkillBadge";
import { EmptyState } from "@/components/ui/EmptyState";
import type { SkillGroup } from "@/types/skill.types";

interface SkillsSectionProps {
  readonly groups: readonly SkillGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  const visibleGroups = groups.filter((group) => group.skills.length > 0);

  return (
    <SectionContainer
      id="skills"
      labelledBy="skills-heading"
      className="relative overflow-hidden border-t border-slate-800/70"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 size-72 rounded-full bg-sky-500/5 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 size-72 rounded-full bg-blue-500/5 blur-3xl"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
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
      </header>

      <div className="relative z-10 mt-16 sm:mt-20">
        {visibleGroups.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleGroups.map((group, groupIndex) => (
              <motion.article
                key={group.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 28,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: groupIndex * 0.06,
                  ease: "easeOut",
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -7,
                        scale: 1.015,
                      }
                }
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg shadow-slate-950/10 transition-colors duration-300 hover:border-sky-500/40 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-sky-950/30"
              >
                <h3 className="text-lg font-semibold text-slate-100 transition-colors duration-300 group-hover:text-sky-400">
                  {group.title}
                </h3>

                <ul className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.id}
                      name={skill.name}
                      animationDelay={groupIndex * 0.04 + skillIndex * 0.035}
                    />
                  ))}
                </ul>
              </motion.article>
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
