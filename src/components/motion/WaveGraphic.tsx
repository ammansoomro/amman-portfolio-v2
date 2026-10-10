"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Abstract flowing-line motif echoing the brand reference: layered
 * topographic contours, restrained and technical rather than decorative.
 */
export function WaveGraphic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  const paths = [
    "M-50,320 C150,220 300,420 500,300 C700,180 850,360 1050,260",
    "M-50,380 C180,300 320,460 520,360 C720,260 860,400 1050,330",
    "M-50,440 C200,380 340,500 540,420 C740,340 880,440 1050,400",
  ];

  return (
    <svg
      viewBox="0 0 1000 600"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="wave-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wave-muted" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--foreground-muted)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--foreground-muted)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--foreground-muted)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke={i === 1 ? "url(#wave-accent)" : "url(#wave-muted)"}
          strokeWidth={i === 1 ? 1.4 : 1}
          strokeDasharray="6 10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            reduceMotion
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 1, opacity: 1, strokeDashoffset: [0, -32] }
          }
          transition={
            reduceMotion
              ? { duration: 1 }
              : {
                  pathLength: { duration: 1.6, delay: i * 0.15, ease: "easeOut" },
                  opacity: { duration: 1, delay: i * 0.15 },
                  strokeDashoffset: {
                    duration: 14 + i * 4,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }
          }
        />
      ))}
    </svg>
  );
}
