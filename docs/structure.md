# Fosco Labs Architecture Map

This document describes the current structure of the Fosco Labs website codebase as of March 4, 2026.

## 1) Tech and Runtime

- App stack: React + TypeScript + Vite
- Styling approach in active app: CSS Modules + global tokens in `src/index.css`
- Animation: Framer Motion
- Smooth scrolling: Lenis (`lenis/react`)
- Routing: React Router (`BrowserRouter`)

Note: Tailwind packages exist in dependencies, but the active app currently does not use Tailwind utility classes or Tailwind Vite plugin wiring.

## 2) High-Level Folder Structure

- `src/` - active website application
- `public/` - static assets served by Vite
- `docs/` - project documentation (this file)
- `Create Pixel-Perfect Card/` - separate reference/imported design project, not wired into the active app runtime
- `Wireframe/` - design assets used by active app (e.g., logo)

## 3) App Entry and Routing

### `src/main.tsx`
- Mounts React app into `#root`
- Wraps app in `StrictMode`
- Loads global styles from `src/index.css`

### `src/App.tsx`
- Wraps app with `ReactLenis` for smooth scroll behavior
- Defines routes:
  - `/` -> `Layout` + `HomePage`
  - `/template` -> `Layout` + `TemplatePage`
  - `/privacy-policy` -> `Layout` + `PrivacyPolicyPage`
  - `/terms-of-service` -> `Layout` + `TermsOfServicePage`
  - `/contact` -> `Layout` + `ContactPage`
  - `/about` -> `Layout` + `AboutPage`
  - `/programmes` -> `Layout` + `ProgrammesPage`

## 4) Shared Layout Shell

### `src/components/Layout.tsx`
Applies the global page shell to all routes:

1. `Nav`
2. Page content (`children`)
3. `Footer`
4. `WhatsAppFab`
5. `ScrollToTopArrow`

Also intercepts in-page anchor links (`#...`) and uses Lenis for smooth section scrolling with `--scroll-anchor-offset` token.

## 5) Pages

### `src/pages/HomePage.tsx`
- Thin page component
- Returns `MainContent`

### `src/pages/TemplatePage.tsx`
- Static template scaffold for future pages
- Sections:
  - Hero (title + description)
  - Body content area
  - CTA section (2 action links)

### `src/pages/ContactPage.tsx`
- Contact page using the same hero/body/CTA layout pattern
- Includes enquiry form, direct contact details, and "what happens next" guidance

### `src/pages/AboutPage.tsx`
- About page using the same hero/body/CTA layout pattern
- Includes company profile, service model, approach, trust/legal context, and CTA

### `src/pages/ProgrammesPage.tsx`
- Programmes and pricing page using the same hero/body/CTA layout pattern
- Includes programme cards, pricing logic, installment/discount guidance, and FAQ

## 6) Home Page Composition

### `src/components/MainContent.tsx`
Section order on home page:

1. `HeroSection`
2. `TutorialCategoriesSection`
3. `ConsultancySection`
4. `HowItWorksSection`
5. `WhoThisIsForSection`
6. `GetStartedSection`

## 7) Component Classification

### Reusable / shared components

- `src/components/Card/Card.tsx`
  - Generic content card used in multiple sections
  - Supports optional CTA link and list semantics
- `src/components/Button/Button.module.css`
  - Shared button style variants (`primary`, `secondary`, etc.)
- `src/hooks/useReducedMotion.ts`
  - Shared accessibility hook for reduced motion preference
- `src/utils/animations.ts`
  - Shared Framer Motion variants/transitions
- Shared shell components used across routes:
  - `Nav.tsx`
  - `Footer.tsx`
  - `WhatsAppFab.tsx`
  - `ScrollToTopArrow.tsx`
  - `Layout.tsx`

### Single-purpose / page-specific components

- `HeroSection.tsx`
- `TutorialCategoriesSection.tsx`
- `ConsultancySection.tsx`
- `HowItWorksSection.tsx`
- `WhoThisIsForSection.tsx`
- `GetStartedSection.tsx`
- `RequestTutorialModal.tsx`
- `TemplatePage.tsx`

### Present but currently unused

- `src/components/AnimatedSection.tsx`
  - Generic wrapper component for animated sections
  - Not currently imported by active page components

## 8) Forms and Modal Flows

### A) Consultancy form (inline section form)

- File: `src/components/ConsultancySection.tsx`
- Pattern: controlled form via local `formData` state
- Inputs:
  - First Name
  - Last Name
  - Email Address
  - Country code + Mobile
  - Service Type select
- Submit behavior:
  - `handleSubmit` prevents default submit
  - Backend integration TODO remains

### B) Request Tutorial modal form

- Trigger source: `src/components/TutorialCategoriesSection.tsx`
  - local `modalOpen` state controls visibility
- Modal file: `src/components/RequestTutorialModal.tsx`
- Modal behaviors:
  - Close on overlay click
  - Close on `Escape`
  - Body scroll lock while open
  - Custom internal scrollbar for dialog content
- Form fields include:
  - Full Name
  - Email
  - WhatsApp/Mobile + country code
  - Learning Interest
  - Skill Level
  - Goals textarea
- Submit behavior:
  - currently `preventDefault()` only
  - no API or email service integration yet

## 9) Styling Architecture

### Global tokens and base styles

- File: `src/index.css`
- Contains:
  - color, spacing, border radius, shadow tokens
  - typography tokens
  - button and form tokens
  - layout/base element resets
  - scroll offset token for anchor behavior

### Component-level styles

- Each component generally has a paired `.module.css`
- Keeps styling scoped and co-located with component logic

## 10) Navigation and Link Patterns

### In-page anchor navigation

- Navigation and CTA links mostly use `#section-id`
- `Layout` smooth-scroll handler drives motion and URL hash update

### Route navigation

- Cross-page links (e.g., Footer "Templates") point to `/template`
- Footer "Legal" links point to `/privacy-policy` and `/terms-of-service`
- Header/Footer "Contact" links point to `/contact`
- Header/Footer "About" links point to `/about`

## 11) Current Gaps / Next Engineering Targets

1. Connect both forms to a backend endpoint or service
2. Add validation and user feedback states (loading/success/error)
3. Decide whether to keep CSS Modules-only or fully activate Tailwind in app runtime
4. Remove or adopt currently unused `AnimatedSection` abstraction
5. Add tests for critical flows (modal open/close, form submission, route render)

## 12) Quick File Map

- `src/main.tsx` - app bootstrap
- `src/App.tsx` - router + top-level providers
- `src/pages/HomePage.tsx` - home route
- `src/pages/TemplatePage.tsx` - template route
- `src/components/Layout.tsx` - shared shell
- `src/components/MainContent.tsx` - home section composition
- `src/components/RequestTutorialModal.tsx` - tutorial modal
- `src/components/ConsultancySection.tsx` - consultancy form
- `src/components/Card/Card.tsx` - reusable card
- `src/hooks/useReducedMotion.ts` - shared hook
- `src/utils/animations.ts` - shared animation variants
- `src/index.css` - global tokens and base styles
