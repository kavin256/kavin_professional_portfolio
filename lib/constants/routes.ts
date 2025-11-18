/**
 * Application route constants
 */

export const ROUTES = {
  HOME: '/',
  PROJECTS: '/projects',
} as const

export type Route = (typeof ROUTES)[keyof typeof ROUTES]
