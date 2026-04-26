import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const newLead = await prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        course: data.program || data.course,
        message: data.vision || data.message || null,
      },
    });

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error) {
    console.error('Create lead error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save lead' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(leads);
  } catch (error) {
    console.error('Fetch leads error:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}
