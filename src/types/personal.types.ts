import type { ImageAsset } from "@/types/portfolio.types";

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "leetcode"
  | "whatsapp"
  | "facebook"
  | "twitter"
  | "youtube"
  | "email"
  | "phone"
  | "other";

export interface SocialLink {
  readonly id: string;
  readonly label: string;
  readonly platform: SocialPlatform;
  readonly url: string;
  readonly isExternal: boolean;
}

export interface PersonalInfo {
  readonly fullName: string;
  readonly displayName: string | null;
  readonly professionalDesignation: string | null;
  readonly heroHeadline: string | null;
  readonly shortIntroduction: string | null;
  readonly aboutDescription: string | null;
  readonly currentLocation: string | null;
  readonly availabilityStatus: string | null;
  readonly preferredContactMethod: string | null;
  readonly profileImage: ImageAsset | null;
  readonly resumeUrl: string | null;
}
