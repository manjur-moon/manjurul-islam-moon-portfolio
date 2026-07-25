import {
  BriefcaseBusiness,
  Bug,
  Code2,
  Mail,
  MapPin,
  MessageSquare,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import type { PersonalInfo } from "@/types/personal.types";

interface AboutSectionProps {
  readonly personal: PersonalInfo;
}

interface AboutCard {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly description: string;
}

interface PersonalDetailCard {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly label: string;
  readonly value: string;
}

export function AboutSection({ personal }: AboutSectionProps): React.JSX.Element {
  const designation = personal.professionalDesignation ?? "full-stack web developer";

  const aboutCards: readonly AboutCard[] = [
    {
      id: "about-development",
      icon: Code2,
      description: `I am a dedicated ${designation} with a strong focus on building scalable, maintainable, and user-friendly web applications.`,
    },
    {
      id: "about-technologies",
      icon: Rocket,
      description:
        "I work primarily with modern web technologies and frameworks, ensuring performance-driven and responsive solutions from development to deployment.",
    },
    {
      id: "about-quality",
      icon: Bug,
      description:
        "I value clean code, debugging, and continuous improvement to deliver reliable software that meets both technical and business requirements.",
    },
    {
      id: "about-collaboration",
      icon: MessageSquare,
      description:
        "I enjoy collaborating with teams, communicating ideas clearly, and translating complex problems into efficient technical solutions.",
    },
  ];

  const personalDetails: readonly PersonalDetailCard[] = [
    {
      id: "personal-location",
      icon: MapPin,
      label: "Location",
      value: personal.currentLocation ?? "Dhaka, Bangladesh",
    },
    {
      id: "personal-availability",
      icon: BriefcaseBusiness,
      label: "Availability",
      value: personal.availabilityStatus ?? "Open to new opportunities",
    },
    {
      id: "personal-contact",
      icon: Mail,
      label: "Preferred contact",
      value: personal.preferredContactMethod ?? "Email",
    },
  ];

  return (
    <SectionContainer
      id="about"
      labelledBy="about-heading"
      className="border-t border-slate-800/70"
    >
      <header className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm font-medium tracking-wide text-sky-500">
          Get to know me
        </p>

        <h2
          id="about-heading"
          data-section-heading="true"
          tabIndex={-1}
          className="mt-5 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
        >
          About <span className="text-sky-500">Me</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
          A passionate developer who loves turning complex problems into simple, beautiful
          solutions.
        </p>
      </header>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:mt-20 md:grid-cols-2">
        {aboutCards.map(({ id, icon: Icon, description }) => (
          <article
            key={id}
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900/70 sm:p-9"
          >
            <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-6">
              <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-slate-100 transition-colors group-hover:text-sky-400">
                <Icon aria-hidden size={23} strokeWidth={1.8} />
              </span>

              <p className="text-base font-medium leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-3">
        {personalDetails.map(({ id, icon: Icon, label, value }) => (
          <article
            key={id}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900/70"
          >
            <div
              aria-hidden
              className="absolute -right-8 -top-8 size-24 rounded-full bg-sky-500/5 blur-2xl transition group-hover:bg-sky-500/10"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                  <Icon aria-hidden size={20} strokeWidth={1.8} />
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {label}
                </p>
              </div>

              <p className="mt-5 text-base font-medium leading-7 text-slate-200">
                {value}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
