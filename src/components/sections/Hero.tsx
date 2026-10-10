"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WaveGraphic } from "@/components/motion/WaveGraphic";
import { HeroIsometricGraphic } from "@/components/sections/HeroIsometricGraphic";
import { site } from "@/data/site";

const techStack = [
  { name: "React", icon: "/logos/react.svg" },
  { name: "TypeScript", icon: "/logos/typescript.svg" },
  { name: "Node.js", icon: "/logos/nodejs.svg" },
  { name: "Java", icon: "/logos/java.svg" },
  { name: "PostgreSQL", icon: "/logos/postgresql.svg" },
  { name: "MongoDB", icon: "/logos/mongo.svg" },
  { name: "Docker", icon: "/logos/docker.svg" },
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
    <section className="relative overflow-hidden pb-16 pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent 80%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-0 h-[560px] w-[760px]"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent-violet) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <WaveGraphic className="h-full w-full" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.p
              variants={item}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-foreground-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {site.role}
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-foreground"
            >
              I build scalable
              <br />
              <span className="text-gradient-accent">web products.</span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-lg text-base text-foreground-secondary md:text-lg">
              {site.description}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
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
                Get in touch <Mail size={15} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-w-0"
          >
            <HeroIsometricGraphic />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 hidden border-t border-border pt-8 sm:block"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted">Tech stack</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-5">
            {techStack.map((t) => (
              <div key={t.name} className="flex items-center gap-2 text-sm text-foreground-secondary">
                <Image src={t.icon} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
                {t.name}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
