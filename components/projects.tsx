import { ProjectCard } from "@/components/project-card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "NFTS App",
    description:
      "A modern NFT marketplace application built with React.js and Styled Components. Features responsive design, smooth animations, and an intuitive user interface for browsing and exploring NFT collections.",
    technologies: ["React.js", "Styled Components", "JavaScript"],
    demoUrl: "https://adlene1.github.io/NFT-app/",
    codeUrl: "https://github.com/Adlene1/NFT-app",
    image: "/nft-marketplace-app-interface.jpg",
  },
  {
    title: "BOLDO Website",
    description:
      "A professional business landing page built with Next.js featuring server-side rendering, optimized performance, and modern design patterns. Showcases best practices in Next.js development.",
    technologies: ["Next.js", "React.js", "CSS"],
    demoUrl: "https://boldo-xi.vercel.app/",
    codeUrl: "https://github.com/Adlene1/Boldo",
    image: "/modern-business-landing-page.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <a
            href="https://github.com/adlene1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          >
            View All <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
