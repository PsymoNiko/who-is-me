// API configuration and types
export interface ApiConfig {
  baseUrl: string
  timeout?: number
}

export interface PersonalInfo {
  id: number
  name: string
  title: string
  description: string
  email: string
  github_url: string
  linkedin_url: string
}

export interface Experience {
  id: number
  title: string
  company: string
  start_date: string
  end_date: string | null
  is_current: boolean
  achievements: string[]
}

export interface Skill {
  id: number
  name: string
  years_experience: number
  proficiency_level: number
  category: string
}

export interface Project {
  id: number
  name: string
  description: string
  url: string
  github_url?: string
  tags: string[]
  featured: boolean
}

export interface Education {
  id: number
  degree: string
  institution: string
  start_year: number
  end_year: number
  field_of_study: string
}

export interface Language {
  id: number
  name: string
  proficiency: string
}

export interface ValueProposition {
  id: number
  role_type: string
  title: string
  description: string
}

export interface Testimonial {
  id: number
  quote: string
  author_name: string
  author_title: string
  author_company: string
  date: string
}

export interface ResumeData {
  personal_info: PersonalInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  education: Education[]
  languages: Language[]
  value_propositions: ValueProposition[]
  testimonials: Testimonial[] // Added testimonials
}

// API client class with enhanced error handling
class ApiClient {
  private baseUrl: string
  private timeout: number

  constructor(config: ApiConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "") // Remove trailing slash
    this.timeout = config.timeout || 10000
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`

    // Log the request for debugging
    console.log(`Making API request to: ${url}`)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.timeout)

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorText = await response.text().catch(() => "Unknown error")
        throw new Error(`HTTP ${response.status}: ${errorText}`)
      }

      const data = await response.json()
      console.log(`API response from ${endpoint}:`, data)
      return data
    } catch (error) {
      clearTimeout(timeoutId)

      if (error instanceof Error) {
        if (error.name === "AbortError") {
          throw new Error(`Request timeout after ${this.timeout}ms`)
        }
        if (error.message.includes("fetch")) {
          throw new Error(
            `Network error: Unable to connect to ${this.baseUrl}. Please check if the Django server is running.`,
          )
        }
        throw error
      }

      throw new Error("Unknown error occurred")
    }
  }

  // Add a health check method
  async healthCheck(): Promise<boolean> {
    try {
      await this.request("/api/health/", { method: "GET" })
      return true
    } catch {
      return false
    }
  }

  async getPersonalInfo(): Promise<PersonalInfo> {
    return this.request<PersonalInfo>("/api/personal-info/")
  }

  async getExperiences(): Promise<Experience[]> {
    return this.request<Experience[]>("/api/experiences/")
  }

  async getSkills(): Promise<Skill[]> {
    return this.request<Skill[]>("/api/skills/")
  }

  async getProjects(): Promise<Project[]> {
    return this.request<Project[]>("/api/projects/")
  }

  async getEducation(): Promise<Education[]> {
    return this.request<Education[]>("/api/education/")
  }

  async getLanguages(): Promise<Language[]> {
    return this.request<Language[]>("/api/languages/")
  }

  async getValuePropositions(): Promise<ValueProposition[]> {
    return this.request<ValueProposition[]>("/api/value-propositions/")
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.request<Testimonial[]>("/api/testimonials/")
  }

  async getResumeData(): Promise<ResumeData> {
    try {
      // Try to fetch all data in parallel
      const [personal_info, experiences, skills, projects, education, languages, value_propositions, testimonials] =
        await Promise.all([
          this.getPersonalInfo(),
          this.getExperiences(),
          this.getSkills(),
          this.getProjects(),
          this.getEducation(),
          this.getLanguages(),
          this.getValuePropositions(),
          this.getTestimonials(), // Fetch testimonials
        ])

      return {
        personal_info,
        experiences,
        skills,
        projects,
        education,
        languages,
        value_propositions,
        testimonials, // Include testimonials
      }
    } catch (error) {
      console.error("Error fetching resume data:", error)
      throw error
    }
  }
}

// Create API client instance
const apiClient = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  timeout: 10000,
})

export default apiClient
