# My Design System

A React component library built on the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) design language. Components are styled with Tailwind CSS v4 using custom USWDS design tokens and documented in Storybook with embedded Figma design specs.

## Storybook

Browse all components, variants, and interactive docs:

**[https://bethanysmith-a11y.github.io/my-design-system/](https://bethanysmith-a11y.github.io/my-design-system/)**

Each component story includes a **Design** tab linking to its corresponding Figma frame.

## Figma

Components are matched to the USWDS UI Design Kit (Community):

**[USWDS Figma File](https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-)**

## Components

| Category | Components |
|---|---|
| **Actions** | Button, ButtonGroup, Search |
| **Feedback** | Alert, SiteAlert, Modal, Tooltip, Badge |
| **Forms** | Input, Textarea, ComboBox, DatePicker, FileInput, CharacterCount |
| **Navigation** | Header, Footer, Breadcrumbs, Pagination, Sidenav, Banner |
| **Content** | Card, Collection, Table, SummaryBox, Accordion, StepIndicator, Typography |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run Storybook locally

```bash
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006).

### Build static Storybook

```bash
npm run build-storybook
```

Output goes to `storybook-static/`.

## Using Components

Import components from `src/components`:

```tsx
import { Button, Alert, Card } from './components';

function App() {
  return (
    <>
      <Alert type="info" heading="Heads up">
        This is an informational alert.
      </Alert>

      <Card title="Card title" mediaSrc="/image.jpg">
        Card body content goes here.
      </Card>

      <Button variant="primary" size="big">
        Get started
      </Button>
    </>
  );
}
```

All components are typed with TypeScript. Props and variants are documented in each component's Storybook story.

## Design Tokens

USWDS design tokens are defined in `src/index.css` as a Tailwind v4 `@theme` block:

- **Colors** -- Primary, Secondary, Accent Warm/Cool, Base, Info, Success, Warning, Error
- **Typography** -- Public Sans font, 9-step heading scale (13px--48px)
- **Spacing** -- USWDS unit-based scale (4px--80px)
- **Border radius** -- sm (4px), md (5px), lg (8px)
- **Shadows** -- sm, md, lg, card

## Tech Stack

- **React 19** + TypeScript
- **Tailwind CSS v4** with `@tailwindcss/vite`
- **Storybook 10** with addons: a11y, designs, docs, vitest
- **Vite 7** for builds
- **GitHub Actions** for automatic deployment to GitHub Pages

## Project Structure

```
src/
  components/
    Accordion/        # Accordion.tsx + Accordion.stories.tsx
    Alert/
    Badge/
    Banner/
    Breadcrumbs/
    Button/
    ButtonGroup/
    Card/
    CharacterCount/
    Collection/
    ComboBox/
    DatePicker/
    FileInput/
    Footer/
    Header/
    Input/
    Modal/
    Pagination/
    Search/
    Sidenav/
    SiteAlert/
    StepIndicator/
    SummaryBox/
    Table/
    Tooltip/
    Typography/
    index.ts          # Barrel export
  index.css           # Tailwind + USWDS design tokens
```
