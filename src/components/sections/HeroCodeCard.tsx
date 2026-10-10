"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { stats } from "@/data/site";

const stack = ["React", "Next.js", "TypeScript", "Node.js"];
const current = experience[0];
const roleAbbrev = current.role
  .split(" ")
  .map((w) => (/^[A-Z]/.test(w) ? w[0] : ""))
  .join("");

export function HeroCodeCard() {
  return (
    <div className="relative mx-auto w-full max-w-lg text-left">
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
        className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/20"
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground-muted/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground-muted/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground-muted/25" />
          <span className="ml-2 font-mono text-[0.7rem] text-foreground-muted">amman.ts — portfolio</span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-relaxed sm:text-sm">
          <code>
            <span className="text-accent-violet">const</span>{" "}
            <span className="text-foreground">engineer</span>{" "}
            <span className="text-foreground-muted">= {"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-foreground-secondary">name</span>
            <span className="text-foreground-muted">: </span>
            <span className="text-accent">&quot;Amman Soomro&quot;</span>
            <span className="text-foreground-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-foreground-secondary">role</span>
            <span className="text-foreground-muted">: </span>
            <span className="text-accent">&quot;{current.role}&quot;</span>
            <span className="text-foreground-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-foreground-secondary">stack</span>
            <span className="text-foreground-muted">: [</span>
            {stack.map((tech, i) => (
              <span key={tech}>
                <span className="text-accent">&quot;{tech}&quot;</span>
                {i < stack.length - 1 && <span className="text-foreground-muted">, </span>}
              </span>
            ))}
            <span className="text-foreground-muted">],</span>
            {"\n"}
            {"  "}
            <span className="text-foreground-secondary">experience</span>
            <span className="text-foreground-muted">: </span>
            <span className="text-accent">&quot;{stats[0].value} years&quot;</span>
            <span className="text-foreground-muted">,</span>
            {"\n"}
            {"  "}
            <span className="text-foreground-secondary">ships</span>
            <span className="text-foreground-muted">: </span>
            <span className="text-accent">&quot;clean, high-performance code&quot;</span>
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
        className="absolute -bottom-4 right-4 rounded-full border border-border bg-surface px-3 py-1.5 shadow-lg sm:right-6"
      >
        <span className="font-mono text-[0.65rem] text-foreground-secondary">
          {stats[1].value.toUpperCase()} USERS SERVED · {stats[2].value.toUpperCase()} PROJECTS
        </span>
      </motion.div>
    </div>
  );
}
