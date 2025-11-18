/**
 * Environment variables configuration
 * This file centralizes access to environment variables with proper validation
 */

/**
 * Get an environment variable value
 * @param key - The environment variable key
 * @param defaultValue - Optional default value if the variable is not set
 * @returns The environment variable value or default value
 */
function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key]
  if (!value && !defaultValue) {
    console.warn(`Environment variable ${key} is not set`)
    return ''
  }
  return value || defaultValue || ''
}

/**
 * Public environment variables (exposed to the browser)
 */
export const env = {
  /**
   * The base URL of the site
   */
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3001'),

  /**
   * Google Analytics ID (optional)
   */
  gaId: process.env.NEXT_PUBLIC_GA_ID,
} as const

/**
 * Server-only environment variables
 */
export const serverEnv = {
  /**
   * Contact email for server-side operations (optional)
   */
  contactEmail: getEnvVar('CONTACT_EMAIL'),
} as const
