import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

/**
 * GET /api/health
 * Verifica que la base de datos esté conectada y devuelve conteos básicos.
 * Útil para confirmar que DATABASE_URL funciona y que los datos se persisten.
 */
export async function GET() {
  try {
    // 1. Probar conexión con una query simple
    await prisma.$queryRaw`SELECT 1`

    // 2. Contar registros para confirmar que las tablas existen y hay datos
    const [leadsCount, calculationsCount] = await Promise.all([
      prisma.lead.count(),
      prisma.roiCalculation.count(),
    ])

    return NextResponse.json({
      ok: true,
      db: "connected",
      message: "Base de datos conectada correctamente.",
      counts: {
        leads: leadsCount,
        roiCalculations: calculationsCount,
      },
    })
  } catch (error) {
    console.error("Health check error:", error)
    return NextResponse.json(
      {
        ok: false,
        db: "disconnected",
        message: "Error al conectar con la base de datos.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 503 }
    )
  }
}
