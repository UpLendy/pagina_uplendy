import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const prismaClientSingleton = () => {
  // 1. Creamos el pool de conexiones usando la variable de entorno
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  
  // 2. Creamos el adaptador específico para Postgres
  const adapter = new PrismaPg(pool);
  
  // 3. Pasamos el adaptador al cliente (Requerido en Prisma 7)
  return new PrismaClient({ adapter });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;