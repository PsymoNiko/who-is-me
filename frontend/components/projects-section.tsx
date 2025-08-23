import { ExternalLink, Github, Code } from "lucide-react"
import type { Project } from "@/lib/api"

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h3>
        <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group glass-effect rounded-2xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="flex space-x-3">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <h4 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
              {project.name}
            </h4>

            <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
