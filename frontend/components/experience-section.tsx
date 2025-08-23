import { Calendar, Building } from "lucide-react"
import type { Experience } from "@/lib/api"

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  }

  const formatPeriod = (startDate: string, endDate: string | null, isCurrent: boolean) => {
    const start = formatDate(startDate)
    const end = isCurrent ? "Present" : endDate ? formatDate(endDate) : "Present"
    return `${start} – ${end}`
  }

  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Professional Experience</h3>
        <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black via-gray-400 to-gray-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative mb-12 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-black rounded-full border-4 border-white shadow-elegant z-10"></div>

              <div className="ml-20">
                <div className="glass-effect rounded-2xl p-8 shadow-elegant-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-black mb-2">{exp.title}</h4>
                      <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <Building size={16} />
                        <span className="text-lg font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">
                        {formatPeriod(exp.start_date, exp.end_date, exp.is_current)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
