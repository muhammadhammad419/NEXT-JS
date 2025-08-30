import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Get user data from localStorage (this is a simplified approach)
    // In production, you'd use proper session management or JWT tokens
    const userCookie = request.cookies.get('user');
    
    if (!userCookie) {
      // Redirect to login if no user data
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const user = JSON.parse(userCookie.value);
      if (user.role !== 'admin') {
        // Redirect to home if not admin
        return NextResponse.redirect(new URL('/', request.url));
      }
    } catch (error) {
      // Redirect to login if invalid user data
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};