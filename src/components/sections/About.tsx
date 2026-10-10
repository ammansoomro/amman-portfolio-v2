"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/Reveal";
import { motion } from "framer-motion";
import { stats } from "@/data/site";
import { experience } from "@/data/experience";

const matrix = experience.find((e) => e.company === "Matrix Systems")!;
const techlogix = experience.find((e) => e.company === "Techlogix")!;
const fiverr = experience.find((e) => e.company === "Fiverr")!;

const linkClass =
  "text-foreground underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <Container>
        <SectionHeading label="01 / About" title="The engineer behind the screen." align="center" />

        <RevealStagger
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-5 sm:grid-cols-4"
          staggerDelay={0.06}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={revealItem}>
              <p className="font-mono text-xl font-medium text-foreground sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-sm text-foreground-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </RevealStagger>

        <Reveal delay={0.15} className="mt-14 max-w-4xl">
          <div className="space-y-5 text-base leading-relaxed text-foreground-secondary md:text-lg">
            <p>Hi, I&apos;m Amman —</p>
            <p>
              A Software Engineer with{" "}
              <Link href="/#experience" className={linkClass}>
                3 years of experience
              </Link>{" "}
              in full-stack development. I enjoy building high-performance applications that
              make an impact.
            </p>
            <p>
              I graduated from{" "}
              <a href="https://www.nu.edu.pk/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                FAST National University of Computer and Emerging Sciences (NUCES)
              </a>{" "}
              with a CGPA of <strong className="font-medium text-foreground">3.5</strong>,
              earning a place on the Dean&apos;s and Rector&apos;s List multiple times and
              securing <strong className="font-medium text-foreground">1st position</strong>{" "}
              in one of my semesters.
            </p>
            <p>
              Currently, I&apos;m working at{" "}
              <a href={matrix.companyUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Matrix Systems
              </a>{" "}
              on a large-scale management and portfolio optimization platform,{" "}
              <strong className="font-medium text-foreground">
                MARS (Managed Accounts Rebalancing System)
              </strong>
              . I contribute to critical modules involving portfolio analysis, risk
              management, and optimization, while ensuring best practices, performance
              tuning, and clean code for enterprise-level financial institutions.
            </p>
            <p>
              Previously, I worked at{" "}
              <a href={techlogix.companyUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Techlogix
              </a>{" "}
              on a major digital banking application used by{" "}
              <strong className="font-medium text-foreground">millions of users</strong>. I
              developed key modules, optimized performance, and collaborated closely with my
              team to deliver reliable, efficient features for large-scale production systems.
            </p>
            <p>
              Alongside my full-time role, I&apos;ve been freelancing on{" "}
              <a href={fiverr.companyUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Fiverr
              </a>{" "}
              for over 2 years. As a <strong className="font-medium text-foreground">Level 2 Seller</strong>,
              I&apos;ve successfully delivered{" "}
              <strong className="font-medium text-foreground">50+ projects</strong> with
              consistently high ratings, helping clients worldwide with custom software
              solutions, academic projects, and full application development.
            </p>
            <p>
              Outside of work, I love exploring new technologies, building personal projects,
              and relaxing with some PlayStation gaming.
            </p>
            <p>Thanks for stopping by!</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
