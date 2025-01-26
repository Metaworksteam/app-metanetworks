import { User } from "@prisma/client"

export type ExtendedUser = User & {
  // Add any additional user properties here
}

export interface AuthConfig {
  providers: any[]
  callbacks: {
    session: (params: { session: any; user: any }) => Promise<any>
    jwt: (params: { token: any; user: any }) => Promise<any>
  }
  pages: {
    signIn: string
    signOut: string
    error: string
  }
}

export interface DashboardConfig {
  mainNav: {
    title: string
    href: string
    icon?: React.ComponentType
  }[]
  sidebarNav: {
    title: string
    href: string
    icon?: React.ComponentType
  }[]
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
