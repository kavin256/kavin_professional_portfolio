export default function ProjectsLoading() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="h-12 w-48 bg-muted animate-pulse rounded-md mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="h-6 w-3/4 bg-muted animate-pulse rounded-md" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted animate-pulse rounded-md" />
              <div className="h-4 w-full bg-muted animate-pulse rounded-md" />
              <div className="h-4 w-2/3 bg-muted animate-pulse rounded-md" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="h-6 w-16 bg-muted animate-pulse rounded-md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
