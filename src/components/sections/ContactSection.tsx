import { Mail, MessageCircle, Phone, Send } from "lucide-react";

import { ContactLinkCard } from "@/components/contact/ContactLinkCard";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SocialLinks } from "@/components/social/SocialLinks";
import { CONTENT_PLACEHOLDERS } from "@/data/content-placeholders.data";
import type { ContactInfo, PreferredContactChannel } from "@/types/contact.types";
import type { SocialLink } from "@/types/personal.types";
import { createEmailHref, createPhoneHref } from "@/utils/contact.utils";
import { resolveContentText } from "@/utils/content.utils";

const labels: Record<PreferredContactChannel, string> = {
  email: "Email",
  phone: "Phone",
  whatsapp: "WhatsApp",
  linkedin: "LinkedIn",
};

interface ContactSectionProps {
  readonly contact: ContactInfo;
  readonly socialLinks: readonly SocialLink[];
  readonly preferredContactMethod: string | null;
}

export function ContactSection({
  contact,
  socialLinks,
  preferredContactMethod,
}: ContactSectionProps): React.JSX.Element {
  const preferred = contact.preferredChannel
    ? labels[contact.preferredChannel]
    : resolveContentText(
        preferredContactMethod,
        CONTENT_PLACEHOLDERS.preferredContactMethod,
      );

  return (
    <SectionContainer
      id="contact"
      labelledBy="contact-heading"
      className="border-t border-slate-800/70"
    >
      <header className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm font-medium tracking-wide text-slate-200">
          Get in touch
        </p>

        <h2
          id="contact-heading"
          data-section-heading="true"
          tabIndex={-1}
          className="mt-5 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
        >
          Let&apos;s <span className="text-sky-500">Connect</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
          and discuss an opportunity
        </p>
      </header>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-4">
          <ContactLinkCard
            icon={Mail}
            label="Professional email"
            value={contact.email ?? CONTENT_PLACEHOLDERS.professionalEmail}
            href={contact.email ? createEmailHref(contact.email) : null}
          />

          <ContactLinkCard
            icon={Phone}
            label="Phone"
            value={contact.phone ?? CONTENT_PLACEHOLDERS.phoneNumber}
            href={contact.phone ? createPhoneHref(contact.phone) : null}
          />

          {contact.whatsappUrl ? (
            <ContactLinkCard
              icon={MessageCircle}
              label="WhatsApp"
              value="Start a WhatsApp conversation"
              href={contact.whatsappUrl}
              external
            />
          ) : null}
        </div>

        <aside className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <span className="flex size-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
            <Send aria-hidden />
          </span>

          <h3 className="mt-6 text-xl font-semibold text-slate-100">
            Preferred contact method
          </h3>

          <p className="mt-3 text-slate-300">{preferred}</p>

          {socialLinks.length > 0 ? (
            <SocialLinks links={socialLinks} className="mt-8" />
          ) : null}
        </aside>
      </div>
    </SectionContainer>
  );
}
