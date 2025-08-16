import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useKV } from "@github/spark/hooks"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from "@phosphor-icons/react"

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  service: string
}

export function ContactSection() {
  const [formData, setFormData] = useKV<ContactForm>("contact-form", {
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: ""
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Hohenzollernring 47", "50672 Köln, Deutschland"],
      action: "Auf Karte anzeigen"
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+49 221 123 4567", "24/7 Notfall-Hotline"],
      action: "Jetzt anrufen"
    },
    {
      icon: Mail,
      title: "E-Mail", 
      details: ["info@reinigung-ki.de", "angebote@reinigung-ki.de"],
      action: "E-Mail senden"
    },
    {
      icon: Clock,
      title: "Geschäftszeiten",
      details: ["Mo-Fr: 7:00 - 19:00", "Wochenende: Auf Anfrage"],
      action: "Anruf vereinbaren"
    }
  ]

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm font-medium">
            Kontakt
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Bereit loszulegen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kontaktieren Sie unser Team für sofortige Hilfe oder vereinbaren Sie eine Beratung. 
            KI-gestützte Angebote 24/7 verfügbar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Kontakt aufnehmen</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                          <div className="space-y-1 mb-3">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <Button variant="outline" size="sm" className="text-xs">
                            {info.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-6 text-center">
                <MessageCircle size={32} className="mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Sofortiger WhatsApp-Support</h4>
                <p className="text-sm opacity-90 mb-4">
                  Erhalten Sie sofortige Antworten von unserem KI-Assistenten über WhatsApp
                </p>
                <Button variant="secondary" className="gap-2">
                  <MessageCircle size={16} />
                  Chat auf WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="mx-auto text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">Interaktive Karte</p>
                    <p className="text-xs text-muted-foreground">Hohenzollernring 47, Köln</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Nachricht senden</CardTitle>
              <CardDescription>
                Füllen Sie das Formular aus und wir melden uns innerhalb von 2 Stunden zurück
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="mx-auto text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Nachricht erfolgreich gesendet!
                  </h3>
                  <p className="text-muted-foreground">
                    Vielen Dank für Ihre Kontaktaufnahme. Wir antworten innerhalb von 2 Stunden.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Vollständiger Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(current => ({...current, name: e.target.value}))}
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(current => ({...current, email: e.target.value}))}
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefonnummer</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(current => ({...current, phone: e.target.value}))}
                        placeholder="+49 xxx xxx xxxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Interessierter Service</Label>
                      <Input
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData(current => ({...current, service: e.target.value}))}
                        placeholder="z.B. Büroreinigung"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData(current => ({...current, message: e.target.value}))}
                      placeholder="Erzählen Sie uns von Ihren Reinigungsanforderungen..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gap-2" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Nachricht senden
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Durch das Absenden dieses Formulars stimmen Sie unserer Datenschutzrichtlinie zu und willigen in die KI-gestützte Bearbeitung Ihrer Anfrage ein.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="mt-12 bg-destructive text-destructive-foreground">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Notfall-Reinigungsdienste</h3>
            <p className="text-sm opacity-90 mb-4">
              24/7 Notfallreaktion für dringende Reinigungssituationen
            </p>
            <Button variant="secondary" size="lg" className="gap-2">
              <Phone size={16} />
              Notfall-Hotline: +49 221 NOTFALL
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}