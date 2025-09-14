import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { List, Phone, Chat, X, Sparkle } from "@phosphor-icons/react"
import { navigateTo } from "@/lib/router"

const navItems = [
  { name: "Startseite", href: "#home" },
  { name: "Leistungen", href: "#services" },
  { name: "Über uns", href: "#about" },
  { name: "Kostenvoranschlag", href: "#quote" },
  { name: "Kontakt", href: "#contact" }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/98 backdrop-blur-md border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="w-full">
        {/* MOBILE DESIGN ULTRA-SIMPLE - TOUT VERTICAL! */}
        <div className="block md:hidden">
          {/* Layout Vertical Complet - Plus de débordement possible! */}
          <div className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50">
            
            {/* 🎯 ÉTAPE 1: Logo seul, centré, grand */}
            <div className="w-full py-4 text-center border-b border-border/20">
              <a href="/" onClick={(e) => {
                e.preventDefault()
                navigateTo('/')
              }} className="inline-flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sparkle size={16} className="text-white" />
                </div>
                <span className="text-xl font-bold text-primary">Reinigung KI</span>
              </a>
            </div>
            
            {/* 🎯 ÉTAPE 2: Menu Principal - Bouton PLEINE LARGEUR */}
            <div className="w-full p-3">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-base rounded-xl">
                    <List size={20} className="mr-3" />
                    Navigation & Services
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                  <div className="pt-6">
                    <div className="flex items-center gap-3 pb-6 border-b">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Sparkle size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold">Reinigung KI</h3>
                        <p className="text-sm text-muted-foreground">Professionelle Reinigung</p>
                      </div>
                    </div>
                    
                    <div className="py-4 space-y-2">
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block w-full p-3 rounded-lg hover:bg-muted text-left font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4 space-y-3">
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Phone size={18} />
                        +49 221 123 4567
                      </Button>
                      <Button 
                        onClick={() => {
                          setIsOpen(false)
                          navigateTo('/admin')
                        }}
                        variant="ghost" 
                        className="w-full"
                      >
                        Admin-Bereich
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            {/* 🎯 ÉTAPE 3: Actions Rapides - Grid Simple 2x2 */}
            <div className="w-full p-3 bg-muted/20 border-t border-border/20">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="h-10 text-sm rounded-lg">
                  <Chat size={16} className="mr-2" />
                  KI Chat
                </Button>
                <Button variant="outline" className="h-10 text-sm rounded-lg">
                  <Phone size={16} className="mr-2" />
                  Anrufen
                </Button>
                <Button variant="ghost" className="h-10 text-sm rounded-lg">
                  💬 WhatsApp
                </Button>
                <Button variant="ghost" className="h-10 text-sm rounded-lg">
                  📧 E-Mail
                </Button>
              </div>
            </div>
            
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden md:flex items-center justify-between h-20 w-full">
          {/* Logo - Gauche */}
          <div className="flex items-center group">
            <a href="/" onClick={(e) => {
              e.preventDefault()
              navigateTo('/')
            }} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Sparkle size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent whitespace-nowrap">
                Reinigung KI
              </span>
            </a>
          </div>

          {/* Navigation - Centre */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-all duration-200 font-medium whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions - Droite */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigateTo('/admin')}
              className="text-muted-foreground hover:text-foreground rounded-lg hidden xl:flex"
            >
              Admin
            </Button>
            <Button variant="outline" size="sm" className="gap-2 rounded-lg border-border/50 hover:border-primary/50">
              <Phone size={16} />
              <span className="hidden lg:inline">+49 221 123 4567</span>
              <span className="lg:hidden">Tel</span>
            </Button>
            <Button className="gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/25 transition-all duration-200">
              <Chat size={16} />
              Jetzt chatten
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}