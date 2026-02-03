'use server'

import { TypeCompiler } from '@sinclair/typebox/compiler';
import { DiagnosticInputCreate } from '@/prisma/prismabox/Diagnostic';
import { DiagnosticService } from '@/services/diagnostic.service';

const validator = TypeCompiler.Compile(DiagnosticInputCreate);

export async function diagnosticController(formData: unknown) {
  // 1. Validación DTO
  if (!validator.Check(formData)) {
    return { 
      success: false, 
      errors: [...validator.Errors(formData)].map(e => e.message) 
    };
  }

  try {
    // 2. Ejecución del Servicio
    const result = await DiagnosticService.createDiagnostic(formData);
    
    return { 
      success: true, 
      data: {
        riskLevel: result.riskLevel,
        company: result.lead.companyName
      }
    };
  } catch (error) {
    console.error("Diagnostic Controller Error:", error);
    return { success: false, message: "No se pudo procesar el diagnóstico." };
  }
}