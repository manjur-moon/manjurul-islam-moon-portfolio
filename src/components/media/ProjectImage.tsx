import { useEffect, useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/utils/class-name.utils";
const FALLBACK = "/images/projects/fallback/project-fallback.svg";
export function ProjectImage({
  src,
  alt,
  width,
  height,
  srcSet,
  sizes,
  loading = "lazy",
  fetchPriority = "auto",
  className,
}: {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly srcSet?: string;
  readonly sizes?: string;
  readonly loading?: "eager" | "lazy";
  readonly fetchPriority?: "high" | "low" | "auto";
  readonly className?: string;
}): React.JSX.Element {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    setCurrent(src);
    setFailed(false);
  }, [src]);
  if (failed)
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 text-slate-500"
      >
        <ImageOff aria-hidden />
        Image unavailable
      </div>
    );
  return (
    <img
      src={current}
      alt={alt}
      width={width}
      height={height}
      srcSet={current === src ? srcSet : undefined}
      sizes={sizes}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      className={cn("h-full w-full object-cover", className)}
      onError={() => (current === FALLBACK ? setFailed(true) : setCurrent(FALLBACK))}
    />
  );
}
