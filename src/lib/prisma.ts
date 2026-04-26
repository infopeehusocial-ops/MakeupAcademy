import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

let cachedPrisma: PrismaClient | null = null;

export const getPrismaClient = () => {
  if (cachedPrisma) return cachedPrisma;

  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString) {
    console.error('DATABASE_URL is missing from environment variables');
    throw new Error('DATABASE_URL is not defined in environment variables');
  }

  const pool = new pg.Pool({ 
    connectionString,
    ssl: { rejectUnauthorized: false }
  });
  
  const adapter = new PrismaPg(pool);
  
  cachedPrisma = new PrismaClient({
    adapter,
    log: ['error', 'warn'],
  });
  
  return cachedPrisma;
};

// Use a getter to support existing imports while allowing lazy init
export const prisma = (global as any).prisma_v2 || getPrismaClient();
if (process.env.NODE_ENV !== 'production') (global as any).prisma_v2 = prisma;
