import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Chat, Play, Star, Clock, Shield, Trophy } from "@phosphor-icons/react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 lg:space-y-10 max-w-full">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <Badge variant="secondary" className="px-3 py-2 text-xs sm:text-sm font-medium bg-primary/10 text-primary border-primary/20 rounded-full w-fit">
                  <Star size={12} className="mr-1 sm:mr-2" />
                  #1 Reinigungsservice in Köln
                </Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs sm:text-sm text-muted-foreground ml-2">4.9 (500+)</span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight max-w-full">
                <span className="block">Professionelle</span>
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                  KI-Reinigung
                </span>
                <span className="block">in Köln</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Erhalten Sie sofortige Kostenvoranschläge in{" "}
                <span className="text-primary font-semibold">unter 60 Sekunden</span> und erleben Sie 
                Deutschlands fortschrittlichste Reinigungsplattform.
              </p>
            </div>

            {/* Enhanced Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Clock, text: "Sofortige KI-Kostenvoranschläge", highlight: "60 Sek." },
                { icon: Shield, text: "DSGVO-konform & sicher", highlight: "100%" },
                { icon: Chat, text: "24/7 KI-Kundenservice", highlight: "Always" },
                { icon: Trophy, text: "Deutsche Qualitätsstandards", highlight: "Premium" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-accent/30 border border-accent/50 hover:bg-accent/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{feature.text}</div>
                    <div className="text-xs text-primary font-bold">{feature.highlight}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 gap-3 rounded-2xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 min-h-[56px]">
                <Chat size={20} className="sm:hidden" />
                <Chat size={24} className="hidden sm:block" />
                <span className="font-semibold">Kostenvoranschlag in 60 Sek.</span>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 gap-3 rounded-2xl border-2 border-border/50 hover:border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-accent/30 transition-all duration-300 min-h-[56px]">
                <Play size={20} className="sm:hidden" />
                <Play size={24} className="hidden sm:block" />
                <span className="font-semibold">Demo ansehen</span>
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border/50">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Zufriedene Kunden</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">15+</div>
                <div className="text-sm text-muted-foreground font-medium">Jahre Erfahrung</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">KI-Support</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">99%</div>
                <div className="text-sm text-muted-foreground font-medium">Kundenzufriedenheit</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Visual */}
          <div className="relative lg:pl-8">
            <div className="relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden">
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-background to-accent/5 border border-border/50 rounded-3xl backdrop-blur-sm">
                {/* AI Chat Interface Mockup */}
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center">
                      <Chat size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">KI-Assistent</div>
                      <div className="text-sm text-muted-foreground">Online • Antwortet sofort</div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="flex-1 space-y-4 overflow-hidden">
                    <div className="bg-accent/30 rounded-2xl p-4 ml-8">
                      <p className="text-sm text-foreground">Hallo! Ich bin Ihr KI-Assistent. Wie kann ich Ihnen helfen?</p>
                    </div>
                    
                    <div className="bg-primary rounded-2xl p-4 mr-8 text-white">
                      <p className="text-sm">Ich brauche eine Büroreinigung für 150m²</p>
                    </div>
                    
                    <div className="bg-accent/30 rounded-2xl p-4 ml-8">
                      <p className="text-sm text-foreground">Perfekt! Basierend auf Ihren Angaben:</p>
                      <div className="mt-3 p-3 bg-background rounded-xl border border-border/50">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Geschätzte Kosten:</span>
                          <span className="text-lg font-bold text-primary">€127,50</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Für 150m² Bürofläche</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Success Indicators */}
              <div className="absolute -top-4 -right-4 bg-background rounded-2xl p-4 shadow-2xl border border-border/50 animate-bounce" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-500" />
                  <div>
                    <div className="text-sm font-bold text-foreground">Angebot erstellt</div>
                    <div className="text-xs text-muted-foreground">in 1,2 Sekunden</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-background rounded-2xl p-4 shadow-2xl border border-border/50 animate-bounce" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-400 fill-current" />
                  <div>
                    <div className="text-sm font-bold text-foreground">99% Genauigkeit</div>
                    <div className="text-xs text-muted-foreground">KI-Kostenvoranschlag</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}