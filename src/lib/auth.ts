import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email"
import { Resend } from "resend"

const prisma = new PrismaClient()
const resend = new Resend(process.env.RESEND_API_KEY)

export const authOptions: NextAuthOptions = {
  debug: true, // Enable debug logging
  logger: {
    error(code, metadata) {
      console.error('NextAuth Error:', { code, metadata })
    },
    warn(code) {
      console.warn('NextAuth Warning:', code)
    },
    debug(code, metadata) {
      console.debug('NextAuth Debug:', { code, metadata })
    }
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          scope: "openid email profile"
        }
      },
      profile(profile) {
        console.log('Google Profile:', profile) // Log profile details
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: 'USER' // Default role for new users
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier: email, url, provider }) => {
        try {
          await resend.emails.send({
            from: provider.from as string,
            to: email,
            subject: "Your Cypher Compliance Login Link",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Login to Cypher Compliance</h2>
                <p>Click the link below to log in:</p>
                <a href="${url}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                  Log In
                </a>
                <p>This link will expire in 1 hour.</p>
              </div>
            `
          })
        } catch (error) {
          console.error('Failed to send verification email', error)
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Optionally, you can add additional checks here
      return true
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to dashboard after login
      return `${baseUrl}/dashboard`
    },
    async session({ session, user }) {
      session.user.id = user.id
      session.user.role = user.role
      return session
    }
  },
  events: {
    async signIn(message) {
      // Update last login time
      await prisma.user.update({
        where: { id: message.user.id },
        data: { lastLogin: new Date() }
      })
    }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request'
  }
}

export default NextAuth(authOptions)
