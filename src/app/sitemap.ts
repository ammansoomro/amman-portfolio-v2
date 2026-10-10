import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.domain, changeFrequency: "monthly", priority: 1 },
    { url: `${site.domain}/projects`, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((p) => ({
      url: `${site.domain}/projects/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
