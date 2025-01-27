"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  Activity,
} from "lucide-react"

const standards = [
  {
    name: "SAMA",
    type: "Financial Audit",
    progress: 75,
    icon: "/sama-icon.png",
    status: "Completed",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    name: "ISO 27001",
    type: "Standards Update",
    progress: 65,
    status: "In Progress",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "PDPL",
    type: "Privacy Test",
    progress: 45,
    status: "Pending",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    name: "NCA - ECC",
    type: "Compliance Test",
    progress: 35,
    icon: "/nca-icon.png",
    status: "In Review",
    color: "from-purple-500/20 to-pink-500/20"
  }
]

const standardsList = [
  { id: "01", name: "SAMA", progress: 75, color: "from-green-500 to-emerald-500" },
  { id: "02", name: "ISO 27001", progress: 65, color: "from-blue-500 to-cyan-500" },
  { id: "03", name: "NCA - ECC", progress: 35, color: "from-purple-500 to-pink-500" },
  { id: "04", name: "PDPL", progress: 45, color: "from-amber-500 to-yellow-500" }
]

export default function DashboardPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/signin')
    }
  })

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-500 opacity-[0.15] blur-[120px] rounded-full" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-purple-500 opacity-[0.15] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 grid grid-cols-12 gap-8">
        {/* Header */}
        <div className="col-span-12 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Compliance Dashboard
              </h1>
              <p className="text-gray-400 mt-1">Real-time compliance monitoring and reporting</p>
            </div>
            <div className="flex gap-4">
              <div className="glass-effect rounded-xl px-6 py-3">
                <p className="text-sm text-gray-400">Overall Score</p>
                <p className="text-2xl font-bold text-white">80%</p>
              </div>
              <div className="glass-effect rounded-xl px-6 py-3">
                <p className="text-sm text-gray-400">Critical Issues</p>
                <p className="text-2xl font-bold text-red-400">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-8 space-y-8">
          {/* Standards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {standards.map((standard, i) => (
              <div
                key={i}
                className="glass-effect rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "rounded-lg p-3 bg-gradient-to-br",
                    standard.color
                  )}>
                    {standard.icon ? (
                      <div className="relative h-8 w-8 animate-float">
                        <Image
                          src={standard.icon}
                          alt={standard.name}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    ) : (
                      <Shield className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">{standard.name}</h3>
                      <span className="text-xs text-gray-400">{standard.type}</span>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="text-sm text-white">{standard.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full bg-gradient-to-r transition-all duration-500",
                            standard.color.replace("/20", "")
                          )}
                          style={{ width: `${standard.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Progress */}
          <div className="glass-effect rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Standards Compliance Progress</h2>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                View All
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-6">
              {standardsList.map((standard) => (
                <div key={standard.id} className="group">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-gray-400 w-8">{standard.id}</span>
                    <span className="text-sm text-white">{standard.name}</span>
                    <div className="flex-1 h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full bg-gradient-to-r transition-all duration-500 group-hover:shadow-lg",
                          standard.color
                        )}
                        style={{ width: `${standard.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 w-12">{standard.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-4 space-y-8">
          {/* Level Chart */}
          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Compliance Level</h2>
            <div className="flex items-end gap-3 h-40 mb-4">
              <div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg h-[60%] animate-pulse-slow" />
              <div className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg h-[80%] animate-pulse-slow" />
              <div className="flex-1 bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-lg h-[40%] animate-pulse-slow" />
              <div className="flex-1 bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-lg h-[20%] animate-pulse-slow" />
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Completed</span>
              <span>Remaining</span>
            </div>
          </div>

          {/* Compliance Score */}
          <div className="glass-effect rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Compliance Score</h2>
            <div className="relative h-48 flex items-center justify-center">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-gray-700"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeDasharray="439.8"
                  strokeDashoffset={439.8 - (439.8 * 80) / 100}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#2DD4BF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">80%</p>
                  <p className="text-sm text-gray-400 mt-1">Overall Score</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="grid grid-cols-2 gap-4">
            {["nca", "sama"].map((logo) => (
              <div
                key={logo}
                className="glass-effect rounded-xl p-6 group hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative h-20 w-full animate-float">
                  <Image
                    src={`/${logo}-icon.png`}
                    alt={logo.toUpperCase()}
                    fill
                    className="object-contain brightness-200 group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
