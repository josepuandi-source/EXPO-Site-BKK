"use client";

import Image from "next/image";
import { useCallback, useRef, useSyncExternalStore, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useContent } from "./ContentProvider";
import { useOpenPoster } from "./PosterViewer";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (cb: () => void) => {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export type PosterSlide = { src: string; alt: string; caption?: ReactNode };

/**
 * Posters gliding slowly sideways (pauses on hover, can be dragged or stepped with the arrows).
 * Tapping a poster opens it full size; must sit inside a <PosterViewer>.
 */
export default function PosterCarousel({
  slides,
  width,
  height,
  basis = "basis-[70%] sm:basis-[40%] md:basis-[30%] lg:basis-[23%]",
  speed = 0.6,
}: {
  slides: PosterSlide[];
  width: number;
  height: number;
  basis?: string;
  speed?: number;
}) {
  const { ui } = useContent();
  const openPoster = useOpenPoster();
  const reduceMotion = useSyncExternalStore(subscribeReducedMotion, () => window.matchMedia(reducedMotionQuery).matches, () => false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, dragFree: true },
    reduceMotion ? [] : [AutoScroll({ speed, startDelay: 0, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  // A drag ends in a click too; only treat it as a tap if the pointer barely moved.
  const downX = useRef(0);

  // Arrow steps pause the glide briefly, then it carries on by itself.
  const step = useCallback(
    (dir: 1 | -1) => {
      if (!emblaApi) return;
      const auto = emblaApi.plugins().autoScroll;
      auto?.stop();
      if (dir === 1) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
      if (auto) window.setTimeout(() => auto.play(), 2500);
    },
    [emblaApi],
  );

  const arrow =
    "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-primary-700 shadow-[0_6px_16px_rgba(13,31,58,.25)] transition-colors hover:bg-primary-700 hover:text-white";

  return (
    <div className="relative" role="region" aria-roledescription="carousel">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {slides.map((s) => (
            <div key={s.src} role="group" aria-roledescription="slide" className={`min-w-0 shrink-0 grow-0 pl-4 ${basis}`}>
              <button
                type="button"
                onPointerDown={(e) => (downX.current = e.clientX)}
                onClick={(e) => (e.detail === 0 || Math.abs(e.clientX - downX.current) < 8) && openPoster({ src: s.src, alt: s.alt, width, height })}
                className="block w-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_24px_rgba(13,31,58,.14)] transition-transform hover:-translate-y-1"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={width}
                  height={height}
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 40vw, 70vw"
                  className="h-auto w-full"
                  draggable={false}
                />
              </button>
              {s.caption && <div className="px-1 pt-3">{s.caption}</div>}
            </div>
          ))}
        </div>
      </div>
      <button type="button" aria-label={ui.previous} onClick={() => step(-1)} className={`${arrow} -left-2 md:-left-5`}>
        <ArrowLeftIcon className="h-5 w-5" />
      </button>
      <button type="button" aria-label={ui.next} onClick={() => step(1)} className={`${arrow} -right-2 md:-right-5`}>
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
