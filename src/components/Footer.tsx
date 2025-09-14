import { 
  MapPin, 
  Phone, 
  Envelope, 
  LinkedinLogo,
  FacebookLogo,
  InstagramLogo,
  Sparkle,
  ArrowUp
} from "@phosphor-icons/react"

const footerLinks = {
  services: [
    "Medizinische Einrichtungen",
    "Bürogebäude-Wartung", 
    "Hotel & Restaurant Reinigung",
    "Privathaus-Services",
    "Notfall-Reinigung",
    "Baureinigung"
  ],
  company: [
    "Über uns",
    "Unser Team", 
    "Karriere",
    "Zertifizierungen",
    "Qualitätsstandards",
    "Nachhaltigkeit"
  ],
  support: [
    "Support kontaktieren",
    "KI-Chat-Assistent",
    "Angebot anfordern",
    "Servicegebiete",
    "FAQ",
    "Kundenportal"
  ],
  legal: [
    "Datenschutzrichtlinie",
    "Nutzungsbedingungen",
    "DSGVO-Konformität",
    "Cookie-Richtlinie",
    "Datenschutz",
    "Impressum"
  ]
}

const socialLinks = [
  { icon: LinkedinLogo, name: "LinkedIn", href: "#" },
  { icon: FacebookLogo, name: "Facebook", href: "#" },
  { icon: InstagramLogo, name: "Instagram", href: "#" }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Sparkle size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Reinigung KI</h3>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed text-lg">
                  Deutschlands führende KI-gestützte Reinigungsservice-Plattform. Professionelle, 
                  zuverlässige und innovative Reinigungslösungen für Unternehmen und Privathaushalte 
                  in Köln und Umgebung.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Hauptsitz Köln</div>
                    <div className="text-sm text-primary-foreground/80">Hohenzollernring 47, 50672 Köln</div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                    <Phone size={20} className="flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm">Telefon</div>
                      <div className="text-sm">+49 221 123 4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                    <Envelope size={20} className="flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm">E-Mail</div>
                      <div className="text-sm">info@reinigung-ki.de</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Folgen Sie uns</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-8">
              <div>
                <h4 className="font-bold mb-6 text-lg">Leistungen</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">Unternehmen</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-bold mb-6 text-lg">Support</h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-6 text-lg">Rechtliches</h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-primary-foreground/80 text-center lg:text-left">
              © 2024 Reinigung KI GmbH. Alle Rechte vorbehalten. | Eingetragen in Deutschland
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <span>🏆</span>
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <span>🔒</span>
                <span>DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <span>⭐</span>
                <span>99,8% Zufriedenheit</span>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110 group"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}