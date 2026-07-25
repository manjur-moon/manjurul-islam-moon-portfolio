import type { ExperienceEntry } from "@/types/experience.types";

export const experienceEntries: readonly ExperienceEntry[] = Object.freeze([
  {
    id: "red-technologies-l1-engineer-operations",

    companyName: "Red Technologies Ltd.",

    jobTitle: "L1 Engineer (Operations)",

    employmentType: "internship",

    period: {
      start: "2023-10",
      end: "2024-02",
      isCurrent: false,
    },

    location: "Dhaka, Bangladesh",

    isRemote: true,

    responsibilities: [
      "Monitored systems and services to identify operational issues and alerts.",
      "Performed initial troubleshooting, issue diagnosis, and first-level resolution.",
      "Logged, tracked, and updated incidents and service requests.",
    ],

    achievements: [],

    technologies: [
      "Incident Management System",
      "System Monitoring Tools",
      "Remote Support Tools",
      "Microsoft Office",
      "Windows",
      "Linux",
      "Network Troubleshooting Tools",
    ],

    status: "published",
  },
]);
