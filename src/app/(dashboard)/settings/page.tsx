"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Building2, Bell, Settings, Shield, Lock } from "lucide-react"

const tabs = [
  {
    id: "organization",
    name: "Organization",
    icon: Building2,
  },
  {
    id: "compliance",
    name: "Compliance",
    icon: Shield,
  },
  {
    id: "security",
    name: "Security",
    icon: Lock,
  },
  {
    id: "app",
    name: "App Settings",
    icon: Settings,
  },
]

const standards = [
  { id: "sama", name: "SAMA Framework", description: "Saudi Central Bank Compliance Framework" },
  { id: "nis2", name: "NIS2", description: "Network and Information Security Directive" },
  { id: "iso27001", name: "ISO 27001", description: "Information Security Management" },
  { id: "gdpr", name: "GDPR", description: "General Data Protection Regulation" },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("organization")

  return (
    <div className="container max-w-6xl py-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-white/60">Manage your organization settings</p>
      </div>

      {/* Tabs */}
      <div className="glass-effect rounded-lg p-1">
        <div className="flex">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  activeTab === tab.id
                    ? "bg-white/10 text-white shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.name}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "organization" && (
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-lg space-y-6">
              <div>
                <h2 className="text-lg font-medium text-white">Organization Details</h2>
                <p className="text-sm text-white/60">Manage your organization information and settings</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/60">Organization Name</label>
                  <input
                    type="text"
                    placeholder="Enter organization name"
                    className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60">Industry</label>
                  <select className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500">
                    <option>Financial Services</option>
                    <option>Healthcare</option>
                    <option>Technology</option>
                    <option>Manufacturing</option>
                    <option>Government</option>
                    <option>Education</option>
                    <option>Retail</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60">Organization Size</label>
                  <select className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500">
                    <option>1-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>501-1000 employees</option>
                    <option>1000+ employees</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60">Country</label>
                  <select className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500">
                    <option>Saudi Arabia</option>
                    <option>United Arab Emirates</option>
                    <option>Kuwait</option>
                    <option>Qatar</option>
                    <option>Bahrain</option>
                    <option>Oman</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/60">Business Description</label>
                <textarea
                  rows={3}
                  placeholder="Brief description of your organization..."
                  className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-white">Contact Information</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Business Email</label>
                    <input
                      type="email"
                      placeholder="organization@example.com"
                      className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+966 XX XXX XXXX"
                      className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Address</label>
                    <input
                      type="text"
                      placeholder="Street address"
                      className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">City</label>
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "compliance" && (
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-lg space-y-6">
              <div>
                <h2 className="text-lg font-medium text-white">Compliance Standards</h2>
                <p className="text-sm text-white/60">Select the standards you need to comply with</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {standards.map((standard) => (
                  <label key={standard.id} className="flex items-start gap-3 p-4 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer group transition-colors">
                    <input type="checkbox" className="mt-1.5" />
                    <div className="space-y-1">
                      <div className="font-medium text-white group-hover:text-blue-400 transition-colors">{standard.name}</div>
                      <div className="text-sm text-white/60">{standard.description}</div>
                    </div>
                  </label>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-lg space-y-6">
              <div>
                <h2 className="text-lg font-medium text-white">Security Settings</h2>
                <p className="text-sm text-white/60">Configure your organization's security preferences</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-white/10">
                  <div>
                    <div className="font-medium text-white">Two-Factor Authentication (2FA)</div>
                    <div className="text-sm text-white/60">Require 2FA for all organization members</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-white/10">
                  <div>
                    <div className="font-medium text-white">Single Sign-On (SSO)</div>
                    <div className="text-sm text-white/60">Enable SSO with your identity provider</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-white/10">
                  <div>
                    <div className="font-medium text-white">IP Allowlist</div>
                    <div className="text-sm text-white/60">Restrict access to specific IP addresses</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-white">Password Policy</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Minimum Password Length</label>
                    <select className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500">
                      <option>8 characters</option>
                      <option>10 characters</option>
                      <option>12 characters</option>
                      <option>14 characters</option>
                      <option>16 characters</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Password Expiry</label>
                    <select className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500">
                      <option>30 days</option>
                      <option>60 days</option>
                      <option>90 days</option>
                      <option>180 days</option>
                      <option>Never</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/10">
                    <div>
                      <div className="font-medium text-white">Require Special Characters</div>
                      <div className="text-sm text-white/60">Passwords must contain special characters</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/10">
                    <div>
                      <div className="font-medium text-white">Password History</div>
                      <div className="text-sm text-white/60">Prevent reuse of previous passwords</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-white">Session Settings</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Session Timeout</label>
                    <select className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500">
                      <option>15 minutes</option>
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>4 hours</option>
                      <option>8 hours</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Max Concurrent Sessions</label>
                    <select className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none focus:border-blue-500">
                      <option>1 session</option>
                      <option>2 sessions</option>
                      <option>3 sessions</option>
                      <option>5 sessions</option>
                      <option>Unlimited</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "app" && (
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-lg space-y-4">
              <h2 className="text-lg font-medium text-white">App Configuration</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-white/10">
                  <div>
                    <div className="font-medium text-white">Dark Mode</div>
                    <div className="text-sm text-white/60">Enable dark mode for the application</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-white/10">
                  <div>
                    <div className="font-medium text-white">Compact View</div>
                    <div className="text-sm text-white/60">Use compact view for dense information display</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
