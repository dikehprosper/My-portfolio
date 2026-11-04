# Prosper Dike — Developer Portfolio

A responsive personal portfolio built with Next.js, React, and Tailwind CSS. It introduces Prosper Dike, highlights skills and selected web and mobile projects, and provides contact and social links. The interface includes light and dark themes and scroll-triggered reveal effects.

## Tech stack

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide React icons

## Getting started

Install the project dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with Turbopack. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build locally. |
| `npm run lint` | Run the configured Next.js lint command. |

## Portfolio sections

- **Hero** — introduction and links into the portfolio.
- **About** — background and profile.
- **Skills** — grouped frontend, backend, and DevOps/tools skills.
- **Projects** — project summaries, technology stacks, features, and available links.
- **Contact** — email and social profiles.

The navigation links to each section. The theme toggle supports light and dark appearance, and the saved theme is applied before the page renders to avoid a flash. Reveal animations respect the visitor's reduced-motion preference.

## Project structure

```text
app/
  components/       # Page sections and shared UI
  hooks/            # Reusable React hooks, including theme state
  globals.css       # Global styles, theme tokens, and animations
  layout.tsx        # Root layout, fonts, and page metadata
  page.tsx          # App Router entry point
public/             # Static assets used by the portfolio
```

## Updating content

- Edit section copy and contact links in the corresponding component under `app/components/`.
- Update skill groups in `app/components/Skills.tsx`.
- Add or edit project details in `app/components/Projects.tsx`. Project data includes an overview, optional image/video/live links, and frontend and backend stacks, features, and repository links.
- Add or replace static images in `public/`, then reference them by their public path (for example, `/lamedcash.png`).
- Change theme colors and global presentation in `app/globals.css`.
- Update the browser title and description in `app/layout.tsx`.
