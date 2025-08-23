import { GraduationCap, Globe } from "lucide-react"
import type { Education, Language } from "@/lib/api"

interface EducationSectionProps {
  education: Education[]
  languages: Language[]
}

export default function EducationSection({ education, languages }: EducationSectionProps) {
  return (
    <section id="education" className="py-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Education & Languages</h3>
        <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass-effect rounded-2xl p-8 shadow-elegant-lg">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-black">Education</h4>
          </div>

          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-4 border-black pl-6">
                <h5 className="text-lg font-bold text-black mb-1">{edu.degree}</h5>
                <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-500 text-sm mb-2">
                  {edu.start_year} – {edu.end_year}
                </p>
                {edu.field_of_study && <p className="text-gray-600 text-sm">{edu.field_of_study}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-8 shadow-elegant-lg">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-black">Languages</h4>
          </div>

          <div className="space-y-4">
            {languages.map((language) => (
              <div key={language.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-lg font-medium text-black">{language.name}</span>
                <span className="text-gray-600 font-medium">({language.proficiency})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
