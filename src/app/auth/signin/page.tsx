"use client"

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGoogle, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleOAuthSignIn = async (provider: 'google' | 'github') => {
    setIsLoading(true)
    try {
      await signIn(provider, { callbackUrl: '/' })
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
        callbackUrl: '/',
        redirect: true 
      })
    } catch (error) {
      console.error('Email Sign In Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In to Cypher Compliance</CardTitle>
          <CardDescription>
            Secure your compliance journey with multiple authentication methods
          </CardDescription>
        </CardHeader>
        <CardContent>
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
              <Label htmlFor="email">Email Address</Label>
              <Input 
                type="email" 
                id="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
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
        </CardContent>
      </Card>
    </div>
  )
}
