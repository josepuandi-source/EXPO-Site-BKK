/**
 * Slow, faint clouds drifting left to right behind the hero.
 * Each cloud has its own size, height, speed and starting point (a negative delay
 * places it mid-journey on load), so the sky never looks empty or synchronised.
 */
// Two cloud artworks (transparent WebP), reused at different sizes so the sky never repeats obviously.
const ART = {
  1: { src: "/images/bkk/cloud-1.webp", w: 1271, h: 497 },
  2: { src: "/images/bkk/cloud-2.webp", w: 1197, h: 568 },
};

const CLOUDS = [
  { art: 1, top: "8%", width: 520, opacity: 0.1, duration: 95, delay: -20, rest: "8vw" },
  { art: 2, top: "30%", width: 640, opacity: 0.1, duration: 140, delay: -95, rest: "55vw" },
  { art: 1, top: "55%", width: 420, opacity: 0.1, duration: 80, delay: -55, rest: "30vw" },
  { art: 2, top: "16%", width: 380, opacity: 0.1, duration: 110, delay: -10, rest: "75vw" },
  { art: 1, top: "68%", width: 560, opacity: 0.1, duration: 125, delay: -70, rest: "-5vw" },
] as const;

export default function Clouds() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          className="cloud"
          style={
            {
              top: c.top,
              opacity: c.opacity,
              "--cloud-duration": `${c.duration}s`,
              "--cloud-delay": `${c.delay}s`,
              "--cloud-rest": c.rest,
            } as React.CSSProperties
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ART[c.art].src} alt="" width={c.width} height={Math.round((c.width * ART[c.art].h) / ART[c.art].w)} decoding="async" className="max-w-none" />
        </div>
      ))}
    </div>
  );
}
