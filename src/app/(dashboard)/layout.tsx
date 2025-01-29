"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  ClipboardList,
  PieChart,
  BookOpen,
  Shield,
  Menu,
  X,
  ChevronRight,
  HelpCircle,
  FileText,
  LifeBuoy,
  Settings,
  Bell,
  User,
  LogOut,
  FileBarChart,
  Building2,
  CheckCircle2,
  Users,
  Clock,
  AlertCircle,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Overview",
    icon: BookOpen,
    href: "/overview",
  },
  {
    title: "Standards",
    icon: Shield,
    href: "/standards",
  },
  {
    title: "Reports & Analytics",
    icon: PieChart,
    href: "/reports",
  },
]

const quickActions = [
  { 
    name: "Help",
    href: "/help",
    icon: HelpCircle,
  },
  { 
    name: "Documentation",
    href: "/docs",
    icon: FileText,
  },
  { 
    name: "Support",
    href: "/support",
    icon: LifeBuoy,
  },
]

const userNavigation = [
  { 
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
  { 
    name: "Help",
    href: "/support",
    icon: HelpCircle,
  },
  { 
    name: "Sign out",
    href: "/auth/signout",
    icon: LogOut,
  },
]

const organizationData = {
  name: "MetaWorks Technologies",
  type: "Technology Company",
  plan: "Enterprise",
  standards: [
    { name: "SAMA", status: "Active", lastAudit: "2024-12-15" },
    { name: "NCA ECC", status: "Active", lastAudit: "2024-11-30" },
    { name: "ISO 27001", status: "Pending", lastAudit: null },
    { name: "PDPL", status: "Active", lastAudit: "2024-12-01" },
  ]
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg glass-effect md:hidden"
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen glass-effect border-r border-white/5",
        "w-72 flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0 transition-transform duration-300 ease-in-out"
      )}>
        {/* Logo Section */}
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-lg animate-pulse" />
              <div className="absolute inset-0.5 bg-[#1E2631] rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Cypher Compliance
            </h1>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Icon className={cn(
                    "h-5 w-5 transition-colors",
                    isActive && "text-blue-400"
                  )} />
                  <span className="flex-1">{item.title}</span>
                  {isActive && (
                    <ChevronRight className="h-4 w-4 text-blue-400" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="px-4 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
              Quick Actions
            </h2>
            <div className="space-y-1">
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <Link
                    key={action.name}
                    href={action.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{action.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>

        {/* User Profile */}
        <div className="relative border-t border-white/10 mt-auto">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="relative w-full flex items-center gap-3 p-4 hover:bg-white/5 transition-colors group"
          >
            <div className="relative h-9 w-9 rounded-full overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="User avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-white">Mohammed Alharbi</p>
              <p className="text-xs text-white/50">Administrator</p>
            </div>
            <ChevronRight className={cn(
              "h-4 w-4 text-white/40 transition-transform duration-200",
              isProfileOpen && "rotate-90"
            )} />
          </button>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <div className="absolute bottom-full left-0 right-0 mb-1 glass-effect rounded-lg overflow-hidden border border-white/10 backdrop-blur-xl bg-black/50">
              {userNavigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors",
                      item.name === "Sign out" && "text-red-400 hover:text-red-300"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "min-h-screen transition-all duration-300",
        isSidebarOpen ? "md:pl-72" : ""
      )}>
        {/* Top Navigation Bar */}
        <div className="sticky top-0 h-16 glass-effect border-b border-white/5 z-30">
          <div className="flex items-center justify-end h-full px-6 gap-4">
            <button className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-blue-500" />
            </button>
            <div className="h-8 w-px bg-white/10" />
            <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm">Profile</span>
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="h-[calc(100vh-4rem)] overflow-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
