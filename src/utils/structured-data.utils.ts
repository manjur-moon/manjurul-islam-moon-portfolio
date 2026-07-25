import { env } from "@/config/env";
import type { ContactInfo } from "@/types/contact.types";
import type { PersonalInfo, SocialLink } from "@/types/personal.types";
import type { Project } from "@/types/project.types";
import type { StructuredData } from "@/types/seo.types";
import { getAbsoluteUrl } from "@/utils/url.utils";

export const createHomeStructuredData = (input: {
  readonly personal: PersonalInfo;
  readonly contact: ContactInfo;
  readonly socialLinks: readonly SocialLink[];
}): readonly StructuredData[] => {
  const person: StructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.personal.fullName,
    url: env.siteUrl,
  };
  if (input.personal.professionalDesignation)
    person.jobTitle = input.personal.professionalDesignation;
  if (input.personal.shortIntroduction)
    person.description = input.personal.shortIntroduction;
  if (input.personal.currentLocation)
    person.homeLocation = input.personal.currentLocation;
  if (input.personal.profileImage)
    person.image = getAbsoluteUrl(input.personal.profileImage.src);
  if (input.contact.email) person.email = input.contact.email;
  if (input.contact.phone) person.telephone = input.contact.phone;
  const sameAs = input.socialLinks
    .filter((link) => link.isExternal)
    .map((link) => link.url);
  if (sameAs.length) person.sameAs = sameAs;
  return [
    person,
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: env.appName,
      url: env.siteUrl,
      description:
        input.personal.shortIntroduction ??
        "The professional developer portfolio of Manjurul Islam.",
    },
  ];
};

export const createProjectStructuredData = (project: Project): StructuredData => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: project.title,
  description: project.shortDescription,
  url: project.liveUrl ?? getAbsoluteUrl(`/projects/${encodeURIComponent(project.slug)}`),
  dateCreated: project.completionDate,
  image: getAbsoluteUrl(project.thumbnail.src),
  applicationCategory: project.category,
  programmingLanguage: project.technologies,
  ...(project.clientRepositoryUrl ? { codeRepository: project.clientRepositoryUrl } : {}),
});
