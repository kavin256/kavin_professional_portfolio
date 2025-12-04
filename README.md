# Software Engineering Portfolio

A modern, clean portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Resume Page** (default route): Complete resume sections including:
  - Header with name and title
  - Social media links (GitHub, LinkedIn, Facebook, Email)
  - About/Summary section
  - Skills section
  - Experience section
  - Education section

- **Modern Design**: Clean, minimal single-page design with dark mode support

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

The default theme is set to **dark mode**. To change the default theme, edit `lib/config/theme-config.ts`:

```typescript
export const defaultTheme: 'light' | 'dark' | 'system' = 'dark'
```

You can change it to:

- `'dark'` - Dark theme (default)
- `'light'` - Light theme
- `'system'` - Follows system preference

### Update Personal Information

All personal information is centralized in `lib/config/site-config.ts`. Edit this file to update:

- Name and title
- Profile image path
- Email
- Social media links (GitHub, LinkedIn, Facebook)
- About/Summary section
- Skills (languages and frameworks)
- Experience
- Education

This centralized configuration makes it easy to manage all your portfolio content in one place.

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
