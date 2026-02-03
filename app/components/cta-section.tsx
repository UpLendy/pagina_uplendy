"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Calendar, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/app/components/ui/button" // Ruta ajustada a tu estructura

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background - Usando los gradientes OKLCH de tu tema */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/20">
            <Shield className="w-10 h-10 text-emerald-400" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 text-balance">
            ¿Listo para blindar{" "}
            <span className="text-emerald-400">su empresa?</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto text-pretty">
            Agende un diagnóstico de 15 minutos y reciba su Hoja de Ruta de Automatización personalizada ante el alza del SMLV 2026.
          </p>

          {/* Benefits Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>15 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Hoja de ruta incluida</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Sin compromiso</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="https://api.whatsapp.com/send/?phone=3207104918&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
              >
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-slate-500 italic">
            Asegure su margen operativo antes de que comience el ciclo fiscal 2026.
          </p>
        </motion.div>
      </div>
    </section>
  )
}