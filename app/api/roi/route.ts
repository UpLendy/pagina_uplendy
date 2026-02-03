import { NextResponse } from 'next/server';
import { RoiService } from '@/services/roi.service';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import { RoiCalculationInputCreate } from '@/prisma/prismabox/RoiCalculation';

const validator = TypeCompiler.Compile(RoiCalculationInputCreate);

/**
 * @swagger
 * /api/roi:
 *   post:
 *     description: Calcula el ROI de blindaje financiero y crea un Lead.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "gerencia@empresa.com"
 *               fullName:
 *                 type: string
 *                 example: "Carlos Gomez"
 *               companyName:
 *                 type: string
 *                 example: "Textiles del Caribe"
 *               employeeCount:
 *                 type: integer
 *                 example: 25
 *               hoursLostPerWeek:
 *                 type: integer
 *                 example: 12
 *               monthlySalary:
 *                 type: number
 *                 example: 1300000
 *     responses:
 *       200:
 *         description: Cálculo exitoso.
 *       400:
 *         description: Error en los datos enviados.
 */
export async function POST(request: Request) {
  try {
    // 1. Verificamos si hay contenido en el cuerpo antes de parsear
    const text = await request.text();
    if (!text) {
      return NextResponse.json({ error: 'El cuerpo de la petición está vacío' }, { status: 400 });
    }

    const body = JSON.parse(text);

    // 2. Validación del DTO (Tu lógica Prismabox)
    if (!validator.Check(body)) {
      return NextResponse.json(
        { 
          error: 'Datos inválidos', 
          details: [...validator.Errors(body)].map(e => ({ path: e.path, message: e.message })) 
        }, 
        { status: 400 }
      );
    }

    // 3. Llamada al Servicio
    const result = await RoiService.processBusinessShielding(body);
    
    return NextResponse.json({ success: true, data: result });

  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'JSON malformado' }, { status: 400 });
    }
    console.error("API ROI Error:", error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}