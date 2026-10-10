"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { TechIcon } from "@/components/ui/TechIcon";
import { getTechIcon } from "@/data/techIcons";
import { ProjectCover } from "@/components/projects/ProjectCover";

export function ProjectCard({ project }: { project: Project }) {
  const icons = project.technologies
    .map((tech) => ({ tech, src: getTechIcon(tech) }))
    .filter((t): t is { tech: string; src: string } => Boolean(t.src))
    .slice(0, 3);

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <motion.div
        whileHover="hover"
        initial="rest"
        className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface"
      >
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <ProjectCover title={project.title} logo={project.logo} cover={project.cover} />
        </motion.div>
        <div className="absolute inset-0 opacity-0 ring-1 ring-inset ring-accent/40 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.div>

      <div className="mt-3.5 flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-wide text-foreground-muted">{project.category}</p>
          <h3 className="mt-1 text-lg font-medium text-foreground transition-colors group-hover:text-accent">
            {project.title}
          </h3>
        </div>
        <div className="mt-1 flex shrink-0 items-center gap-2.5">
          {icons.map(({ tech, src }) => (
            <TechIcon key={tech} src={src} className="h-[15px] w-[15px] text-foreground-muted" />
          ))}
          <ArrowUpRight
            size={16}
            className="text-foreground-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>
      </div>
    </Link>
  );
}
