"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Globe2, Bike, Newspaper, Languages, Zap, Users } from "lucide-react"

import carrusel1 from "../../images/bike/carrusel-1.png"
import carrusel2 from "../../images/bike/carrusel-2.png"
import bike1 from "../../images/bike/bike-1.png"

const images = [carrusel1, carrusel2]

export function BikeDreamsShowcase() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">Volver al inicio</span>
                    </Link>
                    <div className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
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
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Plataforma BMX
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                            Bike Dreams
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-8">
                            La plataforma definitiva para el mundo del BMX. Eventos, noticias en tiempo real y perfiles de equipo, todo en un solo lugar con alcance internacional.
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
                                        alt="Bike Dreams Platform Interface"
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
                        { label: "Cobertura de Eventos", value: "Global", icon: Globe2, desc: "Noticias de todo el mundo" },
                        { label: "Stack Tecnológico", value: "Moderno", icon: Zap, desc: "Elysia + Next.js" },
                        { label: "Comunidad", value: "100%", icon: Users, desc: "Enfocado en Riders" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/30 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-orange-500/10 group-hover:text-orange-400 transition-colors">
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
                        <h2 className="text-3xl font-bold mb-6">El Objetivo</h2>
                        <div className="space-y-4 text-slate-400">
                            <p>
                                El mundo del BMX necesitaba un espacio centralizado. Los eventos y noticias solían estar dispersos en diferentes redes sociales y foros, dificultando el seguimiento para los aficionados y corredores.
                            </p>
                            <p>
                                Bike Dreams nace para conectar a la comunidad, ofreciendo no solo información actualizada, sino también una ventana para que los equipos presenten a sus talentos al mundo.
                            </p>
                        </div>

                        <ul className="mt-8 space-y-3">
                            {["Centralización de eventos BMX", "Visibilidad para equipos y riders", "Soporte multi-idioma"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-slate-300">
                                    <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
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
                        <Image
                            src={bike1}
                            alt="Bike Dreams Feature Detail"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </section>

                {/* Solution Section */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">Características Principales</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Internacionalización", desc: "Plataforma multilingüe para alcanzar a la audiencia global del BMX.", icon: Languages },
                            { title: "Team Showcase", desc: "Secciones dedicadas para presentar a los participantes y sus logros.", icon: Users },
                            { title: "Tech Stack Potente", desc: "Desarrollado con la velocidad de Elysia y la robustez de Next.js.", icon: Zap }
                        ].map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
                            >
                                <feature.icon className="w-8 h-8 text-orange-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-4 text-orange-400">{feature.title}</h3>
                                <p className="text-slate-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-16 border-t border-slate-800/50">
                    <h2 className="text-3xl font-bold mb-6">¿Quieres saber más?</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Explora las noticias más recientes y conoce a los protagonistas del BMX en Bike Dreams.
                    </p>
                    <Link
                        href="https://api.whatsapp.com/send/?phone=3207104918&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-orange-500 text-slate-950 font-bold hover:bg-orange-400 transition-colors"
                    >
                        Contactar
                    </Link>
                </section>

            </main>
        </div>
    )
}
