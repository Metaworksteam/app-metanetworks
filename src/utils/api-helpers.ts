import { ApiResponse } from "@/types"

export async function handleApiResponse<T>(
  promise: Promise<Response>
): Promise<ApiResponse<T>> {
  try {
    const response = await promise
    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: data.error || "An error occurred",
      }
    }

    return {
      success: true,
      data: data as T,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred",
    }
  }
}

export function formatApiError(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  if (typeof error === "string") {
    return error
  }
  return "An unknown error occurred"
}

export function createApiUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || ""
  return `${baseUrl}/api${path}`
}
