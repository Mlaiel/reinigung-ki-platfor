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
        {/* MOBILE DESIGN RÉVOLUTIONNAIRE - Layout Stack Vertical */}
        
        <div className="block md:hidden bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-sm">
          {/* Header Mobile avec Logo Central */}
          <div className="flex flex-col">
            {/* Ligne 1: Logo et Brand */}
            <div className="flex items-center justify-center py-3 border-b border-primary/10">
              <a href="/" onClick={(e) => {
                e.preventDefault()
                navigateTo('/')
              }} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkle size={20} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">Reinigung KI</span>
                  <span className="text-xs text-muted-foreground">Professionelle Reinigung</span>
                </div>
              </a>
            </div>
            
            {/* Ligne 2: Actions Principales */}
            <div className="flex items-center justify-between px-4 py-2 bg-background/50">
              {/* Menu principal */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex-1 mr-2 h-11 rounded-2xl border-2 border-primary/20 hover:border-primary/40 bg-background/80">
                    <List size={18} className="mr-2" />
                    <span className="font-medium">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[320px] bg-gradient-to-b from-background to-primary/5">
                  <div className="flex flex-col h-full pt-8">
                    {/* Header Menu */}
                    <div className="flex items-center gap-3 pb-6 border-b border-primary/20">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                        <Sparkle size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Reinigung KI</h3>
                        <p className="text-sm text-muted-foreground">Ihr Reinigungsservice</p>
                      </div>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-2 py-6 flex-1">
                      {navItems.map((item, index) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center px-4 py-4 rounded-2xl text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-300 font-medium text-base border border-transparent hover:border-primary/20"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-2 h-2 bg-primary/60 rounded-full mr-3"></div>
                          {item.name}
                        </a>
                      ))}
                    </div>
                    
                    {/* Actions Menu */}
                    <div className="space-y-3 pb-6 border-t border-primary/20 pt-6">
                      <Button 
                        variant="outline" 
                        className="w-full gap-3 rounded-2xl h-14 text-base border-2 hover:border-primary/40"
                      >
                        <Phone size={20} />
                        <div className="flex flex-col items-start">
                          <span className="font-semibold">Anrufen</span>
                          <span className="text-xs text-muted-foreground">+49 221 123 4567</span>
                        </div>
                      </Button>
                      <Button 
                        onClick={() => {
                          setIsOpen(false)
                          navigateTo('/admin')
                        }}
                        variant="ghost"
                        className="w-full text-muted-foreground hover:text-foreground rounded-2xl h-12"
                      >
                        Admin-Bereich
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Chat Action Principal */}
              <Button className="flex-1 h-11 rounded-2xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg text-white font-semibold">
                <Chat size={18} className="mr-2" />
                KI Chat
              </Button>
            </div>
            
            {/* Ligne 3: Actions Secondaires */}
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/30">
              <Button variant="ghost" size="sm" className="flex-1 h-9 rounded-xl text-xs">
                <Phone size={14} className="mr-1" />
                Schnell-Anruf
              </Button>
              <div className="w-px h-6 bg-border"></div>
              <Button variant="ghost" size="sm" className="flex-1 h-9 rounded-xl text-xs">
                💬 WhatsApp
              </Button>
              <div className="w-px h-6 bg-border"></div>
              <Button variant="ghost" size="sm" className="flex-1 h-9 rounded-xl text-xs">
                📧 E-Mail
              </Button>
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