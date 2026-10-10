import Link from "next/link";
import { Github, Linkedin, Instagram, ArrowUp, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WaveGraphic } from "@/components/motion/WaveGraphic";
import { site } from "@/data/site";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const social = [
  { label: "GitHub", href: site.github, icon: Github },
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
  { label: "Instagram", href: site.instagram, icon: Instagram },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <WaveGraphic className="h-full w-full" />
      </div>

      <Container className="relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-mono text-xl font-semibold tracking-tight text-foreground">
            {site.monogram}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-secondary">
            {site.tagline}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 inline-flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-accent"
          >
            <Mail size={15} />
            {site.email}
          </a>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-muted">Navigate</p>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-muted">Connect</p>
          <ul className="mt-5 space-y-3">
            {social.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-accent"
                >
                  <item.icon size={14} />
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground-secondary transition-colors hover:text-accent"
              >
                Résumé
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-border">
        <Container className="flex flex-col-reverse items-center gap-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-foreground-muted">
            © {currentYear} {site.name}. {site.role}.
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors hover:border-accent/60 hover:text-accent"
          >
            <ArrowUp size={16} />
          </a>
        </Container>
      </div>
    </footer>
  );
}
