import { Reveal } from "@/components/motion/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { experience } from "@/data/experience";

/** Plain stacked timeline — used on mobile and whenever reduced motion is preferred. */
export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border md:block" />

      <div className="space-y-10">
        {experience.map((entry, i) => (
          <Reveal key={entry.company} delay={i * 0.08}>
            <div className="relative grid gap-4 md:grid-cols-[180px_1fr] md:gap-10 md:pl-0">
              <span className="absolute left-0 top-8 hidden h-[15px] w-[15px] -translate-x-[4px] rounded-full border-2 border-accent bg-background shadow-[0_0_0_4px] shadow-background md:block">
                {i === 0 && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40" />
                )}
              </span>

              <div className="md:pl-10 md:pt-8">
                <p className="font-mono text-sm text-foreground-muted">{entry.dates}</p>
              </div>

              <div className="group rounded-2xl border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-accent/40 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{entry.role}</h3>
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-foreground-secondary transition-colors hover:text-accent"
                    >
                      {entry.company}
                    </a>
                  </div>

                  {entry.logo && (
                    <TechIcon
                      src={entry.logo}
                      className="h-7 w-28 shrink-0 text-foreground-secondary opacity-80 transition-colors duration-300 group-hover:text-foreground group-hover:opacity-100"
                    />
                  )}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {entry.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-foreground-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface/60 px-2.5 py-1 font-mono text-[0.7rem] text-foreground-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
