import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageCircle, Play } from "@phosphor-icons/react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                #1 Reinigungsservice in Köln
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Professionelle Reinigung mit
                <span className="text-primary"> KI-Präzision</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Erhalten Sie sofortige Kostenvoranschläge, planen Sie Services und erleben Sie 
                Deutschlands fortschrittlichste Reinigungsplattform. Wir bedienen medizinische 
                Einrichtungen, Hotels und Büros in ganz Köln.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                "Sofortige KI-gestützte Kostenvoranschläge in unter 2 Minuten",
                "DSGVO-konform mit höchster Sicherheit",
                "24/7 automatischer Kundenservice",
                "Professionelle Teams mit deutschen Qualitätsstandards"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4 gap-3">
                <MessageCircle size={20} />
                Sofortigen Kostenvoranschlag erhalten
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 gap-3">
                <Play size={20} />
                Demo ansehen
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">KI-Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle size={40} className="text-primary" />
                  </div>
                  <p className="text-lg font-medium text-muted-foreground">
                    KI-Assistent Demo
                  </p>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute top-8 right-8 bg-background rounded-lg p-4 shadow-lg">
                <div className="text-sm font-medium text-foreground">Angebot erstellt</div>
                <div className="text-xs text-muted-foreground">in 1,2 Sekunden</div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-background rounded-lg p-4 shadow-lg">
                <div className="text-sm font-medium text-foreground">€127,50</div>
                <div className="text-xs text-muted-foreground">geschätzte Kosten</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}