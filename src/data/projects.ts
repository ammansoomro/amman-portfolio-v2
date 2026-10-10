export type Project = {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  description: string;
  role: string;
  timeline?: string;
  technologies: string[];
  code?: string;
  live?: string;
  chromeStore?: string;
  images: string[];
  logo?: string;
  /** A fully designed cover image for the card grid, in place of the logo/monogram. */
  cover?: string;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  challenges?: { title: string; description: string }[];
  outcomes?: string[];
};

export const projects: Project[] = [
  {
    slug: "wealth-deck",
    title: "Wealth Deck",
    category: "Full Stack",
    blurb:
      "A full-stack portfolio tracker spanning crypto, PSX stocks, mutual funds, silver, and VPS funds with live valuations.",
    description:
      "A comprehensive full-stack web application for tracking and managing an investment portfolio across multiple asset classes, with real-time insights and visualizations.",
    role: "Solo Developer",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Express.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Radix UI",
    ],
    code: "https://github.com/ammansoomro/investment-tracker",
    live: "https://wealthdeck.vercel.app",
    images: [
      "/works/wealth-deck/screenshot-1.png",
      "/works/wealth-deck/screenshot-2.png",
      "/works/wealth-deck/screenshot-3.png",
    ],
    logo: "/logos/wealth-deck.svg",
    cover: "/works/wealth-deck/wealthdeck-cover.jpg",
    featured: true,
    overview:
      "Wealth Deck tracks an investor's full net worth in one place: cryptocurrencies, PSX stocks, mutual funds, physical silver holdings, and Voluntary Pension Scheme (VPS) funds — with a single portfolio overview instead of five disconnected spreadsheets.",
    problem:
      "Tracking a diversified portfolio across crypto exchanges, brokerage statements, and physical assets usually means juggling spreadsheets that go stale the moment a price moves.",
    solution:
      "I built a Prisma/PostgreSQL schema that models each asset class on its own terms, then layered a React + Vite frontend on top with automatic crypto price updates from the CoinGecko API and Recharts-driven visualizations for allocation and performance.",
    features: [
      {
        title: "Multi-asset tracking",
        description:
          "Crypto (BTC, ETH, SOL, XRP and more), PSX stocks, mutual funds, silver (bars, coins, tola), and VPS funds, each with asset-specific fields.",
      },
      {
        title: "Real-time portfolio overview",
        description:
          "Interactive charts, profit/loss tracking, and an asset breakdown with performance metrics that update as prices change.",
      },
      {
        title: "Planning tools",
        description:
          "Salary allocation planner, investment calculator, and SIP calculator to model contributions before committing capital.",
      },
      {
        title: "Automatic price sync",
        description:
          "Crypto prices refresh automatically via the CoinGecko API, keeping valuations current without manual entry.",
      },
    ],
    challenges: [
      {
        title: "Modeling heterogeneous assets",
        description:
          "Crypto, equities, funds, and physical metals each have different valuation logic. I normalized them into a common portfolio-value abstraction in Prisma while preserving asset-specific detail views.",
      },
      {
        title: "Keeping valuations live without hammering APIs",
        description:
          "Crypto prices are cached and refreshed on an interval via the CoinGecko API rather than fetched per-request, keeping the dashboard responsive.",
      },
    ],
  },
  {
    slug: "pr-analysis-dashboard",
    title: "PR Analysis Dashboard",
    category: "Full Stack",
    blurb:
      "An in-house tool that turns raw GitHub and Bitbucket PR data into AI-assisted code-quality and collaboration insights.",
    description:
      "A full-stack dashboard that helps engineering teams monitor pull request workflows, code quality, and collaboration patterns through visualizations and AI-powered analysis.",
    role: "Lead Developer",
    timeline: "2025",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Passport.js",
      "OpenAI API",
    ],
    code: "https://github.com/ammansoomro/pr-analytics-dashboard",
    images: Array.from(
      { length: 10 },
      (_, i) => `/works/pr-analysis-dashboard/screenshot-${i + 1}.jpg`
    ),
    cover: "/works/pr-analysis-dashboard/pr-analysis-cover.jpg",
    featured: true,
    overview:
      "Built at Matrix Systems as an in-house monitoring tool, this dashboard pulls pull-request data from GitHub and Bitbucket and turns it into actionable intelligence for engineering leads: defect trends, reviewer load, and collaboration patterns.",
    problem:
      "PR history lived scattered across GitHub and Bitbucket with no unified view of defect rates, review turnaround, or team collaboration health.",
    solution:
      "I built OAuth integrations for both GitHub and Bitbucket, a Prisma/MySQL pipeline to normalize and store PR data, and an OpenAI GPT-4o-mini powered analysis layer that summarizes patterns in natural language alongside Recharts visualizations.",
    features: [
      {
        title: "Multi-platform integration",
        description: "GitHub OAuth and Bitbucket integration unify PR history from both platforms in one dashboard.",
      },
      {
        title: "Defect tracking and categorization",
        description: "Comprehensive PR analysis with defect tracking and categorization across review cycles.",
      },
      {
        title: "Reviewer analytics",
        description: "Team collaboration insights surface reviewer load and response patterns.",
      },
      {
        title: "AI-powered insights",
        description: "OpenAI GPT-4o-mini generates natural-language analysis of PR trends and code quality signals.",
      },
    ],
    challenges: [
      {
        title: "Normalizing two PR data models",
        description:
          "GitHub and Bitbucket expose pull requests differently. I designed a shared Prisma schema that both OAuth integrations map into, so the rest of the app is platform-agnostic.",
      },
    ],
  },
  {
    slug: "github-defect-marker",
    title: "GitHub Defect Marker",
    category: "Browser Extension",
    blurb:
      "A Chrome extension that enforces structured, machine-readable defect labels on GitHub PR review comments.",
    description:
      "A Chrome extension that helps reviewers classify defects while leaving review comments on GitHub pull requests, inserting a machine-readable label before submission is allowed.",
    role: "Solo Developer",
    technologies: [
      "JavaScript",
      "Chrome Extension (Manifest V3)",
      "HTML5",
      "CSS3",
      "GitHub Primer CSS",
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
    ],
    code: "https://github.com/ammansoomro/github-defect-marker",
    live: "https://defect-marker.vercel.app/",
    chromeStore:
      "https://chromewebstore.google.com/detail/github-defect-marker/jjdoipaabbleocomabmeleioohlikdlf",
    images: [
      "/works/github-defect-marker/screenshot-1.png",
      "/works/github-defect-marker/screenshot-2.png",
      "/works/github-defect-marker/screenshot-3.png",
    ],
    cover: "/works/github-defect-marker/defect-marker-cover.jpg",
    featured: true,
    overview:
      "GitHub Defect Marker adds a structured defect-classification workflow directly into GitHub's PR comment box, so review feedback is consistent and machine-readable without reviewers changing how they write comments.",
    problem:
      "Review comments calling out defects were free text with no consistent severity or category, making it hard to track defect trends across a team.",
    solution:
      "A content script injects a 'Mark as Defect' control into GitHub's native comment box. Reviewers pick a severity (Major, Minor, Cosmetic) and defect type via one-click pills, and the extension inserts a label like #Major:Missing at the start of the comment — blocking submission until the label is complete.",
    features: [
      {
        title: "One-click severity and type pills",
        description: "Severity (Major, Minor, Cosmetic) and defect type (Missing, Extra, Risk-prone, Ambiguous, Inconsistent, Improvement, Factually Incorrect) selected via pills.",
      },
      {
        title: "Submission gating",
        description: "Comment submission is blocked until a complete, machine-readable label is present.",
      },
      {
        title: "Live label preview",
        description: "A preview chip shows the exact label that will be inserted before it's committed.",
      },
      {
        title: "Native GitHub theming",
        description: "Styled with GitHub's own Primer CSS variables, supporting light, dark, dark-dimmed, and high-contrast themes.",
      },
      {
        title: "Zero data collection",
        description: "No background worker, no network requests, no storage, and zero Chrome permissions beyond the content script.",
      },
    ],
    challenges: [
      {
        title: "Working within GitHub's DOM without breaking it",
        description:
          "The extension has to inject into GitHub's live comment box without a background worker or network permissions, so detection and insertion rely entirely on scoped DOM observation within the content script.",
      },
    ],
    outcomes: ["Published on the Chrome Web Store."],
  },
  {
    slug: "db-mirror",
    title: "DB Mirror — Web Edition",
    category: "Developer Tooling",
    blurb:
      "A browser-based schema and data diff tool for SQL Server databases, rewritten from a PyQt6 desktop app into a streaming Next.js app.",
    description:
      "A refined, browser-based tool for comparing the schema and data of two Microsoft SQL Server databases through a guided four-step flow with live streaming progress and one-click exports.",
    role: "Solo Developer",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "mssql (tedious)",
      "SQL Server",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Server-Sent Events",
    ],
    code: "https://github.com/ammansoomro/db-mirror",
    live: "https://db-mirror.vercel.app",
    images: [
      "/works/db-mirror/screenshot-1.png",
      "/works/db-mirror/screenshot-2.png",
      "/works/db-mirror/screenshot-3.png",
      "/works/db-mirror/screenshot-4.png",
    ],
    cover: "/works/db-mirror/db-mirror-cover.jpg",
    featured: true,
    overview:
      "DB Mirror compares two SQL Server databases — schema and data — through a guided Connect → Databases → Tables → Compare flow, streaming per-table results as they complete instead of blocking on one giant comparison job.",
    problem:
      "The original DB Mirror was a PyQt6 desktop tool. A web rewrite needed to match its correctness guarantees (real primary keys, type-aware diffs) while staying read-only and safe to point at production credentials.",
    solution:
      "The stateless comparison engine discovers base tables on both sides, diffs INFORMATION_SCHEMA.COLUMNS for schema differences, and for data diffs looks up the real primary key from INFORMATION_SCHEMA.KEY_COLUMN_USAGE to match rows — falling back to a multiset diff on the normalized row when no PK exists. Every value is normalized to a string (dates to ISO, buffers to hex) so type coercion never produces a false positive, and each table's result streams over Server-Sent Events as it finishes.",
    features: [
      {
        title: "Guided four-step flow",
        description: "Connect → Databases → Tables → Compare, with live streaming progress per table.",
      },
      {
        title: "Schema and data diff",
        description: "Schema diff over INFORMATION_SCHEMA.COLUMNS plus a per-table data diff keyed on the real primary key.",
      },
      {
        title: "Safe by construction",
        description: "Strictly read-only; identifiers are bracket-escaped, values use bound parameters, and credentials are never persisted.",
      },
      {
        title: "Exports",
        description: "Reports export to self-contained HTML, CSV, or JSON.",
      },
      {
        title: "Demo mode",
        description: "Explore the full UI without a live database connection.",
      },
    ],
    challenges: [
      {
        title: "Avoiding false positives from type coercion",
        description:
          "1 vs 1.0 or a date in two different formats should never register as a difference. Every compared value is normalized to a canonical string representation before comparison.",
      },
      {
        title: "Large tables",
        description: "Tables over 100k rows are flagged as sampled rather than silently truncated, so results stay honest about coverage.",
      },
    ],
  },
  {
    slug: "jira-quick-logger",
    title: "Jira Quick Logger",
    category: "Browser Extension",
    blurb:
      "A Chrome extension that auto-fills Jira's Log Work dialog from saved defaults, leaving only Time Spent to type.",
    description:
      "Fills your Jira Log Work form's Stage of Introduction, Description, and Fix Versions from saved defaults, detected via MutationObserver so it survives Jira theme and version changes.",
    role: "Solo Developer",
    technologies: ["JavaScript", "Chrome Extension (Manifest V3)", "HTML5", "CSS3", "Next.js 15", "React 19", "Tailwind CSS"],
    code: "https://github.com/ammansoomro/jira-logger",
    live: "https://jira-logger-landing.vercel.app/",
    chromeStore: "https://chromewebstore.google.com/detail/ihffbbpagemhcgomggjahhpondilabok",
    images: ["/works/jira-quick-logger/screenshot-1.png"],
    cover: "/works/jira-quick-logger/jira-logger-cover.jpg",
    featured: false,
    overview:
      "A small extension that removes the repetitive part of logging Jira work: Stage of Introduction, Description, and Fix Versions are filled from saved defaults, leaving only Time Spent for the user to type.",
    problem:
      "Logging work in Jira means re-typing the same Stage of Introduction, Description, and Fix Versions values dozens of times a week.",
    solution:
      "A content script detects Jira's Log Work dialog via a MutationObserver and label-text matching rather than brittle CSS classes, so it keeps working across Jira version and theme changes, and re-runs on every DOM mutation to survive modal close/reopen and issue navigation.",
    features: [
      {
        title: "Auto-fill from saved defaults",
        description: "Stage of Introduction, Description, and Fix Versions filled automatically; only Time Spent needs typing.",
      },
      {
        title: "Multi-value Fix Versions",
        description: "Supports both native selects and chip-based pickers for Fix Versions.",
      },
      {
        title: "Resilient detection",
        description: "Label-text matching via MutationObserver instead of CSS classes, surviving Jira version and theme differences.",
      },
      {
        title: "Local-only storage",
        description: "Defaults live only in chrome.storage.sync — no account, no network requests, no analytics.",
      },
    ],
    outcomes: ["Published on the Chrome Web Store."],
  },
  {
    slug: "cluedo-companion",
    title: "Cluedo Companion",
    category: "Personal Project",
    blurb:
      "A premium digital detective notes sheet for Cluedo with live deduction, shareable case files, and a detective-themed UI.",
    description:
      "A digital detective notes sheet for the board game Cluedo — track clues, eliminate suspects, and solve the mystery with a live-analyzed deduction grid.",
    role: "Solo Developer",
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4", "Zustand", "Framer Motion"],
    code: "https://github.com/ammansoomro/cluedo-companion",
    live: "https://cluedo-companion.vercel.app",
    images: ["/works/cluedo-companion/screenshot-1.png"],
    cover: "/works/cluedo-companion/cluedo-cover.jpg",
    featured: false,
    overview:
      "Cluedo Companion replaces the paper notes sheet with a live deduction grid: as players mark cards, the board analyzes who can be eliminated and flags the answer once a category narrows to one candidate.",
    problem:
      "Paper Cluedo notes sheets don't do any deduction for you — players have to manually cross-reference every mark.",
    solution:
      "Each grid cell cycles through five states (check, cross, maybe, self-held) across 2-6 renamable player columns. The board is analyzed live: any card held by a player is eliminated from the murder envelope, and each category shows its remaining candidates with a completion meter tracking overall progress.",
    features: [
      {
        title: "Interactive deduction grid",
        description: "Five-state cells across 2-6 renamable player columns, with per-card notes.",
      },
      {
        title: "Live board analysis",
        description: "Cards held by any player are automatically eliminated from the envelope; a category is flagged solved once exactly one candidate remains.",
      },
      {
        title: "Persistent case files",
        description: "Multiple investigations saved to localStorage via Zustand persist, each shareable through a compact URL-safe encoded link.",
      },
      {
        title: "Detective-themed UI",
        description: "Cinzel, Cormorant Garamond, and Special Elite typography with Framer Motion animations and optional sound effects.",
      },
    ],
  },
  {
    slug: "prompt-o-phobia",
    title: "Prompt-O-Phobia",
    category: "AI / Web App",
    blurb: "A platform for shaping and sharing unique prompts for AI interaction, built on Next.js.",
    description:
      "A platform to shape unique prompts for advanced AI interaction and share them with others.",
    role: "Solo Developer",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Integration"],
    code: "https://github.com/ammansoomro/prompt-o-phobia",
    live: "https://prompt-o-phobia.vercel.app/",
    images: [
      "/works/prompt-o-phobia/screenshot-1.png",
      "/works/prompt-o-phobia/screenshot-2.png",
      "/works/prompt-o-phobia/screenshot-3.png",
    ],
    cover: "/works/prompt-o-phobia/prompt-o-phobia-cover.jpg",
    featured: false,
    overview:
      "Prompt-O-Phobia is a Next.js platform for crafting and sharing structured prompts for AI interaction.",
    problem: "Good prompts are often one-off and hard to reuse or share in a structured way.",
    solution:
      "Built a Next.js and TypeScript frontend for composing, saving, and sharing prompts, styled with Tailwind CSS.",
    features: [
      {
        title: "Prompt composition",
        description: "A focused interface for shaping prompts for AI interaction.",
      },
      {
        title: "Sharing",
        description: "Share crafted prompts with others on the platform.",
      },
    ],
  },
  {
    slug: "arcade-vault",
    title: "Arcade Vault",
    category: "E-commerce",
    blurb: "An experimental gaming storefront exploring Stripe payments and Multer file uploads.",
    description:
      "A small-scale e-commerce platform exploring payment processing and file uploads — a gaming store for controllers, consoles, games, and headsets.",
    role: "Solo Developer",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Stripe", "Multer"],
    code: "https://github.com/ammansoomro/arcade-vault",
    images: [
      "/works/arcade-vault/screenshot-1.jpg",
      "/works/arcade-vault/screenshot-2.png",
      "/works/arcade-vault/screenshot-3.png",
      "/works/arcade-vault/screenshot-4.png",
      "/works/arcade-vault/screenshot-5.png",
      "/works/arcade-vault/screenshot-6.png",
    ],
    cover: "/works/arcade-vault/arcade-vault-cover.jpg",
    featured: false,
    overview:
      "Arcade Vault is an experimental gaming e-commerce storefront where users browse and purchase controllers, consoles, games, and headsets.",
    problem:
      "The project started as a focused exploration of Stripe Payments integration.",
    solution:
      "Built a React/Vite storefront backed by an Express and MongoDB API, integrating Stripe for checkout and later expanding to Multer for file uploads as the scope grew.",
    features: [
      { title: "Stripe checkout", description: "End-to-end payment processing for cart purchases." },
      { title: "File uploads via Multer", description: "Product image uploads handled through Multer middleware." },
      { title: "Product catalog", description: "Browse controllers, consoles, games, and headsets." },
    ],
  },
  {
    slug: "moviebase",
    title: "Moviebase",
    category: "Frontend",
    blurb: "A YTS clone built with React for browsing, searching, and downloading movie torrents via the YTS API.",
    description:
      "A YTS clone built using React, populated using the official YTS API, allowing users to browse, search and download movie torrents.",
    role: "Solo Developer",
    technologies: ["React", "HTML", "CSS", "styled-components", "react-router-dom", "framer-motion", "YTS API"],
    code: "https://github.com/ammansoomro/Moviebase",
    live: "https://moviebase-yts.netlify.app/",
    images: [
      "/works/moviebase/screenshot-1.jpg",
      "/works/moviebase/screenshot-2.png",
      "/works/moviebase/screenshot-3.png",
      "/works/moviebase/screenshot-4.png",
    ],
    cover: "/works/moviebase/moviebase-cover.jpg",
    featured: false,
    overview: "Moviebase recreates the YTS browsing experience in React, backed entirely by the public YTS API.",
    problem: "Wanted a cleaner, faster interface for browsing YTS's torrent catalog.",
    solution:
      "Built a React SPA with styled-components and react-router-dom, using @splidejs/react-splide for carousels and framer-motion for transitions, consuming the YTS API directly.",
    features: [
      { title: "Browse and search", description: "Search and filter the YTS movie catalog." },
      { title: "Torrent downloads", description: "Direct access to torrent links exposed by the YTS API." },
    ],
  },
  {
    slug: "shadow-sensei",
    title: "Shadow Sensei",
    category: "Full Stack",
    blurb: "A PHP/MySQL student management system for tracking students and their courses.",
    description:
      "A web-based student management system built with HTML, CSS, PHP, and JavaScript, storing student and course data on a PHP/MySQL server.",
    role: "Solo Developer",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    code: "https://github.com/ammansoomro/ShadowSensei",
    images: [
      "/works/shadow-sensei/screenshot-1.jpg",
      "/works/shadow-sensei/screenshot-2.jpg",
      "/works/shadow-sensei/screenshot-3.jpg",
      "/works/shadow-sensei/screenshot-4.jpg",
      "/works/shadow-sensei/screenshot-5.jpg",
    ],
    cover: "/works/shadow-sensei/shadow-sensei-cover.jpg",
    featured: false,
    overview: "Shadow Sensei is a student management system for storing and organizing student and course records.",
    problem: "Needed a straightforward system for tracking students and the courses they're enrolled in.",
    solution: "Built a classic PHP/MySQL CRUD application with an HTML/CSS/JavaScript frontend.",
    features: [
      { title: "Student records", description: "Store and manage student data." },
      { title: "Course tracking", description: "Associate students with their enrolled courses." },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  return { prev, next };
}
