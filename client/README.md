# Production Developer Portfolio (STVN Reference Architecture)

A modern, high-fidelity developer portfolio inspired by the **STVN Portfolio Template**, engineered with **React 19**, **Vite**, **Tailwind CSS**, and **React Router**. Featuring an interactive 400-cell animated geometric lattice background, complete dark/light mode theming, an animated role typewriter, an About bento grid, an experience timeline, live-search and category-filtered projects with numbered pagination, rich project detail pages, and an engineering blog.

---

## 🌟 Key Features

1. **Pixel-Conscious Geometric Lattice Background**:
   - 400 individual animated cells (20×20 grid) with deterministic pseudo-random duration (3s–7s) and delay (0s–8s).
   - Driven entirely by GPU-accelerated CSS keyframes (`cellPulse` and `cellPulseLight`) with zero main-thread JavaScript execution.
   - Respects `prefers-reduced-motion: reduce` for accessibility.
   - Atmospheric radial ambient light fields for visual depth.

2. **Complete Theme System (Dark & Light Mode)**:
   - Zero-flash theme initialization script injected into `<head>`.
   - Accessible Theme Toggle with smooth Sun/Moon icon transitions.
   - Synchronized with `localStorage` and system color preference (`prefers-color-scheme`).
   - Dedicated color tokens for both modes (`--color-bg`, `--color-text`, `--color-border`, `--color-accent: #ef4444`).

3. **Information Architecture & Multi-Page Routing**:
   - `/`: Landing page with Hero, Typewriter, Bento Grid, Technical Arsenal, Featured Projects, Experience Timeline, Blog Previews, Contact Form, and Footer.
   - `/projects`: All projects listing with real-time text search, category pills, and functional numbered pagination.
   - `/projects/:slug`: Detailed project breakdown featuring overview, capability checklists, technical architecture narrative, and live/source links.
   - `/blog`: Technical articles listing with search, category filtering, and pagination.
   - `/blog/:slug`: Deep-dive article view with formatted prose, syntax-highlighted code blocks, blockquotes, tags, and author biography.
   - `*`: Custom designed 404 error page.

4. **Functional Pagination & Data Filtering**:
   - Full data-driven slicing pipeline: Filter/Search &rarr; Calculate total pages &rarr; Slice items &rarr; Render.
   - Resets to page 1 automatically when search queries or category filters change.
   - Numbered pagination with Previous/Next controls, boundary disabling, and active indicators.

5. **Slide-Out Mobile Navigation**:
   - Responsive off-canvas drawer with smooth translate animation.
   - Backdrop overlay with blur, Escape key listener, and body scroll lock.

6. **Validated Contact Form**:
   - Client-side input validation for Name, Email, Subject, and Message.
   - Accessible error alerts and feedback states.
   - Honest demonstration submission feedback with direct `mailto:` fallback.

---

## 🛠️ Tech Stack

- **Core**: React 19, JavaScript (ES6+), Vite 8
- **Styling**: Tailwind CSS 3.4, PostCSS, Autoprefixer, Custom CSS tokens
- **Routing**: React Router 7 (`react-router-dom`)
- **Icons**: Lucide React & Custom SVG brand components
- **Typography**: Google Fonts Inter & JetBrains Mono

---

## 📁 Project Structure

```
├── public/                 # Static assets & icons
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── BlogCard.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Icons.jsx
│   │   ├── LatticeBackground.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SiteFooter.jsx
│   │   ├── SiteHeader.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Typewriter.jsx
│   ├── data/               # Centralized data modules
│   │   ├── blog.js
│   │   ├── experience.js
│   │   ├── profile.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── pages/              # Application views
│   │   ├── BlogPage.jsx
│   │   ├── BlogPostPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   └── ProjectsPage.jsx
│   ├── App.jsx             # Top-level routing & layout wrapper
│   ├── index.css           # Design tokens, keyframes, bento & card styles
│   └── main.jsx            # React root mount
├── index.html              # Shell HTML with anti-flash script & web fonts
├── package.json            # Scripts & dependencies
├── postcss.config.js       # PostCSS plugins
└── tailwind.config.js      # Tailwind theme tokens & color palette
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Run Lint Checks
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---


