import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Generate a unique registration ID
    let regId = `PD-${Math.floor(1000 + Math.random() * 9000)}`;
    
    // Simple retry logic if unique constraint fails
    const existing = await prisma.lead.findFirst({ where: { regId } });
    if (existing) {
      regId = `PD-${Math.floor(1000 + Math.random() * 9000)}`;
    }

    const newLead = await prisma.lead.create({
      data: {
        regId,
        name: data.name || 'Anonymous',
        phone: data.phone || '0000000000',
        email: data.email || null,
        course: data.program || data.course || 'General Inquiry',
        message: data.vision || data.message || null,
      },
    });

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error: any) {
    console.error('Detailed Create lead error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to save lead', 
      details: error.message || String(error) 
    }, { status: 500 });
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
