import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-hover",
  secondary:
    "border border-border text-foreground hover:border-accent/60 hover:text-accent",
  ghost: "text-foreground-secondary hover:text-accent",
};

const base =
  "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent";

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...rest
}: BaseProps & { href: string } & React.ComponentPropsWithoutRef<"a">) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = clsx(base, variants[variant], className);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
