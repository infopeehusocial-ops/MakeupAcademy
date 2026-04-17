import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const LEADS_FILE = path.join(process.cwd(), 'leads.json');

export async function POST(req: Request) {
  try {
    const data = await req.json();
    let leads = [];
    
    try {
      const fileContent = await fs.readFile(LEADS_FILE, 'utf-8');
      leads = JSON.parse(fileContent);
    } catch (e) {
      // File doesn't exist yet
    }

    const newLead = {
      ...data,
      id: Date.now(),
      status: 'New',
      timestamp: new Date().toISOString()
    };

    leads.push(newLead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, lead: newLead });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save lead' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const fileContent = await fs.readFile(LEADS_FILE, 'utf-8');
    const leads = JSON.parse(fileContent);
    return NextResponse.json(leads);
  } catch (e) {
    return NextResponse.json([]);
  }
}
