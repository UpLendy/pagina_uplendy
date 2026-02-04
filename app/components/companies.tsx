"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle2, Zap, Globe2, Users, ArrowRight } from "lucide-react"

const successCases = [
    {
        name: "BPM Consulting SAS",
        letters: "BPM",
        href: "/partners/bpm-consulting",
        tagline: "Transformación Documental",
        description: "Automatización inteligente de procesos internos y desarrollo de plataforma personalizada de gestión documental.",
        accentColor: "emerald",
        stats: [
            { label: "Reducción de Tiempo", value: "75%" },
            { label: "Eficiencia", value: "3x" },
            { label: "Errores Eliminados", value: "99%" },
        ],
        features: ["Dashboard Inteligente", "Automatización RPA", "Integración Cloud"],
    },
    {
        name: "Bike Dreams",
        letters: "BD",
        href: "/partners/bike-dreams",
        tagline: "Plataforma BMX Global",
        description: "La plataforma definitiva para el mundo del BMX. Eventos, noticias en tiempo real y perfiles de equipo con alcance internacional.",
        accentColor: "orange",
        stats: [
            { label: "Cobertura", value: "Global" },
            { label: "Stack", value: "Moderno" },
            { label: "Comunidad", value: "100%" },
        ],
        features: ["Internacionalización", "Team Showcase", "Tech Stack Potente"],
    },
]

export function Companies() {
    return (
        <section id="success-cases" className="py-20 md:py-28 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Casos de Éxito
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                        Empresas que han transformado su operación
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Descubre cómo hemos ayudado a empresas a alcanzar nuevos niveles de eficiencia y crecimiento mediante soluciones tecnológicas personalizadas.
                    </p>
                </motion.div>

                {/* Success Cases Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {successCases.map((caseItem, index) => {
                        const isEmerald = caseItem.accentColor === "emerald"
                        return (
                            <motion.div
                                key={caseItem.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="group"
                            >
                                <Link href={caseItem.href} className="block">
                                    <div className={`relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-${caseItem.accentColor}-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-${caseItem.accentColor}-500/5`}>
                                        {/* Top Section */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-${caseItem.accentColor}-500/50 transition-colors`}>
                                                    <span className={`text-2xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent group-hover:from-${caseItem.accentColor}-400 group-hover:to-${caseItem.accentColor}-600`}>
                                                        {caseItem.letters}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-100 mb-1">{caseItem.name}</h3>
                                                    <span className={`text-sm font-medium ${isEmerald ? 'text-emerald-400' : 'text-orange-400'}`}>
                                                        {caseItem.tagline}
                                                    </span>
                                                </div>
                                            </div>
                                            <ArrowRight className={`w-5 h-5 text-slate-600 group-hover:${isEmerald ? 'text-emerald-400' : 'text-orange-400'} group-hover:translate-x-1 transition-all`} />
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                            {caseItem.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            {caseItem.stats.map((stat) => (
                                                <div key={stat.label} className="text-center p-3 rounded-xl bg-slate-800/50">
                                                    <div className={`text-lg font-bold ${isEmerald ? 'text-emerald-400' : 'text-orange-400'}`}>
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-xs text-slate-500">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2">
                                            {caseItem.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className={`px-3 py-1 rounded-full text-xs font-medium ${isEmerald ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'}`}
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isEmerald ? 'bg-gradient-to-br from-emerald-500/5 to-transparent' : 'bg-gradient-to-br from-orange-500/5 to-transparent'}`}></div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-500 mb-4">¿Quieres ser nuestro próximo caso de éxito?</p>
                    <Link
                        href="https://api.whatsapp.com/send/?phone=3207104918&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold hover:from-emerald-400 hover:to-cyan-400 transition-all hover:shadow-lg hover:shadow-emerald-500/25"
                    >
                        Contáctanos
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
