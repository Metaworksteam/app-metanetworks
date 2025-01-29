"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PDFViewer } from "@/components/pdf-viewer"
import { OrganizationForm } from "@/components/organization-form"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronDown, ChevronRight, ChevronLeft, Download } from "lucide-react"

interface Control {
  id: string
  name: string
  document: string
  description: string
  policies?: any[]
}

const ncaDomains = [
  {
    id: "gov",
    name: "1. Cybersecurity Governance",
    description: "Establish and maintain a cybersecurity governance framework",
    controls: [
      { 
        id: "gov-1-1", 
        name: "1-1 Cybersecurity Strategy", 
        document: "/docs/nca/gov-1-1.pdf",
        description: "Develop and implement organization-wide cybersecurity strategy"
      },
      { 
        id: "gov-1-2", 
        name: "1-2 Cybersecurity Management", 
        document: "/docs/nca/gov-1-2.pdf",
        description: "Establish cybersecurity management structure and processes"
      },
      { 
        id: "gov-1-3", 
        name: "1-3 Cybersecurity Policies and Procedures", 
        document: "/docs/nca/gov-1-3.pdf",
        description: "Develop and maintain cybersecurity policies and procedures"
      },
      { 
        id: "gov-1-4", 
        name: "1-4 Cybersecurity Roles and Responsibilities", 
        document: "/docs/nca/gov-1-4.pdf",
        description: "Define and assign cybersecurity roles and responsibilities"
      },
      { 
        id: "gov-1-5", 
        name: "1-5 Cybersecurity Risk Management", 
        document: "/docs/nca/gov-1-5.pdf",
        description: "Implement cybersecurity risk management processes"
      },
      { 
        id: "gov-1-6", 
        name: "1-6 Cybersecurity in IT Project Management", 
        document: "/docs/nca/gov-1-6.pdf",
        description: "Integrate cybersecurity in IT project management"
      },
      { 
        id: "gov-1-7", 
        name: "1-7 Compliance with Cybersecurity Standards", 
        document: "/docs/nca/gov-1-7.pdf",
        description: "Ensure compliance with cybersecurity standards and regulations"
      },
      { 
        id: "gov-1-8", 
        name: "1-8 Periodic Cybersecurity Review and Audit", 
        document: "/docs/nca/gov-1-8.pdf",
        description: "Conduct regular cybersecurity reviews and audits"
      },
      { 
        id: "gov-1-9", 
        name: "1-9 Cybersecurity in Human Resources", 
        document: "/docs/nca/gov-1-9.pdf",
        description: "Integrate cybersecurity in HR processes"
      },
      { 
        id: "gov-1-10", 
        name: "1-10 Cybersecurity Awareness and Training", 
        document: "/docs/nca/gov-1-10.pdf",
        description: "Implement cybersecurity awareness and training programs"
      }
    ]
  },
  {
    id: "def",
    name: "2. Cybersecurity Defense",
    description: "Implement technical security controls and measures",
    controls: [
      { 
        id: "def-2-1", 
        name: "2-1 Asset Management", 
        document: "/docs/nca/def-2-1.pdf",
        description: "Manage and protect organizational assets"
      },
      { 
        id: "def-2-2", 
        name: "2-2 Identity and Access Management", 
        document: "/docs/nca/def-2-2.pdf",
        description: "Control access to information systems"
      },
      { 
        id: "def-2-3", 
        name: "2-3 Information Systems Protection", 
        document: "/docs/nca/def-2-3.pdf",
        description: "Protect information systems and processing facilities"
      },
      { 
        id: "def-2-4", 
        name: "2-4 Email Protection", 
        document: "/docs/nca/def-2-4.pdf",
        description: "Implement email security controls"
      },
      { 
        id: "def-2-5", 
        name: "2-5 Network Security Management", 
        document: "/docs/nca/def-2-5.pdf",
        description: "Manage network security"
      },
      { 
        id: "def-2-6", 
        name: "2-6 Mobile Devices Security", 
        document: "/docs/nca/def-2-6.pdf",
        description: "Secure mobile devices and applications"
      },
      { 
        id: "def-2-7", 
        name: "2-7 Data and Information Protection", 
        document: "/docs/nca/def-2-7.pdf",
        description: "Protect organizational data and information"
      },
      { 
        id: "def-2-8", 
        name: "2-8 Cryptography", 
        document: "/docs/nca/def-2-8.pdf",
        description: "Implement cryptographic controls"
      },
      { 
        id: "def-2-9", 
        name: "2-9 Backup and Recovery Management", 
        document: "/docs/nca/def-2-9.pdf",
        description: "Manage backup and recovery processes"
      },
      { 
        id: "def-2-10", 
        name: "2-10 Vulnerability Management", 
        document: "/docs/nca/def-2-10.pdf",
        description: "Manage security vulnerabilities"
      },
      { 
        id: "def-2-11", 
        name: "2-11 Penetration Testing", 
        document: "/docs/nca/def-2-11.pdf",
        description: "Conduct security testing and assessments"
      },
      { 
        id: "def-2-12", 
        name: "2-12 Cybersecurity Event Logs Management", 
        document: "/docs/nca/def-2-12.pdf",
        description: "Manage security event logs and monitoring"
      },
      { 
        id: "def-2-13", 
        name: "2-13 Cybersecurity Incident Management", 
        document: "/docs/nca/def-2-13.pdf",
        description: "Manage cybersecurity incidents and threats"
      },
      { 
        id: "def-2-14", 
        name: "2-14 Physical Security", 
        document: "/docs/nca/def-2-14.pdf",
        description: "Implement physical security controls"
      },
      { 
        id: "def-2-15", 
        name: "2-15 Web Application Security", 
        document: "/docs/nca/def-2-15.pdf",
        description: "Secure web applications"
      }
    ]
  },
  {
    id: "res",
    name: "3. Cybersecurity Resilience",
    description: "Ensure business continuity and incident recovery",
    controls: [
      { 
        id: "res-3-1", 
        name: "3-1 Business Continuity Management", 
        document: "/docs/nca/res-3-1.pdf",
        description: "Implement cybersecurity aspects of BCM"
      }
    ]
  },
  {
    id: "tpc",
    name: "4. Third-Party and Cloud Computing Cybersecurity",
    description: "Manage third-party and cloud security risks",
    controls: [
      { 
        id: "tpc-4-1", 
        name: "4-1 Third-Party Cybersecurity", 
        document: "/docs/nca/tpc-4-1.pdf",
        description: "Manage third-party cybersecurity risks"
      },
      { 
        id: "tpc-4-2", 
        name: "4-2 Cloud Computing Cybersecurity", 
        document: "/docs/nca/tpc-4-2.pdf",
        description: "Secure cloud computing environments"
      }
    ]
  },
  {
    id: "ics",
    name: "5. ICS Cybersecurity",
    description: "Protect Industrial Control Systems",
    controls: [
      { 
        id: "ics-5-1", 
        name: "5-1 ICS Protection", 
        document: "/docs/nca/ics-5-1.pdf",
        description: "Protect Industrial Control Systems and Devices"
      }
    ]
  }
]

export default function StandardsPage() {
  const [expandedDomains, setExpandedDomains] = useState<string[]>([])
  const [selectedDomain, setSelectedDomain] = useState<any>(null)
  const [selectedControl, setSelectedControl] = useState<any>(null)
  const [formData, setFormData] = useState<any>(null)

  const toggleDomain = (domain: any) => {
    setExpandedDomains((prev) =>
      prev.includes(domain.id)
        ? prev.filter((id) => id !== domain.id)
        : [...prev, domain.id]
    )
    setSelectedDomain(domain)
  }

  const handleControlClick = (domain: any, control: any) => {
    setSelectedControl(control)
    setSelectedDomain(domain)
  }

  const handleFormSubmit = (data: any) => {
    setFormData(data)
    // Here you would typically save the data to your backend
    console.log("Form data:", data)
  }

  const handleDownloadPDF = () => {
    // Here you would generate the customized PDF with the form data
    console.log("Downloading PDF with form data:", formData)
  }

  const findNextControl = () => {
    if (!selectedDomain || !selectedControl) return null
    const currentDomainIndex = ncaDomains.findIndex(d => d.id === selectedDomain.id)
    const currentControlIndex = selectedDomain.controls.findIndex((c: Control) => c.id === selectedControl.id)
    
    if (currentControlIndex < selectedDomain.controls.length - 1) {
      return selectedDomain.controls[currentControlIndex + 1]
    } else if (currentDomainIndex < ncaDomains.length - 1) {
      return ncaDomains[currentDomainIndex + 1].controls[0]
    }
    return null
  }

  const handleNextControl = () => {
    const nextControl = findNextControl()
    if (nextControl) {
      const nextDomain = selectedControl.id === nextControl.id ? 
        selectedDomain : 
        ncaDomains.find(d => d.controls.some(c => c.id === nextControl.id))
      handleControlClick(nextDomain, nextControl)
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div>
          <h1 className="text-2xl font-bold">NCA Cybersecurity Framework</h1>
          {selectedControl && (
            <p className="text-muted-foreground">
              {selectedDomain.name} / {selectedControl.name}
            </p>
          )}
        </div>
        {selectedControl && (
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setSelectedControl(null)}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button
              variant="outline"
              onClick={handleNextControl}
              disabled={!findNextControl()}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="outline" onClick={handleDownloadPDF}>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        )}
      </div>
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 min-h-0">
        {!selectedControl ? (
          <Card className="col-span-2 h-full">
            <ScrollArea className="h-[calc(100vh-16rem)]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead>Controls</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ncaDomains.map((domain) => (
                    <TableRow key={domain.id}>
                      <TableCell className="font-medium">
                        <Button
                          variant="ghost"
                          className="p-0"
                          onClick={() => toggleDomain(domain)}
                        >
                          {expandedDomains.includes(domain.id) ? (
                            <ChevronDown className="h-4 w-4 mr-2" />
                          ) : (
                            <ChevronRight className="h-4 w-4 mr-2" />
                          )}
                          {domain.name}
                        </Button>
                      </TableCell>
                      <TableCell>
                        {expandedDomains.includes(domain.id) && (
                          <div className="space-y-2">
                            {domain.controls.map((control) => (
                              <Button
                                key={control.id}
                                variant="outline"
                                className="w-full justify-start"
                                onClick={() => handleControlClick(domain, control)}
                              >
                                {control.name}
                              </Button>
                            ))}
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </Card>
        ) : (
          <>
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">{selectedControl.name}</h2>
                <p className="text-muted-foreground mb-6">{selectedControl.description}</p>
                
                <h3 className="font-semibold mb-2">Relevant Policies & Procedures</h3>
                <div className="space-y-2">
                  {selectedControl.policies?.map((policy: any) => (
                    <Button
                      key={policy.name}
                      variant="link"
                      className="h-auto p-0 text-left"
                      onClick={() => window.open(policy.url, '_blank')}
                    >
                      {policy.name}
                    </Button>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Organization Information</h2>
                <OrganizationForm
                  onSubmit={handleFormSubmit}
                  defaultValues={formData}
                />
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Control Documentation</h2>
              <PDFViewer pdfUrl={selectedControl.document} />
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
