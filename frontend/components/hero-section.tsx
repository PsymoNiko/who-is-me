import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import type { PersonalInfo } from "@/lib/api"

interface HeroSectionProps {
  personalInfo: PersonalInfo
}

export default function HeroSection({ personalInfo }: HeroSectionProps) {
  return (
    <section id="hero" className="py-20 text-center animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 leading-tight">{personalInfo.name}</h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 font-light mb-8 tracking-wide">{personalInfo.title}</h2>
        </div>

        <div className="glass-effect rounded-2xl p-8 mb-8 shadow-elegant-lg">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {personalInfo.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass-effect rounded-xl p-6 shadow-elegant">
            <h3 className="text-lg font-semibold mb-4 text-black">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              {personalInfo.github_url && (
                <a
                  href={personalInfo.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <Github size={20} />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              )}
              {personalInfo.linkedin_url && (
                <a
                  href={personalInfo.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <Linkedin size={20} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              )}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-6 shadow-elegant">
            <h3 className="text-lg font-semibold mb-4 text-black">Contact Info</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+989102001647</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={16} />
                <span className="text-sm">Tehran, Iran</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="#experience"
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium hover:scale-105 shadow-elegant"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  )
}
