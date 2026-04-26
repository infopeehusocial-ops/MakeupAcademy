const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
require('dotenv').config();
//test
const prisma = new PrismaClient({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});

async function main() {
  const email = 'admin@peehudeka.com';
  const password = 'admin-password-123';
  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await prisma.admin.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: {
      email,
      password: hashedPassword,
    },
  });

  console.log('Admin seeded successfully:', admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
