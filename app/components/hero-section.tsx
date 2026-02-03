"use client"

import { motion } from "framer-motion"
import { TrendingUp, Percent, Clock, ArrowDown } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export function HeroSection() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-slate-950">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/8 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-slate-300">
            Alerta: Aumento Salarial 2026 en Colombia
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50 mb-6"
        >
          <span className="block text-balance">Proteja su Rentabilidad:</span>
          <span className="block bg-gradient-to-r from-emerald-400 via-emerald-500 to-cyan-400 bg-clip-text text-transparent text-balance mt-2">
            Automatice hoy y neutralice el alza de costos laborales
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 text-pretty leading-relaxed"
        >
          No permita que el aumento de la nómina devore sus utilidades. 
          Desarrollamos activos digitales que reemplazan tareas manuales y 
          multiplican la productividad de su equipo actual.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <Button 
            size="lg" 
            onClick={scrollToCalculator}
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/30 hover:scale-[1.02]"
          >
            Calcular mi Ahorro Proyectado
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {[
            { 
              icon: TrendingUp, 
              label: "Aumento Salarial 2026", 
              value: "+23.7%", 
              sublabel: "Impacto en nómina",
              color: "red" 
            },
            { 
              icon: Percent, 
              label: "Margen de Ahorro con IA", 
              value: "40%", 
              sublabel: "Reducción de costos",
              color: "emerald" 
            },
            { 
              icon: Clock, 
              label: "Tiempo de Retorno (ROI)", 
              value: "< 6 meses", 
              sublabel: "Inversión recuperada",
              color: "cyan" 
            },
          ].map((stat) => (
            <div 
              key={stat.label}
              className="p-5 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm"
            >
              <stat.icon className={`w-5 h-5 md:w-6 md:h-6 mx-auto mb-3 ${
                stat.color === 'emerald' ? 'text-emerald-400' : 
                stat.color === 'cyan' ? 'text-cyan-400' : 'text-red-400'
              }`} />
              <div className={`text-2xl md:text-3xl font-bold ${
                stat.color === 'emerald' ? 'text-emerald-400' : 
                stat.color === 'cyan' ? 'text-cyan-400' : 'text-red-400'
              }`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-300 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2"
        >
          <motion.div 
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-slate-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
