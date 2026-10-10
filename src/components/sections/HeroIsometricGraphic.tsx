"use client";

import { motion } from "framer-motion";

const stackedLabels = ["IDEAS", "CODE", "PRODUCTS", "IMPACT"];

const panels = [
  { x: -115, z: -190, delay: 0.5, opacity: 0.3, tint: "from-accent-violet/15" },
  { x: -50, z: -95, delay: 0.6, opacity: 0.45, tint: "from-accent/15" },
  { x: 76, z: -76, delay: 0.7, opacity: 0.4, tint: "from-accent/10" },
  { x: 139, z: -171, delay: 0.8, opacity: 0.28, tint: "from-accent-violet/10" },
];

export function HeroIsometricGraphic() {
  return (
    <div className="relative mx-auto h-[550px] w-full max-w-xl" style={{ perspective: 1200 }}>
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[370px] w-[200px] -translate-x-1/2 -translate-y-1/2"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: [-22, -18, -22], rotateX: [8, 10, 8], y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {panels.map((p) => (
          <motion.div
            key={p.x}
            initial={{ opacity: 0 }}
            animate={{ opacity: p.opacity }}
            transition={{ delay: p.delay, duration: 0.6 }}
            className={`absolute inset-0 rounded-lg border border-border bg-gradient-to-br ${p.tint} to-transparent bg-surface/50 backdrop-blur-sm`}
            style={{ transform: `translateX(${p.x}px) translateZ(${p.z}px)` }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col justify-center gap-2.5 overflow-hidden rounded-lg border border-border bg-card px-6 shadow-2xl shadow-black/40"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--accent) 12%, transparent), transparent 55%)",
            }}
          />
          <span className="relative mb-2 font-mono text-base text-accent">{"</>"}</span>
          {stackedLabels.map((label) => (
            <span
              key={label}
              className="relative font-mono text-[0.65rem] uppercase tracking-[0.25em] text-foreground-secondary"
            >
              {label}
            </span>
          ))}
          <span className="relative mt-2 h-px w-6 bg-accent/60" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { delay: 1.05, duration: 0.5 },
          y: { delay: 1.5, duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-0 top-6 flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2.5 text-xs leading-tight text-foreground-secondary shadow-lg backdrop-blur-sm"
      >
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
        />
        <span>
          Clean Code
          <br />
          Better Products
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-0 right-0 text-right font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.15em] text-foreground-muted"
      >
        Turning ideas
        <br />
        into real products
      </motion.p>
    </div>
  );
}
