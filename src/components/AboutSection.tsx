import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Award, 
  Users, 
  Target, 
  Leaf,
  CheckCircle,
  Star
} from "@phosphor-icons/react"

const values = [
  {
    icon: Award,
    title: "Deutsche Qualitätsstandards",
    description: "Zertifizierte Fachkräfte mit rigoroser Ausbildung und Qualitätskontrollprozessen"
  },
  {
    icon: Leaf,
    title: "Umweltfreundliche Lösungen", 
    description: "Umweltbewusste Reinigungsprodukte und nachhaltige Praktiken"
  },
  {
    icon: Users,
    title: "Kundenorientierter Ansatz",
    description: "24/7 KI-Support mit menschlicher Expertise für personalisierten Service"
  },
  {
    icon: Target,
    title: "Präzision & Effizienz",
    description: "KI-gestützte Optimierung für konsistente, zuverlässige Ergebnisse jedes Mal"
  }
]

const stats = [
  { number: "500+", label: "Zufriedene Kunden" },
  { number: "15+", label: "Jahre Erfahrung" },
  { number: "99,8%", label: "Servicequalität" },
  { number: "24/7", label: "KI-Support" }
]

const team = [
  {
    name: "Klaus Mueller",
    role: "Gründer & Geschäftsführer",
    experience: "20+ Jahre im Facility Management",
    specialization: "Betriebsstrategie"
  },
  {
    name: "Anna Schmidt",
    role: "Leiterin Technologie",
    experience: "KI & Automatisierungsspezialistin",
    specialization: "Produktentwicklung"
  },
  {
    name: "Thomas Weber",
    role: "Qualitätsmanager",
    experience: "Experte für deutsche Qualitätszertifizierung",
    specialization: "Qualitätssicherung"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm font-medium">
            Über Reinigung KI
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Deutsche Präzision trifft KI-Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Führend in Kölns Reinigungsbranche mit modernster KI-Technologie und 
            traditionellen deutschen Qualitätsstandards seit 2009.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Unsere Geschichte</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Gegründet 2009 im Herzen von Köln, begann Reinigung KI als traditioneller 
                Reinigungsservice mit der Vision, die Branche durch Technologie 
                und unerschütterliche Qualitätsstandards zu revolutionieren.
              </p>
              <p>
                Heute sind wir Deutschlands erste KI-gestützte Reinigungsplattform und bedienen über 500 
                Unternehmen in den Bereichen Medizin, Gastronomie und Gewerbe. Unser proprietäres 
                KI-System ermöglicht sofortige Angebote, optimierte Terminplanung und vorausschauende Wartung.
              </p>
              <p>
                Wir kombinieren die Zuverlässigkeit und Präzision, die deutsche Unternehmen erwarten, mit moderner 
                Technologie, die professionelle Reinigungsdienste zugänglicher und effizienter 
                macht als je zuvor.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Zertifizierungen & Compliance:</h4>
              <div className="space-y-2">
                {[
                  "ISO 9001:2015 Qualitätsmanagement",
                  "DSGVO-vollständig konform",
                  "IHK-zertifiziert",
                  "OSHA-Sicherheitsstandards"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Führungsteam</h3>
            <div className="space-y-6">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{member.name}</h4>
                        <p className="text-sm text-primary mb-1">{member.role}</p>
                        <p className="text-xs text-muted-foreground mb-2">{member.experience}</p>
                        <Badge variant="outline" className="text-xs">
                          {member.specialization}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star size={24} />
              <h3 className="text-2xl font-bold">Auszeichnungen & Anerkennung</h3>
              <Star size={24} />
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-xl font-bold mb-2">2023</div>
                <div className="text-sm opacity-90">Beste Innovation im Reinigungsservice - Kölner Unternehmenspreise</div>
              </div>
              <div>
                <div className="text-xl font-bold mb-2">2022</div>
                <div className="text-sm opacity-90">DSGVO-Exzellenz-Zertifikat - Deutsche Datenschutzbehörde</div>
              </div>
              <div>
                <div className="text-xl font-bold mb-2">2021</div>
                <div className="text-sm opacity-90">Kundenservice-Exzellenz - 99,8% Zufriedenheitsrating</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}