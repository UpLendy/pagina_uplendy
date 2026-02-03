import type { Metadata } from "next"
import Link from "next/link"
import { FileText, ArrowLeft } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Uplendy",
  description: "Términos y condiciones de uso del sitio web y servicios de Uplendy. Desarrollo de software y automatización en Colombia.",
}

export default function TerminosPage() {
  return (
    <main className="flex flex-col bg-slate-950 min-h-screen">
      {/* Hero de la página */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <FileText className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
                Términos y Condiciones
              </h1>
              <p className="text-slate-500 text-sm mt-1">Última actualización: Enero 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">1. Aceptación de los términos</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Al acceder y utilizar el sitio web de Uplendy (“el Sitio”) y los servicios de desarrollo de software, 
                automatización y consultoría que ofrecemos, usted acepta quedar vinculado por los presentes Términos y Condiciones. 
                Si no está de acuerdo con alguna parte de estos términos, le solicitamos que no utilice nuestros servicios.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">2. Descripción del servicio</h2>
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                Uplendy ofrece desarrollo de activos digitales, automatización de procesos y soluciones tecnológicas 
                orientadas a empresas en Colombia. Los servicios incluyen, entre otros:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-2">
                <li>Desarrollo de software a medida</li>
                <li>Automatización contable, logística y operativa</li>
                <li>Consultoría en optimización de procesos</li>
                <li>Herramientas de cálculo y diagnóstico (por ejemplo, calculadora ROI)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">3. Uso aceptable</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Usted se compromete a utilizar el Sitio y los servicios de forma lícita, de buena fe y sin fines fraudulentos 
                o que puedan dañar a terceros o a nuestra infraestructura. No está permitido el uso de bots, scraping no autorizado, 
                la suplantación de identidad ni la introducción de malware. Nos reservamos el derecho de suspender o denegar el acceso 
                en caso de incumplimiento.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">4. Propiedad intelectual</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                El contenido del Sitio (diseño, textos, logotipos, código y materiales) es propiedad de Uplendy o de sus licenciantes. 
                Los entregables y desarrollos realizados bajo contrato se regirán por el acuerdo específico con cada cliente. 
                No se concede ninguna licencia implícita sobre marcas o contenido sin autorización previa por escrito.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">5. Información y datos</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                La información que nos proporcione a través de formularios (por ejemplo, calculadora ROI, contacto o agendamiento) 
                se tratará conforme a nuestra{" "}
                <Link href="/privacidad" className="text-emerald-400 hover:underline">
                  Política de Privacidad
                </Link>
                . Usted declara que los datos aportados son veraces y que tiene facultad para compartirlos con Uplendy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">6. Limitación de responsabilidad</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                El Sitio y las herramientas informativas (como la calculadora de ROI) se ofrecen “tal cual” con fines orientativos. 
                Uplendy no garantiza resultados comerciales o fiscales específicos. La responsabilidad por decisiones tomadas con base 
                en la información del Sitio recae en el usuario. En la medida permitida por la ley aplicable, Uplendy no será responsable 
                por daños indirectos, consecuentes o lucro cesante derivados del uso del Sitio o de los servicios.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">7. Modificaciones</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor 
                al publicarse en esta página, indicando la fecha de última actualización. El uso continuado del Sitio tras dichos cambios 
                constituye la aceptación de los nuevos términos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">8. Ley aplicable y jurisdicción</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia derivada de su interpretación 
                o ejecución será sometida a los tribunales competentes en Colombia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">9. Contacto</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Para consultas sobre estos Términos y Condiciones puede contactarnos a través de los canales indicados en el Sitio 
                (formulario de contacto, correo electrónico o redes sociales).
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50">
            <Link href="/">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
