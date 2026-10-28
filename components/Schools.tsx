"use client";

import { useContent } from "./ContentProvider";
import { PosterViewer } from "./PosterViewer";
import PosterCarousel from "./PosterCarousel";
import { Container, SectionHeader } from "./ui";

/** Partner school specials & scholarships: their EXPO posters in a moving carousel, each named underneath. */
export default function Schools() {
  const { schools } = useContent();
  const slides = schools.items.map((s) => ({
    src: s.poster,
    alt: s.school,
    caption: s.hideCaption ? undefined : <p className="font-heading text-[17px] font-semibold leading-tight text-navy-900">{s.school}</p>,
  }));
  return (
    <section id="schools" className="overflow-hidden py-20 md:py-[88px]">
      <Container>
        <SectionHeader
          title={schools.title}
          subtitle={schools.subtitle.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        />
        <PosterViewer>
          <PosterCarousel slides={slides} width={1080} height={1350} />
        </PosterViewer>
      </Container>
    </section>
  );
}
