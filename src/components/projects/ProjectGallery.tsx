import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";

import { ProjectImage } from "@/components/media/ProjectImage";
import { IconButton } from "@/components/ui/IconButton";
import type { ImageAsset } from "@/types/portfolio.types";

interface ProjectGalleryProps {
  readonly projectTitle: string;
  readonly images: readonly ImageAsset[];
}

const FALLBACK_IMAGE: ImageAsset = {
  src: "/images/projects/fallback/project-fallback.svg",
  alt: "Project screenshot unavailable",
  width: 1280,
  height: 720,
};

export function ProjectGallery({
  projectTitle,
  images,
}: ProjectGalleryProps): React.JSX.Element {
  const gallery = images.length > 0 ? images : [FALLBACK_IMAGE];

  const firstImage = gallery[0];

  const swiperRef = useRef<SwiperInstance | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  if (gallery.length === 1 && firstImage !== undefined) {
    return (
      <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
        <div className="aspect-video">
          <ProjectImage
            src={firstImage.src}
            alt={firstImage.alt}
            width={firstImage.width}
            height={firstImage.height}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <figcaption className="border-t border-slate-800 px-5 py-4 text-sm text-slate-400">
          {firstImage.alt}
        </figcaption>
      </figure>
    );
  }

  return (
    <section
      aria-label={`${projectTitle} screenshot gallery`}
      className="project-gallery"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
        <Swiper
          modules={[Keyboard, A11y]}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          a11y={{
            enabled: true,
            containerMessage: `${projectTitle} screenshot gallery`,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={`${image.src}-${String(index)}`}>
              <figure>
                <div className="aspect-video">
                  <ProjectImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                </div>

                <figcaption className="border-t border-slate-800 px-5 py-4 text-sm text-slate-400">
                  {image.alt}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p
          aria-live="polite"
          aria-atomic="true"
          className="inline-flex items-center gap-2 text-sm text-slate-400"
        >
          <Images aria-hidden size={17} />
          Screenshot {activeIndex + 1} of {gallery.length}
        </p>

        <div className="flex gap-2">
          <IconButton
            icon={ChevronLeft}
            label="Previous screenshot"
            disabled={activeIndex === 0}
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
          />

          <IconButton
            icon={ChevronRight}
            label="Next screenshot"
            disabled={activeIndex === gallery.length - 1}
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
          />
        </div>
      </div>
    </section>
  );
}
