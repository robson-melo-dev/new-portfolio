## ADDED Requirements

### Requirement: Two supported locales
The site SHALL be available in English and Brazilian Portuguese. Every user-visible string SHALL exist in both.

#### Scenario: No untranslated copy reaches the build
- **WHEN** a role, project, tech group or social link is added to `src/data/shared.ts` without copy in both locale files
- **THEN** `npm run typecheck` fails

#### Scenario: Both locales render completely
- **WHEN** the page is viewed in either locale
- **THEN** no string from the other locale appears anywhere on the page

### Requirement: Locale-invariant data is stored once
URLs, images, dates, company names and technology names SHALL live in a single locale-invariant module and SHALL NOT be duplicated per locale.

#### Scenario: A link exists in exactly one place
- **WHEN** the source is searched for a project or social URL
- **THEN** that URL appears exactly once in the repository

#### Scenario: Dates do not drift between locales
- **WHEN** a role's date range is rendered in both locales
- **THEN** both show the same start and end years, read from the same source

### Requirement: Language control
The header SHALL provide a control that switches between the two locales, showing the flag of the United States and of Brazil.

#### Scenario: Switching re-renders the page
- **WHEN** the user activates the inactive language option
- **THEN** all page copy, including headings, navigation, buttons and project descriptions, is replaced with that locale's copy

#### Scenario: The active language is indicated
- **WHEN** the control renders
- **THEN** the option matching the active locale is marked `aria-pressed="true"` and is visually distinguished

#### Scenario: The control is operable and named
- **WHEN** a screen reader or voice-control user reaches an option
- **THEN** its accessible name contains the visible text of that option
- **AND** the group exposes an accessible name describing its purpose

### Requirement: Browser language is the default
On a first visit, with no stored preference, the locale SHALL be chosen from the browser's language list. Any Portuguese variant SHALL select Brazilian Portuguese; otherwise English.

#### Scenario: Portuguese browser gets Portuguese
- **WHEN** `navigator.languages` begins with a `pt` tag and nothing is stored
- **THEN** the page renders in Brazilian Portuguese

#### Scenario: Other browsers get English
- **WHEN** `navigator.languages` contains no `pt` tag and nothing is stored
- **THEN** the page renders in English

### Requirement: Stored preference wins
A locale chosen by the user SHALL be persisted and SHALL take precedence over the browser language on later visits.

#### Scenario: Preference survives a reload
- **WHEN** the user selects English in a browser set to Portuguese, then reloads
- **THEN** the page renders in English

#### Scenario: Clearing the preference restores detection
- **WHEN** the stored preference is removed and the page is reloaded
- **THEN** the locale is chosen from the browser language again

#### Scenario: Blocked storage does not break the page
- **WHEN** `localStorage` is unavailable or throws
- **THEN** the page still renders and the switch still works for the current session

### Requirement: Document metadata follows the locale
The `lang` attribute, document title and meta description SHALL match the active locale.

#### Scenario: Metadata updates on switch
- **WHEN** the locale changes
- **THEN** `document.documentElement.lang`, `document.title` and the meta description all change to that locale's values

### Requirement: Switching locales causes no layout shift
Changing language or running the hero typewriter SHALL NOT shift surrounding content.

#### Scenario: The typewriter reserves its space
- **WHEN** the hero text cycles through its words in either locale
- **THEN** no layout shift is recorded for the animation

#### Scenario: The typewriter restarts cleanly on switch
- **WHEN** the locale changes while the hero text is mid-word
- **THEN** the animation restarts from the first word of the new locale
- **AND** no text from the previous locale remains on screen
