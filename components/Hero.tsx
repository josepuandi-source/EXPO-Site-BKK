"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [trustOpen, setTrustOpen] = useState(false);
  // Unroll the award banner on its own once the seal has popped in.
  useEffect(() => {
    const t = window.setTimeout(() => setTrustOpen(true), 1400);
    return () => window.clearTimeout(t);
  }, []);
  // Roll the award banner back up as soon as the page is scrolled.
  useEffect(() => {
    if (!trustOpen) return;
    const start = window.scrollY;
    const onScroll = () => Math.abs(window.scrollY - start) > 8 && setTrustOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [trustOpen]);
  return (
    <section id="hero" className="relative overflow-hidden bg-sky text-white">
      {/* Clouds */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[4%] top-[12%] h-64 w-[36rem] bg-[radial-gradient(closest-side,rgba(255,255,255,.25),transparent)]" />
        <div className="absolute left-[26%] top-[50%] h-56 w-[30rem] bg-[radial-gradient(closest-side,rgba(255,255,255,.2),transparent)]" />
        <div className="absolute -right-36 top-[42%] h-72 w-[34rem] bg-[radial-gradient(closest-side,rgba(255,255,255,.2),transparent)]" />
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

      {/* Official-agent award, top right: just the gold seal until hovered or tapped, then a banner
          unrolls out of its right side (per JM's sketch). Scrolling the page rolls it back up. */}
      <motion.div
        className="absolute right-5 top-3 z-20 sm:right-10 sm:top-5 lg:right-14 lg:top-7"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.5 }}
      >
        <div className="flex items-center" onMouseEnter={() => setTrustOpen(true)} onMouseLeave={() => setTrustOpen(false)}>
          {/* The gold award seal */}
          <button
            type="button"
            aria-expanded={trustOpen}
            aria-controls="trust-banner"
            aria-label={hero.trust[0]}
            onClick={() => setTrustOpen((o) => !o)}
            className={`relative z-10 grid h-[84px] w-[84px] shrink-0 place-items-center drop-shadow-[0_6px_12px_rgba(120,85,10,.45)] transition-transform duration-300 focus-visible:outline-none lg:h-[112px] lg:w-[112px] ${
              trustOpen ? "-rotate-6 scale-105" : ""
            }`}
          >
            <Image src={`${ART}/seal.webp`} alt="" fill sizes="112px" className="object-contain" />
            <span className="relative flex flex-col items-center leading-none text-[#6B4A0C] [text-shadow:0_1px_0_rgba(255,255,255,.55)]">
              <span className="font-heading text-[28px] font-extrabold lg:text-[38px]">{hero.trustSeal.number}</span>
              <span className="mt-0.5 text-[14px] font-bold uppercase tracking-wider lg:text-[18px]">{hero.trustSeal.label}</span>
            </span>
          </button>

          {/* Banner tucked behind the seal */}
          <motion.div
            id="trust-banner"
            className="-ml-6 overflow-hidden lg:-ml-8"
            initial={false}
            animate={{ width: trustOpen ? "auto" : 0, opacity: trustOpen ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-[min(290px,calc(100vw-6rem))] rounded-r-2xl border-y-2 border-r-2 border-[#E0B93A] bg-white/95 py-2.5 pl-8 pr-4 text-navy-900 shadow-[0_12px_28px_rgba(13,31,58,.28)] lg:w-[340px] lg:py-3.5 lg:pl-11 lg:pr-5">
              <p className="flex items-start gap-1.5 font-heading text-[13px] font-bold leading-snug text-primary-900 lg:text-[16px]">
                <ShieldCheckIcon className="mt-px h-4 w-4 shrink-0 text-primary-700 lg:h-[18px] lg:w-[18px]" />
                {hero.trust[0]}
              </p>
              <p className="mt-1 text-[11.5px] leading-snug text-neutral-600 lg:text-[13.5px]">{hero.trust[1]}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-end gap-2 px-4 pt-24 sm:px-6 md:pt-28 lg:grid-cols-[1.15fr_1fr] lg:px-8">
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
