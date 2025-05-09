"use client"

import { Shield, AlertCircle, CheckCircle2 } from "lucide-react"

interface Provider {
  provider: string;
  maxRole: string;
  features: string[];
}

interface RolePermission {
  role: string;
  permissions: {
    name: string;
    description: string;
  }[];
}

const PROVIDER_RESTRICTIONS: Provider[] = [
  {
    provider: "Google",
    maxRole: "Editor",
    features: ["Feature 1", "Feature 2"]
  },
  {
    provider: "GitHub",
    maxRole: "Viewer",
    features: ["Feature 3", "Feature 4"]
  },
  {
    provider: "Email",
    maxRole: "Admin",
    features: ["Feature 5", "Feature 6"]
  }
];

const ROLE_PERMISSIONS: RolePermission[] = [
  {
    role: "Admin",
    permissions: [
      { name: "Permission 1", description: "Description 1" },
      { name: "Permission 2", description: "Description 2" }
    ]
  },
  {
    role: "Editor",
    permissions: [
      { name: "Permission 3", description: "Description 3" },
      { name: "Permission 4", description: "Description 4" }
    ]
  },
  {
    role: "Viewer",
    permissions: [
      { name: "Permission 5", description: "Description 5" },
      { name: "Permission 6", description: "Description 6" }
    ]
  }
];

export default function AccountAccess() {
  return (
    <div className="space-y-6">
      <div className="glass-effect p-6 rounded-lg space-y-6">
        <div>
          <h2 className="text-lg font-medium text-white">Account Access Levels</h2>
          <p className="text-sm text-white/60">Understanding your account capabilities based on sign-in method</p>
        </div>

        {/* Provider Comparison */}
        <div className="grid grid-cols-3 gap-4">
          {PROVIDER_RESTRICTIONS.map((provider: Provider) => (
            <div
              key={provider.provider}
              className="p-4 rounded-lg border border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-white capitalize">
                  {provider.provider} Sign In
                </h3>
                <div className="text-xs px-2 py-1 rounded-full bg-white/10 text-white">
                  Max Role: {provider.maxRole}
                </div>
              </div>

              <div className="space-y-2">
                {provider.features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Role Details */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-white">Available Roles</h3>
            <div className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
              Based on sign-in method
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ROLE_PERMISSIONS.map((role: RolePermission) => (
              <div
                key={role.role}
                className="p-4 rounded-lg border border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-white capitalize">{role.role}</h4>
                  {role.role === 'admin' && (
                    <div className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                      Email Only
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  {role.permissions.map((permission: { name: string; description: string }, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-white/40" />
                      <div>
                        <div className="text-white/80">{permission.name}</div>
                        <div className="text-xs text-white/40">{permission.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-yellow-500">Important Note</h4>
            <p className="text-sm text-yellow-500/80">
              To access full administrative features, including organization management and user role control,
              please sign up using an email account. Google and GitHub sign-ins have limited access for security purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
