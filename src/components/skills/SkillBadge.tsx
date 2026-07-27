import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";
import {
  BrainCircuit,
  Braces,
  CloudCog,
  Code2,
  Database,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FaCss3Alt } from "react-icons/fa6";
import {
  SiAxios,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

interface SkillVisual {
  readonly icon: ElementType;
  readonly color: string;
}

interface SkillBadgeProps {
  readonly name: string;
  readonly animationDelay?: number;
}

const DEFAULT_SKILL_VISUAL: SkillVisual = {
  icon: Code2,
  color: "#38BDF8",
};

const SKILL_VISUALS: Readonly<Record<string, SkillVisual>> = {
  javascript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  typescript: {
    icon: SiTypescript,
    color: "#3178C6",
  },

  html: {
    icon: SiHtml5,
    color: "#E34F26",
  },

  html5: {
    icon: SiHtml5,
    color: "#E34F26",
  },

  css: {
    icon: FaCss3Alt,
    color: "#1572B6",
  },

  css3: {
    icon: FaCss3Alt,
    color: "#1572B6",
  },

  react: {
    icon: SiReact,
    color: "#61DAFB",
  },

  "react router": {
    icon: SiReactrouter,
    color: "#CA4245",
  },

  "react router dom": {
    icon: SiReactrouter,
    color: "#CA4245",
  },

  "tailwind css": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  "responsive web design": {
    icon: MonitorSmartphone,
    color: "#38BDF8",
  },

  "node.js": {
    icon: SiNodedotjs,
    color: "#5FA04E",
  },

  nodejs: {
    icon: SiNodedotjs,
    color: "#5FA04E",
  },

  "express.js": {
    icon: SiExpress,
    color: "#F8FAFC",
  },

  express: {
    icon: SiExpress,
    color: "#F8FAFC",
  },

  "rest api": {
    icon: Braces,
    color: "#22D3EE",
  },

  mongodb: {
    icon: SiMongodb,
    color: "#47A248",
  },

  mongoose: {
    icon: Database,
    color: "#C2415D",
  },

  jwt: {
    icon: ShieldCheck,
    color: "#D946EF",
  },

  "context api": {
    icon: SiReact,
    color: "#61DAFB",
  },

  axios: {
    icon: SiAxios,
    color: "#5A29E4",
  },

  vercel: {
    icon: SiVercel,
    color: "#F8FAFC",
  },

  render: {
    icon: CloudCog,
    color: "#46E3B7",
  },

  "mongodb atlas": {
    icon: SiMongodb,
    color: "#47A248",
  },

  git: {
    icon: SiGit,
    color: "#F05032",
  },

  github: {
    icon: SiGithub,
    color: "#F8FAFC",
  },

  "vs code": {
    icon: VscVscode,
    color: "#23A8F2",
  },

  "visual studio code": {
    icon: VscVscode,
    color: "#23A8F2",
  },

  postman: {
    icon: SiPostman,
    color: "#FF6C37",
  },

  "problem solving": {
    icon: BrainCircuit,
    color: "#F59E0B",
  },

  "team collaboration": {
    icon: Users,
    color: "#8B5CF6",
  },

  communication: {
    icon: MessageCircle,
    color: "#10B981",
  },
};

function normalizeSkillName(name: string): string {
  return name.trim().toLowerCase();
}

export function SkillBadge({
  name,
  animationDelay = 0,
}: SkillBadgeProps): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  const visual = SKILL_VISUALS[normalizeSkillName(name)] ?? DEFAULT_SKILL_VISUAL;

  const Icon = visual.icon;

  return (
    <motion.li
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.88,
              y: 10,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              scale: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.35,
        delay: animationDelay,
        ease: "easeOut",
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -4,
              scale: 1.05,
            }
      }
      whileTap={
        shouldReduceMotion
          ? undefined
          : {
              scale: 0.97,
            }
      }
      style={{
        color: visual.color,
        borderColor: `${visual.color}55`,
      }}
      className="group relative inline-flex cursor-default items-center gap-2.5 overflow-hidden rounded-full border bg-slate-950/80 px-3.5 py-2 text-sm font-medium shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <span
        aria-hidden
        style={{
          backgroundColor: visual.color,
        }}
        className="absolute inset-0 opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.13]"
      />

      <Icon
        aria-hidden
        size={18}
        className="relative shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
      />

      <span className="relative text-slate-200 transition-colors duration-300 group-hover:text-white">
        {name}
      </span>
    </motion.li>
  );
}
