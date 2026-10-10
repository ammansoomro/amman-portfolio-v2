import Image from "next/image";
import { WaveGraphic } from "@/components/motion/WaveGraphic";

function getInitials(title: string) {
  const words = title.split(/[\s-]+/).filter((w) => /[a-z0-9]/i.test(w));
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return (words[0]?.slice(0, 2) ?? "").toUpperCase();
}

type ProjectCoverProps = {
  title: string;
  logo?: string;
  /** A fully designed cover image — takes priority over logo/monogram. */
  cover?: string;
};

/** Cover art for a project card: a designed cover image, its logo, or a monogram over the site's wave motif. */
export function ProjectCover({ title, logo, cover }: ProjectCoverProps) {
  if (cover) {
    return (
      <div className="absolute inset-0 bg-[#06070c]">
        <Image src={cover} alt="" fill className="object-contain" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-card">
      <div className="absolute inset-0 opacity-40">
        <WaveGraphic className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        {logo ? (
          <div className="relative h-24 w-24 sm:h-28 sm:w-28">
            <Image src={logo} alt="" fill className="object-contain" sizes="112px" />
          </div>
        ) : (
          <span className="font-mono text-5xl font-semibold tracking-tight text-foreground/90">
            {getInitials(title)}
            <span className="text-accent">.</span>
          </span>
        )}
      </div>
    </div>
  );
}
