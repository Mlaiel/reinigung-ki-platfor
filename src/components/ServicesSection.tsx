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
    <section id="services" className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 rounded-full">
            <Star size={14} className="mr-2" />
            Unsere Premium-Leistungen
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Professionelle Reinigung für
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
              jeden Bereich
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            KI-gestützte Serviceschätzung mit transparenten Preisen und sofortigen Angeboten. 
            Über <span className="text-primary font-semibold">500+ zufriedene Kunden</span> vertrauen uns bereits.
          </p>
        </div>

        <Tabs defaultValue="commercial" className="space-y-12">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-2 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl">
            {serviceCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="flex-col gap-3 h-auto py-4 px-3 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  <category.icon size={24} />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm leading-tight">{category.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{category.popularity}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Service Card */}
                <div className="lg:col-span-2">
                  <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-background to-accent/5">
                    <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                    <CardHeader className="pb-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                            <category.icon size={32} className="text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-3xl font-bold">{category.name}</CardTitle>
                              <Badge className={`bg-gradient-to-r ${category.gradient} text-white border-0`}>
                                {category.popularity}
                              </Badge>
                            </div>
                            <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-8">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                            <ShieldCheck size={20} className="text-primary" />
                            Inkludierte Leistungen
                          </h4>
                          <div className="space-y-3">
                            {category.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors">
                                <CheckCircle size={18} className="text-primary flex-shrink-0" />
                                <span className="font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                            <div className="text-sm text-muted-foreground mb-2">Startpreis ab</div>
                            <div className="text-4xl font-bold text-primary mb-1">
                              {category.basePrice}
                            </div>
                            <div className="text-sm text-muted-foreground">{category.priceUnit}</div>
                            <Badge variant="outline" className="mt-3 border-primary/50 text-primary">
                              Transparent & Fair
                            </Badge>
                          </div>
                          
                          <div className="flex flex-col gap-3">
                            <Button size="lg" className={`gap-3 rounded-xl bg-gradient-to-r ${category.gradient} hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
                              <Calculator size={20} />
                              Sofortiges Angebot erhalten
                              <ArrowUpRight size={16} />
                            </Button>
                            <Button variant="outline" size="lg" className="gap-3 rounded-xl border-2 hover:bg-accent/30">
                              <Clock size={20} />
                              Beratung vereinbaren
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Additional Services */}
                  <Card className="overflow-hidden border-0 shadow-xl">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Star size={20} className="text-primary" />
                        Zusatzleistungen
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {additionalServices.map((service, index) => (
                        <div key={index} className="flex justify-between items-center p-4 rounded-xl bg-accent/20 hover:bg-accent/40 transition-colors cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{service.icon}</span>
                            <span className="font-medium group-hover:text-primary transition-colors">{service.name}</span>
                          </div>
                          <span className="font-bold text-primary">{service.price}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* AI Analysis CTA */}
                  <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary to-primary/90 text-white shadow-2xl">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Camera size={32} className="text-white" />
                      </div>
                      <h4 className="font-bold mb-3 text-xl">KI-Analyse für präzise Preise</h4>
                      <p className="text-white/90 mb-6 leading-relaxed">
                        Laden Sie Fotos hoch und erhalten Sie in 60 Sekunden eine genaue KI-Analyse Ihrer Räumlichkeiten
                      </p>
                      <Button variant="secondary" size="lg" className="w-full rounded-xl bg-white text-primary hover:bg-white/90 font-semibold">
                        📸 Fotos für Analyse hochladen
                      </Button>
                      <div className="mt-4 text-sm text-white/80">
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