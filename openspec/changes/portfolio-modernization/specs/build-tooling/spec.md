## ADDED Requirements

### Requirement: Vite build pipeline
The project SHALL be built and served by Vite with the React plugin. `react-scripts` SHALL NOT be a dependency, and the npm scripts SHALL expose `dev`, `build`, `preview`, `typecheck`, and `lint`.

#### Scenario: Developer starts the dev server
- **WHEN** a developer runs `npm run dev` on a clean clone after `npm install`
- **THEN** Vite serves the site locally and reports a local URL
- **AND** editing a section file updates the browser without a full reload

#### Scenario: Production build succeeds
- **WHEN** a developer runs `npm run build`
- **THEN** the build completes with exit code 0 and emits static assets into `dist/`
- **AND** no reference to `react-scripts` remains in `package.json`

### Requirement: TypeScript strict mode
All application source SHALL be TypeScript (`.ts`/`.tsx`) and SHALL compile under `strict: true`. `jsconfig.json` SHALL be replaced by `tsconfig.json`.

#### Scenario: Typecheck passes with no implicit any
- **WHEN** a developer runs `npm run typecheck`
- **THEN** the command exits 0 with zero errors
- **AND** `tsconfig.json` has `"strict": true` with no per-rule opt-outs disabling `noImplicitAny` or `strictNullChecks`

#### Scenario: No JavaScript source files remain
- **WHEN** the `src/` tree is inspected after the migration
- **THEN** no `.js` or `.jsx` file exists under `src/`

### Requirement: Absolute import aliases
The project SHALL preserve the existing root-relative import style (`sections/Hero`, `assets/images/...`) so that imports do not degrade into relative `../../` chains.

#### Scenario: Alias resolves in both build and editor
- **WHEN** a module imports `data/portfolio`
- **THEN** `npm run build` resolves it successfully
- **AND** `npm run typecheck` resolves it successfully via matching `tsconfig.json` `paths` and `vite.config.ts` `resolve.alias` entries

### Requirement: GitHub Pages deployment at a sub-path
The site SHALL continue to be publishable to GitHub Pages at `https://robson-melo-dev.github.io/new-portfolio/`.

#### Scenario: Built assets resolve under the sub-path
- **WHEN** `npm run build` runs with `base` configured as `/new-portfolio/`
- **THEN** every asset URL in the emitted `dist/index.html` is prefixed with `/new-portfolio/`

#### Scenario: Deploy script targets the Vite output directory
- **WHEN** `npm run deploy` runs
- **THEN** it publishes `dist/` and not the former `build/` directory

### Requirement: Lint gate
The project SHALL provide an ESLint configuration covering TypeScript and React hooks rules.

#### Scenario: Lint runs clean
- **WHEN** a developer runs `npm run lint`
- **THEN** the command exits 0 with no errors
