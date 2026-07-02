# Editing your portfolio

All the text on your site lives in **one file**: `src/content.ts`.

Open it and change any string — name, tagline, jobs, projects, skills, contact links. The preview refreshes automatically.

Sections you can edit:

- `SITE` — browser tab title + meta description
- `HERO` — name, location, tagline, stats row
- `ABOUT` — bio + education
- `EXPERIENCE` — jobs (add/remove entries in the array)
- `PROJECTS` — project cards (each has `link` for the URL)
- `SKILLS` — grouped skill chips
- `CERTS` — certifications list
- `ACHIEVEMENTS` — awards grid
- `CONTACT` — email / phone / socials
- `FOOTER` — footer text

## Deploying to GitHub

This project is already on TanStack Start (a normal Vite React app). To push it to your own GitHub and deploy:

1. In Lovable, click the **+** (plus) menu in the chat input → **GitHub → Connect project**. Authorize the Lovable GitHub App and create the repo. Changes you make in Lovable will auto-sync to GitHub (and vice versa).
2. Once on GitHub, deploy anywhere that hosts Vite apps — the easiest is **Vercel** or **Netlify**: connect the repo, accept the default build settings, done.
3. Prefer **GitHub Pages**? Pages only serves static sites, so run `bun run build` locally and publish the `dist/` folder to the `gh-pages` branch (any `gh-pages` GitHub Action works). Note: GitHub Pages won't run the server-side pieces of TanStack Start — for a static portfolio like this one that's fine.

You can also click **Publish** in the top-right of Lovable to get an instant `*.lovable.app` URL without any GitHub setup.
