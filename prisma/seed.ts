import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

export async function seed() {
  console.log('🚀 Iniciando Seed: Uplendy 2026...')

  // 1. Crear Roles de Consultoría
  const adminRole = await prisma.lead.upsert({
    where: { email: 'admin@uplendy.com' },
    update: {},
    create: {
      fullName: 'Administrador Uplendy',
      email: 'admin@uplendy.com',
      companyName: 'Uplendy S.A.S',
      phoneNumber: '+573000000000'
    }
  })

  // 2. Crear Leads de ejemplo para pruebas de ROI
  console.log('📈 Creando leads de prueba...')
  await prisma.lead.create({
    data: {
      fullName: 'Empresario Prueba',
      email: 'test@empresa.com',
      companyName: 'Manufacturas Medellín',
      calculations: {
        create: {
          employeeCount: 50,
          hoursLostPerWeek: 15,
          monthlySalary: 1300000, // SMLV Proyectado
          annualSavings: 45000000
        }
      }
    }
  })

  console.log('✅ SEED COMPLETADO: Sistema listo para consultoría.')
}

seed()
  .catch((e) => { console.error('❌ Error en seed:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); })