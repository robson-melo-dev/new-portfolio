# Portfolio — Robson Melo de Souza

Personal portfolio: Fullstack Developer, focused on complex integrations, ERPs and
scalable architectures.

Live: <https://robson-melo-dev.github.io/new-portfolio/>

## Stack

- **Vite** — build and dev server
- **React 19** + **TypeScript** (`strict`)
- **Tailwind CSS** — design tokens live in `tailwind.config.ts`
- **framer-motion** — scroll reveals, via shared variants in `src/lib/motion.ts`

No global state library and no component framework: the site is static content,
so React's local state is enough.

## Commands

```bash
npm install
npm run dev        # dev server with HMR
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # typecheck, then build to dist/
npm run preview    # serve the production build locally
npm run deploy     # publish dist/ to GitHub Pages
```

`vite.config.ts` sets `base: "/new-portfolio/"` because the site is served from a
GitHub Pages sub-path. Asset URLs only resolve correctly in `preview` and in
production — not under a plain static server at the domain root.

## Layout

```
src/
  data/
    shared.ts         Locale-invariant: ids, URLs, images, dates, tech names
    locales/en.ts     English copy
    locales/pt-BR.ts  Brazilian Portuguese copy
    locales/types.ts  The shape both locales must satisfy
    portfolio.ts      Merges shared + locale into what components render
  i18n/               Locale context, browser detection, localStorage
  components/         Reusable primitives (Section, TerminalWindow, Badge, Card, icons)
  sections/           Page sections (Header, Hero, About, TechStack, Experience, Projects, Contact)
  hooks/              useTypewriter, usePrefersReducedMotion, useHeaderOffset
  lib/motion.ts       Shared framer-motion variants
  index.css           Tailwind entry + the signature terminal/glow styles
```

Components hold no copy, links, or dates — they read everything from
`useContent()`.

## Updating content

Anything that is **the same in both languages** — a URL, an image, a date, a
company name, a technology name — lives in `src/data/shared.ts`, once.

Anything that is **prose** lives in `src/data/locales/en.ts` and
`src/data/locales/pt-BR.ts`.

`locales/types.ts` keys roles, projects, tech groups and social links by id, so
adding an entry fails `npm run typecheck` until every locale has copy for it. A
half-translated page cannot reach the build.

## Internationalisation

English and Brazilian Portuguese, toggled by the flag control in the header.

- First visit follows the browser: any `pt*` in `navigator.languages` gives
  Portuguese, otherwise English.
- Changing it saves to `localStorage` under `portfolio:locale`, and that
  preference wins over the browser on later visits. Every storage access is
  wrapped — private modes throw.
- Switching also updates `<html lang>`, `<title>` and the meta description.

## Accessibility

Semantic landmarks and heading order, keyboard-reachable controls with visible
focus, accessible names on icon-only links, and a global
`prefers-reduced-motion` guard in `src/index.css` that suppresses every
animation — including the hero typewriter, which returns its text statically.

## Planning

Change artifacts live under `openspec/changes/`.
