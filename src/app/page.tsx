"use client"

import { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  FaShieldAlt, 
  FaClipboardList, 
  FaChartLine, 
  FaGoogle, 
  FaGithub, 
  FaEnvelope 
} from 'react-icons/fa'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleOAuthSignIn = async (provider: 'google' | 'github') => {
    setIsLoading(true)
    try {
      await signIn(provider, { callbackUrl: '/dashboard' })
    } catch (error) {
      console.error('OAuth Sign In Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signIn('email', { 
        email, 
        callbackUrl: '/dashboard',
        redirect: true 
      })
    } catch (error) {
      console.error('Email Sign In Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaShieldAlt className="text-2xl text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Cypher Compliance</span>
        </div>
        <div className="space-x-4">
          <Link href="/auth/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/auth/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Simplify Your Compliance Journey
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Streamline security compliance, manage tasks, and maintain robust audit trails 
          with our comprehensive compliance management platform.
        </p>

        {/* Authentication Section */}
        <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
          
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => handleOAuthSignIn('google')}
              disabled={isLoading}
            >
              <FaGoogle className="mr-2" /> Continue with Google
            </Button>

            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => handleOAuthSignIn('github')}
              disabled={isLoading}
            >
              <FaGithub className="mr-2" /> Continue with GitHub
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={handleEmailSignIn} className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-3 py-2 border rounded-md"
              />
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                <FaEnvelope className="mr-2" /> 
                {isLoading ? 'Sending...' : 'Send Magic Link'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaClipboardList className="mr-3 text-blue-600" />
                Task Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Effortlessly track and manage compliance tasks with our 
                intuitive task management system.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaShieldAlt className="mr-3 text-green-600" />
                Security Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Ensure your organization meets the highest security 
                and compliance standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaChartLine className="mr-3 text-purple-600" />
                Reporting & Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Gain insights with comprehensive reporting and 
                real-time compliance analytics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Cypher Compliance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
