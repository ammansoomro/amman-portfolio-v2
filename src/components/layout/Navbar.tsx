"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { site } from "@/data/site";

const links = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <Container>
        <motion.nav
          animate={{
            paddingLeft: scrolled ? 10 : 18,
            paddingRight: scrolled ? 10 : 18,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={clsx(
            "flex h-14 items-center justify-between rounded-full border transition-colors duration-300",
            scrolled
              ? "border-border bg-surface/85 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] backdrop-blur-md"
              : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" className="font-mono text-lg font-semibold tracking-tight text-foreground">
            {site.monogram}
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={clsx(
                    "relative z-10 block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    active === link.id
                      ? "text-foreground"
                      : "text-foreground-secondary hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-full bg-card"
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-secondary"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden"
          >
            <Container className="mt-2">
              <div className="flex flex-col gap-1 rounded-2xl border border-border bg-surface/95 p-3 shadow-lg backdrop-blur-md">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "flex items-center justify-between rounded-lg px-3 py-3 text-base transition-colors",
                        active === link.id
                          ? "bg-card text-foreground"
                          : "text-foreground-secondary hover:bg-card hover:text-foreground"
                      )}
                    >
                      {link.label}
                      {active === link.id && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                    </Link>
                  </motion.div>
                ))}
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-lg bg-accent px-3 py-3 text-center text-sm font-medium text-accent-foreground"
                >
                  Resume
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
