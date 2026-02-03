import { HeroSection } from "@/app/components/hero-section"
import { FeaturesSection } from "@/app/components/features-section"
import { CaseStudiesSection } from "@/app/components/case-studies-section"
import { CalculatorSection } from "@/app/components/calculator-section"
import { CTASection } from "@/app/components/cta-section"
import { LogosSection } from "@/app/components/logos-section"

export default function HomePage() {
  return (
    <main className="flex flex-col bg-slate-950">
      {/* 1. EL GANCHO: Impacto inmediato y alerta SMLV 2026 */}
      <HeroSection />

      <LogosSection />


      {/* 3. LA SOLUCIÓN: Qué activos digitales desarrollamos */}
      <FeaturesSection />

      {/* 4. LA DIFERENCIA: Comparativa técnica Antes vs. Después */}
      <CaseStudiesSection />

      {/* 5. EL MOTOR: Donde la magia del backend ocurre */}
      {/* Este componente contiene a tu ROICalculator que guarda en la DB */}
      <CalculatorSection />

      {/* 6. CIERRE DE ORO: Último llamado a la acción */}
      <CTASection />

    </main>
  )
}