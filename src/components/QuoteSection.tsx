import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useKV } from "@github/spark/hooks"
import { 
  Upload, 
  MessageCircle, 
  CheckCircle, 
  Calculator,
  Clock,
  Euro
} from "@phosphor-icons/react"

interface QuoteData {
  propertyType: string
  squareMeters: string
  serviceType: string
  frequency: string
  description: string
  photos: string[]
}

export function QuoteSection() {
  const [quoteData, setQuoteData] = useKV<QuoteData>("quote-form", {
    propertyType: "",
    squareMeters: "",
    serviceType: "",
    frequency: "",
    description: "",
    photos: []
  })
  
  const [isProcessing, setIsProcessing] = useState(false)
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      // Simulate file upload
      const fileNames = Array.from(files).map(file => file.name)
      setQuoteData(current => ({
        ...current,
        photos: [...current.photos, ...fileNames]
      }))
    }
  }

  const generateQuote = async () => {
    setIsProcessing(true)
    
    // Simulate AI processing with realistic calculation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const baseRates = {
      medical: 45,
      commercial: 25, 
      hospitality: 35,
      residential: 20
    }
    
    const frequencyMultipliers = {
      "one-time": 1.5,
      weekly: 1.0,
      biweekly: 1.1,
      monthly: 1.3
    }
    
    const baseRate = baseRates[quoteData.serviceType as keyof typeof baseRates] || 25
    const frequencyMultiplier = frequencyMultipliers[quoteData.frequency as keyof typeof frequencyMultipliers] || 1.0
    const area = parseInt(quoteData.squareMeters) || 100
    
    // Estimate 1 hour per 50 square meters
    const estimatedHours = Math.max(1, Math.ceil(area / 50))
    const cost = Math.round(baseRate * estimatedHours * frequencyMultiplier)
    
    setEstimatedCost(cost)
    setIsProcessing(false)
  }

  return (
    <section id="quote" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-sm font-medium">
            Sofortiges Angebot
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Erhalten Sie Ihr KI-gestütztes Angebot in Minuten
          </h2>
          <p className="text-xl text-muted-foreground">
            Fotos hochladen, Bedürfnisse beschreiben und sofort genaue Preise erhalten
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quote Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="text-primary" size={20} />
                Service-Details
              </CardTitle>
              <CardDescription>
                Erzählen Sie uns von Ihren Reinigungsanforderungen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="property-type">Objekttyp</Label>
                  <Select 
                    value={quoteData.propertyType} 
                    onValueChange={(value) => setQuoteData(current => ({...current, propertyType: value}))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Typ auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical">Medizinische Einrichtung</SelectItem>
                      <SelectItem value="commercial">Bürogebäude</SelectItem>
                      <SelectItem value="hospitality">Hotel/Restaurant</SelectItem>
                      <SelectItem value="residential">Privathaushalt</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="square-meters">Quadratmeter</Label>
                  <Input
                    id="square-meters"
                    type="number"
                    placeholder="z.B. 150"
                    value={quoteData.squareMeters}
                    onChange={(e) => setQuoteData(current => ({...current, squareMeters: e.target.value}))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Serviceart</Label>
                  <Select 
                    value={quoteData.serviceType}
                    onValueChange={(value) => setQuoteData(current => ({...current, serviceType: value}))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Service auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standardreinigung</SelectItem>
                      <SelectItem value="deep">Tiefenreinigung</SelectItem>
                      <SelectItem value="move">Ein-/Auszug</SelectItem>
                      <SelectItem value="post-construction">Baureinigung</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frequency">Häufigkeit</Label>
                  <Select 
                    value={quoteData.frequency}
                    onValueChange={(value) => setQuoteData(current => ({...current, frequency: value}))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Wie oft?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">Einmalig</SelectItem>
                      <SelectItem value="weekly">Wöchentlich</SelectItem>
                      <SelectItem value="biweekly">Zweiwöchentlich</SelectItem>
                      <SelectItem value="monthly">Monatlich</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Zusätzliche Details</Label>
                <Textarea
                  id="description"
                  placeholder="Beschreiben Sie spezielle Anforderungen, Problembereiche oder besondere Anweisungen..."
                  value={quoteData.description}
                  onChange={(e) => setQuoteData(current => ({...current, description: e.target.value}))}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Fotos hochladen (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload size={32} className="mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Fotos für genauere Preisschätzung hochladen
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <Button variant="outline" size="sm" asChild>
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      Dateien auswählen
                    </label>
                  </Button>
                </div>
                {quoteData.photos.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {quoteData.photos.map((photo, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {photo}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <Button 
                className="w-full gap-2" 
                onClick={generateQuote}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    KI analysiert...
                  </>
                ) : (
                  <>
                    <MessageCircle size={16} />
                    Angebot erstellen
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Quote Result */}
          <div className="space-y-6">
            {estimatedCost ? (
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CheckCircle size={20} />
                    Angebot erstellt
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-6">
                    <div className="text-4xl font-bold text-primary flex items-center justify-center gap-1">
                      <Euro size={32} />
                      {estimatedCost}
                    </div>
                    <p className="text-muted-foreground mt-2">Geschätzte Kosten</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Serviceart:</span>
                      <span className="font-medium">{quoteData.serviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fläche:</span>
                      <span className="font-medium">{quoteData.squareMeters}m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Häufigkeit:</span>
                      <span className="font-medium">{quoteData.frequency}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 gap-2">
                      <Clock size={16} />
                      Jetzt buchen
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Angebot ändern
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <MessageCircle size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Bereit für Ihr Angebot?</h3>
                  <p className="text-muted-foreground">
                    Füllen Sie das Formular aus, um eine sofortige KI-gestützte Schätzung zu erhalten
                  </p>
                </CardContent>
              </Card>
            )}

            <Card className="bg-muted">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Warum unsere KI-Angebote wählen?</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    <span>Sofortige Ergebnisse in unter 2 Minuten</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    <span>Foto-Analyse für Genauigkeit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    <span>Keine versteckten Gebühren oder Überraschungen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    <span>Kostenlose Beratung inklusive</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}