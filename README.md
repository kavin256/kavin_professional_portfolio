# Software Engineer Portfolio

A modern, clean portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **About Page** (default route): Complete resume sections including:
  - Header with name and title
  - Social media links (GitHub, LinkedIn, Facebook, Email)
  - About/Summary section
  - Skills section
  - Experience section
  - Education section

- **Projects Page**: Showcase of software engineering projects

- **Modern Design**: Clean, responsive design with dark mode support

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Customization

### Theme Configuration

The default theme is set to **dark mode**. To change the default theme, edit `lib/theme-config.ts`:

```typescript
export const defaultTheme: 'light' | 'dark' | 'system' = 'dark'
```

You can change it to:
- `'dark'` - Dark theme (default)
- `'light'` - Light theme
- `'system'` - Follows system preference

Users can toggle between light and dark themes using the theme toggle button in the navigation bar. The preference is saved in localStorage.

### Update Personal Information

Edit `app/page.tsx` to update:
- Name and title
- Social media links (GitHub, LinkedIn, Facebook, Email)
- About section
- Skills
- Experience
- Education

### Update Projects

Edit `app/projects/page.tsx` to add or modify your projects.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 18** - UI library
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library

