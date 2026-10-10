import type { Metadata } from "next";
import { ProjectsListing } from "@/components/projects/ProjectsListing";

export const metadata: Metadata = {
  title: "Projects",
  description: "A curated collection of software engineering work — full-stack apps, browser extensions, and developer tooling.",
};

export default function ProjectsPage() {
  return <ProjectsListing />;
}
