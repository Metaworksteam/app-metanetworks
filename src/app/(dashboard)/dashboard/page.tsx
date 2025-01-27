"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  TrendingUp,
  AlertCircle,
  Activity,
  BarChart3,
} from "lucide-react"

const todayReport = [
  { title: "Critical Alerts", count: 2, icon: AlertTriangle, color: "text-red-500" },
  { title: "Active Tasks", count: 8, icon: Activity, color: "text-blue-500" },
  { title: "Completed", count: 12, icon: CheckCircle2, color: "text-green-500" },
  { title: "Pending Review", count: 5, icon: Clock, color: "text-yellow-500" },
]

const standards = [
  { 
    name: "SAMA",
    image: "/sama.jpg",
    progress: 75,
    lastUpdate: "2 hours ago",
    criticalIssues: 2,
    pendingTasks: 8
  },
  { 
    name: "NCA ECC",
    image: "/ncc.png",
    progress: 60,
    lastUpdate: "1 hour ago",
    criticalIssues: 3,
    pendingTasks: 5
  }
]

export default function DashboardPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/signin')
    }
  })

  return (
    <div className="space-y-8">
      {/* Header with Glowing Effect */}
      <div className="relative overflow-hidden rounded-lg bg-black p-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative">
          <h1 className="text-4xl font-bold text-white mb-2">Compliance Dashboard</h1>
          <p className="text-gray-300">
            Real-time monitoring and compliance tracking
          </p>
        </div>
      </div>

      {/* Today's Report - Glowing Cards */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Today's Report</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {todayReport.map((item, i) => (
            <Card key={i} className="relative overflow-hidden bg-black hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
              <CardContent className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={cn("p-3 rounded-full bg-white/10")}>
                    <item.icon className={cn("h-6 w-6", item.color)} />
                  </div>
                  <span className={cn("text-3xl font-bold", item.color)}>
                    {item.count}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-300">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Compliance Level */}
      <Card className="bg-black">
        <CardHeader>
          <CardTitle className="text-2xl">Compliance Level</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-8">
            <div className="relative flex h-32 w-32 items-center justify-center">
              <div className="absolute inset-0 rounded-full border-8 border-gray-800" />
              <div 
                className="absolute inset-0 rounded-full border-8 border-primary"
                style={{ 
                  clipPath: 'inset(0 0 50% 50%)',
                  transform: 'rotate(-45deg)' 
                }}
              />
              <span className="text-4xl font-bold text-primary">78%</span>
            </div>
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-primary">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <TrendingUp className="h-4 w-4" />
                <span>5% increase from last month</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Standards Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Standards Compliance</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {standards.map((standard, i) => (
            <Card key={i} className="bg-black overflow-hidden">
              <div className="relative h-40 w-full">
                <Image
                  src={standard.image}
                  alt={standard.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{standard.name}</h3>
                  <p className="text-sm text-gray-400">Last updated: {standard.lastUpdate}</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Compliance Progress</span>
                      <span className="text-sm text-primary">{standard.progress}%</span>
                    </div>
                    <Progress value={standard.progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                    <div>
                      <div className="flex items-center gap-2 text-red-500 mb-1">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm font-medium">Critical Issues</span>
                      </div>
                      <p className="text-2xl font-bold">{standard.criticalIssues}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-yellow-500 mb-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">Pending Tasks</span>
                      </div>
                      <p className="text-2xl font-bold">{standard.pendingTasks}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Compliance Score Card */}
      <Card className="bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <CardHeader>
          <CardTitle className="text-2xl">Compliance Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-500">
                <BarChart3 className="h-5 w-5" />
                <span className="text-lg font-medium">Overall Score</span>
              </div>
              <p className="text-4xl font-bold text-primary">85%</p>
              <p className="text-sm text-gray-400">Based on all compliance checks</p>
            </div>
            <div className="space-y-4 md:col-span-2">
              <div className="grid gap-4 grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Technical Controls</p>
                  <Progress value={90} className="h-2" />
                  <p className="text-sm text-right text-primary">90%</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Policy Compliance</p>
                  <Progress value={82} className="h-2" />
                  <p className="text-sm text-right text-primary">82%</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Risk Management</p>
                  <Progress value={75} className="h-2" />
                  <p className="text-sm text-right text-primary">75%</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Incident Response</p>
                  <Progress value={88} className="h-2" />
                  <p className="text-sm text-right text-primary">88%</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
