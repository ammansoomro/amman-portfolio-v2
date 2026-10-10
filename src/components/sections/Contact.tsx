"use client";

import { useState } from "react";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { WaveGraphic } from "@/components/motion/WaveGraphic";
import { site } from "@/data/site";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="scroll-mt-20 relative border-t border-border py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <WaveGraphic className="h-full w-full" />
      </div>

      <Container className="relative grid gap-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <SectionHeading
            label="05 / Contact"
            title="Let's build something great."
            description="I'm always open to interesting conversations about software, product development, and opportunities to build useful things."
          />

          <Reveal delay={0.2} className="mt-8 flex flex-col gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Send me an email <ArrowRight size={15} />
            </a>
            <div className="flex items-center gap-4 text-foreground-secondary">
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
                <Github size={18} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
                <Linkedin size={18} />
              </a>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-accent">
                Résumé
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="grid gap-5 rounded-xl border border-border bg-card p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-mono uppercase tracking-wide text-foreground-secondary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-mono uppercase tracking-wide text-foreground-secondary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-mono uppercase tracking-wide text-foreground-secondary">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Send message <ArrowRight size={15} />
              </button>
              {status === "error" && (
                <p className="text-xs text-error">Please fill out every field.</p>
              )}
              {status === "sent" && (
                <p className="text-xs text-accent">Opening your email client…</p>
              )}
            </div>
            <p className="text-xs text-foreground-muted">
              This opens your email client with the message pre-filled — no backend is configured to send mail directly yet.
            </p>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
