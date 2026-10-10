import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 text-3xl font-medium text-foreground">Page not found.</h1>
      <p className="mt-3 text-foreground-secondary">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-lg border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent/60 hover:text-accent"
      >
        Back home
      </Link>
    </Container>
  );
}
