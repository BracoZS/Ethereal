# ETHEREAL 🚀

A high-fidelity, monolithic, and data-driven web architecture built with **Astro** and **Tailwind CSS v4**.

ETHEREAL is designed to provide a premium digital experience with a strong focus on separation of concerns. The visual layer (Astro components) is entirely decoupled from the content layer (TypeScript data files), resulting in a highly scalable and maintainable project.

## 🚀 Project Structure

The repository is modular and structured to scale effortlessly:

```text
/
├── public/                  # Static assets served directly (favicon, raw images)
├── src/                     # Source code
│   ├── components/          # Astro UI Components
│   │   ├── common/          # Layout & transversal elements (Navbar, Footer, Container, SEO)
│   │   ├── sections/        # Major page blocks (Hero, Stats, Genesis, Protocol, etc.)
│   │   └── ui/              # Granular interactive elements (Button)
│   ├── layouts/             # Main page layouts
│   │   └── BaseLayout.astro # Base HTML shell with injected SEO & Fonts
│   ├── pages/               # File-based routing
│   │   └── index.astro      # Main landing page
│   ├── sitedata/            # Centralized Data-Driven Architecture (.ts)
│   │   ├── navigation.ts    # Navbar & Footer routing data
│   │   ├── sections.ts      # All textual and structural content for sections
│   │   └── site.ts          # Global site metadata (Name, Tagline, Logo, etc.)
│   └── styles/              # Modular Tailwind v4 CSS
│       ├── global.css       # CSS entry point
│       ├── base.css         # Typography & native HTML element resets
│       ├── components.css   # Custom utility classes (e.g., .btn, .btn-link)
│       ├── themes.css       # Custom properties & design tokens (colors, fonts)
│       └── animations.css   # Keyframes for motion design
├── astro.config.mjs         # Astro & Vite configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration & Path Aliases
```

## 🧩 Path Aliases

To maintain clean and readable imports, ETHEREAL utilizes TypeScript aliases:

- `@/*` -> `src/*`
- `@/components/*` -> `src/components/*`
- `@/layouts/*` -> `src/layouts/*`
- `@/styles/*` -> `src/styles/*`
- `@/sitedata/*` -> `src/sitedata/*`

## 🏗️ Data-Driven Architecture

ETHEREAL follows a strict **content-logic separation**. 

Astro components in `src/components/sections/` contain **zero hardcoded text**. Instead, they act as purely visual rendering engines that consume data from `src/sitedata/sections.ts`. 

If you need to update a headline, add a pricing tier, or modify an FAQ, you simply update the TypeScript objects in `sitedata`. The UI will reflect these changes automatically, ensuring structural integrity and making internationalization (i18n) a breeze.

## 🎨 Styling System (Tailwind CSS v4)

ETHEREAL leverages the native power of **Tailwind CSS v4** coupled with a modular `@layer` approach to keep CSS maintainable.

1.  **`themes.css`**: The core of the aesthetic. Defines all `--color-*` and `--font-*` variables. Tailwind v4 automatically maps these to utilities (e.g., `--color-primary` becomes `bg-primary` and `text-primary`).
2.  **`components.css`**: Extracts commonly repeated utility chains into clean classes (e.g., `.btn`, `.btn-primary`). Astro components then use these clean classes instead of polluting the HTML.
3.  **`base.css`**: Establishes the baseline typographic rhythm and resets.

### The Component-Extracted Workflow
Instead of:
```html
<button class="bg-primary text-on-primary px-8 py-4 font-label text-xs tracking-widest font-bold hover:bg-primary-container shadow-lg">
```
ETHEREAL uses:
```html
<Button class="btn-primary">
```

## ⚡ Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Start the development server
pnpm dev

# 3. Build for production
pnpm build
```
