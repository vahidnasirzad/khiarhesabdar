// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Use a global variable to keep a single instance of PrismaClient 
// across hot reloads in development.
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}