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
                    Empresas que confían en Uplendy
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
                                className="flex items-center gap-2 text-slate-500 hover:text-slate-400 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-slate-400">{logo.letters}</span>
                                </div>
                                <span className="text-sm font-medium hidden sm:inline">{logo.name}</span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
