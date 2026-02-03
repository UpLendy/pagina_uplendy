"use client"

import { motion } from "framer-motion"
import { Calculator } from "lucide-react"
// 🚀 Ajustamos la ruta para que importe desde la subcarpeta correcta
import { ROICalculator } from "@/app/components/calculator/roi-calculator"

export function CalculatorSection() {
  return (
    <section id="calculator" className="relative py-24 md:py-32 overflow-hidden bg-slate-950">
      {/* Efecto de luz de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium uppercase tracking-wider">Herramienta ROI</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            Calcule su <span className="text-emerald-400">ahorro proyectado</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Descubra cuánto puede optimizar su operación ante el alza de costos laborales.
          </p>
        </motion.div>

        {/* Card que contiene la calculadora real */}
        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 md:p-10 shadow-2xl">
          <ROICalculator />
        </div>
      </div>
    </section>
  )
}