/**
 * Slow, faint clouds drifting left to right behind the hero.
 * Each cloud has its own size, height, speed and starting point (a negative delay
 * places it mid-journey on load), so the sky never looks empty or synchronised.
 */
const CLOUDS = [
  { top: "12%", width: 360, opacity: 0.14, duration: 95, delay: -20, rest: "8vw" },
  { top: "34%", width: 520, opacity: 0.12, duration: 140, delay: -95, rest: "55vw" },
  { top: "58%", width: 300, opacity: 0.15, duration: 80, delay: -55, rest: "30vw" },
  { top: "22%", width: 260, opacity: 0.1, duration: 110, delay: -10, rest: "75vw" },
  { top: "72%", width: 440, opacity: 0.12, duration: 125, delay: -70, rest: "-5vw" },
];

function CloudShape({ width }: { width: number }) {
  return (
    <svg viewBox="0 0 220 90" width={width} height={(width * 90) / 220} aria-hidden="true" className="blur-[3px]">
      <g fill="#fff">
        <ellipse cx="60" cy="62" rx="52" ry="26" />
        <ellipse cx="150" cy="64" rx="62" ry="24" />
        <circle cx="88" cy="42" r="34" />
        <circle cx="135" cy="38" r="28" />
        <circle cx="48" cy="52" r="22" />
        <circle cx="178" cy="52" r="20" />
      </g>
    </svg>
  );
}

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
          <CloudShape width={c.width} />
        </div>
      ))}
    </div>
  );
}
