# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TD Studios is a creative agency website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. The site showcases services, work, and provides a library of downloadable resources.

## Development Commands

### Package Manager
This project uses **pnpm** (version 10.21.0+). Always use pnpm, not npm or yarn.

### Common Commands
```bash
pnpm dev          # Start development server on http://localhost:3000
pnpm build        # Build for production (creates .next/ directory)
pnpm start        # Start production server
pnpm lint         # Run ESLint (uses flat config)
```

### PDF Generation
Generate a full-site PDF using Puppeteer (requires dev server running):
```bash
# Terminal 1: Start dev server
pnpm dev

# Terminal 2: Generate PDF
node scripts/generate-pdf.js
```
This creates `public/TD-Studios-Full-Site.pdf` by capturing all routes defined in `scripts/generate-pdf.js`. The script uses Puppeteer to visit each route, waits for network idle, and merges all pages into a single PDF using pdf-lib.

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router, React Server Components)
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4 with custom design tokens
- **UI Components**: Radix UI primitives + shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: Server Actions with Zod validation
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (headings) and Inter (body)

### Directory Structure
```
app/                    # Next.js App Router pages
  ├── about/           # About page
  ├── brand-bible/     # Brand Bible page
  ├── contact/         # Contact form with server actions
  ├── library/         # Library/resources page
  ├── process/         # Process page
  ├── services/        # Services pages
  │   ├── websites/
  │   ├── branding-design/
  │   ├── social-media/
  │   └── cannabis/
  ├── work/            # Work/portfolio page
  ├── layout.tsx       # Root layout with PageShell wrapper
  ├── page.tsx         # Home page
  └── globals.css      # Global styles with design tokens

components/
  ├── layout/          # Layout components (header, footer, page-shell)
  ├── motion/          # Framer Motion wrapper components
  ├── sections/        # Page section components (home, services, process, work)
  ├── ui/              # Reusable shadcn/ui components
  └── section-header.tsx

lib/
  ├── site-config.ts   # Site metadata and navigation config
  └── utils.ts         # Utility functions (cn helper)

public/                # Static assets (images, PDFs, SVGs)
scripts/
  └── generate-pdf.js  # Full-site PDF generation script
```

### Design System

#### Color Tokens (Dark Mode)
The site uses a custom dark color palette defined in `app/globals.css`:
- `--bg-body`: Main background
- `--bg-elevated`: Elevated surface backgrounds
- `--text-primary`: Primary text color
- `--text-muted`: Muted/secondary text
- `--brand-primary`, `--brand-secondary`, `--brand-tertiary`: Brand colors
- `--border-subtle`: Subtle borders

Colors are accessed via Tailwind utilities: `bg-bg-body`, `text-text-primary`, etc.

#### Typography
- **Headings**: Space Grotesk (`--font-space-grotesk`)
- **Body**: Inter (`--font-inter`)
- Font variables are set in `app/layout.tsx`

#### Path Aliases
- `@/`: Root directory
- `@/components`: Components directory
- `@/lib`: Library/utilities
- `@/hooks`: Custom hooks (if added)

### Forms and Server Actions

Contact form uses Next.js Server Actions:
- Form validation: Zod schemas in `app/contact/actions.ts`
- Server action: `submitContactForm()` posts to Formspree endpoint (https://formspree.io/f/movkvrpz)
- Client component: `app/contact/contact-form.tsx` with `useFormState` hook
- Returns `ContactFormState` with validation errors or success message

### Component Patterns

#### Page Layout
All pages are wrapped with `PageShell` which provides:
- `SiteHeader`: Navigation with mobile menu
- `<main>` content area
- `SiteFooter`: Footer with links and CTA

#### shadcn/ui Integration
Components use the shadcn/ui pattern with:
- Radix UI primitives for accessibility
- CVA (class-variance-authority) for variants
- `cn()` utility from `lib/utils.ts` for className merging

#### Animations
Framer Motion is used for page transitions and interactive elements. Wrap animated components with motion components from `components/motion/`.

### Site Configuration

Main navigation, metadata, and site info are centralized in `lib/site-config.ts`. Update this file to:
- Add/remove navigation items
- Change site name and description
- Update social links

### Static Assets

Key assets in `public/`:
- `td-studios-logo.png`: Main logo
- `td-studios-xmas-logo.png`: Seasonal logo variant
- `TD-Studios-Full-Site.pdf`: Generated full-site PDF
- `brand-bible/`: Brand Bible PDF and related assets
- `close-method/`: CLOSE Method resources
- `images/`: Service images and other graphics

## Development Notes

### Tailwind CSS 4
This project uses Tailwind CSS 4 which has breaking changes from v3:
- Configuration in `app/globals.css` using `@theme` directive
- PostCSS config updated for v4 syntax
- Custom color tokens defined inline

### TypeScript Configuration
- Strict mode enabled
- Path alias `@/*` maps to root directory
- JSX transform: `react-jsx` (no React import needed)

### Dark Mode
Site is dark mode only (see `<html lang="en" className="dark">` in layout). All design tokens assume dark backgrounds.

### Background Gradient
The site features a custom radial + linear gradient background applied to the `<body>` element in `app/layout.tsx`:
- Radial gradient with accent colors (ember red and teal glow)
- Linear gradient base (dark cinematic palette)
- This creates the signature "luxury dark" aesthetic
