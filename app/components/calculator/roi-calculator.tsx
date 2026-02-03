"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight, ArrowLeft, DollarSign, Clock,
  Sparkles, Loader2, Building2, Mail, User, Users, Phone
} from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Slider } from "@/app/components/ui/slider"
import { Input } from "@/app/components/ui/input"
import { SavingsChart } from "@/app/components/calculator/savings-chart"
import { roiController } from "@/app/actions/roi.controller"

export function ROICalculator() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    totalMonthlyPayroll: 20000000, // nómina mensual total (para paso 1)
    monthlySalary: 2000000,
    employeeCount: 10,
    hoursLostPerWeek: 40,
    email: "",
    fullName: "",
    companyName: "",
    phoneNumber: "",
  })

  const [backendResult, setBackendResult] = useState<{ annualSavings: number } | null>(null)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const totalSteps = 5

  const formatCOP = useCallback((value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency', currency: 'COP', minimumFractionDigits: 0,
    }).format(value)
  }, [])

  const handleFinalSubmit = async () => {
    if (!acceptedTerms) {
      alert("Debe aceptar los Términos y Condiciones y la Política de Privacidad para generar el reporte.")
      return
    }
    if (!data.phoneNumber?.trim()) {
      alert("Por favor ingrese su número de celular.")
      return
    }
    setLoading(true)
    try {
      const employeeCount = data.employeeCount || 1
      const monthlySalary = Math.round(data.totalMonthlyPayroll / employeeCount)
      const payload = {
        email: data.email,
        fullName: data.fullName,
        companyName: data.companyName,
        phoneNumber: data.phoneNumber.trim(),
        employeeCount,
        hoursLostPerWeek: data.hoursLostPerWeek,
        monthlySalary: Math.max(monthlySalary, 1300000), // respeta mínimo del backend
      }
      const result = await roiController(payload)
      if (result.success) {
        setBackendResult(result.data || null)
        setStep(5)
      } else {
        alert("Por favor completa todos los campos correctamente.")
      }
    } catch (error) {
      alert("Error al procesar el cálculo.")
    } finally {
      setLoading(false)
    }
  }

  const nextStep = () => { if (step < 4) setStep(step + 1) }
  const prevStep = () => { if (step > 1) setStep(step - 1) }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Barra de Progreso más delgada y elegante */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Paso {step} de {totalSteps}</span>
          <span className="text-sm font-bold text-emerald-400">{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: "circOut" }}
          />
        </div>
      </div>

      {/* Contenedor de pasos con altura flexible pero consistente */}
      <div className="min-h-[380px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* PASO 1: ¿Cuál es su nómina mensual actual? */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              <div className="text-center space-y-2">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">¿Cuál es su nómina mensual actual?</h3>
                <p className="text-base text-slate-400">Indique el total de su nómina mensual en COP.</p>
              </div>

              <div className="space-y-8 px-2">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-base font-medium text-slate-300">Nómina mensual total</label>
                    <span className="text-xl font-bold text-emerald-400">{formatCOP(data.totalMonthlyPayroll)}</span>
                  </div>
                  <Slider
                    value={[data.totalMonthlyPayroll]}
                    min={2000000} max={200000000} step={1000000}
                    onValueChange={([v]) => setData({ ...data, totalMonthlyPayroll: v })}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* PASO 2: ¿Cuántas horas manuales invierte por semana? */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10 text-center"
            >
              <div className="w-20 h-20 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-100">¿Cuántas horas manuales invierte por semana?</h3>
                <p className="text-base text-slate-400">Horas que su equipo dedica a tareas manuales cada semana.</p>
              </div>
              <div className="py-6">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-8">
                  {data.hoursLostPerWeek}h
                </div>
                <Slider
                  value={[data.hoursLostPerWeek]}
                  min={1} max={160} step={1}
                  onValueChange={([v]) => setData({ ...data, hoursLostPerWeek: v })}
                />
              </div>
            </motion.div>
          )}

          {/* PASO 3: Número de colaboradores */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10 text-center"
            >
              <div className="w-20 h-20 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-emerald-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-100">¿Cuántos colaboradores tiene en su equipo?</h3>
                <p className="text-base text-slate-400">Número de personas que conforman su equipo de trabajo.</p>
              </div>
              <div className="py-6 px-2">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-8">
                  {data.employeeCount}
                </div>
                <Slider
                  value={[data.employeeCount]}
                  min={1} max={100} step={1}
                  onValueChange={([v]) => setData({ ...data, employeeCount: v })}
                />
              </div>
            </motion.div>
          )}

          {/* PASO 4: Prepare su Informe (formulario + checkbox) */}
          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Prepare su Informe</h3>
                <p className="text-base text-slate-400">¿A dónde enviamos su análisis de blindaje 2026?</p>
              </div>
              <div className="max-w-md mx-auto space-y-4 pt-4">
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                  <Input placeholder="Nombre Completo" className="pl-10 h-12" value={data.fullName} onChange={e => setData({ ...data, fullName: e.target.value })} />
                </div>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                  <Input placeholder="Email Corporativo" className="pl-10 h-12" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
                </div>
                <div className="relative group">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                  <Input placeholder="Empresa" className="pl-10 h-12" value={data.companyName} onChange={e => setData({ ...data, companyName: e.target.value })} />
                </div>
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                  <Input placeholder="Número de celular " type="tel" className="pl-10 h-12" value={data.phoneNumber} onChange={e => setData({ ...data, phoneNumber: e.target.value })} required />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group pt-4">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 focus:ring-2"
                  />
                  <span className="text-sm text-slate-400 group-hover:text-slate-300">
                    Acepto los{" "}
                    <Link href="/terminos" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
                      Términos y Condiciones
                    </Link>
                    {" "}y autorizo el tratamiento de mis datos según la{" "}
                    <Link href="/privacidad" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
                      Política de Privacidad
                    </Link>
                    .
                  </span>
                </label>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold text-slate-100">Blindaje Proyectado</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col justify-center">
                  <span className="text-sm text-slate-500 uppercase font-bold tracking-tighter">Ahorro Anual</span>
                  <div className="text-3xl font-black text-emerald-400 mt-1">
                    {formatCOP(backendResult?.annualSavings || 0)}
                  </div>
                </div>
                <div className="p-2 rounded-2xl bg-slate-800/20 border border-slate-700/30">
                  <SavingsChart monthlySavings={(backendResult?.annualSavings || 0) / 12} />
                </div>
              </div>
              <Link
                href="https://api.whatsapp.com/send/?phone=3207104918&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold h-14 rounded-xl shadow-lg shadow-emerald-500/20">
                  Agendar Diagnóstico Estratégico
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navegación - Separada con margen superior claro */}
      {step < 5 && (
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-slate-800/60">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={step === 1 || loading}
            className="text-slate-400 hover:text-white hover:bg-slate-800/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Atrás
          </Button>

          <Button
            onClick={step === 4 ? handleFinalSubmit : nextStep}
            disabled={loading || (step === 4 && (!acceptedTerms || !data.phoneNumber?.trim()))}
            className="px-8 bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-lg h-11 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="animate-spin w-4 h-4" /> : step === 4 ? "Generar Reporte" : "Siguiente"}
            {!loading && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      )}
    </div>
  )
}