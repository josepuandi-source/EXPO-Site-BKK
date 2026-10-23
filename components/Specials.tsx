"use client";

import Image from "next/image";
import { useContent } from "./ContentProvider";
import { Container, Reveal } from "./ui";

const ICON_SIZE: Record<string, [number, number]> = {
  cap: [164, 119],
  ielts: [127, 142],
  van: [185, 110],
  ticket: [190, 120],
  visa: [134, 136],
  koala: [170, 133],
};

/** The Bangkok poster's "register early" specials: green pill headline and six tabbed cards with 3D icons. */
export default function Specials() {
  const { specials, hero } = useContent();
  return (
    <section id="specials" className="relative overflow-hidden bg-[linear-gradient(180deg,#4BA8DA_0%,#8FCBEE_55%,#D7EEFA_100%)] pb-16 pt-14 md:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-24 h-40 w-[30rem] rounded-full bg-white/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-[55%] h-40 w-[26rem] rounded-full bg-white/30 blur-3xl" />
      <Container className="relative">
        <Reveal>
          <h2 className="mx-auto max-w-5xl rounded-full bg-primary-700 px-6 py-3.5 text-center font-heading text-[clamp(20px,3.2vw,40px)] font-semibold leading-tight text-white shadow-[0_8px_20px_rgba(0,90,72,.3)]">
            {specials.title}
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-7 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {specials.items.map((it, i) => {
            const [w, h] = ICON_SIZE[it.icon];
            return (
              <Reveal key={it.icon} delay={i * 0.06}>
                <div className="relative h-full">
                  {/* Green tab behind the card's top edge */}
                  <div aria-hidden="true" className="absolute -top-2.5 inset-x-0 h-12 rounded-t-[26px] bg-primary-700" />
                  <div className="relative flex h-full min-h-[170px] flex-col items-center justify-center rounded-[26px] bg-white px-6 pb-6 pt-14 text-center shadow-[0_10px_24px_rgba(13,31,58,.14)]">
                    <Image
                      src={`/images/bkk/icon-${it.icon}.png`}
                      alt=""
                      width={w}
                      height={h}
                      className="absolute left-1/2 -top-12 h-[92px] w-auto -translate-x-1/2 drop-shadow-[0_6px_10px_rgba(13,31,58,.25)]"
                    />
                    <p className="font-heading text-[21px] font-normal leading-snug text-navy-900">
                      {it.text}
                      {it.free && (
                        <span className="ml-2 inline-block -rotate-3 font-heading text-[30px] font-extrabold italic leading-none text-primary-700">
                          {specials.free}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-1 text-[13px] text-navy-700 sm:flex-row sm:justify-between">
          {specials.notes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={hero.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-2xl bg-accent-500 px-8 font-heading text-lg font-bold text-navy-900 shadow-[0_8px_20px_rgba(13,31,58,.2)] transition-transform hover:-translate-y-0.5 hover:bg-accent-600"
          >
            {specials.cta}
          </a>
        </div>
      </Container>
    </section>
  );
}
