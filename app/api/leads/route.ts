import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

/**
 * GET /api/leads
 * Devuelve los últimos leads con sus cálculos ROI.
 * Sirve para verificar que los datos del front (calculadora) se están guardando.
 * En producción conviene proteger esta ruta (auth o API key).
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Math.min(Number(searchParams.get("limit")) || 10, 50)

    const leads = await prisma.lead.findMany({
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        calculations: {
          orderBy: { createdAt: "desc" },
          take: 5,
        },
      },
    })

    return NextResponse.json({
      ok: true,
      total: leads.length,
      leads,
    })
  } catch (error) {
    console.error("Leads API error:", error)
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}
