"use client"

import { BarChart3, TrendingUp, AlertCircle, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"

const complianceMetrics = [
  {
    title: "Overall Compliance",
    value: "78%",
    change: "+12%",
    trend: "up",
  },
  {
    title: "Controls Implemented",
    value: "156/200",
    change: "+8",
    trend: "up",
  },
  {
    title: "Risk Score",
    value: "Medium",
    change: "-15%",
    trend: "down",
  },
  {
    title: "Pending Actions",
    value: "24",
    change: "+3",
    trend: "up",
  },
]

const insights = [
  {
    title: "Access Control",
    status: "critical",
    message: "Multi-factor authentication adoption rate below target",
    recommendation: "Enable mandatory 2FA for all user accounts",
  },
  {
    title: "Data Protection",
    status: "warning",
    message: "Encryption standards need updating",
    recommendation: "Review and update encryption protocols",
  },
  {
    title: "Security Monitoring",
    status: "success",
    message: "Log monitoring coverage exceeds compliance requirements",
    recommendation: "Continue current monitoring practices",
  },
]

export default function ReportsPage() {
  return (
    <div className="container max-w-7xl py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Reports & Analytics</h1>
        <p className="text-white/60">Analyze your compliance performance and trends</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {complianceMetrics.map((metric) => (
          <div key={metric.title} className="glass-effect p-6 rounded-lg space-y-4">
            <div className="text-sm text-white/60">{metric.title}</div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className={cn(
                "flex items-center text-sm",
                metric.trend === "up" ? "text-green-400" : "text-red-400"
              )}>
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                <span>{metric.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Trends */}
        <div className="glass-effect p-6 rounded-lg space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-white">Compliance Trends</h2>
              <p className="text-sm text-white/60">6-month compliance progress</p>
            </div>
            <BarChart3 className="h-5 w-5 text-white/40" />
          </div>

          <div className="h-64 flex items-center justify-center border border-white/10 rounded-lg">
            <div className="text-white/40 text-sm">Chart visualization will be implemented here</div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="glass-effect p-6 rounded-lg space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-white">Key Insights</h2>
              <p className="text-sm text-white/60">Areas requiring attention</p>
            </div>
            <TrendingUp className="h-5 w-5 text-white/40" />
          </div>

          <div className="space-y-4">
            {insights.map((insight) => (
              <div key={insight.title} className="p-4 rounded-lg border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-white">{insight.title}</div>
                  <div className={cn(
                    "text-sm px-2 py-1 rounded-full",
                    insight.status === "critical" && "bg-red-500/20 text-red-400",
                    insight.status === "warning" && "bg-yellow-500/20 text-yellow-400",
                    insight.status === "success" && "bg-green-500/20 text-green-400"
                  )}>
                    {insight.status}
                  </div>
                </div>
                <div className="text-sm text-white/60">{insight.message}</div>
                <div className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-400" />
                  <span className="text-blue-400">{insight.recommendation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
