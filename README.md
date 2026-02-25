# Article Card Grid — React + TypeScript + Vite

A minimal React 19 application that renders a responsive article card grid.
Built with Vite, TypeScript, and Tailwind CSS v4.

## What it does

- Renders a list of articles as cards in a responsive 1- or 2-column grid
- Each `ArticleCard` displays a title, body text, and an optional image
- Styled with Tailwind CSS utility classes (shadows, rounded corners, padding,
  grid layout)

## Tech stack

| Tool                                          | Version | Purpose                                                            |
| --------------------------------------------- | ------- | ------------------------------------------------------------------ |
| [React](https://react.dev/)                   | 19      | UI library                                                         |
| [TypeScript](https://www.typescriptlang.org/) | 5.9     | Type safety                                                        |
| [Vite](https://vite.dev/)                     | 7       | Dev server & bundler                                               |
| [Tailwind CSS](https://tailwindcss.com/)      | 4       | Utility-first styling (via `@tailwindcss/vite`)                    |
| [ESLint](https://eslint.org/)                 | 9       | Linting (with `typescript-eslint`, `react-hooks`, `react-refresh`) |

## Project structure

```
src/
  main.tsx              # App entry point
  App.tsx               # Root component — defines article data, renders the grid
  index.css             # Tailwind CSS import
  components/
    ui/
      ArticleCard.tsx   # Reusable card component (title, text, optional image)
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available scripts

| Script            | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR                |
| `npm run build`   | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build locally          |
| `npm run lint`    | Run ESLint across the project                 |
