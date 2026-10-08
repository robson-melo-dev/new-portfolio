import { en } from "data/locales/en";
import { ptBR } from "data/locales/pt-BR";
import type { LocaleContent } from "data/locales/types";
import {
  aboutHighlightIds,
  aboutParagraphIds,
  contactShared,
  navIds,
  profileShared,
  projectIds,
  projectsShared,
  roleIds,
  rolesShared,
  socialIds,
  socialsShared,
  techGroupIds,
  techGroupItems,
  type AboutHighlightId,
  type AboutParagraphId,
  type Locale,
  type ProjectId,
  type RoleId,
  type SocialId,
  type TechGroupId,
} from "data/shared";

export type { Locale, ProjectId, RoleId, SocialId, TechGroupId } from "data/shared";
export { LOCALES, DEFAULT_LOCALE } from "data/shared";

const locales: Record<Locale, LocaleContent> = {
  en,
  "pt-BR": ptBR,
};

export interface NavItem {
  id: string;
  label: string;
}

export interface TechGroup {
  id: TechGroupId;
  label: string;
  items: readonly string[];
}

export interface Role {
  id: RoleId;
  company: string;
  title: string;
  start: string;
  end: string | null;
  location: string;
  focus: string;
  stack: readonly string[];
}

export interface Project {
  id: ProjectId;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  tech: readonly string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface AboutParagraph {
  id: AboutParagraphId;
  text: string;
}

export interface AboutHighlight {
  id: AboutHighlightId;
  label: string;
  value: string;
}

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}

/**
 * The view every section renders: locale-invariant data from `data/shared`
 * merged with the prose for one locale. Components never touch either source
 * directly — they call `useContent()`.
 */
export interface PortfolioContent {
  locale: Locale;
  htmlLang: string;
  meta: LocaleContent["meta"];
  navItems: readonly NavItem[];
  a11y: LocaleContent["a11y"];
  profile: {
    name: string;
    shortName: string;
    greeting: string;
    role: string;
    tagline: string;
    taglineHighlights: readonly string[];
    location: string;
    terminalTitle: string;
  };
  hero: LocaleContent["hero"];
  about: {
    heading: string;
    paragraphs: readonly AboutParagraph[];
    highlights: readonly AboutHighlight[];
  };
  techStack: { heading: string; intro: string; groups: readonly TechGroup[] };
  experience: { heading: string; present: string; current: string; roles: readonly Role[] };
  projects: {
    heading: string;
    intro: string;
    openLive: string;
    openCode: string;
    items: readonly Project[];
  };
  contact: {
    heading: string;
    blurb: string;
    email: string;
    location: string;
    languages: string;
    emailLabel: string;
    socials: readonly SocialLink[];
  };
  localeSwitch: LocaleContent["localeSwitch"];
}

function build(locale: Locale): PortfolioContent {
  const t = locales[locale];

  return {
    locale,
    htmlLang: t.htmlLang,
    meta: t.meta,

    navItems: navIds.map((id) => ({ id, label: t.nav[id] })),
    a11y: t.a11y,

    profile: {
      ...profileShared,
      greeting: t.profile.greeting,
      role: t.profile.role,
      tagline: t.profile.tagline,
      taglineHighlights: t.profile.taglineHighlights,
      location: t.profile.location,
      terminalTitle: t.profile.terminalTitle,
    },

    hero: t.hero,

    about: {
      heading: t.about.heading,
      paragraphs: aboutParagraphIds.map((id) => ({ id, text: t.about.paragraphs[id] })),
      highlights: aboutHighlightIds.map((id) => ({ id, ...t.about.highlights[id] })),
    },

    techStack: {
      heading: t.techStack.heading,
      intro: t.techStack.intro,
      groups: techGroupIds.map((id) => ({
        id,
        label: t.techStack.groups[id],
        items: techGroupItems[id],
      })),
    },

    experience: {
      heading: t.experience.heading,
      present: t.experience.present,
      current: t.experience.current,
      roles: roleIds.map((id) => ({ id, ...rolesShared[id], ...t.experience.roles[id] })),
    },

    projects: {
      heading: t.projects.heading,
      intro: t.projects.intro,
      openLive: t.projects.openLive,
      openCode: t.projects.openCode,
      items: projectIds.map((id) => ({ id, ...projectsShared[id], ...t.projects.items[id] })),
    },

    contact: {
      heading: t.contact.heading,
      blurb: t.contact.blurb,
      email: contactShared.email,
      location: t.contact.location,
      languages: t.contact.languages,
      emailLabel: t.contact.emailLabel,
      socials: socialIds.map((id) => ({
        id,
        href: socialsShared[id].href,
        label: t.contact.socialLabels[id],
      })),
    },

    localeSwitch: t.localeSwitch,
  };
}

/** Built once per locale — the content is static, so there is nothing to recompute. */
const built: Record<Locale, PortfolioContent> = {
  en: build("en"),
  "pt-BR": build("pt-BR"),
};

export function getContent(locale: Locale): PortfolioContent {
  return built[locale];
}
