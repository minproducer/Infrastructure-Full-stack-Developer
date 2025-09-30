# 🚀 Infrastructure Full-stack Developer - Job Description Website

A modern, interactive job description website for **Infrastructure Full-stack Developer** position. Built with **React 18**, **TypeScript**, **Vite**, and cutting-edge web technologies. Features stunning 3D animations, glassmorphism effects, and performance optimizations.

## 🌐 Live Demo

**[View Live Site](https://hr.minproducer.com/fullstackdevInfrastructure/)**

## 📦 Repository

**GitHub Repository**: [Infrastructure-Full-stack-Developer](https://github.com/minproducer/Infrastructure-Full-stack-Developer)

## ✨ Features

- 🎨 **Modern UI/UX**: Glassmorphism design with gradient animations
- 🌟 **Interactive Effects**: Cursor glow, sparkle overlays, floating particles
- 📱 **Responsive Design**: Mobile-first approach with smooth animations
- ⚡ **Performance Optimized**: Smart loading, hardware acceleration, device detection
- 🎛️ **User Controls**: Settings panel for performance and accessibility
- 🔧 **Developer Experience**: TypeScript, ESLint, hot reload

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS v3 + Custom animations
- **3D Graphics**: Three.js + @react-three/fiber + @react-three/drei (ready to use)
- **Animations**: Framer Motion + Custom CSS keyframes
- **State Management**: Zustand with persistence
- **Icons**: Lucide React
- **Build Tool**: Vite with Rolldown (experimental)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/JDFullStack_TS.git
cd JDFullStack_TS
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view the project in the browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push to GitHub**: The site automatically deploys when you push to the `main` branch
2. **Enable GitHub Pages**: Go to repository Settings → Pages → Source → GitHub Actions
3. **Setup Custom Domain**: Configure DNS to point `hr.minproducer.com` to GitHub Pages
4. **Access your site**: `https://hr.minproducer.com/fullstackdevInfrastructure/`

### Manual Deployment

```bash
# Build and deploy manually
npm run deploy
```

### Setup Steps

1. **Fork/Clone this repository**
2. **Update the base path** in `vite.config.ts`:
   ```typescript
   base: '/your-repository-name/',
   ```
3. **Update the live demo link** in README.md
4. **Push to GitHub** and enable Pages in repository settings

### Project Structure

```
src/
├── components/
│   ├── sections/     # Page sections (Landing, About, etc.)
│   └── ui/          # Reusable UI components
├── lib/             # Utilities and configurations
├── hooks/           # Custom React hooks
└── styles/          # Global styles and Tailwind config
```

## Position Overview

**Infrastructure Full-stack Developer (Middle Level)**

- **Salary**: $1,800 – $3,000 NET/Gross (Higher for exceptional candidates)
- **Location**: Vietnam (Remote collaboration with Singapore team)
- **Team**: ~100 Singapore engineers + ~15 Vietnam team members
- **Languages**: Python, Go (core), plus Bazel, Ansible, Nomad
- **Focus**: Development role (NOT support) - build distributed systems from scratch

⚠️ **This is a development-focused position, not a support role.**

## Key Sections

- 🏠 **Landing**: Position overview and call-to-action
- 📋 **About**: Role details and team highlights
- 🛠️ **Tech Stack**: Python, Go, infrastructure tools
- 👥 **Team**: Singapore + Vietnam team structure
- 🎯 **Responsibilities**: Infrastructure development, monitoring, distributed systems
- 📝 **Requirements**: Must-have skills and nice-to-have qualifications
- 💰 **Benefits**: Salary, insurance, 13th month bonus, remote work
- 📞 **Interview**: 3-round online technical process
- 📱 **Contact**: Zalo, WhatsApp, direct message options

## Features

- 🎨 **Modern Design**: Glassmorphism effects with gradient backgrounds
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance**: Built-in performance monitoring and optimization
- 🎯 **Accessibility**: WCAG compliant with proper ARIA labels
- 🌈 **Animations**: Smooth transitions with Framer Motion
- 🎮 **3D Effects**: Three.js integration for interactive elements
- 🔄 **State Management**: Zustand with localStorage persistence
- 🚀 **Fast Development**: Hot reload with Vite

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
