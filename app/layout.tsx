import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/features/Navigation'
import { ThemeProvider } from '@/components/features/theme-provider'
import { SkipToContent } from '@/components/features/SkipToContent'
import { defaultTheme } from '@/lib/config/theme-config'
import { siteConfig } from '@/lib/config/site-config'
import { env } from '@/lib/config/env'

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: `${siteConfig.firstName} ${siteConfig.lastName} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.firstName} ${siteConfig.lastName}`,
  },
  description: siteConfig.summary,
  keywords: [
    'software engineer',
    'portfolio',
    'web development',
    ...siteConfig.skills.languages,
    ...siteConfig.skills.frameworks,
  ],
  authors: [{ name: `${siteConfig.firstName} ${siteConfig.lastName}`, url: siteConfig.socialLinks.github }],
  creator: `${siteConfig.firstName} ${siteConfig.lastName}`,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.siteUrl,
    title: `${siteConfig.firstName} ${siteConfig.lastName} | ${siteConfig.title}`,
    description: siteConfig.summary,
    siteName: `${siteConfig.firstName} ${siteConfig.lastName}'s Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.firstName} ${siteConfig.lastName} | ${siteConfig.title}`,
    description: siteConfig.summary,
    creator: '@' + (siteConfig.firstName + siteConfig.lastName).toLowerCase(),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={defaultTheme === 'dark' ? 'dark' : ''}>
      <body className="antialiased">
        <ThemeProvider defaultTheme={defaultTheme}>
          <SkipToContent />
          {/* <Navigation /> */}
          <main id="main-content" className="min-h-screen" tabIndex={-1}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
