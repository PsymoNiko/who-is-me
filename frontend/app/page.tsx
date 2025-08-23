"use client"

import { useResumeData } from "@/hooks/useResumeData"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ValuePropositionSection from "@/components/value-proposition-section"
import EducationSection from "@/components/education-section"
import TestimonialsSection from "@/components/testimonials-section"
import LoadingSpinner from "@/components/loading-spinner"
import ErrorMessage from "@/components/error-message"
import ApiStatusBanner from "@/components/api-status-banner"
import AdditionalInfoSection from "@/components/additional-info-section"

export default function ResumePage() {
  const { data, loading, error, isUsingFallback, refetch } = useResumeData()

  if (loading) {
    return <LoadingSpinner />
  }

  if (!data && error && !isUsingFallback) {
    return <ErrorMessage message={error} onRetry={refetch} />
  }

  if (!data) {
    return <ErrorMessage message="No data available" onRetry={refetch} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <ApiStatusBanner isUsingFallback={isUsingFallback} error={error} onRetry={refetch} />
        <HeroSection personalInfo={data.personal_info} />
        <ExperienceSection experiences={data.experiences} />
        <SkillsSection skills={data.skills} />
        <ProjectsSection projects={data.projects} />
        <ValuePropositionSection valuePropositions={data.value_propositions} />
        <TestimonialsSection testimonials={data.testimonials} limit={3} /> {/* Limit to 3 testimonials */}
        <EducationSection education={data.education} languages={data.languages} />
        <AdditionalInfoSection />
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
