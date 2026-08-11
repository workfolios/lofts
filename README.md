# Caroline Lofts Portfolio

Built with React, Vite, Tailwind CSS, and React Router.

Live site: https://workfolios.github.io/lofts/

## Runtime

- Node.js 22
- npm with committed `package-lock.json`

## Development and Validation

```bash
npm ci
npm run typecheck
npm run build
npm run preview
```

Use `npm run dev` for local development.

## Deployment

Production is deployed to GitHub Pages from `main` through `.github/workflows/deploy.yml`. Pull requests validate without publishing through `.github/workflows/validate.yml`. The production artifact is the generated `dist/` directory, and the Vite base path is `/lofts/`.
