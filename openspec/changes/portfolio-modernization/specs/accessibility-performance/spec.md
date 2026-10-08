## ADDED Requirements

### Requirement: Semantic document structure
The page SHALL use semantic landmarks and a correct heading hierarchy. Section titles currently rendered as div or p elements SHALL become real headings.

#### Scenario: Landmarks are present
- **WHEN** the rendered document is inspected
- **THEN** navigation is in a `nav`, primary content is in a `main`, and each page section is a `section` with an accessible name

#### Scenario: Heading hierarchy is sound
- **WHEN** headings are enumerated in document order
- **THEN** exactly one `h1` exists
- **AND** no heading level is skipped

### Requirement: Keyboard and screen-reader operability
Every interactive element SHALL be reachable and operable by keyboard with a visible focus indicator, and SHALL expose an accessible name.

#### Scenario: Tab order reaches every control
- **WHEN** a user tabs from the top of the page to the bottom
- **THEN** every link and control receives focus in visual order with a visible focus style

#### Scenario: Icon-only links are named
- **WHEN** a screen reader encounters an icon-only social link
- **THEN** it announces the destination rather than an empty or generic label

#### Scenario: Images are described
- **WHEN** any image is rendered
- **THEN** it has an `alt` attribute that describes it, or an empty `alt` if it is purely decorative

### Requirement: Reduced motion support
All scroll-reveal and looping animations SHALL be suppressed when the user requests reduced motion.

#### Scenario: Animations stop under reduced motion
- **WHEN** `prefers-reduced-motion: reduce` is set and the page loads
- **THEN** content is rendered in its final state with no entrance, typing, or looping animation

### Requirement: Color contrast
Text and meaningful UI SHALL meet WCAG 2.1 AA contrast against their background.

#### Scenario: Body and heading text pass AA
- **WHEN** contrast is measured for each text style against its background
- **THEN** body text meets at least 4.5:1 and large text at least 3:1

### Requirement: Lighthouse budget
A production build served statically SHALL score at least 95 in Lighthouse Accessibility and at least 90 in Performance on mobile emulation.

#### Scenario: Audit meets the budget
- **WHEN** Lighthouse is run against `npm run preview` of a production build using the mobile preset
- **THEN** Accessibility is at least 95 and Performance is at least 90
- **AND** the audit reports no errors in the browser console

#### Scenario: Fonts and images do not stall first paint
- **WHEN** the production build loads on a throttled mobile connection
- **THEN** web fonts load without blocking text rendering
- **AND** unused image assets are not shipped in the bundle
