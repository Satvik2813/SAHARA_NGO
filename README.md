# SAHARA NGO Website

The production website for **SAHARA**, a grassroots NGO supporting children, women, youth and the elderly across Telangana since 1986.

## Project provenance

This codebase is the implementation phase of a five-phase project:

1. **Audit & Discovery** — `/audit/`
2. **Architecture & UX Blueprint** — `/blueprint/`
3. **Photo Selection & Asset Preparation** — `/assets/`
4. **Visual Design System** — `/design/`
5. **Development** — `/src/` (this phase)

All content in `src/data/` is sourced from `/audit/client-confirmed-information.md` (client-confirmed facts) and `/audit/Writeup.txt` (verbatim Mission/Vision). No facts, statistics, or donation details in this codebase were invented — see `/blueprint/verification-requirements.md` for items still awaiting client confirmation.

**Note:** FCRA information is intentionally not represented anywhere on this site, per explicit client instruction. Current impact statistics were not supplied by the client and are not displayed.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (design tokens from `/design/design-system.md`)
- **React Router** (client-side routing)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # type-check + production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Project structure

```
src/
├── components/   # small reusable UI (Button, Card, chips, icons...)
├── sections/     # page-section-level composites (Hero, ProgramGrid...)
├── pages/        # one file per route
├── layouts/      # Header, Footer, Layout wrapper
├── data/         # typed content, sourced from /audit
├── hooks/        # small reusable hooks
├── utils/        # helpers
└── styles/       # Tailwind entry + base styles
```

## Design system

Colors, type and component specs come from `/design/design-system.md` and `/design/component-specification.md`, implemented as Tailwind tokens in `tailwind.config.js`. Primary brand green (`#018738`) was sampled directly from the SAHARA logo.

## Deployment

Not yet deployed. Deployment (hosting, DNS) is a separate, later phase and requires explicit client instruction.
