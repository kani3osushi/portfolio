import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error"] : [],
    datasources: {
      db: {
        url: process.env.DATABASE_URL?.replace("postgres://", "postgresql://")
      },
    },
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;