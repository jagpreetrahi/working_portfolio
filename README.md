# Alex Rivera — Portfolio (Next.js)

This is the Next.js (App Router) conversion of the original single-file HTML portfolio.
Same exact design, copy, and interactions — split into components and wired up to React state
instead of vanilla DOM scripting.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/
    layout.js      — root layout, loads Fredoka / JetBrains Mono / Inter via next/font
    page.js         — assembles all sections
    globals.css     — all original styles, unchanged (just font-family swapped to next/font variables)
  components/
    Nav.js          — sticky nav bar
    Hero.js         — headline + intro copy (server component)
    Terminal.js      — interactive terminal (client component, holds command history in state)
    About.js        — sticky-note grid (server component)
    Projects.js      — project cards, click-to-open (client component)
    Skills.js        — click-to-reveal skill chips (client component)
    Contact.js       — copy-email button + toast (client component)
    Footer.js        — footer
    content.js       — all copy: projects, sticky notes, skills, terminal responses
```

## What changed vs. the original HTML file

- Vanilla `document.querySelector` / `addEventListener` logic → React state (`useState`) inside
  the relevant client components (`Terminal`, `Projects`, `Skills`, `Contact`).
- Google Fonts `<link>` tags → `next/font/google`, which self-hosts the font files at build time
  (faster, no external request at runtime). A small CSS variable bridge in `globals.css` keeps
  every existing `font-family` rule working without edits.
- All copy (project list, sticky notes, skills, terminal responses) extracted into
  `src/components/content.js` so it's a one-file edit to update your info.
- Everything else — class names, layout, animations, colors — is identical to the original.

## To make it yours

Edit `src/components/content.js` for projects/skills/notes copy, and `src/components/Contact.js`
for your email. Swap `project.href` values in `content.js` for your real GitHub/demo links.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero config needed,
it'll detect Next.js automatically. `npm run build && npm start` also works on any Node host.
