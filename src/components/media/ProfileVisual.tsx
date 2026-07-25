import { useState } from "react";
import { UserRound } from "lucide-react";
import { CONTENT_PLACEHOLDERS } from "@/data/content-placeholders.data";
import type { ImageAsset } from "@/types/portfolio.types";
const initials = (name: string): string =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
export function ProfileVisual({
  image,
  fullName,
}: {
  readonly image: ImageAsset | null;
  readonly fullName: string;
}): React.JSX.Element {
  const [error, setError] = useState(false);
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">
      {image && !error ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-full w-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <span className="flex size-24 items-center justify-center rounded-full bg-sky-400/10 text-3xl font-bold text-sky-300">
            {initials(fullName)}
          </span>
          <UserRound aria-hidden className="text-slate-500" />
          <span className="text-sm text-slate-500">
            {CONTENT_PLACEHOLDERS.profilePhoto}
          </span>
        </div>
      )}
    </div>
  );
}
