export const siteConfig = {
  name: "Cypher Compliance",
  description: "A modern compliance management application",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "https://your-og-image-url.com",
  links: {
    github: "https://github.com/your-repo",
    docs: "/docs",
  },
}

export const dashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
    },
    {
      title: "Compliance",
      href: "/dashboard/compliance",
      icon: "shield",
    },
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: "chart",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}

export const authConfig = {
  loginRedirect: "/dashboard",
  signupRedirect: "/dashboard",
  publicRoutes: ["/", "/auth/signin", "/auth/signup", "/auth/reset-password"],
}

export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
  endpoints: {
    auth: "/api/auth",
    users: "/api/users",
    compliance: "/api/compliance",
    reports: "/api/reports",
  },
}
