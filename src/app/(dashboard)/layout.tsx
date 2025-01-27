"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FileBarChart2,
  Shield,
  FileText,
  Settings,
  User,
  HelpCircle,
  Menu,
  X,
  LogOut,
  ChevronUp,
  Bell,
  Terminal,
  Network
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Overview",
    href: "/dashboard/overview",
    icon: FileBarChart2
  },
  {
    title: "Standards",
    href: "/dashboard/standards",
    icon: Shield
  },
  {
    title: "Reports & Analytics",
    href: "/dashboard/reports",
    icon: FileText
  },
]

const bottomNavItems = [
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings
  },
  {
    title: "Support",
    href: "/dashboard/support",
    icon: HelpCircle
  }
]

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-cyber-black">
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md md:hidden bg-cyber-dark border-primary/20 hover:bg-cyber-darker transition-colors"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6 text-primary" />
        ) : (
          <Menu className="h-6 w-6 text-primary" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen border-r border-primary/20",
          "w-64 flex flex-col bg-cyber-darker/80 backdrop-blur-xl",
          "transition-transform duration-200",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-primary/20 px-6">
          <div className="relative">
            <Network className="h-6 w-6 text-primary animate-pulse" />
            <Terminal className="h-6 w-6 text-primary absolute inset-0 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <h2 className="text-lg font-bold bg-gradient-to-r from-primary to-cyber-blue bg-clip-text text-transparent">
            Cypher Compliance
          </h2>
        </div>

        {/* Main navigation */}
        <div className="flex-1 flex flex-col gap-4">
          <nav className="flex-1 space-y-1 px-3 py-4">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                    "hover:bg-primary/10 hover:text-primary hover:glow-text",
                    isActive && "bg-primary/10 text-primary glow-text"
                  )}
                >
                  <item.icon className={cn(
                    "h-5 w-5 transition-transform",
                    isActive && "animate-pulse"
                  )} />
                  {item.title}
                </Link>
              )
            })}
          </nav>

          {/* Bottom section */}
          <div className="border-t border-primary/20">
            <nav className="space-y-1 px-3 py-4">
              {bottomNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                      "hover:bg-primary/10 hover:text-primary",
                      isActive && "bg-primary/10 text-primary"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                )
              })}
            </nav>

            {/* User section */}
            <div className="p-4 mt-auto border-t border-primary/20">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start gap-2 hover:bg-primary/10 hover:text-primary"
                  >
                    <Avatar className="h-8 w-8 border border-primary/20">
                      <AvatarImage src={session?.user?.image || ''} />
                      <AvatarFallback className="bg-cyber-dark text-primary">
                        {session?.user?.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium">{session?.user?.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {session?.user?.email}
                      </p>
                    </div>
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-56 bg-cyber-darker border-primary/20"
                >
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-primary/20" />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/settings" className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-primary/20" />
                  <DropdownMenuItem
                    className="text-red-500 cursor-pointer focus:text-red-500"
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={cn(
          "min-h-screen transition-all duration-200 bg-cyber-black",
          "relative overflow-hidden",
          isSidebarOpen ? "md:ml-64" : ""
        )}
      >
        <div className="matrix-bg absolute inset-0 opacity-50" />
        <div className="relative container mx-auto p-6 pt-16 md:pt-6">
          {children}
        </div>
      </main>
    </div>
  )
}
