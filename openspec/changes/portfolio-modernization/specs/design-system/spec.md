## ADDED Requirements

### Requirement: Tailwind theme carries the ported design tokens
Styling SHALL be driven by Tailwind CSS. The color, font, and animation values currently defined in `src/assets/sass/_colors.scss`, `_fonts.scss`, and `_animations.scss` SHALL be ported into the Tailwind theme as named tokens. No `.scss` file SHALL remain under `src/`, and `sass` SHALL NOT be a dependency.

#### Scenario: Sass is fully removed
- **WHEN** the repository is inspected after the migration
- **THEN** no `.scss` or `.css` file exists under `src/` except the single Tailwind entry stylesheet
- **AND** `sass` is absent from `package.json`

#### Scenario: Colors come from tokens, not literals
- **WHEN** a component needs a brand color
- **THEN** it uses a named Tailwind token
- **AND** no arbitrary hex literal appears in component class names for a color that exists as a token

### Requirement: Terminal window primitive
The "code editor window" chrome -- the three traffic-light spheres and the titled title bar -- currently duplicated in Hero and Experience SHALL be extracted into one reusable component that accepts a title and children.

#### Scenario: Chrome is defined once
- **WHEN** the three traffic-light spheres are rendered anywhere on the page
- **THEN** that markup originates from the single terminal-window component
- **AND** no section file declares its own sphere elements

#### Scenario: Window renders arbitrary content
- **WHEN** the terminal window is given a title and child content
- **THEN** it renders the title bar with the title and the children in the window body

### Requirement: Icon module
Inline SVG social icons SHALL be defined once in a dedicated icon module and referenced by name. The duplicated inline svg blocks in `Header` and `Contact` SHALL be removed.

#### Scenario: Each icon has exactly one definition
- **WHEN** the source is searched for an icon's SVG path data
- **THEN** that path data appears exactly once in the repository

#### Scenario: Icons are accessible
- **WHEN** an icon is rendered inside a link with no visible text
- **THEN** the link exposes an accessible name describing its destination
- **AND** the decorative SVG itself is hidden from assistive technology

### Requirement: Shared UI primitives
The design system SHALL provide reusable primitives for the patterns repeated across sections: a badge for tech-stack and project tags, a card for project and experience entries, and a section wrapper that renders a consistent heading.

#### Scenario: Badges render uniformly
- **WHEN** tech tags are rendered in both TechStack and Projects
- **THEN** both use the same badge component

#### Scenario: Section headings are consistent
- **WHEN** any section renders its heading
- **THEN** it uses the shared section wrapper rather than a locally styled element

### Requirement: Shared motion conventions
Scroll-reveal animation SHALL be expressed through a small set of shared framer-motion variants rather than per-element inline initial/whileInView/transition objects.

#### Scenario: Variants are centralized
- **WHEN** a section reveals content on scroll
- **THEN** it references a named shared variant
- **AND** the duplicated inline motion objects currently repeated across sections are gone

### Requirement: Responsive layout at every breakpoint
The layout SHALL be legible and free of horizontal overflow from 320px viewport width upward.

#### Scenario: No horizontal scroll on a narrow phone
- **WHEN** the page is viewed at 320px width
- **THEN** the document does not scroll horizontally
- **AND** no text is clipped or overlapping

#### Scenario: Layout adapts at tablet and desktop
- **WHEN** the viewport crosses the tablet and desktop breakpoints
- **THEN** multi-column sections reflow rather than shrinking content below readable size
