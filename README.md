# Mohammad Ahmad — Portfolio

A modern, one-page portfolio built with **React 18 + Vite + Tailwind CSS 4 + Framer Motion + Lucide**. Card-driven layout, dark/light modes, scroll-triggered animations, hover micro-interactions, and detail popups for projects, courses, certifications, and skills.

Accent color: `#76b5ba`.

## Tech Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **Framer Motion** for animations
- **Lucide React** for icons
- Fonts: **Inter** (UI) + **JetBrains Mono** (labels/code)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Editing Content

All text/content lives in a single source of truth:

```
src/data/portfolio.js
```

Update `profile`, `skills`, `experiences`, `education`, `freelanceProjects`,
`projects`, `repositories`, `openSource`, `articles`, `contact`, and `footer`
there — the components read everything from this file. No content is hardcoded
inside components.

### Placeholders to replace

Some entries contain `REPLACE WITH ...` placeholders. Update these with your real data:

- `education` → your degree/university and a real certification.
- `articles` → your real Medium/LinkedIn article titles, excerpts, dates.
- `profile.resumeUrl` → drop a `resume.pdf` in `public/` and set this to `"./resume.pdf"`.

## Project Structure

```
src/
├── main.jsx            # entry
├── App.jsx             # layout + section composition
├── index.css           # Tailwind + global styles
├── data/portfolio.js   # ALL content lives here
├── context/            # ThemeContext
├── hooks/              # useTheme, useScrollSpy, useMediaQuery
├── lib/                # utils (cn, copy, formatDate) + icon map
├── components/         # reusable UI (Card, Modal, Button, Badge, ...)
└── sections/           # page sections (Hero, About, Skills, ...)
```

## Features

- Sticky frosted-glass navbar with scroll-spy active highlighting + mobile menu
- Two-column animated hero with code-window visual and gradient orbs
- About card with cursor-follow spotlight
- Skills with category tabs, animated proficiency bars, and detail modals
- Experience vertical timeline with a line that draws down on scroll
- Education/Certifications/Courses grid with detail modals
- Freelance case-study cards (problem → solution → result) with modals
- Projects grid with category filters and detail modals
- Horizontally scrolling GitHub repos + open-source card
- Horizontally scrolling articles track (snap scrolling)
- Contact section with copy-to-clipboard info + validated (simulated) form
- Reading progress bar, back-to-top button, dark/light toggle
- `prefers-reduced-motion` support and keyboard/focus accessibility

## Contact Form

The form uses **simulated submission** (no backend) — it validates input and
shows loading/success states. To send real emails later, wire `handleSubmit` in
`src/components/ContactForm.jsx` to a service like
[Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).

## Deployment — GitHub Pages

`vite.config.js` uses `base: "./"` so the build works from any path.

### Option A — Manual (`gh-pages` branch, recommended)

This uses zero GitHub Actions minutes because everything happens from your machine.

1. Build the site:

   ```bash
   npm run build
   ```

2. Push the generated `dist/` folder to the `gh-pages` branch:

   ```bash
   npm run deploy
   ```

3. In your repo: **Settings → Pages → Source = Deploy from a branch → gh-pages / (root)**.

Repeat steps 1–2 whenever you want to update the live site.

### Option B — Automatic (GitHub Actions)

A workflow is included at `.github/workflows/deploy.yml`.

1. Push this repo to GitHub (branch `main`).
2. In your repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Every push to `main` builds and deploys automatically.

This uses a small amount of GitHub Actions compute time.

## Other Hosts (Netlify / Vercel)

- **Build command:** `npm run build`
- **Publish directory:** `dist`

## License

Personal portfolio — all rights reserved © Mohammad Ahmad.
