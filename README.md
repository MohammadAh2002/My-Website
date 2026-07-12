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

Update `profile`, `skills`, `experiences`, `education`, `workProjects`,
`projects`, `openSource`, `articles`, `contact`, and `footer`
there — the components read everything from this file. No content is hardcoded
inside components.

## Project Structure

```
src/
├── main.jsx            # entry
├── App.jsx             # layout + section composition
├── index.css           # Tailwind + global styles
├── data/portfolio.js   # ALL content lives here
├── context/            # ThemeContext
├── hooks/              # useTheme, useScrollSpy
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
- Professional work case-study cards (problem → solution → result) with modals
- Projects grid with category filters and detail modals
- Open-source contributions card
- Horizontally scrolling articles track (snap scrolling)
- Contact section with copy-to-clipboard info + validated form (Formspree integration)
- Reading progress bar, back-to-top button, dark/light toggle
- `prefers-reduced-motion` support and keyboard/focus accessibility

## Contact Form

The form is wired to [Formspree](https://formspree.io/) for real email delivery.
It validates input client-side and shows loading/success/error states.
The endpoint is configured in `src/components/ContactForm.jsx`.

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

## Other Hosts (Netlify / Vercel)

- **Build command:** `npm run build`
- **Publish directory:** `dist`

## License

Personal portfolio — all rights reserved © Mohammad Ahmad.
