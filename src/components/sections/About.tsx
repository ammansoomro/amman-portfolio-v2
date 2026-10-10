import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { stats } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <Container>
        <SectionHeading
          label="01 / About"
          title="Engineering with an eye for detail."
        />

        <div className="mt-14 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-foreground-secondary md:text-lg">
                <p>
                  I&apos;m a software engineer with 3 years of experience in full-stack
                  development. I enjoy building products that combine thoughtful interfaces
                  with reliable engineering — and I graduated from FAST-NUCES with a 3.5 CGPA,
                  earning a place on the Dean&apos;s and Rector&apos;s List multiple times.
                </p>
                <p>
                  Currently, I work at Matrix Systems on MARS, a large-scale portfolio
                  optimization platform, contributing to modules involving portfolio
                  analysis, risk management, and optimization for enterprise financial
                  institutions.
                </p>
                <p>
                  Previously I worked at Techlogix on a digital banking application used by
                  millions of people, and I&apos;ve spent over two years freelancing on
                  Fiverr as a Level 2 Seller, delivering 50+ projects for clients worldwide.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-2">
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 gap-6 border-l border-border pl-6 sm:grid-cols-3 md:grid-cols-1">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-3xl font-medium text-accent">{stat.value}</p>
                    <p className="mt-1 text-sm text-foreground-secondary">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
