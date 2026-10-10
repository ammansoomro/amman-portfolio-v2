export type ExperienceEntry = {
  company: string;
  companyUrl: string;
  role: string;
  dates: string;
  logo?: string;
  highlights: string[];
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Matrix Systems",
    companyUrl: "https://matrix.com.pk/",
    role: "Software Development Engineer II",
    dates: "May 2025 — Present",
    logo: "/logos/mstrix-logo.webp",
    technologies: ["Angular", "TypeScript", "Java", "Oracle SQL", "React", "Node.js", "Express", "Prisma", "MySQL"],
    highlights: [
      "Developed and enhanced critical modules for a large-scale wealth management and portfolio optimization platform, delivering enterprise-grade solutions processing millions of portfolio transactions for financial institutions.",
      "Built a full-stack PR Analytics Dashboard as an in-house monitoring tool, integrating with GitHub and Bitbucket via OAuth and surfacing AI-powered insights using OpenAI's GPT-4o-mini for real-time code quality and collaboration metrics.",
      "Redesigned and standardized UI components into a unified design system, reducing component development time by 55% across 50+ application screens.",
      "Refactored legacy code modules, decreasing bug reports by 45% and cutting debugging time by 70%.",
    ],
  },
  {
    company: "Techlogix",
    companyUrl: "https://www.techlogix.com/",
    role: "Software Engineer",
    dates: "Jun 2023 — Apr 2025",
    logo: "/logos/Techlogix-Logo.png",
    technologies: ["ReactJS", "KnockoutJS", "JavaScript", "Java", "Jenkins", "Oracle SQL", "SCSS"],
    highlights: [
      "Built and enhanced a large-scale digital banking application serving over 2 million users.",
      "Developed critical modules including Fund Transfer, Bill Payments, Mobile Top-ups, AMIM, RAAST, and Payoneer.",
      "Refactored critical modules and introduced reusable components, cutting debugging time by 80%.",
      "Contributed to a frontend design system with SCSS and mixins, cutting UI creation time by more than 50%.",
      "Led development of a large-scale digital account opening application, mentoring two junior developers.",
      "Authored coding standards and onboarding documentation, cutting training time by 70%.",
      "Received \"Achiever of the Month\" recognition for onsite development on a resource augmentation project.",
    ],
  },
  {
    company: "Fiverr",
    companyUrl: "https://www.fiverr.com/",
    role: "Freelance Developer · Level 2 Seller",
    dates: "Jan 2021 — Dec 2023",
    logo: "/logos/fiver-logo.png",
    technologies: ["Python", "React", "Node.js", "Web Scraping", "DSA"],
    highlights: [
      "Completed 50+ orders with consistent 5-star ratings for clients worldwide.",
      "Delivered Python applications, full-stack web projects, DSA solutions, and custom web scrapers under tight deadlines.",
      "Built reusable components and scripts to streamline delivery across future projects.",
    ],
  },
];
