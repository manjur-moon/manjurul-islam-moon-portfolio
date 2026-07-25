import { Container } from "@/components/layout/Container";
import { SectionLink } from "@/components/navigation/SectionLink";
import { SocialLinks } from "@/components/social/SocialLinks";
import type { PersonalInfo, SocialLink } from "@/types/personal.types";
export function SiteFooter({
  personal,
  socialLinks,
}: {
  readonly personal: PersonalInfo;
  readonly socialLinks: readonly SocialLink[];
}): React.JSX.Element {
  return (
    <footer className="border-t border-slate-800">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div>
          <SectionLink sectionId="home" className="font-semibold text-slate-100">
            {personal.displayName || personal.fullName}
          </SectionLink>
          <p className="mt-2 text-sm text-slate-500">
            © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </p>
        </div>
        <SocialLinks links={socialLinks} />
      </Container>
    </footer>
  );
}
