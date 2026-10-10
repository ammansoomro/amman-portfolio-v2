import { clsx } from "clsx";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wide text-foreground-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
