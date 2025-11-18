'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                pathname === '/'
                  ? 'text-foreground bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              )}
            >
              About
              {pathname === '/' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
            <Link
              href="/projects"
              className={cn(
                "relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                pathname === '/projects'
                  ? 'text-foreground bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              )}
            >
              Projects
              {pathname === '/projects' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
            <div className="ml-2 pl-2 border-l border-border/40">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

