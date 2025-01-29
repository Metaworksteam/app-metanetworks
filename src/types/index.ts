import { UserRole, ComplianceStatus } from "@prisma/client"

export interface User {
  id: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | null
  image?: string | null
  role: UserRole
  lastLogin?: Date | null
  createdAt: Date
  updatedAt: Date
}

export type ExtendedUser = User & {
  // Add any additional user properties here
}

export interface Compliance {
  id: string
  title: string
  description: string
  status: ComplianceStatus
  assignedToId: string
  startDate: Date
  dueDate: Date
  completedDate?: Date | null
  createdBy: string
  createdAt: Date
  updatedAt: Date
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
    icon?: any
  }[]
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
}
