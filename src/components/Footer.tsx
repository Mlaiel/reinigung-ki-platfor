import { 
  MapPin, 
  Phone, 
  Mail, 
  LinkedinLogo,
  FacebookLogo,
  InstagramLogo
} from "@phosphor-icons/react"

const footerLinks = {
  services: [
    "Medical Facility Cleaning",
    "Office Building Maintenance", 
    "Hotel & Restaurant Cleaning",
    "Residential Services",
    "Emergency Cleaning",
    "Post-Construction Cleanup"
  ],
  company: [
    "About Us",
    "Our Team", 
    "Careers",
    "Certifications",
    "Quality Standards",
    "Sustainability"
  ],
  support: [
    "Contact Support",
    "AI Chat Assistant",
    "Request Quote",
    "Service Areas",
    "FAQ",
    "Customer Portal"
  ],
  legal: [
    "Privacy Policy",
    "Terms of Service",
    "RGPD Compliance",
    "Cookie Policy",
    "Data Protection",
    "Impressum"
  ]
}

const socialLinks = [
  { icon: LinkedinLogo, name: "LinkedIn", href: "#" },
  { icon: FacebookLogo, name: "Facebook", href: "#" },
  { icon: InstagramLogo, name: "Instagram", href: "#" }
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Reinigung KI</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Germany's leading AI-powered cleaning service platform. Professional, 
                  reliable, and innovative cleaning solutions for businesses and homes 
                  across Cologne and surrounding areas.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span className="text-sm">Hohenzollernring 47, 50672 Köln, Deutschland</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="flex-shrink-0" />
                  <span className="text-sm">+49 221 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="flex-shrink-0" />
                  <span className="text-sm">info@reinigung-ki.de</span>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  {footerLinks.services.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 mb-6">
                  {footerLinks.support.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
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

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2024 Reinigung KI GmbH. All rights reserved. | Registered in Germany
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
              <span>🏆 ISO 9001:2015 Certified</span>
              <span>🔒 RGPD Compliant</span>
              <span>⭐ 99.8% Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}