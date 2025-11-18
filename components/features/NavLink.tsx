'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { NavLinkProps } from '@/types'

export function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
        isActive
          ? 'text-foreground bg-primary/10'
          : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
      )}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
      )}
    </Link>
  )
}
