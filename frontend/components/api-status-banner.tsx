"use client"

import { AlertTriangle, Wifi, WifiOff } from "lucide-react"

interface ApiStatusBannerProps {
  isUsingFallback: boolean
  error: string | null
  onRetry: () => void
}

export default function ApiStatusBanner({ isUsingFallback, error, onRetry }: ApiStatusBannerProps) {
  if (!isUsingFallback && !error) return null

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {isUsingFallback ? (
            <WifiOff className="h-5 w-5 text-yellow-400" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
          )}
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm text-yellow-700">
            {isUsingFallback ? (
              <>
                <strong>Demo Mode:</strong> Unable to connect to the API server. Displaying sample data.
                {error && <span className="block mt-1 text-xs">Error: {error}</span>}
              </>
            ) : (
              <>
                <strong>Connection Issue:</strong> {error}
              </>
            )}
          </p>
        </div>
        <div className="ml-3">
          <button
            onClick={onRetry}
            className="inline-flex items-center space-x-1 text-sm text-yellow-700 hover:text-yellow-800 underline"
          >
            <Wifi className="h-4 w-4" />
            <span>Retry</span>
          </button>
        </div>
      </div>
    </div>
  )
}
