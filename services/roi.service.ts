import prisma from '@/lib/prisma';

export class RoiService {
  /**
   * Ejecuta la lógica central del "Blindaje Financiero"
   */
  static async processBusinessShielding(data: {
    email: string;
    fullName: string;
    companyName: string;
    phoneNumber: string;
    employeeCount: number;
    hoursLostPerWeek: number;
    monthlySalary: number;
  }) {
    // Lógica de cálculo: SMLV 2026 + 53% carga prestacional
    const hourlyRate = (data.monthlySalary * 1.53) / 192;
    const annualSavings = Math.round(data.employeeCount * data.hoursLostPerWeek * hourlyRate * 52);

    // Persistencia mediante Upsert de Lead y creación de Cálculo
    const phoneNumber = data.phoneNumber.trim();
    return await prisma.lead.upsert({
      where: { email: data.email },
      update: { fullName: data.fullName, companyName: data.companyName, phoneNumber },
      create: { 
        email: data.email, 
        fullName: data.fullName, 
        companyName: data.companyName,
        phoneNumber,
        calculations: {
          create: {
            employeeCount: data.employeeCount,
            hoursLostPerWeek: data.hoursLostPerWeek,
            monthlySalary: data.monthlySalary,
            annualSavings: annualSavings
          }
        }
      },
      include: { calculations: true }
    });
  }
}