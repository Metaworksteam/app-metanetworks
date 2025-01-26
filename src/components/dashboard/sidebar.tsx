import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Settings,
  Shield,
  Building2,
  Users,
  Bell,
  FileText,
  LogOut,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Compliance Score",
    href: "/dashboard/compliance",
    icon: Shield,
  },
  {
    title: "Organizations",
    href: "/dashboard/organizations",
    icon: Building2,
  },
  {
    title: "Team Members",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="font-semibold">Cypher Compliance</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="border-t p-4">
        <Button variant="outline" className="w-full justify-start space-x-2">
          <LogOut className="h-5 w-5" />
          <span>Log out</span>
        </Button>
      </div>
    </div>
  )
}
