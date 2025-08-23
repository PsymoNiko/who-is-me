"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import type { Skill } from "@/lib/api"

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const chartData = skills.map((skill) => ({
    skill: skill.name,
    years: skill.years_experience,
    proficiency: skill.proficiency_level,
  }))

  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  const categoryColors = {
    programming: "bg-black",
    framework: "bg-gray-800",
    database: "bg-gray-600",
    tool: "bg-gray-400",
    cloud: "bg-gray-300",
  }

  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Skills</h3>
        <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        {/* Skills Chart */}
        <div className="glass-effect rounded-2xl p-8 shadow-elegant-lg">
          <h4 className="text-2xl font-bold text-black mb-6 text-center">Experience Overview</h4>
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="horizontal" margin={{ top: 20, right: 30, left: 80, bottom: 5 }}>
                <XAxis type="number" domain={[0, "dataMax"]} tick={{ fill: "#666666", fontSize: 12 }} />
                <YAxis
                  type="category"
                  dataKey="skill"
                  width={80}
                  tick={{ fill: "#000000", fontSize: 12, fontWeight: 500 }}
                />
                <Tooltip
                  formatter={(value, name) => [`${value} years`, name === "years" ? "Experience" : "Proficiency"]}
                  labelStyle={{ color: "#000000", fontWeight: "bold" }}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e5e5",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar
                  dataKey="years"
                  fill="#000000"
                  radius={[0, 4, 4, 0]}
                  className="hover:opacity-80 transition-opacity"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skills by Category */}
        <div className="space-y-6">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="glass-effect rounded-xl p-6 shadow-elegant">
              <h4 className="text-xl font-bold text-black mb-4 capitalize">{category.replace("_", " ")}</h4>
              <div className="grid grid-cols-2 gap-3">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${categoryColors[skill.category as keyof typeof categoryColors] || "bg-black"} transition-all duration-500`}
                          style={{ width: `${(skill.years_experience / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 w-8">{skill.years_experience}y</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
