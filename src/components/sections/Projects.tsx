import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading label="03 / Selected Work" title="Selected work and side projects." />
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary transition-colors hover:text-accent"
            >
              View all <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={0.06 * i}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
