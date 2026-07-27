import { useReducedMotion } from "framer-motion";
import { A11y, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { SkillBadge } from "@/components/skills/SkillBadge";
import type { SkillGroup } from "@/types/skill.types";

interface SkillMarqueeRowProps {
  readonly group: SkillGroup;
  readonly reverseDirection?: boolean;
}

const REPEAT_COUNT = 4;

export function SkillMarqueeRow({
  group,
  reverseDirection = false,
}: SkillMarqueeRowProps): React.JSX.Element | null {
  const shouldReduceMotion = useReducedMotion();

  if (group.skills.length === 0) {
    return null;
  }

  const repeatedSkills = Array.from(
    {
      length: REPEAT_COUNT,
    },
    () => group.skills,
  ).flat();

  return (
    <article>
      <h3 className="text-center text-xl font-semibold text-slate-100">{group.title}</h3>

      <div className="relative mt-7 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-linear-to-r from-slate-950 to-transparent sm:w-24"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-linear-to-l from-slate-950 to-transparent sm:w-24"
        />

        <Swiper
          modules={[Autoplay, FreeMode, A11y]}
          slidesPerView="auto"
          spaceBetween={16}
          loop={shouldReduceMotion !== true}
          loopAdditionalSlides={group.skills.length}
          speed={5500}
          grabCursor
          allowTouchMove
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          autoplay={
            shouldReduceMotion === true
              ? false
              : {
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection,
                  waitForTransition: false,
                }
          }
          a11y={{
            enabled: true,
            containerMessage: `${group.title} skills`,
          }}
          className="skill-marquee-swiper cursor-grab active:cursor-grabbing"
        >
          {repeatedSkills.map((skill, index) => (
            <SwiperSlide
              key={`${skill.id}-${String(index)}`}
              className="!w-auto py-2"
              aria-hidden={index >= group.skills.length}
            >
              <SkillBadge name={skill.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
}
