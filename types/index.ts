/**
 * Type definitions for the portfolio application
 */

export type Theme = 'dark' | 'light' | 'system'

export interface SocialLinks {
  github: string
  linkedin: string
  facebook: string
}

export interface Skills {
  languages: string[]
  frameworks: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  achievements: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  details: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  youtube?: string
  docs?: string
}

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
  experience: Experience[]
  education: Education[]
  projects: Project[]
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
