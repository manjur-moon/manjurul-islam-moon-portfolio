import { SectionContainer } from "@/components/layout/SectionContainer";
import { ProfileVisual } from "@/components/media/ProfileVisual";
import { SectionLink } from "@/components/navigation/SectionLink";
import { SocialLinks } from "@/components/social/SocialLinks";
import { getButtonClassName } from "@/components/ui/Button";
import { CONTENT_PLACEHOLDERS } from "@/data/content-placeholders.data";
import { Download, FileX2 } from "lucide-react";
import type { PersonalInfo, SocialLink } from "@/types/personal.types";
import { resolveContentText } from "@/utils/content.utils";

interface HeroSectionProps {
  readonly personal: PersonalInfo;
  readonly socialLinks: readonly SocialLink[];
}

export function HeroSection({
  personal,
  socialLinks,
}: HeroSectionProps): React.JSX.Element {
  const fullName = personal.displayName?.trim() || personal.fullName.trim();

  const nameParts = fullName.split(/\s+/);
  const lastName = nameParts.pop() ?? fullName;
  const firstNames = nameParts.join(" ");

  const designation = resolveContentText(
    personal.professionalDesignation,
    CONTENT_PLACEHOLDERS.professionalDesignation,
  );

  const headline = resolveContentText(
    personal.heroHeadline,
    CONTENT_PLACEHOLDERS.heroHeadline,
  );

  const introduction = resolveContentText(
    personal.shortIntroduction,
    CONTENT_PLACEHOLDERS.shortIntroduction,
  );

  return (
    <SectionContainer
      id="home"
      labelledBy="home-heading"
      className="flex min-h-[calc(100vh-5rem)] items-center py-16"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left content */}
        <div>
          <p className="font-mono text-base font-medium tracking-wide text-sky-400">
            Hello, I&apos;m
          </p>

          <h1
            id="home-heading"
            data-route-heading="true"
            data-section-heading="true"
            tabIndex={-1}
            className="mt-5 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {firstNames ? (
              <>
                <span className="text-sky-500">{firstNames}</span>{" "}
              </>
            ) : null}

            <span className="text-slate-50">{lastName}</span>
          </h1>

          <p className="mt-6 font-mono text-lg font-semibold text-amber-400 sm:text-xl">
            {designation}
          </p>

          <p className="mt-7 max-w-3xl text-xl font-semibold leading-8 text-slate-100">
            {headline}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {introduction}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <SectionLink
              sectionId="projects"
              className={getButtonClassName({
                size: "lg",
              })}
            >
              View Projects
            </SectionLink>

            {personal.resumeUrl ? (
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={getButtonClassName({
                  variant: "secondary",
                  size: "lg",
                })}
              >
                <Download aria-hidden size={18} />
                View resume
              </a>
            ) : (
              <span
                aria-disabled="true"
                className={`${getButtonClassName({
                  variant: "secondary",
                  size: "lg",
                })} cursor-not-allowed opacity-60`}
              >
                <FileX2 aria-hidden size={18} />

                {CONTENT_PLACEHOLDERS.resumeFile}
              </span>
            )}
          </div>

          {socialLinks.length > 0 ? (
            <SocialLinks links={socialLinks} variant="minimal" className="mt-8" />
          ) : (
            <p className="mt-8 text-sm text-slate-500">
              {CONTENT_PLACEHOLDERS.githubUrl}
              {" · "}
              {CONTENT_PLACEHOLDERS.linkedinUrl}
              {" · "}
              {CONTENT_PLACEHOLDERS.leetcodeUrl}
            </p>
          )}
        </div>

        <ProfileVisual image={personal.profileImage} fullName={personal.fullName} />
      </div>
    </SectionContainer>
  );
}
