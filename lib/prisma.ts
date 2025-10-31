// lib/prisma.ts
// [Your Project Root]/lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Declaration required for TypeScript to avoid errors on global.prisma
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;