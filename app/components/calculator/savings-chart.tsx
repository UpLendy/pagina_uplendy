"use client"

import { useMemo } from "react"
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

interface SavingsChartProps {
  monthlySavings: number
}

export function SavingsChart({ monthlySavings }: SavingsChartProps) {
  // Generamos la proyección de 12 meses (Año 2026)
  // Usamos useMemo para que el gráfico no se renderice innecesariamente
  const data = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
      // Proyección lineal acumulada del ahorro
      const cumulative = monthlySavings * (i + 1)
      
      return {
        month: monthNames[i],
        savings: Math.round(cumulative),
      }
    })
  }, [monthlySavings])

  return (
    <div className="h-[180px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 10 }}
            interval={1}
          />
          <YAxis 
            hide 
            domain={[0, 'dataMax + 1000000']} // Espacio extra arriba para que no se corte
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg shadow-xl">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                      {payload[0].payload.month} 2026
                    </p>
                    <p className="text-sm font-bold text-emerald-400">
                      {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                        maximumFractionDigits: 0
                      }).format(payload[0].value as number)}
                    </p>
                  </div>
                )
              }
              return null
            }}
          />
          <Area
            type="monotone"
            dataKey="savings"
            stroke="#10b981"
            strokeWidth={2}
            fill="url(#savingsGradient)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}