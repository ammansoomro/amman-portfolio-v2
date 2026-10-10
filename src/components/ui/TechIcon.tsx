import { clsx } from "clsx";

/**
 * Renders a brand SVG logo as a flat, single-color silhouette via CSS mask,
 * so multi-colored tech logos stay on-brand instead of looking like a sticker sheet.
 */
export function TechIcon({ src, className }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={clsx("inline-block bg-current", className)}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
