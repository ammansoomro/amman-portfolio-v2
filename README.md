# Amman Portfolio v2

My personal portfolio — built with Next.js 16, TypeScript, and Tailwind CSS v4. Showcases my work experience, side projects, and toolkit through a dark, editorial-style design with motion-driven interactions.

**Live:** [ammansoomro.com](https://ammansoomro.com)

## Sections

- **Hero** — animated code-card introduction with live stats
- **About** — background, experience summary, and quick facts
- **Experience** — a timeline of professional roles with highlights and tech stacks
- **Projects** — filterable grid of full-stack apps, browser extensions, and side projects, each with a dedicated case-study page
- **Skills** — categorized toolkit (Frontend, Backend, Data & Infrastructure, DevOps, Tools & Practices) with linked, color-accurate tech logos
- **Contact** — a direct way to get in touch

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com) for animation
- [Lucide](https://lucide.dev) for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project Structure

```
src/
  app/              # routes (home, /projects, /projects/[slug])
  components/       # UI, sections, motion, project, and experience components
  data/             # content: projects, skills, experience, site metadata
public/
  logos/            # tech/company brand marks
  works/            # project screenshots and cover art
```

## Deployment

Deployed on [Vercel](https://vercel.com).
