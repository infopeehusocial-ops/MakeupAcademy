require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  try {
    const leads = await prisma.lead.findMany({
      take: 5
    });
    console.log('Leads:', JSON.stringify(leads, null, 2));
  } catch (e) {
    console.error('Check error:', e);
  } finally {
    await prisma.$disconnect();
  }
}

check();
