# Shanjil Tizu - Portfolio

A stunning personal portfolio website featuring a modern **liquid glass design** with glassmorphism effects, fluid animations, beautiful visual depth, and a seamless dark/light mode toggle.

## Design & Features

- **Dark / Light Mode**: Interactive theme toggle switch with fluid transitions and preference persistence via `localStorage`.
- **Liquid Glass Aesthetic**: Beautiful glassmorphism with blur effects, transparency, and layered depth
- **Fluid Animations**: Animated floating orbs, gradient backgrounds, and smooth hover translations
- **Modern UI**: Glass cards, glowing accents, hover effects, and subtle micro-interactions
- **Responsive**: Fully responsive design for all screen sizes
- **Fast & Modern**: Built with TanStack Start, React 19, and Vite

## Tech Stack

- **Framework**: TanStack Start (React)
- **Styling**: Tailwind CSS 4 with custom glass effects
- **Typography**: JetBrains Mono
- **Build Tool**: Vite 8
- **Deployment**: GitHub Pages

## Live Demo

Visit: https://shanjiltizu.github.io/portfo/

## Deployment Instructions

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `portfo`
3. Make it public
4. **Do not** initialize with README, .gitignore, or license (we already have these)

### Step 2: Push the Code

Run these commands in the project directory:

```bash
git branch -M main
git remote add origin https://github.com/Shanjiltizu/portfo.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings → Pages
2. Under "Build and deployment":
   - Source: Select "GitHub Actions"
3. The workflow will automatically deploy your site

### Step 4: Access Your Site

Your portfolio will be live at:
**https://shanjiltizu.github.io/portfo/**

## Local Development

You can use either Bun or NPM:

```bash
# Install dependencies
bun install   # or npm install

# Start development server
bun run dev   # or npm run dev

# Build for production
bun run build # or npm run build

# Preview production build
bun run preview # or npm run preview
```

## Customization

All content is in `src/content.ts`. Edit this file to update:

- Personal info (name, location, tagline)
- Work experience
- Projects
- Skills
- Certifications
- Achievements
- Contact information

## License

MIT License - feel free to use this design for your own portfolio!
