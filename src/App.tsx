import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { QuoteSection } from "@/components/QuoteSection"
import { AboutSection } from "@/components/AboutSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { AIChat } from "@/components/AIChat"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <QuoteSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChat />
    </div>
  )
}

export default App