import type {
  AboutHighlightId,
  AboutParagraphId,
  NavId,
  ProjectId,
  RoleId,
  SocialId,
  TechGroupId,
} from "data/shared";

/**
 * Every translatable string on the site.
 *
 * The `Record<…Id, …>` shapes are the point: adding a role, project, tech
 * group or social link makes `npm run typecheck` fail until every locale has
 * copy for it. A half-translated page cannot reach the build.
 */
export interface LocaleContent {
  /** Value for the `lang` attribute on `<html>`. */
  htmlLang: string;

  meta: {
    title: string;
    description: string;
  };

  nav: Record<NavId, string>;

  a11y: {
    /** Accessible name for the <nav> landmark. */
    mainNav: string;
  };

  profile: {
    greeting: string;
    role: string;
    tagline: string;
    /** Cycled by the hero typewriter. */
    taglineHighlights: readonly string[];
    location: string;
    terminalTitle: string;
  };

  hero: {
    ctaWork: string;
    ctaContact: string;
    /** Keys rendered inside the terminal window mock. */
    terminal: {
      role: string;
      focus: string;
      domains: string;
      domainsValue: string;
      backend: string;
      databases: string;
      async: string;
      asyncValue: string;
      based: string;
    };
  };

  about: {
    heading: string;
    paragraphs: Record<AboutParagraphId, string>;
    highlights: Record<AboutHighlightId, { label: string; value: string }>;
  };

  techStack: {
    heading: string;
    intro: string;
    groups: Record<TechGroupId, string>;
  };

  experience: {
    heading: string;
    /** End label for an ongoing role, e.g. "Present". */
    present: string;
    /** Badge on an ongoing role, e.g. "Current". */
    current: string;
    roles: Record<RoleId, { title: string; location: string; focus: string }>;
  };

  projects: {
    heading: string;
    intro: string;
    openLive: string;
    openCode: string;
    items: Record<ProjectId, { name: string; description: string; imageAlt: string }>;
  };

  contact: {
    heading: string;
    blurb: string;
    location: string;
    /** e.g. "Portuguese (native) · English (C2)" */
    languages: string;
    emailLabel: string;
    socialLabels: Record<SocialId, string>;
  };

  localeSwitch: {
    /** Accessible name for the button group. Each option inside it is named
     *  in its own language, so only this label needs translating. */
    legend: string;
  };
}
