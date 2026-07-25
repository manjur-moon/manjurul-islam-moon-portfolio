import type { SkillGroup } from "@/types/skill.types";

export const skillGroups = Object.freeze([
  {
    id: "skill-group-languages",
    title: "Languages",
    category: "languages",
    skills: [
      {
        id: "skill-javascript",
        name: "JavaScript",
        isConfirmed: true,
      },
      {
        id: "skill-typescript",
        name: "TypeScript",
        isConfirmed: true,
      },
      {
        id: "skill-html",
        name: "HTML",
        isConfirmed: true,
      },
      {
        id: "skill-css",
        name: "CSS",
        isConfirmed: true,
      },
    ],
  },

  {
    id: "skill-group-frontend",
    title: "Frontend",
    category: "frontend",
    skills: [
      {
        id: "skill-react",
        name: "React",
        isConfirmed: true,
      },
      {
        id: "skill-react-router",
        name: "React Router",
        isConfirmed: true,
      },
      {
        id: "skill-tailwind-css",
        name: "Tailwind CSS",
        isConfirmed: true,
      },
      {
        id: "skill-responsive-design",
        name: "Responsive Web Design",
        isConfirmed: true,
      },
      {
        id: "skill-framer-motion",
        name: "Framer Motion",
        isConfirmed: false,
      },
    ],
  },

  {
    id: "skill-group-backend",
    title: "Backend",
    category: "backend",
    skills: [
      {
        id: "skill-node-js",
        name: "Node.js",
        isConfirmed: true,
      },
      {
        id: "skill-express-js",
        name: "Express.js",
        isConfirmed: true,
      },
      {
        id: "skill-rest-api",
        name: "REST API",
        isConfirmed: true,
      },
    ],
  },

  {
    id: "skill-group-databases",
    title: "Databases",
    category: "databases",
    skills: [
      {
        id: "skill-mongodb",
        name: "MongoDB",
        isConfirmed: true,
      },
      {
        id: "skill-mongoose",
        name: "Mongoose",
        isConfirmed: true,
      },
    ],
  },

  {
    id: "skill-group-authentication",
    title: "Authentication",
    category: "authentication",
    skills: [
      {
        id: "skill-better-auth",
        name: "Better Auth",
        isConfirmed: false,
      },
      {
        id: "skill-jwt",
        name: "JWT",
        isConfirmed: true,
      },
      {
        id: "skill-google-authentication",
        name: "Google Authentication",
        isConfirmed: false,
      },
    ],
  },

  {
    id: "skill-group-state-and-data",
    title: "State and Data Management",
    category: "state-and-data",
    skills: [
      {
        id: "skill-context-api",
        name: "Context API",
        isConfirmed: true,
      },
      {
        id: "skill-tanstack-query",
        name: "TanStack Query",
        isConfirmed: false,
      },
      {
        id: "skill-axios",
        name: "Axios",
        isConfirmed: true,
      },
    ],
  },

  {
    id: "skill-group-forms",
    title: "Forms and Validation",
    category: "forms-and-validation",
    skills: [
      {
        id: "skill-react-hook-form",
        name: "React Hook Form",
        isConfirmed: false,
      },
      {
        id: "skill-zod",
        name: "Zod",
        isConfirmed: false,
      },
    ],
  },

  {
    id: "skill-group-testing",
    title: "Testing",
    category: "testing",
    skills: [
      {
        id: "skill-vitest",
        name: "Vitest",
        isConfirmed: false,
      },
      {
        id: "skill-testing-library",
        name: "React Testing Library",
        isConfirmed: false,
      },
      {
        id: "skill-playwright",
        name: "Playwright",
        isConfirmed: false,
      },
    ],
  },

  {
    id: "skill-group-deployment",
    title: "Deployment",
    category: "deployment",
    skills: [
      {
        id: "skill-vercel",
        name: "Vercel",
        isConfirmed: true,
      },
      {
        id: "skill-render",
        name: "Render",
        isConfirmed: true,
      },
      {
        id: "skill-mongodb-atlas",
        name: "MongoDB Atlas",
        isConfirmed: true,
      },
    ],
  },

  {
    id: "skill-group-development-tools",
    title: "Development Tools",
    category: "development-tools",
    skills: [
      {
        id: "skill-git",
        name: "Git",
        isConfirmed: true,
      },
      {
        id: "skill-github",
        name: "GitHub",
        isConfirmed: true,
      },
      {
        id: "skill-vs-code",
        name: "VS Code",
        isConfirmed: true,
      },
      {
        id: "skill-postman",
        name: "Postman",
        isConfirmed: true,
      },
    ],
  },

  {
    id: "skill-group-soft-skills",
    title: "Soft Skills",
    category: "soft-skills",
    skills: [
      {
        id: "skill-problem-solving",
        name: "Problem Solving",
        isConfirmed: true,
      },
      {
        id: "skill-teamwork",
        name: "Team Collaboration",
        isConfirmed: true,
      },
      {
        id: "skill-communication",
        name: "Communication",
        isConfirmed: true,
      },
    ],
  },
] as const satisfies readonly SkillGroup[]);
