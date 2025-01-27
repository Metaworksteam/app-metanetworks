"use client"

import { Shield, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const complianceSteps = [
  {
    title: "Initial Assessment",
    description: "Complete the initial compliance assessment questionnaire",
    status: "completed",
  },
  {
    title: "Documentation Review",
    description: "Review and update security documentation",
    status: "in-progress",
  },
  {
    title: "Control Implementation",
    description: "Implement required security controls",
    status: "pending",
  },
  {
    title: "Testing & Validation",
    description: "Test and validate implemented controls",
    status: "pending",
  },
]

const standards = [
  {
    name: "SAMA Framework",
    progress: 75,
    status: "On Track",
    nextAction: "Complete network security controls",
  },
  {
    name: "NIS2",
    progress: 45,
    status: "Needs Attention",
    nextAction: "Review incident response plan",
  },
  {
    name: "ISO 27001",
    progress: 60,
    status: "On Track",
    nextAction: "Update risk assessment",
  },
]

export default function OverviewPage() {
  return (
    <div className="container max-w-7xl py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Compliance Overview</h1>
        <p className="text-white/60">Track your compliance progress and next steps</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Summary */}
        <div className="glass-effect p-6 rounded-lg space-y-6">
          <div>
            <h2 className="text-lg font-medium text-white">Compliance Summary</h2>
            <p className="text-sm text-white/60">Current compliance status across standards</p>
          </div>

          <div className="space-y-4">
            {standards.map((standard) => (
              <div key={standard.name} className="p-4 rounded-lg border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-white">{standard.name}</div>
                  <div className={cn(
                    "text-sm px-2 py-1 rounded-full",
                    standard.status === "On Track" 
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  )}>
                    {standard.status}
                  </div>
                </div>

                <div className="w-full bg-white/5 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${standard.progress}%` }}
                  />
                </div>

                <div className="flex items-start gap-2 text-sm text-white/60">
                  <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Next: {standard.nextAction}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Guide */}
        <div className="glass-effect p-6 rounded-lg space-y-6">
          <div>
            <h2 className="text-lg font-medium text-white">Compliance Guide</h2>
            <p className="text-sm text-white/60">Step-by-step guide to achieve compliance</p>
          </div>

          <div className="space-y-4">
            {complianceSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {index !== complianceSteps.length - 1 && (
                  <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-white/10" />
                )}
                <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10">
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0",
                    step.status === "completed" && "bg-green-500/20 text-green-400",
                    step.status === "in-progress" && "bg-blue-500/20 text-blue-400",
                    step.status === "pending" && "bg-white/10 text-white/40"
                  )}>
                    {step.status === "completed" && <CheckCircle className="h-5 w-5" />}
                    {step.status === "in-progress" && <Shield className="h-5 w-5" />}
                    {step.status === "pending" && <AlertCircle className="h-5 w-5" />}
                  </div>
                  <div>
                    <div className="font-medium text-white">{step.title}</div>
                    <div className="text-sm text-white/60">{step.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
