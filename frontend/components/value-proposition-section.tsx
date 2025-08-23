"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import type { ValueProposition } from "@/lib/api"

interface ValuePropositionSectionProps {
  valuePropositions: ValueProposition[]
}

export default function ValuePropositionSection({ valuePropositions }: ValuePropositionSectionProps) {
  const [selectedRole, setSelectedRole] = useState(valuePropositions[0]?.role_type || "")

  const selectedProposition = valuePropositions.find((vp) => vp.role_type === selectedRole)

  if (valuePropositions.length === 0) {
    return null
  }

  return (
    <section id="value" className="py-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Value Proposition</h3>
        <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
        <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
          Discover how my expertise aligns with different roles and challenges
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Role Selection */}
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-2xl p-6 shadow-elegant sticky top-24">
              <h4 className="text-xl font-bold text-black mb-6">Select Role</h4>
              <div className="space-y-3">
                {valuePropositions.map((vp) => (
                  <button
                    key={vp.id}
                    onClick={() => setSelectedRole(vp.role_type)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      selectedRole === vp.role_type
                        ? "bg-black text-white shadow-elegant"
                        : "bg-white hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <span className="font-medium">{vp.title}</span>
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-300 ${
                        selectedRole === vp.role_type ? "rotate-90" : "group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Display */}
          <div className="lg:col-span-2">
            {selectedProposition && (
              <div className="glass-effect rounded-2xl p-8 shadow-elegant-lg animate-fade-in-up">
                <h4 className="text-3xl font-bold text-black mb-6">{selectedProposition.title}</h4>
                <div
                  className="text-lg text-gray-700 leading-relaxed prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedProposition.description }}
                />

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a
                    href="mailto:alimohammadnia127@gmail.com"
                    className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium hover:scale-105"
                  >
                    <span>Let's Discuss This Role</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
