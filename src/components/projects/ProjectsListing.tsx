"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function ProjectsListing() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Projects</p>
          <h1 className="mt-4 text-[clamp(2.5rem,4vw,4rem)] font-medium leading-[1.05] tracking-tight text-foreground">
            A curated collection of engineering work.
          </h1>
          <p className="mt-5 max-w-xl text-base text-foreground-secondary">
            Full-stack applications, browser extensions, and developer tooling — built end to
            end, from schema design to production UI.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                filter === cat
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-foreground-secondary hover:border-accent/50 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-foreground-secondary">
            No projects in this category yet.
          </p>
        )}
      </Container>
    </div>
  );
}
