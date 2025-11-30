import Image from 'next/image'
import { Github, Linkedin, Facebook, Mail, Calendar, ExternalLink, Youtube, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site-config'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src={siteConfig.profileImage}
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{siteConfig.firstName} {siteConfig.lastName}</h1>
        <p className="text-xl text-muted-foreground mb-6">{siteConfig.title}</p>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Schedule Chat Button */}
        <div className="mt-8">
          <a href={siteConfig.calendarLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
          </a>
        </div>
      </div>

      {/* Summary Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
        <p className="text-muted-foreground leading-relaxed">{siteConfig.summary}</p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.skills.languages.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.skills.frameworks.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Experience</h2>
        <div className="space-y-6">
          {siteConfig.experience.map((job, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
              <p className="text-muted-foreground mb-2">
                {job.company} | {job.period}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {job.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Education</h2>
        <div className="space-y-6">
          {siteConfig.education.map((edu, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-muted-foreground mb-2">
                {edu.institution} | {edu.period}
              </p>
              <p className="text-muted-foreground">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Projects</h2>
        <div className="space-y-6">
          {siteConfig.projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">{tech}</Badge>
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
      </section>
    </div>
  )
}
