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
  readonly title: string;
  readonly description: string;
}

interface PersonalDetailCard {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly label: string;
  readonly value: string;
}

export function AboutSection({ personal }: AboutSectionProps): React.JSX.Element {
  const designation = personal.professionalDesignation ?? "MERN Stack Developer";

  const aboutCards: readonly AboutCard[] = [
    {
      id: "about-programming-journey",
      icon: Code2,
      title: "My Programming Journey",
      description:
        "My programming journey began while studying Computer Science and Engineering at United International University. I started by learning programming fundamentals and gradually developed a strong interest in web development. Building practical projects helped me strengthen my problem-solving skills and motivated me to pursue a career in software development.",
    },
    {
      id: "about-work",
      icon: Rocket,
      title: "The Work I Enjoy",
      description: `As a ${designation}, I enjoy building modern, responsive, accessible, and user-friendly web applications. I particularly enjoy transforming ideas into practical digital solutions and working across both frontend and backend development using modern JavaScript technologies.`,
    },
    {
      id: "about-mindset",
      icon: Bug,
      title: "My Development Mindset",
      description:
        "I value clean and maintainable code, thoughtful user experiences, and continuous improvement. I approach technical challenges with patience and curiosity, and I enjoy debugging problems, improving existing solutions, and learning something new from every project.",
    },
    {
      id: "about-personality",
      icon: MessageSquare,
      title: "Beyond Programming",
      description:
        "Outside of programming, I enjoy exploring new technologies, learning about personal development, staying active, and spending meaningful time with family and friends. I consider myself responsible, adaptable, collaborative, and always willing to grow through new experiences.",
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
          A developer driven by curiosity, continuous learning, and a passion for creating
          meaningful digital solutions.
        </p>
      </header>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:mt-20 md:grid-cols-2">
        {aboutCards.map(({ id, icon: Icon, title, description }) => (
          <article
            key={id}
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-sky-950/20 sm:p-9"
          >
            <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-6">
              <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-slate-100 transition-colors duration-300 group-hover:text-sky-400">
                <Icon aria-hidden size={23} strokeWidth={1.8} />
              </span>

              <div>
                <h3 className="text-lg font-semibold text-slate-100 transition-colors duration-300 group-hover:text-sky-400">
                  {title}
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-300 sm:leading-8">
                  {description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-3">
        {personalDetails.map(({ id, icon: Icon, label, value }) => (
          <article
            key={id}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-sky-950/20"
          >
            <div
              aria-hidden
              className="absolute -right-8 -top-8 size-24 rounded-full bg-sky-500/5 blur-2xl transition duration-300 group-hover:bg-sky-500/10"
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
