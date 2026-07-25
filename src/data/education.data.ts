import type { EducationEntry } from "@/types/education.types";

export const educationEntries: readonly EducationEntry[] = Object.freeze([
  {
    id: "education-bachelor-degree",

    institution: "United International University (UIU)",

    qualification: "Bachelor of Science",

    subject: "Computer Science and Engineering",

    period: {
      start: "2018",
      end: "2023",
      isCurrent: false,
    },

    location: "Dhaka, Bangladesh",

    result: null,

    description:
      "I graduated with a Bachelor of Science in Computer Science and Engineering from United International University (UIU). During my studies, I built a strong foundation in programming, data structures, algorithms, databases, software engineering, computer networks, and web development. I also worked on academic projects that strengthened my problem-solving, teamwork, and practical software development skills.",

    status: "published",
  },
]);
