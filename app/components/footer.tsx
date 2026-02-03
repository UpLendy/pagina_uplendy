import { Linkedin, Twitter, Code2 } from "lucide-react"

const footerLinks = {
  soluciones: [
    { label: "Automatización Contable", href: "#solutions" },
    { label: "Logística Inteligente", href: "#solutions" },
    { label: "Atención 24/7", href: "#solutions" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Casos de éxito", href: "#cases" },
    { label: "Contacto", href: "#" },
  ],
  recursos: [
    { label: "Calculadora ROI", href: "#calculator" },
    { label: "Guía SMLV 2026", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-xl font-bold text-slate-100 tracking-tight">Uplendy</span>
            </a>
            <p className="text-sm text-slate-500 mb-6">
              Desarrollo de activos digitales y automatización estratégica para el mercado colombiano.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100 mb-4 uppercase tracking-widest">Soluciones</h3>
            <ul className="space-y-3">
              {footerLinks.soluciones.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-100 mb-4 uppercase tracking-widest">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-100 mb-4 uppercase tracking-widest">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacidad" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Privacidad</a></li>
              <li><a href="/terminos" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-600">
            © 2026 Uplendy. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-slate-600">
            <span>Diseñado para el futuro de</span>
            <span className="text-emerald-400 font-medium">Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}