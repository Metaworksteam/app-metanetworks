import "next-auth"
import { UserRole } from "@prisma/client"

declare module "next-auth" {
  interface User {
    id: string
    role: UserRole
    lastLogin?: Date
  }

  interface Session {
    user: User & {
      id: string
      name?: string
      email?: string
      image?: string
      role: UserRole
    }
  }
}

// Extend the JWT token to include custom properties
declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: UserRole
  }
}
