import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react' // Ajustado para compatibilidad estándar
import './globals.css'
// Importamos tus componentes locales para que el layout sea funcional
import { Header } from "@/app/components/header" 
import { Footer } from "@/app/components/footer"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'Automatiza y Protege tu Rentabilidad | Desarrollo de Software Colombia 2026',
  description: 'Neutralice el alza de costos laborales de 2026. Desarrollamos activos digitales que reemplazan tareas manuales y multiplican la productividad de su equipo.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-slate-950 text-slate-100`}>
        <Header /> 
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}