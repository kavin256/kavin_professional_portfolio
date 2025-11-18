import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/theme-provider'
import { defaultTheme } from '@/lib/theme-config'

export const metadata: Metadata = {
  title: 'Software Engineer Portfolio',
  description: 'Portfolio website for a software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={defaultTheme === 'dark' ? 'dark' : ''}>
      <body className="antialiased">
        <ThemeProvider defaultTheme={defaultTheme}>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

