import {
  AtSign,
  Code2,
  Globe2,
  Mail,
  MessageCircle,
  Phone,
  Play,
  Users,
} from "lucide-react";

import type { SocialLink, SocialPlatform } from "@/types/personal.types";
import { cn } from "@/utils/class-name.utils";

interface SocialLinksProps {
  readonly links: readonly SocialLink[];
  readonly className?: string;
  readonly variant?: "default" | "minimal";
}

function GitHubIcon(): React.JSX.Element {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.93a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon(): React.JSX.Element {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M5.35 3.5A2.35 2.35 0 1 1 5.34 8.2a2.35 2.35 0 0 1 .01-4.7ZM3.32 9.87h4.06V21H3.32V9.87Zm6.53 0h3.89v1.52h.05c.54-1.03 1.87-2.12 3.85-2.12 4.12 0 4.88 2.71 4.88 6.24V21h-4.05v-4.87c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.27-1.87 2.58V21H9.85V9.87Z" />
    </svg>
  );
}

function SocialIcon({
  platform,
}: {
  readonly platform: SocialPlatform;
}): React.JSX.Element {
  switch (platform) {
    case "github":
      return <GitHubIcon />;

    case "linkedin":
      return <LinkedInIcon />;

    case "email":
      return <Mail aria-hidden size={21} />;

    case "phone":
      return <Phone aria-hidden size={21} />;

    case "whatsapp":
      return <MessageCircle aria-hidden size={21} />;

    case "facebook":
      return <Users aria-hidden size={21} />;

    case "twitter":
      return <AtSign aria-hidden size={21} />;

    case "youtube":
      return <Play aria-hidden size={21} />;

    case "leetcode":
      return <Code2 aria-hidden size={21} />;

    case "other":
      return <Globe2 aria-hidden size={21} />;
  }
}

export function SocialLinks({
  links,
  className,
  variant = "default",
}: SocialLinksProps): React.JSX.Element | null {
  if (links.length === 0) {
    return null;
  }

  return (
    <ul
      aria-label="Social links"
      className={cn("flex flex-wrap items-center gap-3", className)}
    >
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.url}
            aria-label={link.label}
            title={link.label}
            target={link.isExternal ? "_blank" : undefined}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
            className={cn(
              "inline-flex items-center justify-center transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",

              variant === "minimal"
                ? "size-9 text-slate-100 hover:-translate-y-1 hover:text-sky-400"
                : "size-11 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:-translate-y-1 hover:border-sky-400/60 hover:bg-sky-500/10 hover:text-sky-300",
            )}
          >
            <SocialIcon platform={link.platform} />
          </a>
        </li>
      ))}
    </ul>
  );
}
