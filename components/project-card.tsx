import Image from "next/image"
import { ExternalLink, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  demoUrl: string
  codeUrl: string
  image: string
}

export function ProjectCard({ title, description, technologies, demoUrl, codeUrl, image }: ProjectCardProps) {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full font-medium">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            asChild
            variant="outline"
            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary bg-transparent"
          >
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Demo <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1 bg-transparent">
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Code <Code className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
