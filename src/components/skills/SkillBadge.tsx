import {
  BrainCircuit,
  Clock3,
  Code2,
  GraduationCap,
  MessageCircle,
  RefreshCcw,
  Users,
} from "lucide-react";
import type { ElementType } from "react";
import { FaCss3Alt } from "react-icons/fa6";
import {
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

interface SkillVisual {
  readonly icon: ElementType;
  readonly color: string;
  readonly background: string;
  readonly border: string;
}

interface SkillBadgeProps {
  readonly name: string;
}

const DEFAULT_VISUAL: SkillVisual = {
  icon: Code2,
  color: "#38bdf8",
  background: "rgba(14, 116, 144, 0.18)",
  border: "rgba(56, 189, 248, 0.2)",
};

const SKILL_VISUALS: Readonly<Record<string, SkillVisual>> = {
  mongodb: {
    icon: SiMongodb,
    color: "#47a248",
    background: "rgba(21, 128, 61, 0.25)",
    border: "rgba(71, 162, 72, 0.25)",
  },

  javascript: {
    icon: SiJavascript,
    color: "#f7df1e",
    background: "rgba(161, 98, 7, 0.3)",
    border: "rgba(247, 223, 30, 0.2)",
  },

  typescript: {
    icon: SiTypescript,
    color: "#3178c6",
    background: "rgba(30, 64, 175, 0.3)",
    border: "rgba(49, 120, 198, 0.25)",
  },

  "express.js": {
    icon: SiExpress,
    color: "#f8fafc",
    background: "rgba(51, 65, 85, 0.45)",
    border: "rgba(148, 163, 184, 0.18)",
  },

  "tailwind css": {
    icon: SiTailwindcss,
    color: "#06b6d4",
    background: "rgba(8, 145, 178, 0.25)",
    border: "rgba(6, 182, 212, 0.22)",
  },

  bootstrap: {
    icon: SiBootstrap,
    color: "#a855f7",
    background: "rgba(88, 28, 135, 0.4)",
    border: "rgba(168, 85, 247, 0.22)",
  },

  firebase: {
    icon: SiFirebase,
    color: "#ffca28",
    background: "rgba(146, 64, 14, 0.38)",
    border: "rgba(255, 202, 40, 0.2)",
  },

  figma: {
    icon: SiFigma,
    color: "#f24e1e",
    background: "rgba(136, 19, 55, 0.38)",
    border: "rgba(242, 78, 30, 0.2)",
  },

  html: {
    icon: SiHtml5,
    color: "#e34f26",
    background: "rgba(127, 29, 29, 0.4)",
    border: "rgba(227, 79, 38, 0.22)",
  },

  html5: {
    icon: SiHtml5,
    color: "#e34f26",
    background: "rgba(127, 29, 29, 0.4)",
    border: "rgba(227, 79, 38, 0.22)",
  },

  css: {
    icon: FaCss3Alt,
    color: "#1572b6",
    background: "rgba(30, 58, 138, 0.4)",
    border: "rgba(21, 114, 182, 0.25)",
  },

  css3: {
    icon: FaCss3Alt,
    color: "#1572b6",
    background: "rgba(30, 58, 138, 0.4)",
    border: "rgba(21, 114, 182, 0.25)",
  },

  react: {
    icon: SiReact,
    color: "#61dafb",
    background: "rgba(8, 145, 178, 0.24)",
    border: "rgba(97, 218, 251, 0.22)",
  },

  "node.js": {
    icon: SiNodedotjs,
    color: "#5fa04e",
    background: "rgba(20, 83, 45, 0.38)",
    border: "rgba(95, 160, 78, 0.25)",
  },

  vite: {
    icon: SiVite,
    color: "#a78bfa",
    background: "rgba(76, 29, 149, 0.35)",
    border: "rgba(167, 139, 250, 0.22)",
  },

  git: {
    icon: SiGit,
    color: "#f05032",
    background: "rgba(124, 45, 18, 0.38)",
    border: "rgba(240, 80, 50, 0.22)",
  },

  github: {
    icon: SiGithub,
    color: "#f8fafc",
    background: "rgba(51, 65, 85, 0.42)",
    border: "rgba(248, 250, 252, 0.15)",
  },

  "problem solving": {
    icon: BrainCircuit,
    color: "#f59e0b",
    background: "rgba(120, 53, 15, 0.42)",
    border: "rgba(245, 158, 11, 0.22)",
  },

  "team collaboration": {
    icon: Users,
    color: "#8b5cf6",
    background: "rgba(88, 28, 135, 0.42)",
    border: "rgba(139, 92, 246, 0.22)",
  },

  communication: {
    icon: MessageCircle,
    color: "#10b981",
    background: "rgba(5, 100, 84, 0.38)",
    border: "rgba(16, 185, 129, 0.22)",
  },

  adaptability: {
    icon: RefreshCcw,
    color: "#38bdf8",
    background: "rgba(14, 116, 144, 0.3)",
    border: "rgba(56, 189, 248, 0.22)",
  },

  "time management": {
    icon: Clock3,
    color: "#f97316",
    background: "rgba(124, 45, 18, 0.4)",
    border: "rgba(249, 115, 22, 0.22)",
  },

  "continuous learning": {
    icon: GraduationCap,
    color: "#e879f9",
    background: "rgba(112, 26, 117, 0.4)",
    border: "rgba(232, 121, 249, 0.22)",
  },
};

function normalizeSkillName(name: string): string {
  return name.trim().toLowerCase();
}

export function SkillBadge({ name }: SkillBadgeProps): React.JSX.Element {
  const visual = SKILL_VISUALS[normalizeSkillName(name)] ?? DEFAULT_VISUAL;

  const Icon = visual.icon;

  return (
    <div
      style={{
        backgroundColor: visual.background,
        borderColor: visual.border,
      }}
      className="group flex min-w-max cursor-grab items-center gap-3 rounded-xl border px-5 py-3.5 shadow-lg shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl active:cursor-grabbing active:scale-[0.98]"
    >
      <Icon
        aria-hidden
        size={21}
        style={{
          color: visual.color,
        }}
        className="shrink-0 transition duration-300 group-hover:rotate-6 group-hover:scale-110"
      />

      <span className="whitespace-nowrap text-sm font-semibold text-slate-100 sm:text-base">
        {name}
      </span>
    </div>
  );
}
