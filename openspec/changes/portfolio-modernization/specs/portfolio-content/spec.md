## ADDED Requirements

### Requirement: Single typed content source
All user-visible copy, links, dates, labels, and asset references SHALL live in `src/data/portfolio.ts` and be exported with explicit TypeScript types. Components SHALL read from it rather than containing literal content.

#### Scenario: No hardcoded copy in components
- **WHEN** any file under `src/sections/` or `src/components/` is inspected
- **THEN** it contains no user-visible prose, employer name, date range, email address, or external URL as a literal
- **AND** every such value is referenced from the `portfolio` data module

#### Scenario: Content shape is type-enforced
- **WHEN** a required field is omitted from an entry in `portfolio.ts`
- **THEN** `npm run typecheck` fails

### Requirement: Profile data
The content module SHALL expose profile data containing the full name "Robson Melo de Souza", the tagline "Fullstack Developer | Complex Integrations, ERPs, and Scalable Architectures", and the location "Santa Maria/RS, Brazil".

#### Scenario: Hero renders the Fullstack positioning
- **WHEN** the page loads
- **THEN** the rendered Hero shows the name "Robson Melo de Souza" and the Fullstack tagline
- **AND** the former "Frontend Developer" positioning appears nowhere on the page

### Requirement: About narrative data
The content module SHALL expose the About narrative covering AgTech and Telecom domain expertise, asynchronous processing with RabbitMQ, solopreneurship at Lotus Web Systems, and international experience in the USA and Scotland.

#### Scenario: All four About themes are present
- **WHEN** the About section renders
- **THEN** the rendered text references AgTech, Telecom, RabbitMQ asynchronous processing, Lotus Web Systems solopreneurship, and international experience in the USA and Scotland

### Requirement: Tech stack data grouped by domain
The content module SHALL expose the tech stack as named groups: Backend (Node.js, .NET/C#, Microservices, RabbitMQ, Docker, REST API), Frontend (React, TypeScript, Zustand, Tailwind CSS, Material UI), Databases (PostgreSQL, MongoDB), and Innovation/AI (Claude Code, OpenSpec, Prompt Engineering).

#### Scenario: Every group and item renders
- **WHEN** the TechStack section renders
- **THEN** all four group headings appear
- **AND** every item listed in its group's data appears as a badge under that heading

#### Scenario: Listing a tool is not adopting it
- **WHEN** the Frontend group lists Zustand and Material UI as skills
- **THEN** neither package is present in `package.json` dependencies

### Requirement: Experience timeline data
The content module SHALL expose exactly four roles in reverse-chronological order: Voalle Technology — Fullstack Developer (backend and architecture focus, 2024 — Present); Lotus Web Systems — Solopreneur, AgTech integrations (2023 — Present); Voalle Technology — Frontend Developer (2022 — 2023); TriganDAO — Frontend Developer (2022).

#### Scenario: Stale experience data is gone
- **WHEN** the Experience section renders
- **THEN** four roles are shown in the order above
- **AND** the former "(2022-current) - Contractor Frontend Developer (US - Remote)" entry does not appear

#### Scenario: Concurrent ongoing roles both show as current
- **WHEN** two entries are both marked ongoing
- **THEN** each renders its own "Present" end label without the timeline implying one superseded the other

### Requirement: Projects data
The content module SHALL expose the curated project list, each entry carrying a title, description, tech tags, image, and any live or source links.

#### Scenario: Project links are complete or absent
- **WHEN** a project entry has no live URL
- **THEN** no empty or placeholder link is rendered for it

### Requirement: Contact data
The content module SHALL expose the email `sys.robson@gmail.com`, the LinkedIn URL `https://www.linkedin.com/in/robsonthedev/`, and the location. Social destinations that are not maintained SHALL NOT be listed.

#### Scenario: Only live destinations are linked
- **WHEN** the Contact section renders
- **THEN** every rendered social or contact link points to a destination present in the contact data
- **AND** no YouTube, Instagram, or WhatsApp link is rendered unless its URL is present in the data
