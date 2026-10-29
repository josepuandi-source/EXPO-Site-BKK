"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "./ContentProvider";
import ExpoLogo from "./ExpoLogo";
import { CalendarIcon, PinIcon, ShieldCheckIcon } from "./icons";
import Clouds from "./Clouds";
import WavingFlag from "./WavingFlag";

const ART = "/images/bkk";

// Soft fades that let the poster artwork melt into the sky gradient.
const flagMask = {
  maskImage: "linear-gradient(to bottom, #000 45%, transparent 100%), linear-gradient(to right, #000 65%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to bottom, #000 45%, transparent 100%), linear-gradient(to right, #000 65%, transparent 100%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
} as const;
const skylineMask = {
  maskImage: "linear-gradient(to bottom, transparent 0%, #000 45%)",
  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 45%)",
} as const;

/** Bangkok poster hero: sky, waving flag, logo + event details, student and the Sydney skyline. */
export default function Hero() {
  const { hero } = useContent();
  const d = hero.details;
  return (
    <section id="hero" className="relative overflow-hidden bg-sky text-white">
      {/* Clouds */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[8%] top-[18%] h-40 w-[28rem] rounded-full bg-white/25 blur-3xl" />
        <div className="absolute left-[30%] top-[55%] h-32 w-[22rem] rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -right-20 top-[48%] h-44 w-[26rem] rounded-full bg-white/20 blur-3xl" />
      </div>
      <Clouds />

      {/* Waving Australian flag across the top */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 w-[78%] max-w-[1000px] sm:w-[62%]" style={flagMask}>
        <WavingFlag src={`${ART}/flag.jpg`} width={1040} height={225} />
      </div>

      {/* Sydney Opera House and Harbour Bridge along the bottom */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(110px,20vw,300px)]" style={skylineMask}>
        <Image src={`${ART}/skyline.jpg`} alt="" fill sizes="100vw" className="object-cover object-bottom" />
      </div>

      {/* Official-agent trust badge, top right: a gold "29 years" seal beside the credentials */}
      <motion.div
        className="relative z-20 flex justify-end px-4 pt-4 sm:px-6 lg:absolute lg:right-8 lg:top-8 lg:p-0"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex max-w-[300px] items-center gap-3 rounded-2xl bg-white/95 p-2.5 pr-4 text-navy-900 shadow-[0_12px_30px_rgba(13,31,58,.28)] ring-1 ring-white backdrop-blur sm:max-w-[360px] lg:gap-4 lg:p-3 lg:pr-5">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[conic-gradient(from_140deg,#F8E844,#C9A227,#F8E844,#E0B93A,#F8E844)] p-[3px] shadow-[0_4px_10px_rgba(201,162,39,.45)] lg:h-[72px] lg:w-[72px]">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-primary-700 text-white ring-2 ring-white/70">
              <span className="font-heading text-[22px] font-extrabold leading-none text-accent-500 lg:text-[28px]">{hero.trustSeal.number}</span>
              <span className="mt-0.5 text-[10px] font-semibold uppercase leading-none tracking-wider lg:text-[11px]">{hero.trustSeal.label}</span>
            </div>
          </div>
          <div className="min-w-0">
            <p className="flex items-start gap-1.5 font-heading text-[13px] font-bold leading-snug text-primary-900 lg:text-[15px]">
              <ShieldCheckIcon className="mt-px h-4 w-4 shrink-0 text-primary-700 lg:h-[18px] lg:w-[18px]" />
              {hero.trust[0]}
            </p>
            <p className="mt-1 text-[11.5px] leading-snug text-neutral-600 lg:text-[13px]">{hero.trust[1]}</p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-end gap-2 px-4 pt-6 sm:px-6 md:pt-10 lg:pt-28 lg:grid-cols-[1.15fr_1fr] lg:px-8">
        <motion.div
          className="flex flex-col items-center pb-6 text-center lg:items-start lg:pb-[clamp(140px,16vw,240px)] lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ExpoLogo alt={hero.logo.alt} strap={hero.strap} className="w-[min(100%,440px)] md:w-[460px]" />
          <p className="-mt-1 font-heading text-[clamp(32px,5vw,50px)] font-bold leading-none text-white drop-shadow-[0_2px_8px_rgba(0,40,80,.3)] lg:pl-[11%]">{hero.city}</p>

          <div className="mt-6 flex flex-col gap-2 drop-shadow-[0_2px_6px_rgba(0,40,80,.25)]">
            <p className="flex flex-wrap items-baseline justify-center gap-x-2.5 lg:justify-start">
              <CalendarIcon className="h-6 w-6 self-center" />
              <span className="font-heading text-2xl font-bold md:text-3xl">{d.date}</span>
              <span className="text-base md:text-lg">{d.time}</span>
            </p>
            {/* Venue opens Google Maps; on hover/focus a live map preview pops up */}
            <div className="group relative self-center lg:self-start">
              <a href={d.mapUrl} target="_blank" rel="noopener noreferrer" aria-label={`${d.venue}, ${d.address} – ${d.mapLabel}`} className="block rounded-lg">
                <span className="flex items-center justify-center gap-2.5 lg:justify-start">
                  <PinIcon className="h-6 w-6 shrink-0" />
                  <span className="font-heading text-xl font-bold underline decoration-white/40 decoration-2 underline-offset-4 transition-colors group-hover:decoration-accent-500 md:text-2xl">
                    {d.venue}
                  </span>
                </span>
                <span className="mt-2 block text-sm text-white/90 md:pl-[34px]">{d.address}</span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-accent-500 md:pl-[34px]">
                  {d.mapLabel} ↗
                </span>
              </a>
              <div
                aria-hidden="true"
                className="pointer-events-none invisible absolute left-1/2 top-full z-30 w-[340px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 [@media(hover:none)]:hidden lg:left-0 lg:translate-x-0"
              >
                <div className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_16px_40px_rgba(13,31,58,.35)]">
                  <iframe src={d.mapEmbed} title={d.venue} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[220px] w-full" tabIndex={-1} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={hero.primaryCta.href}
              className="inline-flex min-h-12 items-center rounded-2xl bg-accent-500 px-7 font-heading text-lg font-bold text-navy-900 shadow-[0_8px_20px_rgba(13,31,58,.25)] transition-transform hover:-translate-y-0.5 hover:bg-accent-600"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex min-h-12 items-center rounded-2xl border-2 border-white/80 px-6 font-heading text-lg font-medium text-white transition-colors hover:bg-white hover:text-sky-700"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </motion.div>

        {/* Student, standing in front of the skyline as on the poster */}
        <motion.div
          className="relative mx-auto w-[min(78%,340px)] sm:w-[360px] lg:mx-0 lg:ml-auto lg:w-[min(100%,470px)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        >
          <Image src={`${ART}/student.webp`} alt="" width={1100} height={1730} priority sizes="(min-width: 1024px) 470px, 360px" className="h-auto w-full" />
        </motion.div>
      </div>

    </section>
  );
}
