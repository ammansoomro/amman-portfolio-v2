import { clsx } from "clsx";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx("container-xl", className)}>{children}</div>;
}
