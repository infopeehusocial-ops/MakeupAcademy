import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getPrismaClient } from '@/lib/prisma';
import { signJWT } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const prisma = getPrismaClient();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = signJWT({ id: admin.id, email: admin.email });

    return NextResponse.json({ success: true, token });
  } catch (error: any) {
    console.error('CRITICAL LOGIN ERROR:', {
      message: error.message,
      code: error.code,
      stack: error.stack,
      env: !!process.env.DATABASE_URL
    });
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error.message 
    }, { status: 500 });
  }
}
