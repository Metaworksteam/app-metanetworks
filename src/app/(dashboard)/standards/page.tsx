"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ChevronRight,
  FileText,
  Shield,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

const standards = [
  {
    id: "sama",
    name: "SAMA",
    icon: "/sama-icon.png",
    description: "Saudi Central Bank Compliance Framework",
    progress: 75,
    domains: [
      {
        id: "gov",
        name: "Governance",
        controls: [
          { id: "gov-1", name: "Management Oversight", status: "completed", document: "/docs/sama/governance.pdf" },
          { id: "gov-2", name: "Risk Assessment", status: "in-progress", document: "/docs/sama/risk.pdf" },
        ]
      },
      {
        id: "sec",
        name: "Security Operations",
        controls: [
          { id: "sec-1", name: "Access Control", status: "completed", document: "/docs/sama/access.pdf" },
          { id: "sec-2", name: "Incident Management", status: "pending", document: "/docs/sama/incident.pdf" },
        ]
      }
    ]
  },
  {
    id: "nca",
    name: "NCA ECC",
    icon: "/nca-icon.png",
    description: "National Cybersecurity Authority Essential Cybersecurity Controls",
    progress: 60,
    domains: [
      {
        id: "cyber",
        name: "Cybersecurity",
        controls: [
          { id: "cyb-1", name: "Asset Management", status: "completed", document: "/docs/nca/asset.pdf" },
          { id: "cyb-2", name: "Cryptography", status: "in-progress", document: "/docs/nca/crypto.pdf" },
        ]
      }
    ]
  },
  // Add other standards here
]

export default function StandardsPage() {
  const [selectedStandard, setSelectedStandard] = useState(standards[0])
  const [selectedDomain, setSelectedDomain] = useState(standards[0].domains[0])
  const [selectedControl, setSelectedControl] = useState(null)
  const [showPdfViewer, setShowPdfViewer] = useState(false)

  const handleControlClick = (control) => {
    setSelectedControl(control)
    setShowPdfViewer(true)
  }

  return (
    <div className="flex h-screen">
      {/* Standards Sidebar */}
      <div className="w-80 border-r border-white/10 glass-effect">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Standards</h2>
          <div className="space-y-3">
            {standards.map((standard) => (
              <button
                key={standard.id}
                onClick={() => {
                  setSelectedStandard(standard)
                  setSelectedDomain(standard.domains[0])
                  setSelectedControl(null)
                  setShowPdfViewer(false)
                }}
                className={cn(
                  "w-full p-4 rounded-lg glass-effect flex items-center gap-3 transition-all duration-200",
                  selectedStandard.id === standard.id
                    ? "bg-white/10 border-blue-500/50"
                    : "hover:bg-white/5"
                )}
              >
                <div className="relative h-10 w-10">
                  <Image
                    src={standard.icon}
                    alt={standard.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-sm font-medium text-white">{standard.name}</h3>
                  <div className="mt-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      style={{ width: `${standard.progress}%` }}
                    />
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-white/40" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Domains and Controls */}
      <div className="flex-1 glass-effect-dark">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">{selectedStandard.name}</h1>
            <p className="text-white/60">{selectedStandard.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {selectedStandard.domains.map((domain) => (
              <Card key={domain.id} className="glass-effect p-6">
                <h3 className="text-lg font-semibold text-white mb-4">{domain.name}</h3>
                <div className="space-y-3">
                  {domain.controls.map((control) => (
                    <button
                      key={control.id}
                      onClick={() => handleControlClick(control)}
                      className="w-full p-4 rounded-lg glass-effect hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "h-8 w-8 rounded-full flex items-center justify-center",
                          control.status === "completed" && "bg-green-500/20 text-green-500",
                          control.status === "in-progress" && "bg-blue-500/20 text-blue-500",
                          control.status === "pending" && "bg-amber-500/20 text-amber-500"
                        )}>
                          {control.status === "completed" && <CheckCircle className="h-5 w-5" />}
                          {control.status === "in-progress" && <Shield className="h-5 w-5" />}
                          {control.status === "pending" && <AlertCircle className="h-5 w-5" />}
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="text-sm font-medium text-white">{control.name}</h4>
                          <p className="text-xs text-white/60 capitalize">{control.status.replace("-", " ")}</p>
                        </div>
                        <FileText className="h-4 w-4 text-white/40" />
                      </div>
                    </button>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {showPdfViewer && selectedControl && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-[#1E2631] rounded-lg w-[90vw] h-[90vh] p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">
                {selectedControl.name} Documentation
              </h2>
              <Button
                variant="ghost"
                onClick={() => setShowPdfViewer(false)}
                className="text-white/60 hover:text-white"
              >
                Close
              </Button>
            </div>
            <div className="h-[calc(90vh-8rem)] bg-white rounded-lg">
              <iframe
                src={selectedControl.document}
                className="w-full h-full rounded-lg"
                title={`${selectedControl.name} Documentation`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
