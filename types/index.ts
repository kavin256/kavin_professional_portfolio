/**
 * Type definitions for the portfolio application
 */

/** Theme options for the application */
export type Theme = 'dark' | 'light' | 'system'

/** Social media links configuration */
export interface SocialLinks {
  github: string
  linkedin: string
  facebook: string
}

/** Skills categorized by type */
export interface Skills {
  languages: readonly string[]
  frameworks: readonly string[]
}

/** Work experience entry */
export interface Experience {
  title: string
  company: string
  period: string
  achievements: readonly string[]
}

/** Education entry */
export interface Education {
  degree: string
  institution: string
  period: string
  details: string
}

/** Project entry with optional links */
export interface Project {
  title: string
  description: string
  technologies: readonly string[]
  link?: string
  github?: string
  youtube?: string
  docs?: string
}

/** Complete site configuration */
export interface SiteConfig {
  firstName: string
  lastName: string
  title: string
  email: string
  profileImage: string
  summary: string
  calendarLink: string
  socialLinks: SocialLinks
  skills: Skills
  experience: readonly Experience[]
  education: readonly Education[]
  projects: readonly Project[]
}

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export interface NavLinkProps {
  href: string
  isActive: boolean
  children: React.ReactNode
}
