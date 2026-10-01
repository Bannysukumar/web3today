<!-- readme-seo: bannysukumar-professional-v4 -->

# QuickContracts.dev

QuickContracts.dev is a Next.js landing page. The npm package name is `quickcontracts-landing`. Routes exist for home, about, services, and contact. The home page renders `Hero`, `ForkBelt`, and `BuilderJourney`.

## Overview

The repository is named `web3today`. The source identifies the site as the QuickContracts.dev landing page, including the note file `QuickContracts.dev Landing Page Sections v1.md`. Dependencies are Next.js 14, React, Tailwind CSS, Framer Motion, and Firebase. No Solidity contract is in this repository, so blockchain network topics are not used.

The recorded homepage is https://web3today-psi.vercel.app.

## Features

- Home page composed of hero, fork belt, and builder journey sections
- About, services, and contact routes
- Firebase listed as a dependency

## Tech Stack

| Technology | Where it shows up |
|---|---|
| Next.js 14 | `next.config.js` and `package.json` |
| React | `package.json` |
| TypeScript | `tsconfig.json` |
| Tailwind CSS | `tailwind.config.ts` |
| Framer Motion | `package.json` |
| Firebase | `package.json` |

## Architecture

Next.js App Router in `src/app` → page sections under `src/components`.

## Project Structure

```text
web3today/
├── src/app/page.tsx
├── src/app/about/
├── src/app/services/
├── src/app/contact/
├── public/
├── next.config.js
└── package.json
```

## Prerequisites

- Node.js
- npm

## Installation

```bash
git clone https://github.com/Bannysukumar/web3today.git
cd web3today
npm install
npm run dev
```

## Usage

`npm run dev` runs `next dev`. The home route is `src/app/page.tsx`. About, services, and contact are sibling routes.

## Demo

https://web3today-psi.vercel.app

## Deployment

`next.config.js` is present. The GitHub homepage is https://web3today-psi.vercel.app.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

Licensed under MIT. See [LICENSE](LICENSE).

## Author

Banny Sukumar

GitHub: https://github.com/Bannysukumar
