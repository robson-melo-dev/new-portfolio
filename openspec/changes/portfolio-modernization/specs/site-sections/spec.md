## ADDED Requirements

### Requirement: Page composition and order
The page SHALL render, in order: Header, Hero, About, TechStack, Experience, Projects, Contact. Each section SHALL live under `src/sections/<Name>/` and read its content from the `portfolio` data module.

#### Scenario: All seven regions render
- **WHEN** the page loads
- **THEN** all seven regions are present in the document in the order above

#### Scenario: Dead components are removed
- **WHEN** the source tree is inspected
- **THEN** the `Popups/Building` component and its commented-out usage in the app root no longer exist

### Requirement: Header navigation
The Header SHALL provide in-page anchors to About, Tech Stack, Experience, Projects, and Contact, plus the maintained social links.

#### Scenario: Anchor scrolls to its section
- **WHEN** a user activates the "Experience" nav link
- **THEN** the viewport moves to the Experience section, whose element id matches the anchor target

#### Scenario: Every anchor has a target
- **WHEN** the Header nav links are enumerated
- **THEN** each href fragment corresponds to an id that exists in the rendered document

#### Scenario: Header is usable on mobile
- **WHEN** the Header is viewed at 320px width
- **THEN** its navigation and social links remain reachable without horizontal scrolling

### Requirement: Hero section
The Hero SHALL present the name, the Fullstack tagline, and a terminal-window summary built from the shared primitive.

#### Scenario: Hero reflects current positioning
- **WHEN** the Hero renders
- **THEN** it shows "Robson Melo de Souza" and the Fullstack tagline from profile data

#### Scenario: Typewriter effect without the third-party package
- **WHEN** the Hero animated text runs
- **THEN** the effect is produced by local code
- **AND** `react-simple-typewriter` is absent from `package.json`

#### Scenario: Animated text respects reduced motion
- **WHEN** the user has `prefers-reduced-motion: reduce` set
- **THEN** the Hero shows the final text statically without the typing animation

### Requirement: About section
The About section SHALL be newly added and render the About narrative from content data.

#### Scenario: About section exists and is linkable
- **WHEN** the page loads
- **THEN** an About section is present with an id that the Header About anchor targets

### Requirement: TechStack section
The TechStack section SHALL be newly added and render each stack group as a labeled cluster of badges.

#### Scenario: Groups render as labeled clusters
- **WHEN** the TechStack section renders
- **THEN** each group from the data appears with its label and its items as badges

#### Scenario: Hero no longer carries the skills list
- **WHEN** the Hero renders
- **THEN** it does not contain the former hardcoded "JavaScript, TypeScript, React, NextJS, Sass, CSS, BEM, Tailwind, GraphQL" string

### Requirement: Experience section
The Experience section SHALL render the four roles as a reverse-chronological timeline, each showing employer, role title, date range, and focus.

#### Scenario: Timeline renders every role
- **WHEN** the Experience section renders
- **THEN** one timeline entry exists per role in the experience data, in reverse-chronological order

#### Scenario: Mapped entries have stable keys
- **WHEN** the experience and project lists are rendered
- **THEN** each mapped element carries a unique `key`
- **AND** the browser console reports no missing-key warning

### Requirement: Projects section
The Projects section SHALL render the curated project list using the shared card and badge primitives.

#### Scenario: Each project shows its substance
- **WHEN** a project card renders
- **THEN** it shows the title, description, and tech tags from its data entry

#### Scenario: Project images do not block render
- **WHEN** the Projects section is below the fold on load
- **THEN** its images are lazy-loaded and declare intrinsic dimensions

### Requirement: Contact section
The Contact section SHALL render the email as a mailto link, the LinkedIn profile link, and the location.

#### Scenario: Email is actionable
- **WHEN** a user activates the email link
- **THEN** it opens a mailto to sys.robson@gmail.com

#### Scenario: External links are safe
- **WHEN** any link with `target="_blank"` is rendered anywhere on the page
- **THEN** it also carries `rel="noreferrer"`
