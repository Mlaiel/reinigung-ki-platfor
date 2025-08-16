import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useKV } from "@github/spark/hooks"
import { toast } from "sonner"
import { 
  Upload, 
  MessageCircle, 
  CheckCircle, 
  Calculator,
  Clock,
  Euro,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin
} from "@phosphor-icons/react"

interface QuoteData {
  propertyType: string
  squareMeters: string
  serviceType: string
  frequency: string
  description: string
  photos: string[]
}

interface BookingData {
  kundenName: string
  email: string
  telefon: string
  adresse: string
  datum: string
  uhrzeit: string
  notizen: string
}

interface Booking {
  id: string
  kundenName: string
  email: string
  telefon: string
  adresse: string
  serviceTyp: string
  datum: string
  uhrzeit: string
  status: 'neu' | 'bestätigt' | 'abgeschlossen' | 'storniert'
  notizen: string
  geschätzterPreis: number
  erstelltAm: string
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
  
  const [bookingData, setBookingData] = useState<BookingData>({
    kundenName: "",
    email: "",
    telefon: "",
    adresse: "",
    datum: "",
    uhrzeit: "",
    notizen: ""
  })
  
  const [bookings, setBookings] = useKV<Booking[]>('admin-bookings', [])
  const [isProcessing, setIsProcessing] = useState(false)
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false)

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

  const createBooking = async () => {
    if (!bookingData.kundenName || !bookingData.email || !bookingData.telefon || !bookingData.adresse || !bookingData.datum || !bookingData.uhrzeit) {
      toast.error('Bitte füllen Sie alle Pflichtfelder aus')
      return
    }

    const newBooking: Booking = {
      id: Date.now().toString(),
      kundenName: bookingData.kundenName,
      email: bookingData.email,
      telefon: bookingData.telefon,
      adresse: bookingData.adresse,
      serviceTyp: `${quoteData.serviceType} - ${quoteData.propertyType}`,
      datum: bookingData.datum,
      uhrzeit: bookingData.uhrzeit,
      status: 'neu',
      notizen: `${quoteData.description}\n\nZusätzliche Notizen: ${bookingData.notizen}`,
      geschätzterPreis: estimatedCost || 0,
      erstelltAm: new Date().toISOString()
    }

    setBookings(current => [newBooking, ...current])
    
    // Reset forms
    setBookingData({
      kundenName: "",
      email: "",
      telefon: "",
      adresse: "",
      datum: "",
      uhrzeit: "",
      notizen: ""
    })
    
    setIsBookingDialogOpen(false)
    toast.success('Buchung erfolgreich erstellt! Sie erhalten in Kürze eine Bestätigung.')
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
                    <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="flex-1 gap-2">
                          <Clock size={16} />
                          Jetzt buchen
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Buchung bestätigen</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          {/* Buchungsübersicht */}
                          <Card className="bg-muted">
                            <CardContent className="p-4">
                              <h4 className="font-semibold mb-2">Buchungsübersicht</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Service:</span>
                                  <p className="font-medium">{quoteData.serviceType}</p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Objekttyp:</span>
                                  <p className="font-medium">{quoteData.propertyType}</p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Fläche:</span>
                                  <p className="font-medium">{quoteData.squareMeters}m²</p>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Geschätzter Preis:</span>
                                  <p className="font-medium text-lg text-primary">€{estimatedCost}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Kundendaten */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="customer-name">Name *</Label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                                <Input
                                  id="customer-name"
                                  value={bookingData.kundenName}
                                  onChange={(e) => setBookingData(prev => ({...prev, kundenName: e.target.value}))}
                                  placeholder="Ihr vollständiger Name"
                                  className="pl-10"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="customer-email">E-Mail *</Label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                                <Input
                                  id="customer-email"
                                  type="email"
                                  value={bookingData.email}
                                  onChange={(e) => setBookingData(prev => ({...prev, email: e.target.value}))}
                                  placeholder="ihre@email.com"
                                  className="pl-10"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="customer-phone">Telefon *</Label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                                <Input
                                  id="customer-phone"
                                  value={bookingData.telefon}
                                  onChange={(e) => setBookingData(prev => ({...prev, telefon: e.target.value}))}
                                  placeholder="+49 221 123 4567"
                                  className="pl-10"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="customer-address">Adresse *</Label>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                                <Input
                                  id="customer-address"
                                  value={bookingData.adresse}
                                  onChange={(e) => setBookingData(prev => ({...prev, adresse: e.target.value}))}
                                  placeholder="Straße, PLZ Stadt"
                                  className="pl-10"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Termin */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="booking-date">Gewünschtes Datum *</Label>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                                <Input
                                  id="booking-date"
                                  type="date"
                                  value={bookingData.datum}
                                  onChange={(e) => setBookingData(prev => ({...prev, datum: e.target.value}))}
                                  min={new Date().toISOString().split('T')[0]}
                                  className="pl-10"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="booking-time">Gewünschte Uhrzeit *</Label>
                              <div className="relative">
                                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                                <Input
                                  id="booking-time"
                                  type="time"
                                  value={bookingData.uhrzeit}
                                  onChange={(e) => setBookingData(prev => ({...prev, uhrzeit: e.target.value}))}
                                  className="pl-10"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Zusätzliche Notizen */}
                          <div className="space-y-2">
                            <Label htmlFor="booking-notes">Zusätzliche Notizen (optional)</Label>
                            <Textarea
                              id="booking-notes"
                              value={bookingData.notizen}
                              onChange={(e) => setBookingData(prev => ({...prev, notizen: e.target.value}))}
                              placeholder="Besondere Wünsche, Zugangshinweise, etc."
                              rows={3}
                            />
                          </div>

                          {/* Aktions-Buttons */}
                          <div className="flex gap-3 pt-4">
                            <Button 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => setIsBookingDialogOpen(false)}
                            >
                              Abbrechen
                            </Button>
                            <Button 
                              className="flex-1"
                              onClick={createBooking}
                            >
                              Buchung bestätigen
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" className="flex-1" onClick={() => setEstimatedCost(null)}>
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