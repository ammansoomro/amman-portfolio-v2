import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "between";
}) {
  return (
    <div className={align === "between" ? "flex flex-wrap items-end justify-between gap-6" : undefined}>
      <div>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 text-[clamp(2.5rem,4vw,4rem)] font-medium leading-[1.05] tracking-tight text-foreground">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-base text-foreground-secondary">{description}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
