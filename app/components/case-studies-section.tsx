"use client"

import { motion } from "framer-motion"
import { X, Check, Clock, AlertTriangle, Zap, TrendingDown } from "lucide-react"

const comparisons = [
  {
    manual: {
      title: "Digitación de facturas",
      time: "4 horas / día",
      issues: ["Errores humanos frecuentes", "Costos de horas extra", "Personal frustrado"],
    },
    automated: {
      title: "OCR + IA contable",
      time: "5 segundos",
      benefits: ["99.9% precisión", "Sin horarios límite", "Escalable sin límite"],
    },
  },
  {
    manual: {
      title: "Control de inventario",
      time: "Revisión semanal",
      issues: ["Faltantes no detectados", "Sobre-stock costoso", "Decisiones tardías"],
    },
    automated: {
      title: "Inventario en tiempo real",
      time: "Actualización instantánea",
      benefits: ["Alertas automáticas", "Predicción de demanda", "Cero pérdidas"],
    },
  },
  {
    manual: {
      title: "Atención al cliente",
      time: "Horario oficina",
      issues: ["Clientes abandonados", "Colas de espera", "Costos nocturnos"],
    },
    automated: {
      title: "Chatbot IA + Escalamiento",
      time: "24/7 activo",
      benefits: ["80% consultas resueltas", "0 tiempos de espera", "Ventas fuera de horario"],
    },
  },
]

export function CaseStudiesSection() {
  return (
    <section id="cases" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background - Usando los colores OKLCH de tu globals.css */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Antes vs. Después
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-4 text-balance">
            Vea la diferencia en{" "}
            <span className="text-emerald-400">resultados reales</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto text-pretty">
            Comparativa directa entre procesos manuales y automatizados
          </p>
        </motion.div>

        <div className="space-y-6">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.manual.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-4 md:gap-0"
            >
              {/* Manual side */}
              <div className="p-6 rounded-2xl md:rounded-r-none bg-slate-900/80 border border-red-500/20 md:border-r-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <span className="text-xs text-red-400 uppercase tracking-wider font-medium">Proceso Manual</span>
                    <h3 className="text-lg font-semibold text-slate-100">{comparison.manual.title}</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{comparison.manual.time}</span>
                </div>

                <ul className="space-y-2">
                  {comparison.manual.issues.map((issue) => (
                    <li key={issue} className="flex items-center gap-2 text-sm text-slate-400">
                      <X className="w-4 h-4 text-red-400 shrink-0" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Automated side */}
              <div className="p-6 rounded-2xl md:rounded-l-none bg-gradient-to-br from-slate-900/80 to-emerald-950/20 border border-emerald-500/20 md:border-l-emerald-500/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-400 uppercase tracking-wider font-medium">Automatizado</span>
                    <h3 className="text-lg font-semibold text-slate-100">{comparison.automated.title}</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-emerald-400">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm font-medium">{comparison.automated.time}</span>
                </div>

                <ul className="space-y-2">
                  {comparison.automated.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}