import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/data/experience";

/** Plain stacked timeline — used on mobile and whenever reduced motion is preferred. */
export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border md:block" />

      <div className="space-y-14">
        {experience.map((entry, i) => (
          <Reveal key={entry.company} delay={i * 0.08}>
            <div className="relative grid gap-4 md:grid-cols-[180px_1fr] md:gap-10 md:pl-0">
              <span className="absolute left-0 top-2 hidden h-[15px] w-[15px] -translate-x-[4px] rounded-full border-2 border-accent bg-background md:block" />

              <div className="md:pl-10">
                <p className="font-mono text-sm text-foreground-muted">{entry.dates}</p>
              </div>

              <div className="border-l border-border pl-6 md:border-l-0 md:pl-0">
                <div className="flex items-center gap-3">
                  {entry.logo && (
                    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-surface">
                      <Image src={entry.logo} alt="" fill className="object-contain p-1.5" sizes="36px" />
                    </span>
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{entry.role}</h3>
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground-secondary transition-colors hover:text-accent"
                    >
                      {entry.company}
                    </a>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {entry.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-foreground-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-[0.7rem] text-foreground-muted"
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
