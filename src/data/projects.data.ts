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
      // {
      //   src: "/images/projects/your-project-name/dashboard.png",
      //   alt: "Your Project Name dashboard",
      //   width: 1440,
      //   height: 900,
      // },
      // {
      //   src: "/images/projects/your-project-name/mobile.webp",
      //   alt: "Your Project Name mobile interface",
      //   width: 430,
      //   height: 932,
      // },
    ],

    liveUrl: "https://grantpilot-client-six.vercel.app",

    clientRepositoryUrl: "https://github.com/manjur-moon/grantpilot-client",

    challenges: [
      "While developing GrantPilot-AI, I faced challenges in integrating AI-generated grant recommendations, maintaining secure authentication, managing application data, and synchronizing information between the frontend and backend. Handling document uploads, validating complex forms, protecting private user data, and ensuring consistent AI responses also required careful planning, testing, and debugging.",
    ],

    solutions: [
      "I solved these challenges by building secure authentication and protected routes, creating structured APIs for grant and application management, and validating data on both the frontend and backend. I also improved document-upload handling, added clear error messages, and carefully tested the AI recommendation flow to ensure reliable, relevant, and consistent responses.",
    ],

    learningOutcomes: [
      "Developing GrantPilot-AI strengthened my understanding of full-stack MERN development, AI integration, secure authentication, REST API design, document management, and database operations. I also improved my skills in form validation, debugging, error handling, responsive interface design, and building practical AI-powered features for real-world users.",
    ],

    improvements: [
      "GrantPilot-AI can be improved by adding more accurate AI recommendations, real-time application status updates, advanced grant filtering, automated deadline reminders, and better document analysis. The platform could also support team collaboration, personalized dashboards, stronger security, and performance optimization for a faster and more reliable user experience.",
    ],

    futurePlans: [
      "In the future, I plan to enhance GrantPilot-AI with smarter AI-powered grant matching, automated proposal analysis, personalized deadline reminders, and real-time application tracking. I also aim to add team collaboration, advanced analytics, more secure document management, and scalable cloud infrastructure to support more users and grant opportunities.",
    ],

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
        alt: "CrowdSpark home page",
        width: 1919,
        height: 827,
      },
      // {
      //   src: "/images/projects/second-project-name/dashboard.webp",
      //   alt: "Second Project Name dashboard",
      //   width: 1440,
      //   height: 900,
      // },
      // {
      //   src: "/images/projects/second-project-name/mobile.webp",
      //   alt: "Second Project Name mobile interface",
      //   width: 430,
      //   height: 932,
      // },
    ],

    liveUrl: "https://crowd-spark-client.vercel.app",

    clientRepositoryUrl: "https://github.com/manjur-moon/CrowdSpark-client",

    challenges: [
      "While developing CrowdSpark, I faced challenges with secure authentication, role-based access control, campaign and contribution management, and payment integration. Maintaining consistent data between the frontend and backend, validating user input, and handling errors across different user roles were also challenging. Solving these issues improved my understanding of full-stack architecture, API security, and building reliable, user-friendly applications.",
    ],

    solutions: [
      "I solved these challenges by configuring secure authentication and role-based permissions, creating well-structured API routes, validating data on both the frontend and backend, and improving error handling. I also tested payment and contribution flows carefully and used clear state management to keep the user interface synchronized with the database.",
    ],

    learningOutcomes: [
      "Developing CrowdSpark strengthened my understanding of full-stack MERN development, secure authentication, role-based access control, REST API design, database management, and payment integration. I also improved my skills in debugging, form validation, error handling, responsive UI design, and deploying a production-ready web application.",
    ],

    improvements: [
      "CrowdSpark can be improved by adding real-time notifications, advanced campaign analytics, social sharing, multiple payment methods, and stronger fraud-prevention features. The platform could also include personalized campaign recommendations, improved accessibility, and better performance optimization to provide a faster, safer, and more engaging user experience.",
    ],

    futurePlans: [
      "In the future, I plan to expand CrowdSpark with real-time notifications, AI-powered campaign recommendations, advanced analytics, social sharing, and support for multiple payment methods. I also aim to develop a mobile application and improve platform security, scalability, and accessibility to support a larger community of campaign creators and contributors.",
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
      "Implemented secure authentication and protected routes while maintaining user sessions across the application.Managed image uploads with Cloudinary and handled upload failures gracefully.Designed efficient MongoDB schemas and relationships for users, pets, and adoption requests.Built responsive and accessible UI components that work consistently across different devices.Optimized API performance with filtering, searching, sorting, and pagination.Handled deployment issues, including environment variables, CORS configuration, and production debugging.Improved error handling and user feedback to provide a smooth user experience.Maintained a scalable and well-structured codebase following reusable component architecture.",
    ],

    solutions: [
      "Implemented JWT-based authentication with protected routes and centralized middleware to secure user access.Integrated Cloudinary for image uploads with proper validation, error handling, and fallback mechanisms.Designed a normalized MongoDB schema and optimized database queries for better performance.Used reusable React components, custom hooks, and clean project architecture to improve maintainability.Implemented server-side filtering, searching, sorting, and pagination to efficiently handle large datasets.Resolved deployment issues by correctly configuring environment variables, CORS policies, and production API endpoints.Added comprehensive form validation and user-friendly error messages to improve the overall user experience.Performed extensive testing across different browsers and devices to ensure consistent functionality and responsiveness.",
    ],

    learningOutcomes: [
      "Strengthened my understanding of the MERN stack by building a complete full-stack application.Gained hands-on experience with RESTful API design and backend development using Express.js and MongoDB.Learned to implement secure authentication, authorization, and protected routes.Improved skills in React component architecture, state management, and reusable UI development.Enhanced knowledge of database design, data relationships, and query optimization.Developed practical experience with image upload services, environment configuration, and third-party integrations.Improved debugging and problem-solving skills by resolving real-world development and deployment issues.Learned Git and GitHub best practices for version control and collaborative development.Gained experience deploying full-stack applications and managing production environments.Improved code quality by following clean architecture, modular design, and maintainable coding practices.",
    ],

    improvements: [
      "Although Resell Hub successfully delivers its core marketplace features, there are several areas for future improvement. Secure online payment integration can be added to support seamless transactions, while real-time order tracking and notifications would improve the overall shopping experience. Introducing an in-app messaging system would enable direct communication between buyers and sellers. The platform could also benefit from product reviews and ratings, wishlist functionality, seller verification, and AI-powered product recommendations. On the administrative side, a dedicated dashboard with advanced analytics, sales reports, and content moderation tools would simplify platform management. Additionally, enhancing security with two-factor authentication, implementing multilingual support, optimizing performance, and developing a mobile application would make Resell Hub more scalable, reliable, and production-ready.",
    ],

    futurePlans: [
      "The future plan for Resell Hub is to evolve it into a complete and scalable online marketplace that offers a seamless buying and selling experience. I plan to introduce secure online payment integration, real-time order and delivery tracking, and an in-app messaging system to improve communication between buyers and sellers. Advanced product recommendations, personalized user dashboards, and AI-powered search will further enhance the shopping experience. Additionally, I aim to develop a comprehensive admin panel with analytics, user management, product moderation, and sales reporting. As the platform grows, I also plan to implement features such as wishlist management, product reviews and ratings, seller verification, multilingual support, and mobile app integration to make Resell Hub more reliable, user-friendly, and production-ready.",
    ],

    isFeatured: true,

    completionDate: "2026-03-01",

    status: "published",
  },
]);
