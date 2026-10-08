## Context

The portfolio is a Create React App site: React 18 + JavaScript + Sass/BEM, animated with framer-motion and `react-simple-typewriter`, deployed to GitHub Pages at `/new-portfolio/` via `gh-pages`.

What the code actually looks like today:

- `src/App.js` composes five sections — `Header`, `Hero`, `Experience`, `Projects`, `Contact` — plus a commented-out `Building` popup. Each section is a folder with `Name.js`, `Name.scss`, and an `index.js` barrel.
- Absolute imports (`sections/Header`, `assets/images/...`) already work via `jsconfig.json` `baseUrl: src`.
- Copy is hardcoded in JSX. `Hero.js` contains the skills list as a literal string; `Experience/experiences.js` is the only extracted data file and holds two stale entries.
- The four social SVG icons are pasted inline, in full, in both `Header.js` and `Contact.js` — eight copies of path data.
- Design tokens exist but are thin and partly broken: `_colors.scss` defines six variables; `_generalMixins.scss` references `$neutral`, `$primary`, and a `rubikBold` mixin that are **not defined anywhere**, so parts of that file are dead code.
- Accessibility debt is visible at a glance: `target="_blank"` without `rel`, mapped lists without `key`, section titles as `<p>`/`<div>`, no `<main>` landmark.

Constraints:

- Must keep working on GitHub Pages under a sub-path. No server, no SSR, no runtime backend.
- There are no tests to preserve — `@testing-library/*` is installed but unused — so the refactor carries no test-migration cost and no test safety net.
- The site is public and outward-facing: every employer name and date published must match the resume.
- Confirmed with the author up front: keep the existing terminal/code-window visual identity, Tailwind only (no Material UI), and keep a refreshed Projects section.

## Goals / Non-Goals

**Goals:**

- Vite + TypeScript strict as the build and language baseline, with the existing absolute-import ergonomics preserved.
- Tailwind as the only styling mechanism, with the current visual identity ported rather than reinvented.
- One typed content module (`src/data/portfolio.ts`) that every section reads from, so a resume update is a one-file edit.
- A thin component layer that removes the real duplication in this codebase: terminal chrome, social icons, badges, cards, section headings, motion variants.
- Content that presents senior Fullstack positioning: Fullstack tagline, About, TechStack, a four-role timeline.
- Lighthouse Accessibility >= 95 and Performance >= 90 on mobile, with reduced-motion honored.

**Non-Goals:**

- No global state library. Zustand is listed as a *skill* in the tech stack but is not installed — the site is static content with at most local component state.
- No Material UI. Nothing in the current code depends on it, and its bundle cost works directly against the Performance goal.
- No test suite. Verification for this change is typecheck, lint, build, a Lighthouse run, and manual responsive checks. Adding tests to a static content site is deliberately deferred.
- No CMS, blog, dark-mode toggle, or analytics.
- ~~No i18n.~~ **Superseded 2026-10-08:** the author asked for English + Brazilian
  Portuguese with a flag switch. See `specs/internationalization/spec.md` and the
  decision below.
- No visual redesign beyond refinement of the existing identity.
- No Next.js / SSR. GitHub Pages is static hosting and the content is tiny.

## Decisions

### Vite over keeping CRA or moving to Next.js

CRA is unmaintained and `react-scripts` drags in a large, outdated dependency tree; leaving it in place undercuts the whole point of the change, since the repo is itself a portfolio artifact. Next.js was considered and rejected: static export to a GitHub Pages sub-path adds `basePath`/`assetPrefix` and image-loader friction for a site with no routes and no data fetching. Vite gives the fastest path from CRA, needs one `base` setting for the sub-path, and its config is short enough to read at a glance.

### Full TypeScript conversion, not incremental `allowJs`

Strict mode is the stated goal, and an `allowJs` halfway state would leave the untyped files as the ones a reviewer opens first. The source tree is five sections and roughly a dozen files — small enough to convert in one pass. `strict: true` with no per-rule escape hatches; `tsconfig.json` replaces `jsconfig.json`, and `paths` is mirrored by `resolve.alias` in `vite.config.ts` so the editor and the bundler agree.

### Tailwind replacing Sass entirely, with tokens in the theme

Mixing Tailwind with the existing Sass would give two competing sources of truth for spacing and color. The six real color variables and the Poppins/Fira font pairs move into `tailwind.config.ts` as named tokens (`black`, `dark-grey`, `grey`, `white`, `purple`, `accent-green`); the broken mixins referencing undefined `$neutral`/`$primary`/`rubikBold` are deleted rather than ported.

The terminal-window chrome, the blue glow, and the SVG tech-pattern background are the pieces that do not decompose into utilities. Those live as a small number of `@layer components` classes and CSS custom properties in the single Tailwind entry stylesheet — one place to look when the signature effects regress, which is the most likely regression in this change.

### Extract primitives only where duplication is already real

The component layer is scoped to patterns that exist more than once in the current code, not to a speculative design system:

| Primitive | Replaces |
| --- | --- |
| `TerminalWindow` | sphere + title-bar markup duplicated in `Hero.js` and `Experience.js` |
| `SocialIcon` / icon module | eight inline SVG copies across `Header.js` and `Contact.js` |
| `Badge` | tech tags needed by both TechStack and Projects |
| `Card` | project and experience entries |
| `Section` | section heading + id + landmark, needed by all six content sections |

### Content as a typed module, not JSON or MDX

`src/data/portfolio.ts` exports typed objects with `as const` where ordering matters. TypeScript then enforces shape at build time — a missing role date or a renamed field fails `npm run typecheck` rather than rendering `undefined` to a public page. JSON would lose that; MDX would add a dependency for prose that is a handful of paragraphs.

### Local typewriter hook instead of `react-simple-typewriter`

The package provides one effect, has no reduced-motion support, and its looping animation is exactly what a reduced-motion user needs suppressed. A roughly 25-line `useTypewriter` hook reading `matchMedia("(prefers-reduced-motion: reduce)")` is less code than the integration and satisfies the accessibility requirement directly.

### framer-motion stays

It is already the animation vocabulary and is kept rather than hand-rolling scroll reveals. The change is in how it is used: a few named shared variants replace the inline `initial`/`whileInView`/`transition` objects currently repeated at nearly every section. Its tree-shaken footprint is acceptable against the Performance target; if the Lighthouse Performance budget misses because of it, the fallback is a CSS-only IntersectionObserver reveal.

### Asset cleanup as part of the migration

`src/assets/images/icons/` holds four to five redundant variants of each social icon (`gitHub.png`, `Github-30.png`, `Github-96.png`, `github-48.svg`, `github-96.svg`). Once icons are inline SVG in one module, all of these become unreferenced. They are deleted in the same pass — unused files in `src/assets` are a code-review smell even when a bundler excludes them.

### No tests, stated plainly

There is no existing test to port and this change does not add a suite. The acceptance gate is: `npm run typecheck`, `npm run lint`, `npm run build` all clean; a Lighthouse mobile run meeting the budget; and manual verification at 320px, tablet, and desktop with reduced-motion both on and off. This is a conscious trade-off for a static content site, not an oversight.

### i18n without an i18n library

`react-i18next` and friends are built around flat key→string catalogues. The
content here is structured typed data — arrays of roles, projects and tech
groups — and flattening it into `experience.roles.0.focus` keys would lose the
type safety that makes `portfolio.ts` worth having, in exchange for pluralisation
and interpolation machinery this site never uses.

Instead the data is split by what varies: `data/shared.ts` holds everything
identical across locales (URLs, images, dates, company and technology names) and
`data/locales/*` holds the prose, keyed by the same ids. `LocaleContent` types
those as `Record<RoleId, …>`, so adding a role without translating it fails
`npm run typecheck`. A React context does the rest; no dependency was added.

The main trap this avoids is duplication of invariant data: a project URL or a
start year copied into two locale files is one that will eventually disagree
with itself.

### Language names are not translated

The switch reads "EN — English" and "PT — Português" in both locales, rather
than "PT — Portuguese" when the page is in English. Naming a language in itself
is the convention for language pickers: someone looking for Portuguese may not
read the current language. The visible code is also part of the accessible name,
so voice control ("click EN") works — Lighthouse flagged the first version,
where an `aria-label` replaced the visible text entirely.

## Risks / Trade-offs

- **Dropping Sass touches every visual surface at once; the terminal window and glow are the likeliest regressions.** -> Those effects are consolidated into one component plus one stylesheet layer before any section is rewritten, and each section is visually compared against the current deployed site as it is converted.
- **A big-bang rewrite of all five sections could leave the site broken mid-change with no tests to catch it.** -> Work bottom-up: tooling, then tokens, then primitives, then one section at a time, keeping `npm run dev` green after each section rather than converting everything then debugging.
- **The sub-path base is easy to get wrong and fails only in production, not in `npm run dev`.** -> Verify with `npm run preview` against the built output and inspect asset URLs in `dist/index.html` before deploying; the previous `gh-pages` deployment stays live until the new build is confirmed.
- **Performance >= 90 with framer-motion, Poppins + Fira Sans, and four project screenshots is not free.** -> Self-host and subset the two fonts with `font-display: swap`, lazy-load project images with explicit dimensions, and compress the screenshots. Fallback if the budget still misses: drop framer-motion for CSS reveals.
- **The Voalle role is recorded in the brief as "2024 - 2026", and 2026 is the current year.** -> Published as "2024 — Present"; flagged as an open question below, and must be confirmed before the site goes live since it is a factual claim about current employment.
- **Removing the YouTube, Instagram, and WhatsApp links is a content decision, not just cleanup.** -> They are dropped because the brief's contact list names only email, LinkedIn, and location; the icons remain available in the icon module if any is restored.
- **Listing Zustand and Material UI as skills while not installing them could read as inconsistent to a reviewer who opens `package.json`.** -> Accepted. A tech-stack section describes competence, not this repository's dependency list, and installing unused libraries to make the list literal would be the worse signal.

## Migration Plan

1. **Tooling swap, existing UI untouched.** Add `vite`, `@vitejs/plugin-react`, `typescript`, `tailwindcss`, `postcss`, `autoprefixer`, types, and ESLint. Add `index.html`, `vite.config.ts` (with `base: "/new-portfolio/"` and aliases), `tsconfig.json` (strict, `paths` mirroring the aliases), Tailwind and PostCSS configs. Remove `react-scripts`, `jsconfig.json`, `@testing-library/*`, `web-vitals`. Rewrite scripts to `dev`/`build`/`preview`/`typecheck`/`lint`, and retarget `deploy` from `build/` to `dist/`. Confirm `npm run dev` still renders the old Sass site.
2. **Tokens and primitives.** Port colors, fonts, and the signature effects into the Tailwind theme and entry stylesheet. Build `Section`, `TerminalWindow`, `Badge`, `Card`, the icon module, the shared motion variants, and `useTypewriter`.
3. **Content module.** Write `src/data/portfolio.ts` with its exported types, covering profile, about, tech stack, experience, projects, and contact.
4. **Section-by-section conversion.** Convert in page order — Header, Hero, About, TechStack, Experience, Projects, Contact — deleting each section's `.scss` and `index.js` barrel as it lands, keeping `npm run dev` green throughout.
5. **Cleanup.** Delete `App.css`, `index.css`, `src/assets/sass/`, `Popups/`, and the unreferenced icon and screenshot assets. Remove `sass` and `react-simple-typewriter`.
6. **Verify.** `typecheck`, `lint`, `build`, `preview`; Lighthouse mobile against the preview; manual pass at 320px / tablet / desktop with reduced motion on and off; confirm every `target="_blank"` carries `rel="noreferrer"` and every nav anchor resolves.
7. **Deploy.** `npm run deploy`, then load the live GitHub Pages URL and confirm assets resolve under `/new-portfolio/`.

**Rollback:** the change lands on the `1-update-and-refactor-portflio` branch; `main` and the currently published `gh-pages` build remain untouched until step 7 succeeds. Rollback is re-deploying from the previous commit.

## Open Questions

1. **Is the Voalle Technology role still current?** The brief says "2024 - 2026" and today is October 2026. Published as "2024 — Present" pending confirmation — the one factual claim in this change that cannot be settled from the codebase.
2. **Which projects survive the curation?** The current four are `space-tours`, `calculadora`, `admin-dashboard`, and `trigan-website` — frontend exercises that sit awkwardly under a Fullstack, integrations-and-architecture positioning. Author to confirm which to keep and whether any backend or integration work (necessarily described without a public demo) should replace them.
3. **Should a resume PDF download be offered in Hero or Contact?** Not in the brief; cheap to add, and expected on a senior portfolio.
4. **Self-host the fonts or keep Google Fonts?** Plan assumes self-hosted and subset for the Performance budget; a hosted link is simpler if the budget is met either way.
