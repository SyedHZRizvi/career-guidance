// Custom Pathfinder mark: a 4-point compass star (north-pointing) layered with
// a gradient background, soft glow halo, and an accent dot in the corner.
// Sized via the `size` prop ("sm" | "md" | "lg" | "xl").

const SIZES = {
  sm: { box: "h-9 w-9", icon: 18, dot: "h-2 w-2 -right-0.5 -top-0.5", halo: "-inset-1.5" },
  md: { box: "h-12 w-12", icon: 24, dot: "h-2.5 w-2.5 -right-0.5 -top-0.5", halo: "-inset-2" },
  lg: { box: "h-16 w-16", icon: 32, dot: "h-3 w-3 -right-0.5 -top-0.5", halo: "-inset-3" },
  xl: { box: "h-20 w-20", icon: 40, dot: "h-3.5 w-3.5 -right-1 -top-1", halo: "-inset-4" },
};

export default function Logo({ size = "md", animated = false }) {
  const s = SIZES[size] || SIZES.md;
  return (
    <div className="relative inline-block">
      {/* Outer glow halo */}
      <div
        className={`pointer-events-none absolute ${s.halo} rounded-full bg-gradient-to-br from-brand-400 via-fuchsia-400 to-pink-400 opacity-40 blur-xl ${
          animated ? "animate-pulse-soft" : ""
        }`}
      />

      {/* The mark itself */}
      <div
        className={`relative grid ${s.box} place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 via-fuchsia-500 to-pink-500 shadow-xl shadow-brand-500/40 ring-1 ring-white/40`}
      >
        {/* Inner shimmer highlight */}
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* The compass star */}
        <svg
          viewBox="0 0 24 24"
          width={s.icon}
          height={s.icon}
          fill="none"
          className="relative drop-shadow-sm"
        >
          {/* North-pointing primary star */}
          <path
            d="M12 2.5 L14 11 L22 12 L14 13 L12 21.5 L10 13 L2 12 L10 11 Z"
            fill="white"
            stroke="white"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
          {/* Inner diamond accent for depth */}
          <path
            d="M12 6.5 L13.3 12 L12 17.5 L10.7 12 Z"
            fill="url(#brand-inner-grad)"
            opacity="0.55"
          />
          <defs>
            <linearGradient id="brand-inner-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c47ff" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Accent sparkle dot */}
      <div
        className={`absolute ${s.dot} rounded-full bg-gradient-to-br from-amber-200 to-amber-400 ring-2 ring-white shadow-md`}
      />
    </div>
  );
}
