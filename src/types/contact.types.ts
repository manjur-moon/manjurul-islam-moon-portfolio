export type ContactSubmissionMethod =
  "direct-links" | "third-party-service" | "serverless-function" | "future-api";
export type PreferredContactChannel = "email" | "phone" | "whatsapp" | "linkedin";

export interface ContactInfo {
  readonly email: string | null;
  readonly phone: string | null;
  readonly whatsappUrl: string | null;
  readonly preferredChannel: PreferredContactChannel | null;
  readonly formSubmissionMethod: ContactSubmissionMethod;
}
