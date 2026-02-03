"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const logos = [
    { name: "BPM Consulting SAS", letters: "BPM", href: "/partners/bpm-consulting" },
    { name: "Bike Dreams club", letters: "BD", href: "/partners/bike-dreams" },
]

export function LogosSection() {
    return (
        <section id="companies" className="py-16 md:py-20 bg-slate-950 border-y border-slate-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-slate-500 mb-8"
                >
                    <span className="block text-2xl font-bold text-slate-100 mb-2">Empresas que han transformado su operación con Uplendy</span>
                    <span className="block text-emerald-400 font-medium">✨ Haz clic en los logos para ver nuestros casos de éxito</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
                >
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={logo.href}
                                className="group flex flex-col items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
                                    <span className="text-xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-emerald-600">{logo.letters}</span>
                                </div>
                                <span className="text-base font-semibold transition-colors">{logo.name}</span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
