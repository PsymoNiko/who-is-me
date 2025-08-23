"use client"

import { Quote, ArrowRight } from "lucide-react"
import type { Testimonial } from "@/lib/api"
import Link from "next/link"

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  limit?: number // Optional limit prop
}

export default function TestimonialsSection({ testimonials, limit = 3 }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null // Don't render if no testimonials are provided
  }

  const displayedTestimonials = testimonials.slice(0, limit)
  const hasMoreTestimonials = testimonials.length > limit

  return (
    <section id="testimonials" className="py-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Recommendations</h3>
        <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
        <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">What colleagues and managers say about my work</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedTestimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="glass-effect rounded-2xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Quote size={48} className="text-gray-300 mb-6" />
            <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-black font-bold text-lg">{testimonial.author_name}</p>
              <p className="text-gray-600 text-sm">
                {testimonial.author_title}, {testimonial.author_company}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {new Date(testimonial.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {hasMoreTestimonials && (
        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium hover:scale-105"
          >
            <span>View All Recommendations</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </section>
  )
}
