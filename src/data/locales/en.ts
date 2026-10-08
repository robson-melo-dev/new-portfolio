import type { LocaleContent } from "data/locales/types";

/**
 * Copy follows `~/Documents/Career/Resume en-us.pdf`. Typos in that PDF
 * ("Softare", "Inovative", "especialized", "architetures", "enginering",
 * "efficciency", "Fuent", "Hibrid") are corrected here, not reproduced.
 */
export const en: LocaleContent = {
  htmlLang: "en",

  meta: {
    title: "Robson Melo de Souza — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specialised in complex integrations, scalable architectures and ERP systems. Deep domain knowledge in AgTech and Telecom.",
  },

  nav: {
    about: "About",
    "tech-stack": "Tech Stack",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },

  a11y: {
    mainNav: "Main navigation",
  },

  profile: {
    greeting: "Hi, I am",
    role: "Full Stack Software Engineer",
    tagline: "Complex Integrations, ERPs, and Scalable Architectures",
    taglineHighlights: [
      "Complex Integrations",
      "ERP Architecture",
      "Scalable Backends",
      "AgTech & Telecom",
    ],
    location: "Santa Maria/RS, Brazil",
    terminalTitle: "robson@fullstack: ~/profile",
  },

  hero: {
    ctaWork: "See my work",
    ctaContact: "Get in touch",
    terminal: {
      role: "role",
      focus: "focus",
      domains: "domains",
      domainsValue: "AgTech, Telecom, ERP",
      backend: "backend",
      databases: "databases",
      async: "async",
      asyncValue: "RabbitMQ message brokering",
      based: "based",
    },
  },

  about: {
    heading: "About me",
    paragraphs: {
      "what-i-build":
        "Full Stack Software Engineer specialised in building complex integrations, scalable architectures and ERP systems, with deep domain knowledge in the AgTech and Telecom industries.",
      domains:
        "In Telecom, I built and maintained end-to-end integrations for internet service providers, MVNOs and neutral networks — where high data availability and consistency are essential. I also worked on the core ERP engine and its database architecture, resolving critical bugs and shipping systemic improvements rather than patches.",
      decoupling:
        "A lot of that comes down to decoupling. Introducing message queuing and asynchronous communication with RabbitMQ significantly reduced processing bottlenecks in mission-critical routines: slow, failure-prone work moves off the request path, so an integration degrades gracefully instead of taking the product down with it.",
      solopreneur:
        "In AgTech, I worked as a solopreneur on a public-private partnership with Embrapa, Brazil's agricultural research corporation, building bioeconomic pasture simulation and analysis tools that turn complex agronomic data into something people can act on. Earlier, remote work for companies in the United States and Scotland taught me to deliver across time zones and in a second language.",
    },
    highlights: {
      domains: { label: "Domains", value: "AgTech · Telecom · ERP" },
      depth: { label: "Depth", value: "Backend & architecture" },
      async: { label: "Async", value: "RabbitMQ brokering" },
      international: { label: "Remote for", value: "USA · Scotland" },
    },
  },

  techStack: {
    heading: "Tech stack",
    intro: "What do I use mostly?",
    groups: {
      backend: "Backend & Architecture",
      frontend: "Frontend",
      databases: "Databases",
      innovation: "Tools & Innovation",
    },
  },

  experience: {
    heading: "Work experience",
    present: "Present",
    current: "Current",
    roles: {
      "voalle-fullstack": {
        title: "Full Stack Developer",
        location: "Brazil · Hybrid",
        focus:
          "Developed and maintained end-to-end complex integrations for internet service providers (ISPs), MVNOs and neutral networks, ensuring high data availability and consistency. Maintained and optimised the core ERP engine and database architecture, resolving critical bugs and implementing systemic improvements. Implemented message queuing and asynchronous communication with RabbitMQ, significantly reducing processing bottlenecks in mission-critical routines.",
      },
      "embrapa-solopreneur": {
        title: "Solopreneur",
        location: "Brazil · Remote",
        focus:
          "Engineered AgTech software solutions, centred on a public-private partnership with Embrapa, Brazil's agricultural research corporation. Built bioeconomic pasture simulation and analysis tools, processing complex agronomic data through scalable backend architectures and interactive user interfaces.",
      },
      "lotus-frontend": {
        title: "Frontend Developer",
        location: "United States · Remote",
        focus:
          "Worked across the full development lifecycle for US-based companies, from technical refinement of requirements through UI implementation to quality assurance.",
      },
      trigandao: {
        title: "Frontend Developer",
        location: "Scotland · Remote",
        focus:
          "Collaborated with multinational, cross-time-zone teams to deliver React and Next.js frontend solutions for an early-stage startup entering its funding cycle.",
      },
    },
  },

  projects: {
    heading: "Selected projects",
    intro: "Some of my projects.",
    openLive: "Open live",
    openCode: "Open code",
    items: {
      ecomvision: {
        name: "Ecomvision",
        description:
          "A fullstack sales admin panel presenting a complete picture of sales information for managerial decisions — API, data layer and dashboard.",
        imageAlt:
          "Ecomvision admin dashboard showing sales charts and KPI tiles",
      },
      "calculadora-importacao": {
        name: "Calculadora do Imposto de Importação",
        description:
          "A Chrome extension that injects itself into the Shopee and AliExpress checkout UIs to calculate Brazilian import tax in place — a browser-side integration with two third-party storefronts.",
        imageAlt:
          "Import tax calculator extension running inside a storefront page",
      },
      "trigan-website": {
        name: "Trigan Website",
        description:
          "Frontend for Trigan's public site: React features and components with Next.js and TypeScript for server-side rendering and API consumption, working directly with the design team and leadership.",
        imageAlt: "Trigan website landing page",
      },
      "space-tours": {
        name: "Space Tours",
        description:
          "A React app that reads SpaceX launch data through Apollo/GraphQL, renders the records and prints a ticket for the selected trip. Built to a strict provided design.",
        imageAlt: "Space Tours app listing SpaceX rocket launches",
      },
    },
  },

  contact: {
    heading: "Get in touch",
    blurb:
      "Open to conversations about fullstack roles, integration work, and architecture consulting.",
    location: "Santa Maria/RS, Brazil",
    languages: "Portuguese (native) · English (fluent, C2)",
    emailLabel: "Email Robson Melo",
    socialLabels: {
      linkedin: "LinkedIn profile",
      github: "GitHub profile",
    },
  },

  localeSwitch: {
    legend: "Language",
  },
};
