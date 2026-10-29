"use client";

import Image from "next/image";
import { useContent } from "./ContentProvider";
import { Container, Reveal } from "./ui";

const ICON_SIZE: Record<string, [number, number]> = {
  cap: [633, 400],
  ielts: [397, 400],
  van: [646, 400],
  ticket: [619, 400],
  visa: [397, 400],
  koala: [526, 400],
};

/** The Bangkok poster's "register early" specials: green pill headline and six tabbed cards with 3D icons (two per row on phones). */
export default function Specials() {
  const { specials, hero } = useContent();
  return (
    <section id="specials" className="relative overflow-hidden bg-[linear-gradient(180deg,#4BA8DA_0%,#8FCBEE_55%,#D7EEFA_100%)] pb-12 pt-10 sm:pb-16 sm:pt-14 md:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-16 h-64 w-[38rem] bg-[radial-gradient(closest-side,rgba(255,255,255,.25),transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-[50%] h-64 w-[34rem] bg-[radial-gradient(closest-side,rgba(255,255,255,.3),transparent)]" />
      <Container className="relative">
        <Reveal>
          <h2 className="mx-auto max-w-5xl rounded-full bg-primary-700 px-5 py-3 sm:px-6 sm:py-3.5 text-center font-heading text-[clamp(20px,3.2vw,40px)] font-semibold leading-tight text-white shadow-[0_8px_20px_rgba(0,90,72,.3)]">
            {specials.title}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-x-3 gap-y-11 sm:mt-16 sm:gap-x-7 sm:gap-y-16 lg:grid-cols-3">
          {specials.items.map((it, i) => {
            const [w, h] = ICON_SIZE[it.icon];
            return (
              <Reveal key={it.icon} delay={i * 0.06}>
                <div className="relative h-full">
                  {/* Green tab behind the card's top edge */}
                  <div aria-hidden="true" className="absolute -top-2 inset-x-0 h-12 rounded-t-[20px] bg-primary-700 sm:-top-2.5 sm:rounded-t-[26px]" />
                  <div className="relative flex h-full min-h-[128px] flex-col items-center justify-center rounded-[20px] bg-white px-2.5 pb-4 pt-10 text-center sm:min-h-[170px] sm:rounded-[26px] sm:px-6 sm:pb-6 sm:pt-14 shadow-[0_10px_24px_rgba(13,31,58,.14)]">
                    <Image
                      src={`/images/bkk/icon-${it.icon}.webp`}
                      alt=""
                      width={w}
                      height={h}
                      className="absolute left-1/2 -top-9 h-[64px] w-auto sm:-top-12 sm:h-[92px] -translate-x-1/2 drop-shadow-[0_6px_10px_rgba(13,31,58,.25)]"
                    />
                    <p className="font-heading text-[14.5px] font-normal leading-snug text-navy-900 sm:text-[21px]">
                      {it.text}
                      {it.free && (
                        <span className="ml-1.5 inline-block -rotate-3 font-heading text-[20px] sm:ml-2 sm:text-[30px] font-extrabold italic leading-none text-primary-700">
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

        <div className="mx-auto mt-6 flex max-w-6xl flex-col gap-1 text-[11.5px] sm:mt-8 sm:text-[13px] text-navy-700 sm:flex-row sm:justify-between">
          {specials.notes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>

        <div className="mt-6 flex justify-center sm:mt-8">
          <a
            href={hero.primaryCta.href}
            className="inline-flex min-h-12 items-center rounded-2xl bg-accent-500 px-8 font-heading text-lg font-bold text-navy-900 shadow-[0_8px_20px_rgba(13,31,58,.2)] transition-transform hover:-translate-y-0.5 hover:bg-accent-600"
          >
            {specials.cta}
          </a>
        </div>
      </Container>
    </section>
  );
}
