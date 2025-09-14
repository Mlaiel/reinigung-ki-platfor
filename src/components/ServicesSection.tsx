import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Building, 
  Hospital, 
  Storefront, 
  House,
  CheckCircle,
  Calculator,
  Clock,
  ArrowUpRight,
  Star,
  Camera,
  ShieldCheck
} from "@phosphor-icons/react"

const serviceCategories = [
  {
    id: "medical",
    name: "Medizinische Einrichtungen",
    icon: Hospital,
    description: "Spezialisierte Reinigung für Kliniken, Krankenhäuser und Arztpraxen mit höchsten Hygienestandards",
    features: ["OSHA-konform", "Desinfektionsprotokolle", "Umgang mit Biogefährdung", "Sterile Umgebungen"],
    basePrice: "45",
    priceUnit: "€/Stunde",
    popularity: "Beliebt",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    id: "commercial",
    name: "Bürogebäude", 
    icon: Building,
    description: "Professionelle Büroreinigung für produktive Arbeitsumgebungen und zufriedene Mitarbeiter",
    features: ["Service nach Feierabend", "Tägliche Wartung", "Tiefenreinigung", "Flexible Termine"],
    basePrice: "25",
    priceUnit: "€/Stunde",
    popularity: "Bestseller",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    id: "hospitality",
    name: "Hotels & Restaurants",
    icon: Storefront,
    description: "Exzellente Reinigung für unvergessliche Gästeerlebnisse und maximale Kundenzufriedenheit",
    features: ["24/7 Verfügbarkeit", "Gästezimmer-Turnover", "Küchen-Tiefenreinigung", "Event-Reinigung"],
    basePrice: "35",
    priceUnit: "€/Stunde", 
    popularity: "Premium",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    id: "residential",
    name: "Privathaushalte",
    icon: House,
    description: "Zuverlässige Hausreinigung für mehr Zeit mit Familie und entspannte Abende zu Hause",
    features: ["Wöchentliche/monatliche Pläne", "Ein-/Auszugsreinigung", "Umweltfreundliche Optionen", "Vertrauenswürdige Teams"],
    basePrice: "20",
    priceUnit: "€/Stunde",
    popularity: "Familien-Favorit",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  }
]

const additionalServices = [
  { name: "Teppichreinigung", price: "€3-5/m²", icon: "🏠" },
  { name: "Fensterreinigung", price: "€2-4/m²", icon: "🪟" },
  { name: "Küchen-Tiefenreinigung", price: "€150-300", icon: "🍽️" },
  { name: "Baureinigung", price: "€8-12/m²", icon: "🔨" }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 right-10 w-36 h-36 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <Badge variant="secondary" className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary border-primary/20 rounded-full">
            <Star size={12} className="mr-1" />
            Unsere Premium-Leistungen
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Professionelle Reinigung für
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
              jeden Bereich
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto font-light">
            KI-gestützte Serviceschätzung mit transparenten Preisen und sofortigen Angeboten. 
            Über <span className="text-primary font-semibold">500+ zufriedene Kunden</span> vertrauen uns bereits.
          </p>
        </div>

        <Tabs defaultValue="commercial" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl">
            {serviceCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="flex-col gap-1.5 h-auto py-2 px-2 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg transition-all duration-200"
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  <category.icon size={16} />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xs leading-tight">{category.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{category.popularity}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-4">
              <div className="grid lg:grid-cols-3 gap-4">
                {/* Main Service Card */}
                <div className="lg:col-span-2">
                  <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-background to-accent/5">
                    <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                            <category.icon size={20} className="text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                              <Badge className={`bg-gradient-to-r ${category.gradient} text-white border-0 text-xs`}>
                                {category.popularity}
                              </Badge>
                            </div>
                            <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <h4 className="font-bold mb-2 text-base flex items-center gap-2">
                            <ShieldCheck size={16} className="text-primary" />
                            Inkludierte Leistungen
                          </h4>
                          <div className="space-y-1.5">
                            {category.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 p-2 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors">
                                <CheckCircle size={14} className="text-primary flex-shrink-0" />
                                <span className="font-medium text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="text-center p-3 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                            <div className="text-xs text-muted-foreground mb-1">Startpreis ab</div>
                            <div className="text-2xl font-bold text-primary mb-0.5">
                              {category.basePrice}
                            </div>
                            <div className="text-xs text-muted-foreground">{category.priceUnit}</div>
                            <Badge variant="outline" className="mt-1.5 border-primary/50 text-primary text-xs">
                              Transparent & Fair
                            </Badge>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <Button size="sm" className={`gap-2 rounded-xl bg-gradient-to-r ${category.gradient} hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm`}>
                              <Calculator size={16} />
                              Sofortiges Angebot erhalten
                              <ArrowUpRight size={14} />
                            </Button>
                            <Button variant="outline" size="sm" className="gap-2 rounded-xl border-2 hover:bg-accent/30 text-sm">
                              <Clock size={16} />
                              Beratung vereinbaren
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-3">
                  {/* Additional Services */}
                  <Card className="overflow-hidden border-0 shadow-xl">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Star size={16} className="text-primary" />
                        Zusatzleistungen
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {additionalServices.map((service, index) => (
                        <div key={index} className="flex justify-between items-center p-2 rounded-xl bg-accent/20 hover:bg-accent/40 transition-colors cursor-pointer group">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{service.icon}</span>
                            <span className="font-medium group-hover:text-primary transition-colors text-sm">{service.name}</span>
                          </div>
                          <span className="font-bold text-primary text-sm">{service.price}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* AI Analysis CTA */}
                  <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary to-primary/90 text-white shadow-2xl">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Camera size={20} className="text-white" />
                      </div>
                      <h4 className="font-bold mb-2 text-base">KI-Analyse für präzise Preise</h4>
                      <p className="text-white/90 mb-3 leading-relaxed text-sm">
                        Laden Sie Fotos hoch und erhalten Sie in 60 Sekunden eine genaue KI-Analyse Ihrer Räumlichkeiten
                      </p>
                      <Button variant="secondary" size="sm" className="w-full rounded-xl bg-white text-primary hover:bg-white/90 font-semibold text-sm">
                        📸 Fotos für Analyse hochladen
                      </Button>
                      <div className="mt-2 text-xs text-white/80">
                        ✨ 99% Genauigkeit • Datenschutz garantiert
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}