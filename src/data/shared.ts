import adminDashboard from "assets/images/admin-dashboard.png";
import calculadora from "assets/images/calculadora.png";
import spaceTours from "assets/images/space-tours.png";
import triganWebsite from "assets/images/trigan-website.png";

/**
 * Locale-invariant data: ids, URLs, images, dates, company names and
 * technology names. These are deliberately NOT duplicated per locale — a link
 * or a date that exists twice is a link or a date that will drift.
 *
 * The matching prose for each id lives in `data/locales/*`.
 */

export const LOCALES = ["en", "pt-BR"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const profileShared = {
  name: "Robson Melo de Souza",
  shortName: "Robson Melo",
} as const;

export const navIds = ["about", "tech-stack", "experience", "projects", "contact"] as const;
export type NavId = (typeof navIds)[number];

/**
 * About copy is keyed, not a bare array, for two reasons: the ids give React
 * stable keys that survive a locale switch (a key derived from the text itself
 * remounts every paragraph and strands them mid-animation), and `Record<Id, …>`
 * stops one locale from quietly having fewer paragraphs than the other.
 */
export const aboutParagraphIds = [
  "what-i-build",
  "domains",
  "decoupling",
  "solopreneur",
] as const;
export type AboutParagraphId = (typeof aboutParagraphIds)[number];

export const aboutHighlightIds = ["domains", "depth", "async", "international"] as const;
export type AboutHighlightId = (typeof aboutHighlightIds)[number];

export const techGroupIds = ["backend", "frontend", "databases", "innovation"] as const;
export type TechGroupId = (typeof techGroupIds)[number];

/** Technology names are proper nouns — identical in every locale. */
export const techGroupItems: Record<TechGroupId, readonly string[]> = {
  backend: [
    "Node.js",
    ".NET (C#)",
    "Microservices",
    "RabbitMQ",
    "Docker",
    "REST APIs",
  ],
  frontend: [
    "React",
    "JavaScript",
    "TypeScript",
    "Zustand",
    "React Hook Form",
    "Zod",
    "Tailwind CSS",
    "Material UI",
    "Vite",
  ],
  databases: ["PostgreSQL", "MongoDB"],
  innovation: [
    "Git",
    "GitLab",
    "CI/CD",
    "Claude Code",
    "OpenSpec",
    "AI Prompt Engineering",
  ],
};

/** Reverse-chronological. */
export const roleIds = [
  "voalle-fullstack",
  "embrapa-solopreneur",
  "lotus-frontend",
  "trigandao",
] as const;
export type RoleId = (typeof roleIds)[number];

export interface RoleShared {
  company: string;
  start: string;
  /**
   * `null` means the role is ongoing. Nothing uses it right now — every role
   * has ended — but the timeline still renders a "Present" label and a badge
   * for it, so a new job is a one-line data change.
   */
  end: string | null;
  stack: readonly string[];
}

/**
 * Dates, companies and locations come from the resume in
 * `~/Documents/Career`. The per-role `stack` tags do not: the resume lists
 * skills globally, so these are read off each role's own description where it
 * names a technology, and kept conservative where it does not.
 */
export const rolesShared: Record<RoleId, RoleShared> = {
  "voalle-fullstack": {
    company: "Grupo Voalle",
    start: "2024",
    end: "2026",
    stack: [".NET (C#)", "Node.js", "RabbitMQ", "PostgreSQL", "Docker"],
  },
  "embrapa-solopreneur": {
    company: "Embrapa",
    start: "2023",
    end: "2024",
    stack: ["Node.js", "React", "TypeScript", "PostgreSQL"],
  },
  "lotus-frontend": {
    company: "Lotus Web Systems",
    start: "2022",
    end: "2023",
    stack: ["React", "TypeScript", "Redux", "GraphQL"],
  },
  trigandao: {
    company: "TriganDAO",
    start: "2022",
    end: "2022",
    stack: ["React", "Next.js", "Axios"],
  },
};

/** Fullstack and integration work first, frontend exercises after. */
export const projectIds = [
  "ecomvision",
  "calculadora-importacao",
  "trigan-website",
  "space-tours",
] as const;
export type ProjectId = (typeof projectIds)[number];

export interface ProjectShared {
  image: string;
  tech: readonly string[];
  liveUrl?: string;
  codeUrl?: string;
}

export const projectsShared: Record<ProjectId, ProjectShared> = {
  ecomvision: {
    image: adminDashboard,
    tech: ["Node.js", "React", "MongoDB", "REST API"],
    codeUrl: "https://github.com/robson-melo-dev/admin-fullstack",
    liveUrl: "https://admin-dashboard-a7bj.onrender.com/",
  },
  "calculadora-importacao": {
    image: calculadora,
    tech: ["JavaScript", "Chrome Extension", "DOM Integration"],
    liveUrl:
      "https://chrome.google.com/webstore/detail/calculadora-do-imposto-de/ihhoidhcclfigdmajoklgeaocclihhoh?hl=pt-br",
  },
  "trigan-website": {
    image: triganWebsite,
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://trigan.org/",
  },
  "space-tours": {
    image: spaceTours,
    tech: ["React", "Apollo", "GraphQL"],
    codeUrl: "https://github.com/robson-melo-dev/react-coding-exercise",
    liveUrl: "https://robson-melo-dev.github.io/react-coding-exercise/",
  },
};

export const socialIds = ["linkedin", "github"] as const;
export type SocialId = (typeof socialIds)[number];

export const socialsShared: Record<SocialId, { href: string }> = {
  linkedin: { href: "https://www.linkedin.com/in/robsonthedev/" },
  github: { href: "https://github.com/robson-melo-dev" },
};

export const contactShared = {
  email: "sys.robson@gmail.com",
} as const;
