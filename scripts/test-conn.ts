import 'dotenv/config';
import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('Testing connection to:', process.env.DATABASE_URL?.substring(0, 20) + '...');
  try {
    const admin = await prisma.admin.findFirst();
    console.log('Connection successful! Admin found:', admin?.email);
  } catch (error) {
    console.error('Connection failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
