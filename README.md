# Portfolio (React + TypeScript)

Portfolio de una sola página con:
- 3 links (proyecto en Vercel + repos en GitHub)
- Resumen de experiencia
- Tecnologías con logitos

## Correr en local

```bash
npm install
npm run dev
```

## Personalización

- Edita tus links, resumen y tecnologías en [src/content.ts](src/content.ts)
- El layout está en [src/App.tsx](src/App.tsx)

## Build

```bash
npm run build
npm run preview
```

## Deploy en Vercel

1) Subí el código a GitHub (este repo)
2) En Vercel: **Add New… → Project**
3) **Import Git Repository** y elegí este repo
4) Deploy

Vercel suele autodetectar Vite. Si te lo pide:
- Build Command: `npm run build`
- Output Directory: `dist`
