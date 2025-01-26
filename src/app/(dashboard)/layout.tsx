"use client"

import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { 
  FaHome, 
  FaClipboardList, 
  FaCog, 
  FaUserCircle, 
  FaSignOutAlt 
} from 'react-icons/fa'
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"

export default function DashboardLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/signin')
    }
  })

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  const handleSignOut = () => {
    signOut({ redirect: true, callbackUrl: '/auth/signin' })
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
