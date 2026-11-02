"use client";

import Image from "next/image";
import { useContent } from "./ContentProvider";
import { Container, Reveal, SectionHeader } from "./ui";
import { CheckIcon } from "./icons";

// Card width per row on desktop (Tailwind needs the classes written out in full)
const LG_WIDTH = { 3: "lg:w-[calc((100%-40px)/3)]", 4: "lg:w-[calc((100%-60px)/4)]" } as const;

/**
 * The U&I specialists at the EXPO: cut-out photo on a poster-style sky (or a soft photo of their city),
 * name tab and three check points. Cards with a branch LINE account open it to book a consultation.
 * On phones each card lies on its side (photo left, details right) to keep the list short.
 * `perRow` sets the desktop row length; `breakAfter` starts a new row after those cards
 * (e.g. local staff on top, Australia below). A card without a `photo` shows a "coming soon" silhouette.
 */
export default function Specialists() {
  const { specialists } = useContent();
  const perRow = specialists.perRow ?? 4;
  const breakAfter = specialists.breakAfter ?? [];
  return (
    <section id="specialists" className="bg-[linear-gradient(180deg,#F5FBFF_0%,#E1F3EC_100%)] py-20 md:py-[88px]">
      <Container>
        <SectionHeader title={specialists.title} subtitle={specialists.subtitle} />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-7 lg:gap-5">
          {specialists.items.map((s, i) => {
            // Cards with a branch LINE account open it to book; the rest are plain cards
            const Card = s.line ? "a" : "article";
            return [
              <Reveal key={s.name} delay={(i % perRow) * 0.06} className={`w-full sm:w-[calc(50%-14px)] ${LG_WIDTH[perRow]}`}>
                <Card
                  {...(s.line ? { href: s.line, target: "_blank", rel: "noopener noreferrer", "aria-label": `${s.name} – ${specialists.bookLabel}` } : {})}
                  className={`group flex h-full overflow-hidden rounded-[22px] bg-white shadow-[0_10px_24px_rgba(13,31,58,.12)] sm:flex-col sm:rounded-[26px] ${
                    s.line ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(13,31,58,.2)] focus-visible:-translate-y-1" : ""
                  }`}
                >
                  <div className="relative min-h-[180px] w-[38%] shrink-0 overflow-hidden bg-sky sm:h-[300px] sm:w-auto lg:h-[260px]">
                    {s.background && (
                      // Their city, dimmed so the cut-out stays the focus (the blur is baked into the file: a CSS blur flickers on phones)
                      <Image src={s.background} alt="" fill sizes="(min-width: 640px) 380px, 160px" className="object-cover opacity-75" />
                    )}
                    {s.photo ? (
                      <Image
                        src={s.photo}
                        alt={s.name}
                        width={590}
                        height={900}
                        sizes="(min-width: 640px) 270px, 160px"
                        className="absolute left-1/2 top-3 h-[240px] min-h-[calc(100%-0.75rem)] w-auto max-w-none -translate-x-1/2 drop-shadow-[0_8px_16px_rgba(13,31,58,.25)] sm:top-5 sm:h-[380px] lg:top-4 lg:h-[310px]"
                      />
                    ) : (
                      // Photo still to come: a soft silhouette in the same spot
                      <div className="absolute inset-0 flex flex-col items-center justify-end">
                        <svg viewBox="0 0 120 140" aria-hidden="true" className="h-[70%] w-auto fill-white/70 drop-shadow-[0_6px_14px_rgba(13,31,58,.18)]">
                          <circle cx="60" cy="42" r="28" />
                          <path d="M6 140c2-36 24-58 54-58s52 22 54 58z" />
                        </svg>
                        {specialists.photoSoon && (
                          <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-700 sm:top-6 sm:text-xs">
                            {specialists.photoSoon}
                          </span>
                        )}
                      </div>
                    )}
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden h-16 bg-gradient-to-t from-white/90 to-transparent sm:block" />
                  </div>
                  <div className="relative flex flex-1 flex-col px-4 py-4 sm:px-6 sm:pb-7 sm:pt-0 lg:px-5 lg:pb-6">
                    <div className="self-start rounded-2xl bg-primary-700 px-4 py-1.5 text-white shadow-[0_8px_18px_rgba(0,90,72,.3)] sm:-mt-6 sm:self-center sm:rounded-full sm:px-6 sm:py-2.5 sm:text-center">
                      <p className="font-heading text-base font-semibold leading-tight sm:text-xl">{s.name}</p>
                      <p className="text-[11.5px] leading-snug text-white/85 sm:text-[13px]">{s.branch}</p>
                    </div>
                    <ul className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[13px] leading-snug text-navy-900 sm:gap-3 sm:text-[15.5px] lg:gap-2.5 lg:text-[14px]">
                          <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-primary-500 text-white sm:mt-0.5 sm:h-6 sm:w-6">
                            <CheckIcon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    {s.line && (
                      <span className="mt-auto inline-flex items-center gap-2 self-start pt-4 font-heading text-[13px] font-bold text-[#06C755] sm:self-center sm:pt-5 sm:text-[15px]">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-[#06C755] text-[9px] font-extrabold tracking-tight text-white">LINE</span>
                        {specialists.bookLabel}
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                      </span>
                    )}
                  </div>
                </Card>
              </Reveal>,
              // Start a new desktop row after this card
              breakAfter.includes(i) && <div key={`break-${i}`} aria-hidden="true" className="hidden basis-full lg:block" />,
            ];
          })}
        </div>
      </Container>
    </section>
  );
}
