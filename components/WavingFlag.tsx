const N = 60; // vertical strips; more = smoother ripple
const DURATION = 3.2; // seconds per wave cycle

/**
 * The poster's Australian flag, gently waving: the image is sliced into vertical
 * strips that bob up and down out of phase (a ripple travelling left to right),
 * each with a soft shade that deepens in the troughs to suggest folds.
 * Ripples grow toward the free (right) end. Motion-reduced visitors see it still.
 */
export default function WavingFlag({ src, width, height }: { src: string; width: number; height: number }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: `${width} / ${height}` }}>
      {Array.from({ length: N }, (_, i) => (
        <div
          key={i}
          className="flag-strip absolute inset-y-0"
          style={
            {
              left: `${(i / N) * 100}%`,
              width: `calc(${100 / N}% + 1px)`,
              backgroundImage: `url(${src})`,
              backgroundSize: `${N * 100}% 100%`,
              backgroundPosition: `${(i / (N - 1)) * 100}% 0`,
              "--amp": `${1 + (i / N) * 2.5}%`,
              "--flag-delay": `${-(i / N) * DURATION * 1.6}s`,
              "--flag-duration": `${DURATION}s`,
            } as React.CSSProperties
          }
        >
          <span className="flag-shade" />
        </div>
      ))}
    </div>
  );
}
