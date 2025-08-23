"use client"

import { useResumeData } from "@/hooks/useResumeData"
import Navigation from "@/components/navigation"
import LoadingSpinner from "@/components/loading-spinner"
import ErrorMessage from "@/components/error-message"
import ApiStatusBanner from "@/components/api-status-banner"
import { Quote } from "lucide-react"
import Link from "next/link"

export default function AllTestimonialsPage() {
  const { data, loading, error, isUsingFallback, refetch } = useResumeData()

  if (loading) {
    return <LoadingSpinner />
  }

  if (!data && error && !isUsingFallback) {
    return <ErrorMessage message={error} onRetry={refetch} />
  }

  if (!data || !data.testimonials || data.testimonials.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <Navigation />
        <main className="container mx-auto px-6 py-12 text-center">
          <ApiStatusBanner isUsingFallback={isUsingFallback} error={error} onRetry={refetch} />
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Recommendations</h3>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">No recommendations available at the moment.</p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
          >
            Go Back Home
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <ApiStatusBanner isUsingFallback={isUsingFallback} error={error} onRetry={refetch} />

        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">All Recommendations</h3>
          <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            A comprehensive collection of testimonials from colleagues and managers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.testimonials.map((testimonial, index) => (
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

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
          >
            Go Back Home
          </Link>
        </div>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{data.personal_info.name}</h3>
            <p className="text-gray-300 mb-6">
              &copy; 2024 {data.personal_info.name}. Interactive resume showcasing modern development practices.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href={`mailto:${data.personal_info.email}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Email
              </a>
              <a
                href={data.personal_info.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={data.personal_info.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
