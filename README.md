# East Assembly — KAG Buru Buru Church

Website for East Assembly (Kenya Assemblies of God, Buru Buru), Nairobi, Kenya.
Rebuilt as a **React + TypeScript + Vite** single-page app. _"I care… We care."_

## Tech stack

- **React 18** + **TypeScript** (strict)
- **Vite 5** build tooling
- **React Router 6** for client-side routing
- Design ported 1:1 from the original hand-authored pages (inline styles + a small
  global stylesheet for fonts, keyframes, placeholders, buttons, and responsive rules)

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # serve the production build locally
npm run typecheck # type-check only
```

## Routes

| Path          | Page          |
| ------------- | ------------- |
| `/`           | Home          |
| `/about`      | Church Background |
| `/pastors`    | Pastoral Team |
| `/im-new`     | I'm New       |
| `/ministries` | Ministries    |
| `/live`       | Live Stream   |
| `/give`       | Give          |
| `/contact`    | Contact       |

## Project structure

```
src/
  main.tsx              App entry (Router + global CSS)
  App.tsx               Route table + scroll-to-top
  index.css             Global: fonts, keyframes, .ea-ph placeholders, buttons, responsive
  vite-env.d.ts         Vite client types (asset imports)
  assets/logo.png       Church logo (imported by components)
  hooks/
    useMotion.ts        Scroll-reveal + count-up animation hook (from the old reveal.js)
  components/
    Nav.tsx             Fixed header, dropdowns, mega-menu, mobile menu, scroll-hide
    Footer.tsx          Footer with links, contacts, newsletter
    Hover.tsx           Reproduces the original `style-hover` behaviour (base + hover style)
  pages/
    Home.tsx  About.tsx  Pastors.tsx  ImNew.tsx
    Ministries.tsx  LiveStream.tsx  Give.tsx  Contact.tsx
public/
  assets/  uploads/     Static assets served as-is
```
