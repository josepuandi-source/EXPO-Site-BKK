"use client";

import Image from "next/image";
import { useContent } from "./ContentProvider";
import { Container, Reveal, SectionHeader } from "./ui";
import { CheckIcon, GlobeIcon, HomeIcon, UsersIcon } from "./icons";

const ICONS = { globe: GlobeIcon, users: UsersIcon, home: HomeIcon };

/** Why come: three reasons, the topics you can ask about, and the early-registration flight draw. */
export default function WhyAttend() {
  const { whyAttend, hero } = useContent();
  const { promo } = whyAttend;
  return (
    <section id="why-attend" className="relative overflow-hidden bg-[linear-gradient(180deg,#F5FBFF_0%,#FFFFFF_100%)] py-20 md:py-[88px]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-16 h-56 w-[28rem] rounded-full bg-sky-300/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-10 h-56 w-[28rem] rounded-full bg-primary-300/20 blur-3xl" />
      <Container className="relative">
        <SectionHeader title={whyAttend.title} subtitle={whyAttend.text} />

        {/* Three reasons */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {whyAttend.items.map((it, i) => {
            const Icon = ICONS[it.icon];
            return (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-white shadow-[0_10px_28px_rgba(13,31,58,.09)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={it.photo} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span aria-hidden="true" className="absolute left-4 top-3 font-heading text-[44px] font-extrabold leading-none text-white drop-shadow-[0_2px_8px_rgba(13,31,58,.45)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative px-7 pb-7">
                    <div className="-mt-7 grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#00936F,#007860)] text-white shadow-[0_8px_18px_rgba(0,120,96,.3)] ring-4 ring-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 font-heading text-[21px] font-semibold leading-snug text-navy-900">{it.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-600">{it.sub}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Past EXPO crowds */}
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-[1.4fr_1fr_1fr] md:gap-5">
          {whyAttend.photos.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.08} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_10px_24px_rgba(13,31,58,.12)] md:aspect-auto md:h-60">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr]">
          {/* Topics */}
          <Reveal>
            <div className="h-full rounded-3xl bg-primary-700 p-7 text-white shadow-[0_12px_28px_rgba(0,90,72,.25)] md:p-8">
              <h3 className="font-heading text-2xl font-semibold">{whyAttend.topicsTitle}</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {whyAttend.topics.map((t) => (
                  <li key={t} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[15px] ring-1 ring-white/20">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-500 text-navy-900">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Early-registration flight draw */}
          <Reveal delay={0.08}>
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl bg-accent-500 p-7 text-navy-900 shadow-[0_12px_28px_rgba(13,31,58,.15)] md:p-8">
              <Image
                src="/images/bkk/icon-ticket.webp"
                alt=""
                width={619}
                height={400}
                className="pointer-events-none absolute -right-6 -top-4 w-40 rotate-6 opacity-95 drop-shadow-[0_8px_14px_rgba(13,31,58,.25)] md:w-48"
              />
              <p className="relative max-w-[17rem] font-heading text-[26px] font-bold leading-tight">🎟️ {promo.title}</p>
              <p className="relative mt-2 text-[15px] font-medium">{promo.tagline}</p>
              <a
                href={hero.primaryCta.href}
                className="relative mt-5 inline-flex min-h-12 w-fit items-center rounded-2xl bg-navy-900 px-7 font-heading text-lg font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                {promo.cta}
              </a>
              <p className="relative mt-3 text-xs text-navy-900/70">{promo.note}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
