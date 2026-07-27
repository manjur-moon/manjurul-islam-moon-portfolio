import type { SkillGroup } from "@/types/skill.types";

export const skillGroups: readonly SkillGroup[] = Object.freeze([
  {
    id: "web-development",
    title: "Web Development",
    category: "frontend",

    skills: [
      {
        id: "mongodb",
        name: "MongoDB",
        isConfirmed: true,
      },
      {
        id: "javascript",
        name: "JavaScript",
        isConfirmed: true,
      },
      {
        id: "typescript",
        name: "TypeScript",
        isConfirmed: true,
      },
      {
        id: "express-js",
        name: "Express.js",
        isConfirmed: true,
      },
      {
        id: "tailwind-css",
        name: "Tailwind CSS",
        isConfirmed: true,
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        isConfirmed: true,
      },
      {
        id: "firebase",
        name: "Firebase",
        isConfirmed: true,
      },
      {
        id: "figma",
        name: "Figma",
        isConfirmed: true,
      },
      {
        id: "html5",
        name: "HTML5",
        isConfirmed: true,
      },
      {
        id: "css3",
        name: "CSS3",
        isConfirmed: true,
      },
      {
        id: "react",
        name: "React",
        isConfirmed: true,
      },
      {
        id: "node-js",
        name: "Node.js",
        isConfirmed: true,
      },
      {
        id: "vite",
        name: "Vite",
        isConfirmed: true,
      },
      {
        id: "git",
        name: "Git",
        isConfirmed: true,
      },
      {
        id: "github",
        name: "GitHub",
        isConfirmed: true,
      },
    ],
  },

  {
    id: "soft-skills",
    title: "Soft Skills",
    category: "soft-skills",

    skills: [
      {
        id: "problem-solving",
        name: "Problem Solving",
        isConfirmed: true,
      },
      {
        id: "team-collaboration",
        name: "Team Collaboration",
        isConfirmed: true,
      },
      {
        id: "communication",
        name: "Communication",
        isConfirmed: true,
      },
      {
        id: "adaptability",
        name: "Adaptability",
        isConfirmed: true,
      },
      {
        id: "time-management",
        name: "Time Management",
        isConfirmed: true,
      },
      {
        id: "continuous-learning",
        name: "Continuous Learning",
        isConfirmed: true,
      },
    ],
  },
]);
