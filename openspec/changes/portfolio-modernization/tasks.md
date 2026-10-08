## 1. Tooling swap (Vite + TypeScript + Tailwind)

- [x] 1.1 Install build deps: `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`, `tailwindcss`, `postcss`, `autoprefixer`
- [x] 1.2 Install lint deps — **done as** `eslint@9` + the unified `typescript-eslint` package (the separate `@typescript-eslint/*` v8 packages require ESLint 9 anyway, and `eslint-plugin-react-refresh` peer-requires it), plus `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`, `globals`
- [x] 1.3 Remove `react-scripts`, `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event`, `web-vitals` from `package.json`
- [x] 1.4 Create root `index.html` with the Vite module script entry and a `<div id="root">`
- [x] 1.5 Create `vite.config.ts` with the React plugin, `base: "/new-portfolio/"`, and `resolve.alias` for `sections`, `components`, `data`, `assets`, `hooks`
- [x] 1.6 Replace `jsconfig.json` with `tsconfig.json`: `strict: true`, `jsx: react-jsx`, `baseUrl: "./src"`, and `paths` mirroring the Vite aliases exactly
- [x] 1.7 Create `tailwind.config.ts` with `content` globs covering `index.html` and `src/**/*.{ts,tsx}`, and `postcss.config.js`
- [x] 1.8 Add ESLint config covering TypeScript, react-hooks, and jsx-a11y — **done as** `eslint.config.js` (flat config), not `.eslintrc.cjs`: ESLint 9 requires flat config
- [x] 1.9 Rewrite `package.json` scripts: `dev`, `build` (typecheck then vite build), `preview`, `typecheck`, `lint`; retarget `predeploy`/`deploy` from `build/` to `dist/`
- [x] 1.10 Convert `src/index.js` to `src/main.tsx` and `src/App.js` to `src/App.tsx`, dropping the commented-out `Building` usage — **deviation:** the intermediate "old Sass site still renders" check was skipped, because `sass` was uninstalled in 1.3 before the entry points were converted. Verified against the finished build instead (group 8)

## 2. Design tokens and base stylesheet

- [x] 2.1 Create the single Tailwind entry stylesheet (`src/index.css`) with the `@tailwind` directives, imported from `main.tsx`
- [x] 2.2 Port the six colors from `_colors.scss` into the Tailwind theme as `black`, `dark-grey`, `grey`, `white`, `purple`, `accent-green`
- [x] 2.3 Port the Poppins and Fira Sans families from `_fonts.scss` into `theme.fontFamily` — **done as** Google Fonts with `display=swap`, `preconnect`, and a non-blocking `preload`+`onload` link rather than self-hosted files (open question 4). Mobile Performance is 98 with FCP 1.8s, so self-hosting was not needed to meet the budget
- [x] 2.4 Port the signature effects into `@layer components` / CSS custom properties: terminal-window chrome, blue glow, and the SVG tech-pattern background from `_generalMixins.scss`
- [x] 2.5 Port the `slide`, `highLight`, and `fade` keyframes from `_animations.scss` into the Tailwind theme; drop the mixins referencing the undefined `$neutral`, `$primary`, and `rubikBold`
- [x] 2.6 Add the global reduced-motion guard that disables transitions and animations under `prefers-reduced-motion: reduce`

## 3. Content module

- [x] 3.1 Create `src/data/portfolio.ts` with exported types for profile, about, tech-stack group, experience role, project, and contact
- [x] 3.2 Add profile data: name "Robson Melo de Souza", tagline "Fullstack Developer | Complex Integrations, ERPs, and Scalable Architectures", location "Santa Maria/RS, Brazil"
- [x] 3.3 Add the About narrative covering AgTech and Telecom domain expertise, RabbitMQ asynchronous processing, Lotus Web Systems solopreneurship, and USA/Scotland international experience
- [x] 3.4 Add the four tech-stack groups: Backend (Node.js, .NET/C#, Microservices, RabbitMQ, Docker, REST API), Frontend (React, TypeScript, Zustand, Tailwind CSS, Material UI), Databases (PostgreSQL, MongoDB), Innovation/AI (Claude Code, OpenSpec, Prompt Engineering)
- [x] 3.5 Add the four experience roles in reverse-chronological order: Voalle Fullstack (2024 — Present), Lotus Web Systems Solopreneur (2023 — Present), Voalle Frontend (2022 — 2023), TriganDAO Frontend (2022); delete `src/sections/Experience/experiences.js`
- [x] 3.6 Add the curated projects data with title, description, tech tags, image, and optional live/source links; omit link fields rather than using placeholders
- [x] 3.7 Add contact data: `sys.robson@gmail.com`, `https://www.linkedin.com/in/robsonthedev/`, location, and GitHub; exclude YouTube, Instagram, and WhatsApp

## 4. Component primitives

- [x] 4.1 Create `src/components/Section.tsx`: semantic `<section>` with `id`, accessible name, and consistent heading
- [x] 4.2 Create `src/components/TerminalWindow.tsx`: title bar with the three traffic-light spheres plus a children body
- [x] 4.3 Create `src/components/icons/` with each social SVG defined exactly once, and a `SocialIcon` link wrapper that sets the accessible name and marks the SVG `aria-hidden`
- [x] 4.4 Create `src/components/Badge.tsx` for tech tags, used by both TechStack and Projects
- [x] 4.5 Create `src/components/Card.tsx` for project and experience entries
- [x] 4.6 Create `src/lib/motion.ts` exporting the named shared framer-motion variants (fade, slide-from-left, slide-from-right, rise) that replace the inline motion objects
- [x] 4.7 Create `src/hooks/useTypewriter.ts` that returns the final text immediately when `prefers-reduced-motion: reduce` is set; remove `react-simple-typewriter` from `package.json`

## 5. Section conversion

- [x] 5.1 Convert `Header` to `.tsx`: `<nav>`, anchors for About / Tech Stack / Experience / Projects / Contact, social links via `SocialIcon`, `rel="noreferrer"` on every `target="_blank"`, usable at 320px; delete `Header.scss` and `Header/index.js`
- [x] 5.2 Convert `Hero` to `.tsx`: name and Fullstack tagline from profile data, `TerminalWindow` summary, `useTypewriter` for the animated text, hardcoded skills string removed; delete `Hero.scss` and `Hero/index.js`
- [x] 5.3 Create `src/sections/About/About.tsx` rendering the About narrative, with an `id` matching the Header anchor
- [x] 5.4 Create `src/sections/TechStack/TechStack.tsx` rendering each group as a labeled cluster of `Badge`s
- [x] 5.5 Convert `Experience` to `.tsx` as a reverse-chronological timeline showing employer, role, date range, and focus, with unique `key` per entry and both ongoing roles labeled "Present"; delete `Experience.scss` and `Experience/index.js`
- [x] 5.6 Convert `Projects` to `.tsx` using `Card` and `Badge`, with `loading="lazy"`, explicit `width`/`height`, and descriptive `alt` on every image; delete `Projects.scss`, `ProjectsList.js`, and `Projects/index.js`
- [x] 5.7 Convert `Contact` to `.tsx`: `mailto:` email link, LinkedIn link, location, and no link to a destination absent from contact data; delete `Contact.scss` and `Contact/index.js`
- [x] 5.8 Wire the final order in `App.tsx` — Header, Hero, About, TechStack, Experience, Projects, Contact — with content sections inside a `<main>`

## 6. Accessibility pass

- [x] 6.1 Audit the heading hierarchy: exactly one `<h1>` in Hero, no skipped levels across sections
- [x] 6.2 Verify `<nav>`, `<main>`, and per-section accessible names are present in the rendered DOM
- [x] 6.3 Tab through the whole page and confirm every link has a visible focus indicator in visual order
- [x] 6.4 Verify every icon-only link announces its destination, and every image has a descriptive or intentionally empty `alt`
- [x] 6.5 Load with `prefers-reduced-motion: reduce` and confirm no entrance, typing, or looping animation runs
- [x] 6.6 Measure contrast for each text style against its background; fix any pair below 4.5:1 (3:1 for large text)
- [x] 6.7 Grep the source and confirm every `target="_blank"` carries `rel="noreferrer"`, and that every nav anchor fragment resolves to an existing `id`

## 7. Cleanup

- [x] 7.1 Delete `src/App.css`, `src/App.scss`, and the former `src/index.css` Sass entry; remove `sass` from `package.json`
- [x] 7.2 Delete `src/assets/sass/` entirely
- [x] 7.3 Delete `src/sections/Popups/` (`Building.js`, `Popup.scss`, `index.js`)
- [x] 7.4 Delete the unreferenced icon variants in `src/assets/images/icons/` (whole directory, plus `mail.png`/`youtube.png`) — **kept:** `foto-perfil-no-background.png`, `lotus-logo-horizontal.png`, `trigan-logo.png`, which are unreferenced but may be wanted (profile photo, company logos). Vite only bundles imported assets, so none ship
- [x] 7.5 Confirm no `.js`, `.jsx`, or `.scss` file remains under `src/`, and that no user-visible string, employer, date, email, or external URL is hardcoded in a component
- [x] 7.6 Update `README.md` for the new stack and the `dev`/`build`/`preview`/`deploy` commands

## 8. Verify and deploy

- [x] 8.1 Run `npm run typecheck` and `npm run lint`; both must exit 0
- [x] 8.2 Run `npm run build` and confirm `dist/index.html` prefixes every asset URL with `/new-portfolio/`
- [x] 8.3 Run `npm run preview` and verify the site loads with an empty browser console
- [x] 8.4 Run Lighthouse against the preview on the mobile preset; confirm Accessibility >= 95 and Performance >= 90, and iterate on fonts/images if the budget misses
- [x] 8.5 Manually verify layout at 320px, tablet, and desktop with no horizontal overflow and no clipped or overlapping text
- [ ] 8.6 Resolve the open questions with the author before publishing: Voalle role end date, project curation, resume PDF. (~~Font hosting~~ settled in 12.4 — self-hosted.)
- [ ] 8.7 Run `npm run deploy` and confirm the live GitHub Pages URL renders with all assets resolving

## 9. Verification record (2026-10-08)

- [x] 9.1 `npm run typecheck` — clean
- [x] 9.2 `npm run lint` — clean, 0 errors 0 warnings
- [x] 9.3 `npm run build` — succeeds; `dist/index.html` prefixes every local asset with `/new-portfolio/`
- [x] 9.4 Lighthouse mobile vs `npm run preview`: **Performance 98, Accessibility 100, Best Practices 100, SEO 100** (FCP 1.8s, LCP 2.0s, TBT 10ms, CLS 0.008). Desktop: 99 / 100 / 100 / 100
- [x] 9.5 Rendered-DOM audit: 1 `<h1>`, no skipped heading levels, `<nav>` + `<main>` + 6 named `<section>`s, 10 `target="_blank"` links all with `rel="noreferrer"`, 4 images all with `alt`, no dead anchors, no unnamed links
- [x] 9.6 Contrast measured on every distinct text style: 0 failures, lowest 5.6:1. Fixed two found failures — `#7000ff` body text at 2.49:1 (added a `purple-light` token for text) and the footer line at 4.31:1
- [x] 9.7 Reduced motion: content renders at `opacity: 1` / `transform: none` with no scroll dependency; typewriter static, caret absent
- [x] 9.8 320px / 768px / 1440px: no horizontal scroll, all five nav anchors land clear of the sticky header, browser console clean

### Bugs found and fixed during verification

1. **framer-motion ignored reduced motion.** The CSS `prefers-reduced-motion` guard cannot reach it, because framer-motion drives opacity and transform from JS. Content stayed at `opacity: 0`, translated 48px, until scrolled into view. Fixed with a `useReveal()` hook in `src/lib/motion.ts` that mounts elements already visible under reduced motion.
2. **Sticky header was not sticking.** `overflow-x: hidden` on the app wrapper made it the scroll container. Changed to `overflow-x: clip`, which clips without creating one — so the glows stay clipped and the header sticks.
3. **Anchor targets landed under the sticky header** at tablet width, where the header wraps to 124px. `scroll-padding-top` raised to 9.5rem, dropping to 6.5rem at 1024px.
4. **`aria-label` on a `<p>`** (prohibited ARIA attribute, Lighthouse a11y 95). Replaced with an `sr-only` span carrying the full tagline; the cycling text is now `aria-hidden`. A11y went to 100.
5. **Render-blocking font stylesheet** held mobile Performance at exactly 90. Made non-blocking; Performance went to 98.
6. **Ambient glow washed out the page** at full opacity, threatening contrast. Reduced to 0.22 opacity and shrunk.

## 10. Internationalisation (added 2026-10-08, at the author's request)

- [x] 10.1 Split content into `src/data/shared.ts` (locale-invariant ids, URLs, images, dates, tech names) and `src/data/locales/{en,pt-BR}.ts` (prose)
- [x] 10.2 Define `LocaleContent` in `src/data/locales/types.ts`, keying roles, projects, tech groups and social links by id so a missing translation fails `npm run typecheck`
- [x] 10.3 Rewrite `src/data/portfolio.ts` as a `getContent(locale)` merge of shared + locale data, preserving the shape sections already consumed
- [x] 10.4 Write the full Brazilian Portuguese copy: profile, about, tech-stack labels, four roles, four projects, contact, nav, meta
- [x] 10.5 Add `src/i18n/storage.ts` — browser detection (any `pt*` → pt-BR), `localStorage` read/write under `portfolio:locale`, every access in try/catch
- [x] 10.6 Add `src/i18n/context.ts` and `LocaleProvider.tsx`; provider syncs `<html lang>`, `document.title` and the meta description
- [x] 10.7 Add inline US and Brazil flag SVGs (`components/icons/flags.tsx`) — emoji flags render as bare letters on Windows
- [x] 10.8 Add `components/LocaleSwitch.tsx`: grouped buttons with `aria-pressed`, flag + language code, each option named in its own language
- [x] 10.9 Convert all seven sections from static imports to `useContent()`
- [x] 10.10 Reset the typewriter when the word list changes, so a locale switch does not slice into the wrong word
- [x] 10.11 Add `hooks/useHeaderOffset.ts` — publishes the measured header height as `--header-height` for `scroll-padding-top`, since the header wraps differently per width *and* locale
- [x] 10.12 Hide the header's social links below `sm` — they duplicate the Contact section and kept the sticky header at three rows on a 320px phone

## 11. i18n verification record (2026-10-08)

- [x] 11.1 `npm run typecheck`, `npm run lint`, `npm run build` — all clean
- [x] 11.2 Browser detection: Chrome at `navigator.languages = ["pt-BR","pt","en-US","en"]` with empty storage renders pt-BR, `lang="pt-BR"`, Portuguese title and meta
- [x] 11.3 Switching writes `portfolio:locale`; after reload the stored `en` wins over the pt-BR browser
- [x] 11.4 Clearing the key and reloading falls back to browser detection (pt-BR)
- [x] 11.5 320 / 768 / 1440px, both locales: no horizontal scroll, all five anchors settle 16px below the sticky header (measured offset 143 / 124 / 73px)
- [x] 11.6 Rendered-DOM audit in both locales: 1 `<h1>`, no skipped levels, `<nav>` + `<main>` + 6 named sections, all `target="_blank"` with `rel="noreferrer"`, all images with `alt`, no dead anchors, no unnamed controls
- [x] 11.7 Contrast in both locales: 0 failures, lowest 5.6:1
- [x] 11.8 Reduced motion in both locales: content at `opacity: 1` / `transform: none`, typewriter static, no caret
- [x] 11.9 Typewriter reset verified mid-word: "Back-ends" (pt) → switch → "C" → "Complex Integrations" (en), no mixed text
- [x] 11.10 Lighthouse mobile, browser pt-BR **and** en-US: **Performance 97, Accessibility 100, Best Practices 100, SEO 100**
- [x] 11.11 Browser console clean in both locales

### Bugs found and fixed during i18n verification

1. **Cumulative layout shift 0.008 → 0.112, Performance 98 → 88.** Traced with a `PerformanceObserver` to the hero typewriter: the text is centred on mobile, so every keystroke slid the whole line sideways, and the caret was a separate node re-positioned on each tick. Fixed in two parts — the candidate words are stacked invisibly in one grid cell so the box is sized to the longest (`w-fit mx-auto text-left`), and the caret became a border on the text itself rather than a sibling element. Measured CLS went to exactly 0; Performance recovered to 97.
2. **`label-content-name-mismatch`.** The first switch used `aria-label="Mudar para inglês"` over visible text "EN", so the accessible name did not contain the visible label and voice control could not target it. Replaced with a visible code plus an `sr-only` language name.
3. **`aria-label` on `<nav>` built from the nav item labels** — nonsense as an accessible name. Replaced with a translated "Main navigation" / "Navegação principal".
4. **Sticky header grew to three rows at 320px** once the switch was added, and the static `scroll-padding-top` no longer cleared it. Rather than calibrate a constant across two languages and several widths, the header height is now measured and published as a CSS variable.

### Known residual

- ~~CLS 0.077 with a Portuguese browser, from font swap.~~ **Resolved in section 12** by self-hosting the fonts. CLS is now 0 in both locales.

## 12. Typography and spacing polish (2026-10-08, reported by the author)

Reported: the typewriter text looked blurred on large/maximised windows, and the About section had unnecessary head space on small screens.

- [x] 12.1 Fix the blurred outline text. `-webkit-text-stroke-width` was a fixed `2px` (`4px` above 1900px), inherited from the old design where this text was 48-64px. The typewriter is fluid 16-28px, so a 2px stroke closed the counters of the letters and read as blur — worst exactly where the author noticed it, since the 4px override kicked in on large screens. Now `0.03em`, so the stroke scales with the type, plus `paint-order: stroke fill`
- [x] 12.2 Make section spacing responsive. `py-16` (64px) and `mt-10` (40px) in `Section` were fixed at every width. Now `py-10 sm:py-14 xl2:py-20` and `mt-6 sm:mt-8 xl2:mt-10`; About's heading-to-content gap went 40px -> 24px and its vertical padding 64px -> 40px on a phone
- [x] 12.3 Remove the duplicated highlight list from About. It rendered the same four items (`Domains / Depth / Async / International`) that Hero already shows — verified identical in the DOM. On a phone, where both stack, the same block appeared twice within one scroll. About is now a single column capped at `max-w-3xl` for a readable measure
- [x] 12.4 Self-host Poppins and Fira Sans (latin + latin-ext subsets, 124 KB total) in `public/fonts`, with `@font-face` rules carrying `unicode-range` and the two first-paint faces preloaded. Removes the Google Fonts request chain that was the last source of layout shift

### Verification (2026-10-08)

- [x] 12.5 `npm run typecheck`, `npm run lint`, `npm run build` — all clean; browser console clean
- [x] 12.6 Lighthouse mobile, browser pt-BR **and** en-US: **Performance 98, Accessibility 100, Best Practices 100, SEO 100**, **CLS 0** in both — up from 91/0.111 in Portuguese before the font change
- [x] 12.7 320 / 390 / 768 / 1920px, both locales: no horizontal scroll, no element overflowing the viewport, all five anchors still settle clear of the sticky header
- [x] 12.8 `document.fonts` confirms all four faces load from the local origin; accented Portuguese glyphs (á, ã, ç, í, ó) render in Poppins, not a fallback
- [x] 12.9 About renders zero highlight lists; Hero still renders its four

## 13. Bug: About content vanished on locale switch (2026-10-08, reported by the author)

Reported: "A seção about não aparece o conteúdo ao trocar de idioma."

**Cause.** `About` keyed its paragraphs by their own text (`key={paragraph.slice(0, 32)}`). Switching locale changes every string, so every key changed, so React unmounted and remounted all four `motion.p` elements. They mount into the `hidden` variant (`opacity: 0`, `translateY(48px)`), but their parent's `whileInView` had already fired and — because `useReveal` uses `viewport: { once: true }` — its observer was gone. Nothing ever moved the new children to `visible`, so they stayed invisible. Reproduced before the fix: all four paragraphs at `opacity: 0` with `matrix(1, 0, 0, 1, 0, 48)`.

This was the only instance: it needs a `motion.*` child **with a variant** whose key derives from translated text. A sweep confirmed the other content-derived keys are either technology names (locale-invariant) or plain non-animated elements.

- [x] 13.1 Add `aboutParagraphIds` and `aboutHighlightIds` to `data/shared.ts`
- [x] 13.2 Change `about.paragraphs` and `about.highlights` in `LocaleContent` from arrays to `Record<Id, …>`, so a locale cannot silently carry a different number of paragraphs than the other
- [x] 13.3 Convert both locale files to the keyed shape; `portfolio.ts` builds ordered arrays carrying the id
- [x] 13.4 Key `About`'s paragraphs by `paragraph.id`, and `Hero`'s highlight tiles by `highlight.id` (that one was also keyed by translated text — harmless today because those are plain `<div>`s with no variant, but the same trap)

### Verification (2026-10-08)

- [x] 13.5 Switching back and forth four times with About on screen: all four paragraphs at `opacity: 1`, `transform: none` every time, in both locales
- [x] 13.6 Switch at the top of the page *before* any section has revealed, then scroll the whole page: nothing left hidden. Also the reverse order — scroll everything, then switch at the bottom
- [x] 13.7 Same sweep at 390px, plus switching while parked on About
- [x] 13.8 `npm run typecheck`, `npm run lint`, `npm run build` clean; console clean; Lighthouse mobile pt-BR still 98 / 100 / 100 / 100, CLS 0

### Note for future work

The underlying fragility remains: any `motion.*` child with a variant that remounts inside an already-fired `once: true` parent will be stranded invisible. Stable keys are the guard, and the typed ids now make a content-derived key hard to write by accident.

## 14. Content synced to the resume (2026-10-08)

Source: `~/Documents/Career/Resume en-us.pdf` and `Resume pt-br.pdf`. Each locale now follows its own resume rather than being translated from the other.

**Two conflicts between the PDFs, resolved by the author:** they disagreed on where Lotus Web Systems sits (EN had it with Embrapa in 2023-2024 and an "Independent US Contractor" in 2022-2023; PT had Embrapa alone in 2023-2024 and Lotus as the US company in 2022-2023) — the PT version is correct. And Voalle reads "2024 - 2026" in both with no "current" marker — the author confirmed the role ended, so **no role is ongoing any more** and the "Current" badge no longer renders.

- [x] 14.1 Experience rebuilt: Grupo Voalle (Brazil · Hybrid, 2024-2026) · Embrapa (Brazil · Remote, 2023-2024) · Lotus Web Systems (United States · Remote, 2022-2023) · TriganDAO (Scotland · Remote, 2022). Role ids renamed `lotus-solopreneur` -> `embrapa-solopreneur` and `voalle-frontend` -> `lotus-frontend`
- [x] 14.2 Role descriptions taken verbatim-in-substance from each resume: ISPs/MVNOs/neutral networks, core ERP engine and database architecture, RabbitMQ queuing, the Embrapa bioeconomic pasture simulation tools, the US full-lifecycle work, the TriganDAO funding-cycle startup
- [x] 14.3 Title changed from "Fullstack Developer" to **Full Stack Software Engineer** (EN) / **Desenvolvedor Full Stack** (PT), matching each resume
- [x] 14.4 About rewritten from the resume summary, keeping the Voalle/Embrapa/RabbitMQ narrative
- [x] 14.5 Tech stack expanded to what the resume actually lists: added JavaScript, React Hook Form, Zod, Vite, Git, GitLab, CI/CD; renamed the groups to "Backend & Architecture" and "Tools & Innovation"
- [x] 14.6 Added a languages line to Contact: Portuguese (native) · English (fluent, C2), with a globe icon
- [x] 14.7 Kept `end: null` support in the timeline even though nothing uses it now, so a new role is a one-line data change

### Corrections applied, not reproduced

- The resume text claimed international experience that the entries themselves describe as **remote** work for companies in the US and Scotland. The site previously said "Living and working in the USA and Scotland", which the resume does not support; it now says remote work for those companies, and the highlight tile reads "Remote for · USA · Scotland"
- Typos in the PDFs are fixed in the site copy: EN — "Softare", "Inovative", "especialized", "architetures", "enginering", "efficciency", "Fuent", "Hibrid"; PT — "Fulltstack", "fasei inicial"
- Phone number and home address are in the resume but deliberately **not** published

### Verification (2026-10-08)

- [x] 14.8 `npm run typecheck`, `npm run lint`, `npm run build` clean; console clean
- [x] 14.9 Rendered timeline, tech groups, titles and contact verified in both locales; no "Current"/"Atual" badge anywhere
- [x] 14.10 320px in both locales: nothing overflowing, no horizontal scroll, nothing left hidden after a full scroll (the Frontend group went from 5 to 9 badges)
- [x] 14.11 A11y in both locales: 1 h1, no skipped levels, 6 named sections, all `target="_blank"` with `rel="noreferrer"`, all images with alt, no dead anchors, no unnamed controls; 0 contrast failures, lowest 5.6:1
- [x] 14.12 Lighthouse mobile, browser pt-BR and en-US: **98 / 100 / 100 / 100**, CLS 0 in both

### Still open for the author

- The per-role `stack` tags are **not** in the resume — it lists skills globally. They are inferred from each role's own description and should be reviewed. Explicit in the resume: React/TypeScript/Redux (EN) vs React/Redux/GraphQL (PT) for the Lotus role — the site shows the union; and React/Next.js/Axios for TriganDAO
- Projects section still unchanged from before; the resume does not mention these projects
