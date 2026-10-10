import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <Container>
        <SectionHeading label="02 / Experience" title="My professional journey." align="center" />
        <div className="mt-16">
          <ExperienceTimeline />
        </div>
      </Container>
    </section>
  );
}
