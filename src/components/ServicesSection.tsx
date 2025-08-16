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
  Clock
} from "@phosphor-icons/react"

const serviceCategories = [
  {
    id: "medical",
    name: "Medizinische Einrichtungen",
    icon: Hospital,
    description: "Spezialisierte Reinigung für Kliniken, Krankenhäuser und Arztpraxen",
    features: ["OSHA-konform", "Desinfektionsprotokolle", "Umgang mit Biogefährdung"],
    basePrice: "€45/Stunde",
    color: "text-blue-600"
  },
  {
    id: "commercial",
    name: "Bürogebäude", 
    icon: Building,
    description: "Professionelle Büroreinigung für Unternehmen jeder Größe",
    features: ["Service nach Feierabend", "Tägliche Wartung", "Tiefenreinigung"],
    basePrice: "€25/Stunde",
    color: "text-green-600"
  },
  {
    id: "hospitality",
    name: "Hotels & Restaurants",
    icon: Storefront,
    description: "Hochwertige Reinigung für Gastronomiebetriebe",
    features: ["24/7 Verfügbarkeit", "Gästezimmer-Turnover", "Küchen-Tiefenreinigung"],
    basePrice: "€35/Stunde", 
    color: "text-purple-600"
  },
  {
    id: "residential",
    name: "Privathaushalte",
    icon: House,
    description: "Zuverlässige Hausreinigung für beschäftigte Familien",
    features: ["Wöchentliche/monatliche Pläne", "Ein-/Auszugsreinigung", "Umweltfreundliche Optionen"],
    basePrice: "€20/Stunde",
    color: "text-orange-600"
  }
]

const additionalServices = [
  { name: "Teppichreinigung", price: "€3-5/m²" },
  { name: "Fensterreinigung", price: "€2-4/m²" },
  { name: "Küchen-Tiefenreinigung", price: "€150-300" },
  { name: "Baureinigung", price: "€8-12/m²" }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm font-medium">
            Unsere Leistungen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professionelle Reinigung für jeden Bereich
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            KI-gestützte Serviceschätzung mit transparenten Preisen und sofortigen Angeboten
          </p>
        </div>

        <Tabs defaultValue="medical" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="gap-2">
                <category.icon size={16} />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-primary/10`}>
                          <category.icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{category.name}</CardTitle>
                          <CardDescription className="text-lg">
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Inkludierte Leistungen:</h4>
                        <div className="space-y-2">
                          {category.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle size={16} className="text-primary" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-4">
                        <div className="text-2xl font-bold text-primary">
                          {category.basePrice}
                        </div>
                        <Badge variant="outline">Grundpreis</Badge>
                      </div>

                      <div className="flex gap-3">
                        <Button className="gap-2">
                          <Calculator size={16} />
                          Sofortiges Angebot erhalten
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Clock size={16} />
                          Beratung vereinbaren
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Zusatzleistungen</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {additionalServices.map((service, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm">{service.name}</span>
                          <span className="font-medium text-primary">{service.price}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold mb-2">Benötigen Sie ein individuelles Angebot?</h4>
                      <p className="text-sm opacity-90 mb-4">
                        Unsere KI analysiert Ihre spezifischen Bedürfnisse für genaue Preise
                      </p>
                      <Button variant="secondary" size="sm" className="w-full">
                        Fotos für Analyse hochladen
                      </Button>
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