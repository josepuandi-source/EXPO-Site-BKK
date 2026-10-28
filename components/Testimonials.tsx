"use client";

import Image from "next/image";
import { useState } from "react";
import { useContent } from "./ContentProvider";
import { PosterViewer, useOpenPoster } from "./PosterViewer";
import PosterCarousel from "./PosterCarousel";
import { Container, Reveal, SectionHeader } from "./ui";

function Stars() {
  return (
    <span aria-label="5/5" className="flex gap-0.5 text-[15px] leading-none text-accent-500 drop-shadow-[0_1px_0_rgba(13,31,58,.15)]">
      {"★★★★★"}
    </span>
  );
}

function ReviewCards() {
  const { testimonials } = useContent();
  const { labels } = testimonials;
  const openReview = useOpenPoster();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {testimonials.items.map((t, i) => (
        <Reveal key={t.photo} delay={i * 0.06}>
          <article className="flex h-full flex-col">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(13,31,58,.14)]">
              <Image src={t.photo} alt={t.name} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col px-1 pt-4">
              <Stars />
              <h3 className="mt-1.5 font-heading text-xl font-semibold text-navy-900">{t.name}</h3>
              <dl className="mt-2 space-y-0.5 text-[15px] text-navy-700">
                <div>
                  <dt className="inline font-medium">{labels.service}: </dt>
                  <dd className="inline">{t.service}</dd>
                </div>
                <div>
                  <dt className="inline font-medium">{labels.consultant}: </dt>
                  <dd className="inline">{t.consultant}</dd>
                </div>
              </dl>
              <p className="mb-5 mt-3 line-clamp-3 text-[15px] leading-relaxed text-navy-700/80">“{t.quote}”</p>
              <button
                type="button"
                onClick={() => openReview({ src: t.review, alt: `${labels.source}: ${t.name}`, width: 940, height: 788 })}
                className="mx-auto mt-auto inline-flex min-h-11 items-center rounded-full border-2 border-primary-700 px-7 font-heading text-base font-medium text-primary-700 transition-colors hover:bg-primary-700 hover:text-white"
              >
                {labels.readMore}
              </button>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

type Tab = "reviews" | "grants" | "study";

/** Reviews in three tabs: written student reviews (cards), visa grant posts and study experience posts (moving carousels). */
export default function Testimonials() {
  const { testimonials } = useContent();
  const { tabs, grants, study } = testimonials;
  const [tab, setTab] = useState<Tab>("reviews");
  const order: Tab[] = ["reviews", "grants", "study"];
  return (
    <section id="reviews" className="overflow-hidden py-20 md:py-[88px]">
      <Container>
        <SectionHeader title={testimonials.title} subtitle={testimonials.subtitle} />
        <div role="tablist" aria-label={testimonials.title} className="mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full bg-primary-100/70 p-1.5">
          {order.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              id={`reviews-tab-${t}`}
              aria-selected={tab === t}
              aria-controls={`reviews-panel-${t}`}
              onClick={() => setTab(t)}
              className={`min-h-11 rounded-full px-5 font-heading text-[15px] font-medium transition-colors sm:px-6 ${
                tab === t ? "bg-primary-700 text-white shadow-[0_6px_14px_rgba(0,90,72,.25)]" : "text-primary-700 hover:bg-white"
              }`}
            >
              {tabs[t]}
            </button>
          ))}
        </div>
        <PosterViewer>
          <div role="tabpanel" id={`reviews-panel-${tab}`} aria-labelledby={`reviews-tab-${tab}`}>
            {tab === "reviews" && <ReviewCards />}
            {tab === "grants" && (
              <PosterCarousel key="grants" slides={grants.images.map((src) => ({ src, alt: grants.alt }))} width={1080} height={1350} />
            )}
            {tab === "study" && (
              <PosterCarousel key="study" slides={study.images.map((src) => ({ src, alt: study.alt }))} width={1080} height={1080} />
            )}
          </div>
        </PosterViewer>
      </Container>
    </section>
  );
}
