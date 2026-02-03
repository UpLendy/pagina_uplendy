"use client"

import { motion } from "framer-motion"
import { 
  Calculator, 
  Truck, 
  Headphones,
} from "lucide-react"

const solutions = [
  {
    icon: Calculator,
    title: "Automatización Contable",
    subtitle: "Administración",
    description: "Reduzca 160 horas de digitación manual a 5 segundos. Procesos contables que antes tomaban días ahora se ejecutan al instante.",
    savings: "160h → 5s",
    color: "emerald",
  },
  {
    icon: Truck,
    title: "Logística Inteligente",
    subtitle: "Operaciones",
    description: "Controle inventarios sin errores humanos ni recargos nocturnos. Optimización de rutas y predicción de demanda con IA.",
    savings: "0 errores",
    color: "cyan",
  },
  {
    icon: Headphones,
    title: "Atención 24/7",
    subtitle: "Servicio al Cliente",
    description: "Escale sus ventas sin aumentar su personal de soporte. Chatbots inteligentes que resuelven el 80% de consultas.",
    savings: "24/7 activo",
    color: "emerald",
  },
]

export function FeaturesSection() {
  return (
    <section id="solutions" className="relative py-24 md:py-32 overflow-hidden bg-slate-900/30">
      {/* Background - Usando los colores OKLCH de tu globals.css */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Soluciones que alivian el dolor
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-4 text-balance">
            Reemplace costos laborales con{" "}
            <span className="text-emerald-400">activos digitales</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto text-pretty">
            Cada proceso automatizado es un empleado que no necesita contratar en 2026
          </p>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:bg-slate-800/30"
            >
              {/* Savings badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                solution.color === 'emerald' 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                  : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
              }`}>
                {solution.savings}
              </div>

              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 ${
                solution.color === 'emerald' 
                  ? 'bg-emerald-500/10 text-emerald-400' 
                  : 'bg-cyan-500/10 text-cyan-400'
              }`}>
                <solution.icon className="w-7 h-7" />
              </div>
              
              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                {solution.subtitle}
              </span>
              <h3 className="text-xl font-semibold text-slate-100 mt-1 mb-3">
                {solution.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}