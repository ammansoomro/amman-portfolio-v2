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

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
      <span className="text-foreground-muted">{index}</span>
      {label}
    </p>
  );
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
  const cover = project.cover ?? project.images[0];

  return (
    <div className="pb-24 md:pb-32">
      {cover && (
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden sm:h-[82vh]">
          <Image
            src={cover}
            alt={`${project.title} cover`}
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-transparent" />

          <Container className="relative flex h-full flex-col justify-between pb-8 pt-24 sm:pb-12 sm:pt-28">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-foreground-secondary sm:text-sm">
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
              <span>/</span>
              <Link href="/projects" className="transition-colors hover:text-accent">
                Projects
              </Link>
              <span>/</span>
              <span className="text-foreground">{project.title}</span>
            </nav>

            <Reveal className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{project.category}</p>
              <h1 className="mt-3 text-[clamp(2rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight text-foreground drop-shadow-sm sm:mt-4">
                {project.title}
              </h1>
              <p className="mt-4 max-w-xl text-base text-foreground-secondary sm:mt-5 sm:text-lg">{project.blurb}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover sm:px-5 sm:py-3"
                  >
                    Live demo <ArrowUpRight size={14} />
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent/60 hover:text-accent sm:px-5 sm:py-3"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
              </div>
            </Reveal>
          </Container>
        </div>
      )}

      <Container className={cover ? "mt-16" : "pt-28 md:pt-36"}>
        {!cover && (
          <>
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
          </>
        )}

        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-border py-5 sm:mt-10 sm:gap-x-10 sm:py-6">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="font-mono text-[0.65rem] uppercase tracking-wide text-foreground-muted">{m.label}</p>
              <p className="mt-1 text-sm font-medium text-foreground">{m.value}</p>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 sm:ml-auto">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border px-2.5 py-1 font-mono text-[0.7rem] text-foreground-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.chromeStore && (
            <a
              href={project.chromeStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary transition-colors hover:text-accent"
            >
              Chrome Web Store <ArrowUpRight size={14} />
            </a>
          )}
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-14 sm:mt-16 sm:space-y-20">
            <Reveal>
              <section>
                <SectionLabel index="01" label="Overview" />
                <p className="mt-5 max-w-2xl text-xl leading-relaxed text-foreground md:text-2xl">
                  {project.overview}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-xl border border-border bg-card p-6">
                <SectionLabel index="02" label="The problem" />
                <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">{project.problem}</p>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-xl border border-border bg-card p-6">
                <SectionLabel index="03" label="Solution" />
                <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">{project.solution}</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <SectionLabel index="04" label="Key features" />
                <div className="mt-6 space-y-5">
                  {project.features.map((f, i) => (
                    <div
                      key={f.title}
                      className="group rounded-xl border border-border p-5 transition-colors hover:border-accent/40 hover:bg-card"
                    >
                      <span className="font-mono text-xs text-foreground-muted">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-2 text-base font-medium text-foreground">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground-secondary">{f.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {project.challenges && project.challenges.length > 0 && (
              <Reveal>
                <section>
                  <SectionLabel index="05" label="Engineering decisions" />
                  <div className="mt-6 space-y-6">
                    {project.challenges.map((c) => (
                      <div key={c.title} className="border-l-2 border-accent/40 pl-5">
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
                <section className="rounded-xl border border-border bg-card p-6">
                  <SectionLabel index="06" label="Outcomes" />
                  <ul className="mt-5 space-y-3">
                    {project.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-sm text-foreground-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )}

            {project.images.length > 1 && (
              <Reveal>
                <section>
                  <SectionLabel index="07" label="Gallery" />
                  <div className="mt-6">
                    <Gallery images={project.images} alt={project.title} />
                  </div>
                </section>
              </Reveal>
            )}
        </div>
      </Container>

      <div className="mt-24 border-t border-border">
        <Container className="grid gap-4 py-10 sm:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
          >
            {(prev.cover ?? prev.images[0]) && (
              <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-border">
                <Image src={prev.cover ?? prev.images[0]} alt="" fill className="object-cover object-top" sizes="80px" />
              </div>
            )}
            <ArrowLeft size={16} className="shrink-0 text-foreground-muted transition-colors group-hover:text-accent" />
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-wide text-foreground-muted">Previous</p>
              <p className="mt-1 text-sm font-medium text-foreground">{prev.title}</p>
            </div>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 sm:flex-row-reverse sm:text-right"
          >
            {(next.cover ?? next.images[0]) && (
              <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-border">
                <Image src={next.cover ?? next.images[0]} alt="" fill className="object-cover object-top" sizes="80px" />
              </div>
            )}
            <ArrowRight size={16} className="shrink-0 text-foreground-muted transition-colors group-hover:text-accent" />
            <div className="flex-1">
              <p className="font-mono text-[0.65rem] uppercase tracking-wide text-foreground-muted">Next</p>
              <p className="mt-1 text-sm font-medium text-foreground">{next.title}</p>
            </div>
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
