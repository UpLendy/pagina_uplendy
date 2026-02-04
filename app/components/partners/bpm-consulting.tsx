"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import bpm1 from "../../images/BPM/bpm_1.png"
import bpm2 from "../../images/BPM/bpm_2.png"
import bpm3 from "../../images/BPM/bpm_3.png"

const images = [bpm1, bpm2, bpm3]

import { ArrowLeft, CheckCircle2, BarChart3, Users, Zap } from "lucide-react"

export function BPMConsultingShowcase() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">Volver al inicio</span>
                    </Link>
                    <div className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        Uplendy
                    </div>
                </div>
            </nav>

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Hero Section */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Caso de Éxito
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                            BPM Consulting
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-8">
                            Transformación completa de sus procesos internos mediante automatización inteligente y desarrollo de una plataforma personalizada de gestión documental.
                        </p>
                    </motion.div>

                    {/* Hero Image / Banner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden aspect-video md:aspect-[21/9] bg-slate-900 border border-slate-800 shadow-2xl"
                    >
                        {/* Image Carousel */}
                        <div className="absolute inset-0 bg-slate-900">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={images[currentImageIndex]}
                                        alt="BPM Platform Interface"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </motion.div>
                </section>

                {/* Stats / Results */}
                <section className="grid md:grid-cols-3 gap-6 mb-24">
                    {[
                        { label: "Reducción de Tiempo", value: "75%", icon: ClockIcon, desc: "En procesamiento de documentos" },
                        { label: "Eficiencia Operativa", value: "3x", icon: Zap, desc: "Aumento en capacidad de respuesta" },
                        { label: "Errores Eliminados", value: "99%", icon: CheckCircle2, desc: "En la captura de datos" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-bold text-slate-100 mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-slate-400 mb-2">{stat.label}</div>
                            <p className="text-xs text-slate-500">{stat.desc}</p>
                        </motion.div>
                    ))}
                </section>

                {/* Gallery / Details */}
                <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">El Desafío</h2>
                        <div className="space-y-4 text-slate-400">
                            <p>
                                BPM Consulting enfrentaba un cuello de botella crítico: la gestión manual de miles de documentos financieros mensuales. El proceso era lento, propenso a errores humanos y consumía valiosos recursos de personal calificado.
                            </p>
                            <p>
                                Necesitaban una solución que no solo digitalizara el archivo, sino que entendiera e interpretara la información para automatizar la toma de decisiones.
                            </p>
                        </div>

                        <ul className="mt-8 space-y-3">
                            {["Procesos manuales ineficientes", "Alta tasa de error en data entry", "Falta de reportes en tiempo real"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-slate-300">
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden"
                    >
                        {/* Visual Representation of Old Process vs New */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 p-8 w-full opacity-50">
                                <div className="space-y-3">
                                    <div className="h-2 w-20 bg-slate-700 rounded"></div>
                                    <div className="h-32 bg-slate-800 rounded-lg border border-slate-700/50 border-dashed"></div>
                                    <div className="h-32 bg-slate-800 rounded-lg border border-slate-700/50 border-dashed"></div>
                                </div>
                                <div className="space-y-3 pt-12">
                                    <div className="h-2 w-20 bg-emerald-700 rounded ml-auto"></div>
                                    <div className="h-56 bg-gradient-to-b from-emerald-900/20 to-slate-800 rounded-lg border border-emerald-500/20 shadow-lg shadow-emerald-500/5"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Solution Section */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">La Solución Implementada</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Dashboard Inteligente", desc: "Vista centralizada de KPIs en tiempo real para la toma de decisiones directivas." },
                            { title: "Agendacion de citas automaticas", desc: "Agendacion de citas automaticas para los clientes de BPM Consulting." },
                            { title: "Integración Cloud", desc: "Infraestructura escalable y segura en la nube accesible desde cualquier lugar." }
                        ].map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-emerald-400">{feature.title}</h3>
                                <p className="text-slate-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-16 border-t border-slate-800/50">
                    <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu empresa?</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Al igual que BPM Consulting, tu organización puede alcanzar nuevos niveles de eficiencia.
                    </p>
                    <Link
                        href="https://api.whatsapp.com/send/?phone=3207104918&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-orange-500 text-slate-950 font-bold hover:bg-orange-400 transition-colors">
                        Contactar
                    </Link>
                </section>

            </main>
        </div>
    )
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
