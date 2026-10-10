export type Skill = {
  name: string;
  icon: string;
  url: string;
};

export type SkillGroup = {
  category: string;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "/logos/react.svg", url: "https://react.dev" },
      { name: "Angular", icon: "/logos/angular.svg", url: "https://angular.dev" },
      { name: "TypeScript", icon: "/logos/typescript.svg", url: "https://www.typescriptlang.org" },
      { name: "JavaScript", icon: "/logos/javascript.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Tailwind CSS", icon: "/logos/tailwind.svg", url: "https://tailwindcss.com" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "/logos/nodejs.svg", url: "https://nodejs.org" },
      { name: "Express", icon: "/logos/express.svg", url: "https://expressjs.com" },
      { name: "Java", icon: "/logos/java.svg", url: "https://www.java.com" },
      { name: "Spring Boot", icon: "/logos/spring.svg", url: "https://spring.io/projects/spring-boot" },
      { name: "Python", icon: "/logos/python.svg", url: "https://www.python.org" },
    ],
  },
  {
    category: "Data & Infrastructure",
    items: [
      { name: "MySQL", icon: "/logos/mysql.svg", url: "https://www.mysql.com" },
      { name: "PostgreSQL", icon: "/logos/postgresql.svg", url: "https://www.postgresql.org" },
      { name: "MSSQL", icon: "/logos/mssql.svg", url: "https://www.microsoft.com/en-us/sql-server" },
      { name: "MongoDB", icon: "/logos/mongo.svg", url: "https://www.mongodb.com" },
      { name: "Prisma", icon: "/logos/prisma.svg", url: "https://www.prisma.io" },
      { name: "Supabase", icon: "/logos/supabase.svg", url: "https://supabase.com" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: "/logos/docker.svg", url: "https://www.docker.com" },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git", icon: "/logos/git.svg", url: "https://git-scm.com" },
      { name: "Zod", icon: "/logos/zod.svg", url: "https://zod.dev" },
      { name: "Orval", icon: "/logos/orval.svg", url: "https://orval.dev" },
    ],
  },
];
