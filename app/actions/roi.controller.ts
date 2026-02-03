'use server'

import { TypeCompiler } from '@sinclair/typebox/compiler';
import { RoiCalculationInputCreate } from '@/prisma/prismabox/RoiCalculation';
import { RoiService } from '@/services/roi.service';

const validator = TypeCompiler.Compile(RoiCalculationInputCreate);

export async function roiController(formData: unknown) {
  // 1. Validación mediante DTO
  if (!validator.Check(formData)) {
    const errors = [...validator.Errors(formData)].map(err => ({
      path: err.path,
      message: err.message
    }));
    return { success: false, errors };
  }

  try {
    // 2. Llamada al Servicio
    const result = await RoiService.processBusinessShielding(formData);
    
    return { 
      success: true, 
      data: {
        annualSavings: result.calculations[result.calculations.length - 1].annualSavings,
        leadId: result.id 
      }
    };
  } catch (error) {
    console.error("Controller Error:", error);
    return { success: false, message: "Error interno en el servidor de Uplendy." };
  }
}