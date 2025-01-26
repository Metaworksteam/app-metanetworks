"use client"

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaSignOutAlt } from 'react-icons/fa'

export default function SignOutPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      await signOut({ 
        callbackUrl: '/auth/signin',
        redirect: true 
      })
    } catch (error) {
      console.error('Sign Out Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Out</CardTitle>
          <CardDescription>
            Are you sure you want to sign out of Cypher Compliance?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button 
              variant="destructive" 
              className="w-full" 
              onClick={handleSignOut}
              disabled={isLoading}
            >
              <FaSignOutAlt className="mr-2" /> 
              {isLoading ? 'Signing Out...' : 'Sign Out'}
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => window.location.href = '/'}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
