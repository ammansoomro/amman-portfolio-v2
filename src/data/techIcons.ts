/** Maps a technology label (as used in project/skill data) to its brand icon, when one exists. */
const techIconMap: Record<string, string> = {
  react: "/logos/react.svg",
  angular: "/logos/angular.svg",
  typescript: "/logos/typescript-mono.svg",
  javascript: "/logos/javascript-mono.svg",
  "tailwind css": "/logos/tailwind.svg",
  "tailwind css v4": "/logos/tailwind.svg",
  "node.js": "/logos/nodejs.svg",
  "express.js": "/logos/express.svg",
  express: "/logos/express.svg",
  java: "/logos/java.svg",
  "spring boot": "/logos/spring.svg",
  python: "/logos/python.svg",
  mongodb: "/logos/mongo.svg",
  mysql: "/logos/mysql.svg",
  prisma: "/logos/prisma.svg",
  git: "/logos/git-mono.svg",
  zod: "/logos/zod.svg",
  sanity: "/logos/sanity.svg",
};

export function getTechIcon(tech: string): string | undefined {
  return techIconMap[tech.trim().toLowerCase()];
}
