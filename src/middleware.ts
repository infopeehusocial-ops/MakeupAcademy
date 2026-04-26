import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'fallback-secret-for-dev'
);

export async function middleware(request: NextRequest) {
  // Protect all /api/leads routes except POST (which is public for new leads)
  if (request.nextUrl.pathname.startsWith('/api/leads')) {
    if (request.method === 'POST') {
      return NextResponse.next();
    }

    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    try {
      await jwtVerify(token, JWT_SECRET);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/leads/:path*'],
};
