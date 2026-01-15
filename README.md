# Portfolio Website

A modern, animated portfolio website built with Next.js, React Spring Parallax, and Tailwind CSS.

## Features

- ✨ Smooth parallax scrolling animations
- 🎨 Beautiful gradient backgrounds for each section
- 📱 Fully responsive design
- 🚀 Optimized for performance
- 🌈 Multiple color-themed sections

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
```

This will create an `out` folder with static files ready for deployment.

## Deploy to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main` branch

3. **Your site will be available at:**
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Manual Deployment

1. **Build the static site:**
   ```bash
   npm run export
   ```

2. **Push the `out` folder to the `gh-pages` branch:**
   ```bash
   git subtree push --prefix out origin gh-pages
   ```

   Or use the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
   
   Then add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run export && gh-pages -d out"
   }
   ```

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
└── next.config.ts        # Next.js configuration
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React Spring Parallax](https://www.react-spring.dev/) - Parallax animations
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
