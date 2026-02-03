'use server'

import prisma from '@/lib/prisma';


export async function createTestLead() {
  try {
    const newLead = await prisma.lead.create({
      data: {
        email: 'contacto@uplendy.com',
        fullName: 'Thomas - Uplendy Admin',
        companyName: 'Uplendy S.A.S',
        phoneNumber: '3001234567',
      },
    });
    
    console.log('✅ Lead de prueba creado:', newLead);
    return { success: true, lead: newLead };
  } catch (error) {
    console.error('❌ Error al crear lead:', error);
    return { success: false, error: 'No se pudo conectar con la base de datos' };
  }
}