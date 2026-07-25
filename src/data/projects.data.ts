import type { Project } from "@/types/project.types";

export const projects: readonly Project[] = Object.freeze([
  {
    id: "project-001",

    slug: "GrantPilot-AI",

    title: "GrantPilot-AI",

    category: "full-stack",

    shortDescription:
      "GrantPilot AI is a full-stack funding discovery and application management platform.",

    fullDescription:
      "GrantPilot AI is a full-stack funding discovery and application management platform. Users can explore verified scholarships, fellowships, competitions, grants, and research opportunities using search, filters, sorting, and pagination. Authenticated users can create an applicant profile, save opportunities, start and track applications, upload documents, view personalized recommendations, use the AI assistant, and submit funding opportunities. Administrators can access protected moderation and management features. This repository contains the Next.js frontend of GrantPilot AI. The application is responsive across mobile, tablet, laptop, and desktop devices and uses protected dashboard routes.",

    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TanStack Query",
      "Better Auth Client",
      "Recharts",
      "Cloudinary",
    ],

    features: [
      "Applicant profile management",
      "Application tracking and status management",
      "Document upload, analysis, download, and deletion",
    ],

    thumbnail: {
      src: "/images/projects/GrantPilot-AI/home.png",
      alt: "Your Project Name homepage preview",
      width: 1280,
      height: 720,
    },

    screenshots: [
      {
        src: "/images/projects/GrantPilot-AI/home.png",
        alt: "Your Project Name home page",
        width: 1906,
        height: 847,
      },
      {
        src: "/images/projects/your-project-name/dashboard.png",
        alt: "Your Project Name dashboard",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/your-project-name/mobile.webp",
        alt: "Your Project Name mobile interface",
        width: 430,
        height: 932,
      },
    ],

    liveUrl: "https://grantpilot-client-six.vercel.app",

    clientRepositoryUrl: "https://github.com/manjur-moon/grantpilot-client",

    challenges: ["Describe a real development challenge."],

    solutions: ["Explain how you solved the challenge."],

    learningOutcomes: ["Describe what you learned from this project."],

    improvements: ["Describe something that can be improved."],

    futurePlans: ["Describe a realistic future plan."],

    isFeatured: true,

    completionDate: "2026-07-01",

    status: "published",
  },

  {
    id: "project-002",

    slug: "CrowdSpark",

    title: "CrowdSpark",

    category: "full-stack",

    shortDescription: "CrowdSpark is a full-stack crowdfunding platform.",

    fullDescription:
      "CrowdSpark is a full-stack crowdfunding platform where Supporters discover approved campaigns, purchase platform credits, contribute to campaigns, track their contribution history, request refunds, report suspicious campaigns, and receive notifications. Creators can launch and manage campaigns, review contributions, publish progress updates, track raised credits, and request withdrawals. Admins oversee the platform by managing users, moderating campaigns, resolving reports, processing withdrawals, and reviewing financial records.",

    technologies: [
      "React",
      "TypeScript 5",
      "Vite 7",
      "React Router DOM",
      "MongoDB",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "Better Auth Client",
      "Recharts",
      "React Hook Form",
    ],

    features: [
      "Creator campaign CRUD, contribution review, updates, and withdrawals",
      "Admin user, campaign, report, withdrawal, and financial management",
      "Image upload with preview, validation, removal, and progress feedback",
      "Supporter wallet, credit purchase, payment history, and contribution history",
    ],

    thumbnail: {
      src: "/images/projects/CrowdSpark/home.png",
      alt: "Second Project Name homepage preview",
      width: 1919,
      height: 827,
    },

    screenshots: [
      {
        src: "/images/projects/CrowdSpark/home.png",
        alt: "Second Project Name home page",
        width: 1919,
        height: 827,
      },
      {
        src: "/images/projects/second-project-name/dashboard.webp",
        alt: "Second Project Name dashboard",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/second-project-name/mobile.webp",
        alt: "Second Project Name mobile interface",
        width: 430,
        height: 932,
      },
    ],

    liveUrl: "https://crowd-spark-client.vercel.app",

    clientRepositoryUrl: "https://github.com/manjur-moon/CrowdSpark-client",

    challenges: [
      "Describe a real technical challenge you faced while building the second project.",
    ],

    solutions: ["Explain how you analyzed and solved the technical challenge."],

    learningOutcomes: [
      "Describe the technical knowledge and practical experience you gained from this project.",
    ],

    improvements: ["Describe an existing area of the project that could be improved."],

    futurePlans: [
      "Describe a realistic feature or improvement that could be added in the future.",
    ],

    isFeatured: true,

    completionDate: "2026-02-01",

    status: "published",
  },

  {
    id: "project-003",

    slug: "ReSell Hub",

    title: "ReSell Hub",

    category: "full-stack",

    shortDescription: "ReSell Hub is a modern second-hand marketplace web application.",

    fullDescription:
      "ReSell Hub is a modern second-hand marketplace web application where users can browse, search, filter, and purchase pre-owned products. The platform supports buyer, seller, and admin dashboards with role-based access. Sellers can list and manage products, buyers can place orders and make payments, and admins can monitor users, products, orders, and payments.",

    technologies: [
      "Next.js",
      "React",
      "TanStack Query",
      "Better Auth",
      "React Hook Form",
      "Framer Motion",
    ],

    features: [
      "Role-based dashboard access for buyer, seller, and admin.",
      "Admin dashboard with user, product, order, revenue, and user growth overview.",
      "Buyers can create orders and complete checkout using Stripe payment flow.",
      "Seller dashboard with product, order, sales, revenue, and pending order summary.",
    ],

    thumbnail: {
      src: "/images/projects/ReSell Hub/home.png",
      alt: "Third Project Name homepage preview",
      width: 1905,
      height: 820,
    },

    screenshots: [
      {
        src: "/images/projects/ReSell Hub/home.png",
        alt: "ReSell Hub home page",
        width: 1905,
        height: 820,
      },
      // {
      //   src: "/images/projects/third-project-name/projects.webp",
      //   alt: "Third Project Name projects section",
      //   width: 1440,
      //   height: 900,
      // },
      // {
      //   src: "/images/projects/third-project-name/mobile.webp",
      //   alt: "Third Project Name mobile interface",
      //   width: 430,
      //   height: 932,
      // },
    ],

    liveUrl: "https://resell-hub-client-gamma.vercel.app",

    clientRepositoryUrl: "https://github.com/manjur-moon/resell-hub-client",

    challenges: [
      "Describe a real technical challenge you faced while building the third project.",
    ],

    solutions: ["Explain how you analyzed and solved the technical challenge."],

    learningOutcomes: [
      "Describe the technical knowledge and practical experience you gained from this project.",
    ],

    improvements: ["Describe an existing area of the project that could be improved."],

    futurePlans: [
      "Describe a realistic feature or improvement that could be added in the future.",
    ],

    isFeatured: true,

    completionDate: "2026-03-01",

    status: "published",
  },
]);
