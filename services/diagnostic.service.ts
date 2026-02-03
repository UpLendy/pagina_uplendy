import prisma from '@/lib/prisma';

export class DiagnosticService {
  /**
   * Evalúa las respuestas y determina el Nivel de Riesgo
   */
  private static calculateRiskLevel(responses: any): "CRITICO" | "ALTO" | "MODERADO" {
    const { procesosManuales, impactoSalarioMinimo, dependenciaPersona } = responses;
    
    // Lógica de Scoring 2026
    if (procesosManuales > 5 && impactoSalarioMinimo >= 4) return "CRITICO";
    if (dependenciaPersona || procesosManuales >= 3) return "ALTO";
    return "MODERADO";
  }

  static async createDiagnostic(data: { leadId: string; responses: any }) {
    const riskLevel = this.calculateRiskLevel(data.responses);

    return await prisma.diagnostic.create({
      data: {
        leadId: data.leadId,
        responses: data.responses,
        riskLevel: riskLevel,
      },
      include: {
        lead: true
      }
    });
  }
}