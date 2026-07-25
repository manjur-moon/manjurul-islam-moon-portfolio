import type { PersonalInfo, SocialLink } from "@/types/personal.types";

export const personalInfo: PersonalInfo = Object.freeze({
  fullName: "Manjurul Islam Moon",

  displayName: "Manjurul Islam Moon",

  professionalDesignation: "MERN Stack Developer",

  heroHeadline: "I build modern and user-friendly web applications.",

  shortIntroduction:
    "I am a web developer focused on building responsive, accessible and maintainable applications using modern JavaScript technologies.",

  aboutDescription:
    "I am a passionate MERN Stack Developer with a background in operations and a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into practical digital solutions using React, Node.js, Express.js, MongoDB, and other modern technologies. My focus is on writing clean, maintainable code, creating intuitive user experiences, and continuously improving my problem-solving skills. I am currently expanding my knowledge of full-stack development and seeking opportunities where I can contribute to meaningful projects, collaborate with experienced professionals, and grow as a software developer.",

  currentLocation: "Dhaka, Bangladesh",

  availabilityStatus: "Open to new opportunities",

  preferredContactMethod: "Email",

  profileImage: {
    src: "/images/profile/moon2.jpg",
    alt: "Manjurul Islam Moon",
    width: 800,
    height: 800,
  },

  resumeUrl: "/documents/manjurul-islam-moon-resume.pdf",
});

export const socialLinks = Object.freeze([
  {
    id: "social-github",
    label: "GitHub",
    platform: "github",
    url: "https://github.com/manjur-moon",
    isExternal: true,
  },
  {
    id: "social-linkedin",
    label: "LinkedIn",
    platform: "linkedin",
    url: "https://www.linkedin.com/in/md-manjurul-islam-616701295",
    isExternal: true,
  },
  {
    id: "social-email",
    label: "Email",
    platform: "email",
    url: "mmanjurulislam@gmail.com",
    isExternal: false,
  },
] as const satisfies readonly SocialLink[]);
