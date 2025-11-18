'use client'

import { usePathname } from 'next/navigation'
import { NavLink } from '@/components/features/NavLink'
import { ThemeToggle } from '@/components/features/theme-toggle'
import { ROUTES } from '@/lib/constants/routes'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end">
          <div className="flex items-center gap-1">
            <NavLink href={ROUTES.HOME} isActive={pathname === ROUTES.HOME}>
              About
            </NavLink>
            <NavLink href={ROUTES.PROJECTS} isActive={pathname === ROUTES.PROJECTS}>
              Projects
            </NavLink>
            <div className="ml-2 pl-2 border-l border-border/40">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
