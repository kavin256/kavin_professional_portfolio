'use client'

import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Youtube, ExternalLink, FileText } from 'lucide-react'
import { siteConfig } from '@/lib/config/site-config'

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Projects</h1>

      <div className="space-y-8">
        {siteConfig.projects.map((project, index) => (
          <div key={index} className="space-y-3 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <h2 className="text-xl font-semibold text-foreground">{project.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            {(project.github || project.youtube || project.link || project.docs) && (
              <div className="flex flex-wrap gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      View Source Code
                    </Button>
                  </a>
                )}
                {project.docs && (
                  <a href={project.docs} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <FileText className="w-4 h-4" />
                      Docs
                    </Button>
                  </a>
                )}
                {project.youtube && (
                  <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Youtube className="w-4 h-4" />
                      Watch Demo
                    </Button>
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Button>
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
