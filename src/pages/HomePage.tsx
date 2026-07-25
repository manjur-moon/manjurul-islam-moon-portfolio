import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SeoJsonLd } from "@/components/seo/SeoJsonLd";
import { SEO_DEFAULTS } from "@/data/seo.data";
import { useSeo } from "@/hooks/useSeo";
import { getPortfolioContent } from "@/services/portfolio-content.service";
import { createHomeStructuredData } from "@/utils/structured-data.utils";
export function HomePage(): React.JSX.Element {
  const content = getPortfolioContent();
  useSeo({
    title: content.personal.professionalDesignation
      ? `${content.personal.fullName} | ${content.personal.professionalDesignation}`
      : SEO_DEFAULTS.title,
    description: content.personal.shortIntroduction ?? SEO_DEFAULTS.description,
    canonicalPath: "/",
    imagePath: content.personal.profileImage?.src,
    imageAlt: content.personal.profileImage?.alt ?? SEO_DEFAULTS.imageAlt,
  });
  return (
    <>
      <SeoJsonLd
        data={createHomeStructuredData({
          personal: content.personal,
          contact: content.contact,
          socialLinks: content.socialLinks,
        })}
      />
      <HeroSection personal={content.personal} socialLinks={content.socialLinks} />
      <AboutSection personal={content.personal} />
      <SkillsSection groups={content.skillGroups} />
      <EducationSection entries={content.educationEntries} />
      <ExperienceSection entries={content.experienceEntries} />
      <ProjectsSection />
      <ContactSection
        contact={content.contact}
        socialLinks={content.socialLinks}
        preferredContactMethod={content.personal.preferredContactMethod}
      />
      <SiteFooter personal={content.personal} socialLinks={content.socialLinks} />
    </>
  );
}
