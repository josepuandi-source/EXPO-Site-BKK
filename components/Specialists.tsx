"use client";

import Image from "next/image";
import { useContent } from "./ContentProvider";
import { Container, Reveal, SectionHeader } from "./ui";
import { CheckIcon } from "./icons";

/** The U&I specialists at the EXPO: cut-out photo on a poster-style sky, name tab and three check points. */
export default function Specialists() {
  const { specialists } = useContent();
  return (
    <section id="specialists" className="bg-[linear-gradient(180deg,#F5FBFF_0%,#E1F3EC_100%)] py-20 md:py-[88px]">
      <Container>
        <SectionHeader title={specialists.title} subtitle={specialists.subtitle} />
        <div className="flex flex-wrap justify-center gap-7">
          {specialists.items.map((s, i) => (
            <Reveal key={s.photo} delay={(i % 3) * 0.06} className="w-full sm:w-[calc(50%-14px)] lg:w-[calc((100%-56px)/3)]">
              <article className="flex h-full flex-col overflow-hidden rounded-[26px] bg-white shadow-[0_10px_24px_rgba(13,31,58,.12)]">
                <div className="relative h-[300px] overflow-hidden bg-sky">
                  <div aria-hidden="true" className="absolute -left-10 top-10 h-24 w-56 rounded-full bg-white/30 blur-2xl" />
                  <div aria-hidden="true" className="absolute -right-8 top-24 h-20 w-48 rounded-full bg-white/25 blur-2xl" />
                  <Image
                    src={s.photo}
                    alt={s.name}
                    width={590}
                    height={900}
                    sizes="270px"
                    className="absolute -bottom-24 left-1/2 h-[400px] w-auto max-w-none -translate-x-1/2 drop-shadow-[0_8px_16px_rgba(13,31,58,.25)]"
                  />
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/90 to-transparent" />
                </div>
                <div className="relative flex flex-1 flex-col px-6 pb-7">
                  <div className="-mt-6 self-center rounded-full bg-primary-700 px-6 py-2.5 text-center text-white shadow-[0_8px_18px_rgba(0,90,72,.3)]">
                    <p className="font-heading text-xl font-semibold leading-tight">{s.name}</p>
                    <p className="text-[13px] leading-snug text-white/85">{s.branch}</p>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[15.5px] leading-snug text-navy-900">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-500 text-white">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
