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
      title: "Address",
      details: ["Hohenzollernring 47", "50672 Köln, Deutschland"],
      action: "View on Maps"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+49 221 123 4567", "24/7 Emergency Line"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["info@reinigung-ki.de", "quotes@reinigung-ki.de"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 7:00 - 19:00", "Weekend: On-demand"],
      action: "Schedule Call"
    }
  ]

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm font-medium">
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our team for immediate assistance or schedule a consultation. 
            AI-powered quotes available 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
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
                <h4 className="text-lg font-semibold mb-2">Instant WhatsApp Support</h4>
                <p className="text-sm opacity-90 mb-4">
                  Get immediate responses from our AI assistant via WhatsApp
                </p>
                <Button variant="secondary" className="gap-2">
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="mx-auto text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">Interactive Map</p>
                    <p className="text-xs text-muted-foreground">Hohenzollernring 47, Köln</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 2 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="mx-auto text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll respond within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(current => ({...current, name: e.target.value}))}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(current => ({...current, email: e.target.value}))}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(current => ({...current, phone: e.target.value}))}
                        placeholder="+49 xxx xxx xxxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Input
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData(current => ({...current, service: e.target.value}))}
                        placeholder="e.g. Office cleaning"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData(current => ({...current, message: e.target.value}))}
                      placeholder="Tell us about your cleaning requirements..."
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and consent to AI-powered processing of your inquiry.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="mt-12 bg-destructive text-destructive-foreground">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Emergency Cleaning Services</h3>
            <p className="text-sm opacity-90 mb-4">
              24/7 emergency response for urgent cleaning situations
            </p>
            <Button variant="secondary" size="lg" className="gap-2">
              <Phone size={16} />
              Emergency Hotline: +49 221 EMERGENCY
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}