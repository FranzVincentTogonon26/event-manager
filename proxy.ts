import { auth } from '@/lib/auth/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protected routes requiring authentication
    '/account/:path*',
  ],
};
