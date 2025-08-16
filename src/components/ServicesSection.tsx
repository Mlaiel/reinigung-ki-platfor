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
    name: "Medical Facilities",
    icon: Hospital,
    description: "Specialized cleaning for clinics, hospitals, and medical practices",
    features: ["OSHA compliant", "Disinfection protocols", "Bio-hazard handling"],
    basePrice: "€45/hour",
    color: "text-blue-600"
  },
  {
    id: "commercial",
    name: "Office Buildings", 
    icon: Building,
    description: "Professional office cleaning for businesses of all sizes",
    features: ["After-hours service", "Daily maintenance", "Deep cleaning"],
    basePrice: "€25/hour",
    color: "text-green-600"
  },
  {
    id: "hospitality",
    name: "Hotels & Restaurants",
    icon: Storefront,
    description: "High-standard cleaning for hospitality businesses",
    features: ["24/7 availability", "Guest room turnover", "Kitchen deep clean"],
    basePrice: "€35/hour", 
    color: "text-purple-600"
  },
  {
    id: "residential",
    name: "Residential",
    icon: House,
    description: "Reliable home cleaning services for busy families",
    features: ["Weekly/monthly plans", "Move-in/out cleaning", "Eco-friendly options"],
    basePrice: "€20/hour",
    color: "text-orange-600"
  }
]

const additionalServices = [
  { name: "Carpet Cleaning", price: "€3-5/m²" },
  { name: "Window Cleaning", price: "€2-4/m²" },
  { name: "Deep Kitchen Clean", price: "€150-300" },
  { name: "Post-Construction", price: "€8-12/m²" }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm font-medium">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional Cleaning for Every Sector
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered service estimation with transparent pricing and instant quotes
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
                        <h4 className="font-semibold mb-3">Included Features:</h4>
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
                        <Badge variant="outline">Starting price</Badge>
                      </div>

                      <div className="flex gap-3">
                        <Button className="gap-2">
                          <Calculator size={16} />
                          Get Instant Quote
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Clock size={16} />
                          Schedule Consultation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Additional Services</CardTitle>
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
                      <h4 className="font-semibold mb-2">Need a Custom Quote?</h4>
                      <p className="text-sm opacity-90 mb-4">
                        Our AI analyzes your specific needs for accurate pricing
                      </p>
                      <Button variant="secondary" size="sm" className="w-full">
                        Upload Photos for Analysis
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