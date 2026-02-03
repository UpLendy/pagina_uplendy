import type { Metadata } from "next"
import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export const metadata: Metadata = {
  title: "Política de Privacidad | Uplendy",
  description: "Política de privacidad y tratamiento de datos personales de Uplendy. Cumplimiento normativo en Colombia.",
}

export default function PrivacidadPage() {
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
              <Shield className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
                Política de Privacidad
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
              <h2 className="text-xl font-bold text-slate-100 mb-3">1. Responsable del tratamiento</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Uplendy es responsable del tratamiento de los datos personales que recopilamos a través de nuestro sitio web y de los servicios de desarrollo de software y automatización que ofrecemos en Colombia.
                Esta política describe qué datos recogemos, para qué los usamos y cuáles son sus derechos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">2. Datos que recopilamos</h2>
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                Podemos recopilar los siguientes tipos de datos personales:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-2">
                <li><strong className="text-slate-300">Datos de identificación y contacto:</strong> nombre completo, correo electrónico corporativo, nombre de la empresa.</li>
                <li><strong className="text-slate-300">Datos de uso:</strong> información relacionada con el uso de la calculadora ROI, diagnósticos o formularios que complete.</li>
                <li><strong className="text-slate-300">Datos técnicos:</strong> dirección IP, tipo de navegador, páginas visitadas y datos de cookies, cuando aplique.</li>
              </ul>
              <p className="text-slate-400 text-base leading-relaxed mt-4">
                No solicitamos datos sensibles (salud, origen étnico, opiniones políticas, etc.) a través del Sitio.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">3. Finalidades del tratamiento</h2>
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                Utilizamos sus datos personales para:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-2">
                <li>Gestionar solicitudes de contacto, agendamiento de diagnósticos y envío de informes o hojas de ruta.</li>
                <li>Procesar y almacenar los resultados de la calculadora ROI y asociarlos a su perfil o empresa cuando corresponda.</li>
                <li>Mejorar nuestros servicios, el Sitio y la experiencia del usuario.</li>
                <li>Cumplir obligaciones legales y resolver controversias.</li>
                <li>Enviar comunicaciones comerciales o informativas, cuando haya dado su consentimiento o cuando la ley lo permita.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">4. Base legal y consentimiento</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                El tratamiento de sus datos se basa en: (i) su consentimiento, cuando nos los proporciona de forma voluntaria en formularios; 
                (ii) la ejecución de medidas precontractuales o contractuales; y (iii) el interés legítimo de Uplendy para operar el Sitio, 
                analizar su uso y ofrecer servicios relevantes. En los casos en que la ley lo exija, solicitaremos su consentimiento expreso 
                de forma clara y previa.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">5. Compartir datos</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                No vendemos sus datos personales. Podemos compartir información con proveedores de servicios que nos apoyan en hosting, 
                análisis web, correo electrónico o gestión de relaciones con clientes, bajo contratos que garantizan la confidencialidad 
                y el uso limitado a las finalidades indicadas. En caso de requerimiento legal o autoridades competentes, podremos divulgar 
                datos cuando la ley lo exija.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">6. Conservación</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Conservamos sus datos durante el tiempo necesario para cumplir las finalidades descritas y las obligaciones legales. 
                Los datos de leads y cálculos se mantienen mientras exista una relación comercial o de contacto activa y, posteriormente, 
                durante los plazos que exija la normativa aplicable en Colombia (incluida la Ley 1581 de 2012 y sus decretos reglamentarios).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">7. Sus derechos</h2>
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                De conformidad con la legislación colombiana en materia de protección de datos personales, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-2">
                <li>Conocer, actualizar y rectificar sus datos personales.</li>
                <li>Solicitar prueba del consentimiento otorgado cuando este sea la base del tratamiento.</li>
                <li>Revocar el consentimiento y/o solicitar la supresión de sus datos cuando no exista un deber legal que exija su conservación.</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracción a la normativa de protección de datos.</li>
              </ul>
              <p className="text-slate-400 text-base leading-relaxed mt-4">
                Para ejercer estos derechos, puede contactarnos a través de los canales indicados en el Sitio (formulario de contacto o correo electrónico).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">8. Seguridad</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Implementamos medidas técnicas y organizativas razonables para proteger sus datos personales frente a accesos no autorizados, 
                pérdida, alteración o divulgación. El tráfico del Sitio puede estar protegido mediante cifrado (HTTPS). No obstante, 
                ningún sistema es infalible; le recomendamos no compartir contraseñas ni información sensible por canales no seguros.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">9. Cookies y tecnologías similares</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                El Sitio puede utilizar cookies y tecnologías similares para el correcto funcionamiento de la página, análisis de uso 
                y personalización. Puede configurar su navegador para rechazar o limitar cookies; ello podría afectar algunas funcionalidades del Sitio.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">10. Cambios a esta política</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Nos reservamos el derecho de actualizar esta Política de Privacidad. Los cambios se publicarán en esta página con la fecha 
                de “Última actualización”. Le recomendamos revisarla periódicamente. El uso continuado del Sitio tras la publicación de cambios 
                implica la aceptación de la política actualizada.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-3">11. Contacto</h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Para ejercer sus derechos o formular consultas sobre el tratamiento de sus datos personales, puede contactarnos a través 
                de los canales de contacto publicados en el Sitio. Para asuntos relacionados con estos términos, también puede consultar 
                nuestros{" "}
                <Link href="/terminos" className="text-emerald-400 hover:underline">
                  Términos y Condiciones
                </Link>
                .
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
