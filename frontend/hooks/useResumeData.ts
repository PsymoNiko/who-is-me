"use client"

import { useState, useEffect } from "react"
import apiClient, { type ResumeData } from "@/lib/api"
import { fallbackResumeData } from "@/lib/fallback-data"

interface UseResumeDataReturn {
  data: ResumeData | null
  loading: boolean
  error: string | null
  isUsingFallback: boolean
  refetch: () => Promise<void>
}

export function useResumeData(): UseResumeDataReturn {
  const [data, setData] = useState<ResumeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isUsingFallback, setIsUsingFallback] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      setIsUsingFallback(false)

      console.log("Attempting to fetch resume data from API...")

      // First, try a health check
      const isHealthy = await apiClient.healthCheck()
      if (!isHealthy) {
        console.warn("API health check failed, using fallback data")
        setData(fallbackResumeData)
        setIsUsingFallback(true)
        return
      }

      const resumeData = await apiClient.getResumeData()
      console.log("Successfully fetched data from API")
      setData(resumeData)
      setIsUsingFallback(false)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred"
      console.error("Error fetching resume data:", errorMessage)

      // Use fallback data instead of showing error
      console.log("Using fallback data due to API error")
      setData(fallbackResumeData)
      setIsUsingFallback(true)
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    data,
    loading,
    error,
    isUsingFallback,
    refetch: fetchData,
  }
}
