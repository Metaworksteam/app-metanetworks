"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Bell, User, Shield, Lock } from "lucide-react"

const tabs = [
  {
    id: "profile",
    name: "Profile Details",
    icon: User,
    description: "Manage your personal information and preferences"
  },
  {
    id: "notifications",
    name: "Notifications",
    icon: Bell,
    description: "Configure how you receive updates and alerts"
  },
  {
    id: "security",
    name: "Security",
    icon: Lock,
    description: "Manage your password and security settings"
  },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="container max-w-7xl mx-auto p-6">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-white">Settings</h1>
          <p className="text-white/60">Manage your account settings and preferences</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors",
                    activeTab === tab.id
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{tab.name}</div>
                    <p className="text-xs text-white/40">{tab.description}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Content */}
          <div className="flex-1 glass-effect rounded-lg border border-white/10 p-6">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-white">Profile Details</h2>
                  <p className="text-sm text-white/60">Update your personal information</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Mohammed Alharbi"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="mohammed@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      defaultValue="Security Administrator"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    placeholder="Write a short bio..."
                  />
                </div>

                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-white">Notification Preferences</h2>
                  <p className="text-sm text-white/60">Choose how you want to be notified</p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Compliance Updates",
                      description: "Get notified when there are updates to compliance standards"
                    },
                    {
                      title: "Security Alerts",
                      description: "Receive alerts about security incidents and threats"
                    },
                    {
                      title: "Team Activity",
                      description: "Notifications about team member actions and changes"
                    },
                    {
                      title: "System Updates",
                      description: "Updates about system maintenance and new features"
                    }
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div>
                        <h3 className="text-sm font-medium text-white">{item.title}</h3>
                        <p className="text-sm text-white/60">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-white">Security Settings</h2>
                  <p className="text-sm text-white/60">Manage your account security</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-white mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-white mb-4">Two-Factor Authentication</h3>
                    <button className="px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors">
                      Enable 2FA
                    </button>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-white mb-4">Active Sessions</h3>
                    <div className="space-y-3">
                      {[
                        {
                          device: "Windows PC - Chrome",
                          location: "Riyadh, SA",
                          lastActive: "Active now"
                        },
                        {
                          device: "iPhone 13 - Safari",
                          location: "Riyadh, SA",
                          lastActive: "2 hours ago"
                        }
                      ].map((session) => (
                        <div
                          key={session.device}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                        >
                          <div>
                            <div className="text-sm font-medium text-white">
                              {session.device}
                            </div>
                            <div className="text-xs text-white/60">
                              {session.location} • {session.lastActive}
                            </div>
                          </div>
                          <button className="text-xs text-red-400 hover:text-red-300">
                            Revoke
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
