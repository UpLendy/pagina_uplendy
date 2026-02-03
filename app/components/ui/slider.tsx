'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  
  // 🔍 Lógica corregida: 
  // Si pasas un número (como en tu calculadora), lo convertimos en array [valor]
  // para que Radix sepa que solo debe dibujar UN círculo (thumb).
  const _values = React.useMemo(
    () => {
      if (Array.isArray(value)) return value;
      if (typeof value === 'number') return [value];
      if (Array.isArray(defaultValue)) return defaultValue;
      if (typeof defaultValue === 'number') return [defaultValue];
      return [min];
    },
    [value, defaultValue, min]
  )

  return (
    <SliderPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      step={step}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      {/* El camino (track) */}
      <SliderPrimitive.Track className="bg-slate-800 relative grow overflow-hidden rounded-full h-2 w-full">
        {/* El relleno con gradiente Uplendy */}
        <SliderPrimitive.Range className="absolute bg-gradient-to-r from-emerald-500 to-cyan-400 h-full" />
      </SliderPrimitive.Track>

      {/* Renderizamos tantos círculos como valores existan (en tu caso, uno) */}
      {_values.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className="block size-5 rounded-full border-2 border-emerald-500 bg-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }