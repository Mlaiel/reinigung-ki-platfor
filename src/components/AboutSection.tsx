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
    title: "German Quality Standards",
    description: "Certified professionals with rigorous training and quality control processes"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions", 
    description: "Environmentally conscious cleaning products and sustainable practices"
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description: "24/7 AI support with human expertise for personalized service"
  },
  {
    icon: Target,
    title: "Precision & Efficiency",
    description: "AI-powered optimization for consistent, reliable results every time"
  }
]

const stats = [
  { number: "500+", label: "Satisfied Clients" },
  { number: "15+", label: "Years Experience" },
  { number: "99.8%", label: "Service Quality" },
  { number: "24/7", label: "AI Support" }
]

const team = [
  {
    name: "Klaus Mueller",
    role: "Founder & CEO",
    experience: "20+ years in facility management",
    specialization: "Operations Strategy"
  },
  {
    name: "Anna Schmidt",
    role: "Head of Technology",
    experience: "AI & automation specialist",
    specialization: "Product Development"
  },
  {
    name: "Thomas Weber",
    role: "Quality Manager",
    experience: "German quality certification expert",
    specialization: "Quality Assurance"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm font-medium">
            About Reinigung KI
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            German Precision Meets AI Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading Cologne's cleaning industry with cutting-edge AI technology and 
            traditional German quality standards since 2009.
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
            <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009 in the heart of Cologne, Reinigung KI began as a traditional 
                cleaning service with a vision to revolutionize the industry through technology 
                and unwavering quality standards.
              </p>
              <p>
                Today, we're Germany's first AI-powered cleaning platform, serving over 500 
                businesses across medical, hospitality, and commercial sectors. Our proprietary 
                AI system enables instant quotes, optimized scheduling, and predictive maintenance.
              </p>
              <p>
                We combine the reliability and precision German businesses expect with modern 
                technology that makes professional cleaning services more accessible and efficient 
                than ever before.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Certifications & Compliance:</h4>
              <div className="space-y-2">
                {[
                  "ISO 9001:2015 Quality Management",
                  "RGPD/GDPR Fully Compliant",
                  "German Chamber of Commerce Certified",
                  "OSHA Safety Standards"
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
            <h3 className="text-2xl font-bold text-foreground mb-6">Leadership Team</h3>
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
              <h3 className="text-2xl font-bold">Awards & Recognition</h3>
              <Star size={24} />
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-xl font-bold mb-2">2023</div>
                <div className="text-sm opacity-90">Best Innovation in Cleaning Services - Cologne Business Awards</div>
              </div>
              <div>
                <div className="text-xl font-bold mb-2">2022</div>
                <div className="text-sm opacity-90">RGPD Excellence Certificate - German Data Protection Authority</div>
              </div>
              <div>
                <div className="text-xl font-bold mb-2">2021</div>
                <div className="text-sm opacity-90">Customer Service Excellence - 99.8% Satisfaction Rating</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}