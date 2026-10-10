"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WaveGraphic } from "@/components/motion/WaveGraphic";
import { HeroCodeCard } from "@/components/sections/HeroCodeCard";
import { site } from "@/data/site";

const social = [
  { label: "GitHub", href: site.github, icon: Github },
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
  { label: "Instagram", href: site.instagram, icon: Instagram },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <WaveGraphic className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <Container className="relative flex flex-col items-center text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex max-w-2xl flex-col items-center">
          <motion.p
            variants={item}
            className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground-secondary"
          >
            <span className="h-px w-8 bg-border" />
            {site.role} · {site.location}
            <span className="h-px w-8 bg-border" />
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-[clamp(2.25rem,4.6vw,4.25rem)] font-medium leading-[1.05] tracking-tight text-foreground"
          >
            Amman <span className="text-accent">Soomro</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-base text-foreground-secondary md:text-lg">
            {site.tagline.replace(/code\.$/, "")}
            <span className="text-accent">code.</span>
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              View my work <ArrowRight size={15} />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              Get in touch
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground-secondary transition-colors hover:border-accent/60 hover:text-accent"
              >
                <s.icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 w-full px-4 sm:mt-24"
        >
          <HeroCodeCard />
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mt-16 hidden md:block"
      >
        <Link
          href="/#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-foreground-muted transition-colors hover:text-accent"
        >
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
