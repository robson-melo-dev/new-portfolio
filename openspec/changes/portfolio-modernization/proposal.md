## Why

The portfolio still presents Robson as a Frontend Developer on a Create React App + JavaScript stack, while his actual work is senior Fullstack: backend architecture, ERP integrations, asynchronous processing and solopreneurship across AgTech and Telecom. The site therefore both under-sells the candidate and demonstrates a stack he no longer recommends — content and codebase are each a liability in front of a technical reviewer.

CRA is unmaintained, there is no type safety, copy is hardcoded inside JSX (including four duplicated inline SVG icon blocks), and the Experience data lists only two roles with stale dates. Fixing content without fixing the stack would leave the most visible proof point — the repository itself — unchanged.

## What Changes

- **BREAKING** Replace Create React App / `react-scripts` with Vite. Dev and build commands, entry HTML, and env-var conventions all change.
- **BREAKING** Convert the source tree from JavaScript to TypeScript in `strict` mode. `jsconfig.json` is replaced by `tsconfig.json`, and the existing `baseUrl: src` absolute imports are preserved via path aliases.
- **BREAKING** Replace the Sass/BEM stylesheets with Tailwind CSS. The current design tokens in `src/assets/sass/_colors.scss`, `_fonts.scss`, `_animations.scss` and `_generalMixins.scss` are ported into the Tailwind theme; the per-component `.scss` files are removed.
- Preserve and refine the existing "code editor / terminal window" visual identity (traffic-light spheres, monospace code blocks, blue glow) rather than redesigning — it is the site's personality and is reused as a reusable primitive instead of being re-implemented per section.
- Extract every hardcoded string, link, date and asset reference into `src/data/portfolio.ts` as the single typed source of truth.
- Introduce a reusable component layer (`src/components`) for the repeated patterns currently duplicated across sections: terminal window chrome, social icon links, badges, cards, and section headings.
- Add a new **About** section (AgTech and Telecom domain expertise, RabbitMQ asynchronous processing, Lotus Web Systems solopreneurship, USA and Scotland international experience).
- Add a new **TechStack** section grouped by Backend, Frontend, Databases, and Innovation/AI — replacing the single hardcoded skills string in Hero.
- Rewrite Hero to the Fullstack positioning: "Robson Melo de Souza — Fullstack Developer | Complex Integrations, ERPs, and Scalable Architectures."
- Expand Experience from 2 stale entries to the 4 current roles (Voalle 2024–present, Lotus Web Systems 2023–present, Voalle 2022–2023, TriganDAO 2022) rendered as a timeline.
- Keep the Projects section, migrated into the new architecture and curated to the strongest entries.
- Update Contact to email, LinkedIn and location; remove social links that no longer have live destinations.
- Deduplicate the four copies of inline social SVG markup (`Header.js`, `Contact.js`) into a single icon module.
- Fix responsiveness across all sections and raise Lighthouse Accessibility and Performance, including the currently missing `rel="noreferrer"` on `target="_blank"` links, missing `key` props on mapped lists, and non-semantic `<div>`/`<p>` headings.
- Keep GitHub Pages deployment working at the existing `/new-portfolio/` base path.
- Remove the dead `Popups/Building` component and the orphaned `App.css` / `index.css` files.

## Capabilities

### New Capabilities

- `build-tooling`: Vite + TypeScript strict build, path aliases, lint/typecheck scripts, and GitHub Pages deployment at a sub-path base.
- `design-system`: Tailwind theme carrying the ported design tokens, plus the reusable component primitives (terminal window, badge, card, icon, section heading) and the motion conventions they share.
- `portfolio-content`: `src/data/portfolio.ts` as the typed single source of truth for all profile, experience, tech-stack, project and contact data, with exported types.
- `site-sections`: The rendered page — Header, Hero, About, TechStack, Experience, Projects, Contact — their order, content bindings, and in-page navigation.
- `accessibility-performance`: Semantic landmarks and headings, keyboard and screen-reader behavior, reduced-motion support, responsive behavior down to 320px, and the Lighthouse budget the site must meet.

### Modified Capabilities

None — `openspec/specs/` is currently empty, so every capability above is introduced for the first time.

## Impact

**Affected code**

- Removed: `src/App.js`, `src/App.css`, `src/App.scss`, `src/index.css`, `src/index.js`, `src/sections/Popups/*`, `jsconfig.json`, all `src/**/*.scss`, all `src/sections/*/index.js` re-export barrels.
- Rewritten in TypeScript: all five existing sections (`Header`, `Hero`, `Experience`, `Projects`, `Contact`).
- Added: `index.html`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `src/main.tsx`, `src/App.tsx`, `src/data/portfolio.ts`, `src/components/*`, `src/sections/About`, `src/sections/TechStack`.
- `src/assets/images` is audited: the redundant icon variants (`Github-30/96`, `gitHub.png`, `github-48/96.svg`, and the Instagram / YouTube / WhatsApp sets) are reduced to what the new icon module actually uses.

**Dependencies**

- Added: `vite`, `@vitejs/plugin-react`, `typescript`, `tailwindcss`, `postcss`, `autoprefixer`, `@types/react`, `@types/react-dom`, `eslint` + TypeScript plugins.
- Removed: `react-scripts`, `sass`, `web-vitals`, `@testing-library/*` (no tests exist today), `react-simple-typewriter` (the typewriter effect is reimplemented as a local hook that honors `prefers-reduced-motion`).
- Kept: `react`, `react-dom`, `framer-motion`, `gh-pages`.
- Zustand is **not** added — no global state is needed; the site is static content with local component state only.
- Material UI is **not** added — no current component depends on it, and it would cost bundle size against the Performance goal.

**Systems**

- GitHub Pages at `https://robson-melo-dev.github.io/new-portfolio/` must continue to serve correctly; Vite's `base` must be set to `/new-portfolio/` and the `predeploy`/`deploy` scripts retargeted from `build/` to `dist/`.
- Public, outward-facing content: every date, employer and claim in `portfolio.ts` is published to the open internet and must match the resume.

**Risks**

- Dropping Sass for Tailwind touches every visual surface at once; the terminal-window and glow effects are the most likely to regress and are the reason they become a single shared primitive with the CSS kept in one place.
- The Voalle 2024 role end date is recorded in the source brief as "2026", which is the current year. It is treated as an ongoing role ("2024 — Present") in `portfolio.ts`; confirm before publishing.
