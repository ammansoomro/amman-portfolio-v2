export type Skill = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  category: string;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "/logos/react.svg" },
      { name: "Angular", icon: "/logos/angular.svg" },
      { name: "TypeScript", icon: "/logos/typescript-mono.svg" },
      { name: "JavaScript", icon: "/logos/javascript-mono.svg" },
      { name: "Tailwind CSS", icon: "/logos/tailwind.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "/logos/nodejs.svg" },
      { name: "Express", icon: "/logos/express.svg" },
      { name: "Java", icon: "/logos/java.svg" },
      { name: "Spring Boot", icon: "/logos/spring.svg" },
      { name: "Python", icon: "/logos/python.svg" },
    ],
  },
  {
    category: "Data & Infrastructure",
    items: [
      { name: "MySQL", icon: "/logos/mysql.svg" },
      { name: "MongoDB", icon: "/logos/mongo.svg" },
      { name: "Prisma", icon: "/logos/prisma.svg" },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git", icon: "/logos/git-mono.svg" },
      { name: "Zod", icon: "/logos/zod.svg" },
    ],
  },
];
