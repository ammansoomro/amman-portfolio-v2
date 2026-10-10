"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";
import { stats } from "@/data/site";

const stack = ["React", "Next.js", "TypeScript", "Node.js"];
const current = experience[0];
const roleAbbrev = current.role
  .split(" ")
  .map((w) => (/^[A-Z]/.test(w) ? w[0] : ""))
  .join("");

export function HeroCodeCard() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [6, -6]);
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);
  const glowX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springY, [0, 1], ["0%", "100%"]);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(240px circle at ${x} ${y}, color-mix(in srgb, var(--accent) 15%, transparent), transparent 70%)`
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-lg text-left"
      style={{ perspective: 1000 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute -top-4 left-6 z-10 flex items-center gap-2.5 rounded-full border border-border bg-surface px-3 py-1.5 shadow-lg"
      >
        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
        </span>
        <span className="font-mono text-[0.65rem] text-foreground-secondary">
          {roleAbbrev} @ {current.company}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/20"
      >
        {!reduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-px opacity-60"
            style={{ background: glowBackground }}
          />
        )}
        <div className="relative z-10 flex items-center gap-1.5 border-b border-border bg-surface px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground-muted/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground-muted/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground-muted/25" />
          <span className="ml-2 font-mono text-[0.7rem] text-foreground-muted">amman.ts — portfolio</span>
        </div>

        <pre className="relative z-10 overflow-x-auto p-5 font-mono text-[0.8rem] leading-relaxed sm:text-sm">
          <code>
            <span className="text-accent-violet">const</span>{" "}
            <span className="text-foreground">engineer</span>{" "}
            <span className="text-foreground-muted">= {"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-foreground-secondary">name</span>
            <span className="text-foreground-muted">: </span>
            <span className="text-success">&quot;Amman Soomro&quot;</span>
            <span className="text-foreground-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-foreground-secondary">role</span>
            <span className="text-foreground-muted">: </span>
            <span className="text-success">&quot;{current.role}&quot;</span>
            <span className="text-foreground-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-foreground-secondary">stack</span>
            <span className="text-foreground-muted">: [</span>
            {stack.map((tech, i) => (
              <span key={tech}>
                <span className="text-success">&quot;{tech}&quot;</span>
                {i < stack.length - 1 && <span className="text-foreground-muted">, </span>}
              </span>
            ))}
            <span className="text-foreground-muted">],</span>
            {"\n"}
            {"  "}
            <span className="text-foreground-secondary">experience</span>
            <span className="text-foreground-muted">: </span>
            <span className="text-success">&quot;{stats[0].value} years&quot;</span>
            <span className="text-foreground-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-foreground-secondary">ships</span>
            <span className="text-foreground-muted">: </span>
            <span className="text-success">&quot;clean, high-performance code&quot;</span>
            <span className="text-foreground-muted">,</span>
            {"\n"}
            <span className="text-foreground-muted">{"};"}</span>
          </code>
        </pre>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.5 }}
        className="absolute -bottom-5 right-4 rounded-full border border-border bg-card px-5 py-2.5 shadow-lg sm:right-6"
      >
        <span className="font-mono text-xs font-medium tracking-wide text-success">
          {stats[1].value.toUpperCase()} USERS SERVED · {stats[2].value.toUpperCase()} PROJECTS
        </span>
      </motion.div>
    </div>
  );
}
