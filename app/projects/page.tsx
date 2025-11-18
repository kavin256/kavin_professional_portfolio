import { Badge } from '@/components/ui/badge'
import { siteConfig } from '@/lib/config/site-config'

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteConfig.projects.map((project, index) => (
          <div key={index} className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">{project.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
