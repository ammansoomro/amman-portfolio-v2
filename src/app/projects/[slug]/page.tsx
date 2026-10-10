import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Gallery } from "@/components/projects/Gallery";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.blurb,
    openGraph: {
      title: project.title,
      description: project.blurb,
      images: project.images[0] ? [project.images[0]] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const meta = [
    { label: "Role", value: project.role },
    { label: "Category", value: project.category },
    ...(project.timeline ? [{ label: "Timeline", value: project.timeline }] : []),
  ];

  return (
    <div className="pb-24 md:pb-32">
      <Container className="pt-28 md:pt-36">
        <nav className="flex items-center gap-2 text-sm text-foreground-muted">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <span>/</span>
          <Link href="/projects" className="transition-colors hover:text-accent">
            Projects
          </Link>
          <span>/</span>
          <span className="text-foreground-secondary">{project.title}</span>
        </nav>

        <Reveal className="mt-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
          <h1 className="mt-4 text-[clamp(2.25rem,4vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-foreground-secondary">{project.blurb}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-8 border-y border-border py-6">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="font-mono text-[0.65rem] uppercase tracking-wide text-foreground-muted">{m.label}</p>
              <p className="mt-1 text-sm text-foreground">{m.value}</p>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Live demo <ArrowUpRight size={14} />
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Github size={14} /> Code
              </a>
            )}
          </div>
        </Reveal>

        {project.images[0] && (
          <Reveal delay={0.15} className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-surface">
            <Image src={project.images[0]} alt={`${project.title} cover`} fill priority className="object-cover object-top" sizes="100vw" />
          </Reveal>
        )}

        <div className="mt-16 grid gap-16 md:grid-cols-5">
          <div className="space-y-14 md:col-span-3">
            <Reveal>
              <section>
                <h2 className="text-sm font-mono uppercase tracking-wide text-accent">Overview</h2>
                <p className="mt-4 text-base leading-relaxed text-foreground-secondary">{project.overview}</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-sm font-mono uppercase tracking-wide text-accent">The problem</h2>
                <p className="mt-4 text-base leading-relaxed text-foreground-secondary">{project.problem}</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-sm font-mono uppercase tracking-wide text-accent">Solution &amp; implementation</h2>
                <p className="mt-4 text-base leading-relaxed text-foreground-secondary">{project.solution}</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="text-sm font-mono uppercase tracking-wide text-accent">Key features</h2>
                <div className="mt-5 space-y-6">
                  {project.features.map((f) => (
                    <div key={f.title} className="border-l-2 border-border pl-5">
                      <h3 className="text-base font-medium text-foreground">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground-secondary">{f.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {project.challenges && project.challenges.length > 0 && (
              <Reveal>
                <section>
                  <h2 className="text-sm font-mono uppercase tracking-wide text-accent">Engineering decisions</h2>
                  <div className="mt-5 space-y-6">
                    {project.challenges.map((c) => (
                      <div key={c.title} className="border-l-2 border-border pl-5">
                        <h3 className="text-base font-medium text-foreground">{c.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-foreground-secondary">{c.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {project.outcomes && project.outcomes.length > 0 && (
              <Reveal>
                <section>
                  <h2 className="text-sm font-mono uppercase tracking-wide text-accent">Outcomes</h2>
                  <ul className="mt-4 space-y-2">
                    {project.outcomes.map((o) => (
                      <li key={o} className="flex gap-2.5 text-sm text-foreground-secondary">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )}
          </div>

          <div className="md:col-span-2">
            <Reveal delay={0.1}>
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h2 className="font-mono text-xs uppercase tracking-wide text-foreground-muted">Technology stack</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-md border border-border px-2.5 py-1 font-mono text-[0.7rem] text-foreground-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.chromeStore && (
                  <a
                    href={project.chromeStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground-secondary transition-colors hover:text-accent"
                  >
                    View on Chrome Web Store <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {project.images.length > 1 && (
          <Reveal className="mt-20">
            <h2 className="text-sm font-mono uppercase tracking-wide text-accent">Screenshots</h2>
            <div className="mt-6">
              <Gallery images={project.images} alt={project.title} />
            </div>
          </Reveal>
        )}
      </Container>

      <div className="mt-24 border-t border-border">
        <Container className="grid gap-4 py-10 sm:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
          >
            <ArrowLeft size={16} className="shrink-0 text-foreground-muted transition-colors group-hover:text-accent" />
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-wide text-foreground-muted">Previous</p>
              <p className="mt-1 text-sm font-medium text-foreground">{prev.title}</p>
            </div>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 sm:text-right"
          >
            <div className="sm:order-1">
              <p className="font-mono text-[0.65rem] uppercase tracking-wide text-foreground-muted">Next</p>
              <p className="mt-1 text-sm font-medium text-foreground">{next.title}</p>
            </div>
            <ArrowRight size={16} className="shrink-0 text-foreground-muted transition-colors group-hover:text-accent" />
          </Link>
        </Container>
        <Container className="pb-4">
          <Link href="/projects" className="text-sm text-foreground-secondary transition-colors hover:text-accent">
            ← Back to all projects
          </Link>
        </Container>
      </div>
    </div>
  );
}
