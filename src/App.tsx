import { useState, useEffect } from "react"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { QuoteSection } from "@/components/QuoteSection"
import { AboutSection } from "@/components/AboutSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { AIChat } from "@/components/AIChat"
import { AdminDashboard } from "@/components/AdminDashboard"
import { Toaster } from "sonner"

function App() {
  const [currentRoute, setCurrentRoute] = useState('/')

  useEffect(() => {
    // Einfaches Client-side Routing
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname)
    }

    window.addEventListener('popstate', handleRouteChange)
    handleRouteChange() // Initial route check

    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  // Admin-Dashboard Route
  if (currentRoute === '/admin') {
    return (
      <>
        <AdminDashboard />
        <Toaster />
      </>
    )
  }

  // Hauptseite
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
      <Toaster />
    </div>
  )
}

export default App