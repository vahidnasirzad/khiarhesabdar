// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

// ⚠️ IMPORTANT: This must match the cookie name set in lib/actions.ts
const SESSION_TOKEN_NAME = 'app_session'; 

// 1. Define routes that require a user to be logged in
const protectedRoutes = ['/invoices', '/add-invoice', '/create-user']; 

// 2. Define routes that a logged-in user should NOT access (e.g., login)
const authRoutes = ['/login'];

export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  // 3. Get the session cookie
  const sessionToken = request.cookies.get(SESSION_TOKEN_NAME);

  // --- LOGIC A: PROTECTED ROUTES CHECK ---
  // If the current path starts with any protected route
  if (protectedRoutes.some(path => currentPath.startsWith(path))) {
    
    // If NO session token is found, redirect to login
    if (!sessionToken) {
      const loginUrl = new URL('/login', request.url);
      // Pass the intended destination to allow redirection after successful login
      loginUrl.searchParams.set('from', currentPath); 
      return NextResponse.redirect(loginUrl);
    }
    
    // If token IS found, allow access
    return NextResponse.next();
  }

  // --- LOGIC B: AUTH ROUTES CHECK ---
  // If the user is logged in AND trying to access the login page
  if (authRoutes.includes(currentPath) && sessionToken) {
    // Redirect them to the main invoices page
    return NextResponse.redirect(new URL('/invoices', request.url));
  }

  // 4. Allow access for all other routes (e.g., public assets, home page if unprotected)
  return NextResponse.next();
}

// 5. Configuration: Specify which paths the middleware should inspect
export const config = {
  // Matches all protected paths and the login path
  matcher: ['/invoices/:path*', '/add-invoice', '/create-user', '/login'],
};