"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/Reveal";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <Container>
        <SectionHeading label="04 / Toolkit" title="Technologies I work with." align="center" />

        <div className="mx-auto mt-14 max-w-3xl space-y-12">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-8 bg-border" />
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {group.category}
                </h3>
                <span className="h-px w-8 bg-border" />
              </div>

              <RevealStagger className="mt-5 flex flex-wrap justify-center gap-3" staggerDelay={0.05}>
                {group.items.map((skill) => (
                  <motion.a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={revealItem}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3 transition-colors duration-200 hover:border-accent/50"
                  >
                    <Image
                      src={skill.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px] shrink-0 object-contain"
                    />
                    <span className="text-sm text-foreground-secondary transition-colors duration-200 group-hover:text-foreground">
                      {skill.name}
                    </span>
                  </motion.a>
                ))}
              </RevealStagger>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
