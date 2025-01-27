import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  
  if (isAuthPage) {
    if (token) {
      // If user is already logged in and tries to access auth pages,
      // redirect to dashboard
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    // Allow access to auth pages if not logged in
    return NextResponse.next()
  }

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      // Redirect to login if trying to access protected route without being logged in
      return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*']
}
