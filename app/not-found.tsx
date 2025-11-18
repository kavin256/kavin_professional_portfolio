import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants/routes'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-12">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Sorry, we could not find the page you are looking for. The page might have been moved or
          deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href={ROUTES.HOME}>Go to Homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={ROUTES.PROJECTS}>View Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
