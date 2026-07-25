# Manjurul Islam Portfolio

Production-ready public developer portfolio built with React, TypeScript, Vite, Tailwind CSS, React Router, Framer Motion, Swiper, Vitest, Testing Library, Playwright and Axe.

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

## Update real content

Edit the typed files in `src/data/`:

- `personal.data.ts`
- `contact.data.ts`
- `skills.data.ts`
- `education.data.ts`
- `experience.data.ts`
- `projects.data.ts`

Put assets in:

- `public/images/profile/`
- `public/documents/`
- `public/images/projects/<project-slug>/`

## Checks

```bash
npm run format
npm run type-check
npm run lint
npm run test
npm run build
```

For E2E tests:

```bash
npx playwright install chromium
npm run test:e2e
```

## Deploy

Vercel configuration is included. Set:

```env
VITE_APP_NAME=Manjurul Islam Portfolio
VITE_SITE_URL=https://your-production-domain.com
VITE_DEFAULT_OG_IMAGE=/images/social/manjurul-islam-portfolio-og.svg
```
