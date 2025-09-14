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
        {/* MOBILE DESIGN COMPLET - TOUTES LES FONCTIONS GARDÉES! */}
        <div className="block md:hidden">
          {/* Container mobile optimisé - pas de débordement */}
          <div className="w-full max-w-full overflow-hidden bg-background/95 backdrop-blur-sm border-b border-border/50">
            
            {/* LIGNE 1: Logo + Actions principales - Disposées intelligemment - 50% PLUS PETIT */}
            <div className="flex items-center justify-between p-1.5 border-b border-border/20">
              {/* Logo optimisé - 50% PLUS PETIT */}
              <a href="/" onClick={(e) => {
                e.preventDefault()
                navigateTo('/')
              }} className="flex items-center gap-1 flex-shrink-0">
                <div className="w-4 h-4 bg-primary rounded-lg flex items-center justify-center">
                  <Sparkle size={8} className="text-white" />
                </div>
                <span className="text-xs font-bold text-primary">Reinigung KI</span>
              </a>
              
              {/* Actions principales compactes - 50% PLUS PETIT */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => navigateTo('/admin')}
                  className="text-xs px-1 py-0.5 h-4"
                >
                  Admin
                </Button>
                <Button className="text-xs px-1.5 py-0.5 h-4 bg-primary hover:bg-primary/90 text-white rounded-lg">
                  <Chat size={7} className="mr-0.5" />
                  Chat
                </Button>
              </div>
            </div>
            
            {/* LIGNE 2: Navigation principale - Menu Sheet + Contact rapide - 50% PLUS PETIT */}
            <div className="flex items-center gap-1 p-1.5 border-b border-border/20">
              {/* Menu principal - garde toute la navigation - 50% PLUS PETIT */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex-1 h-5.5 rounded-xl border-2 border-primary/20 hover:border-primary/40">
                    <List size={9} className="mr-1" />
                    <span className="font-medium text-xs">Navigation & Services</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[160px] bg-gradient-to-b from-background to-primary/5">
                  <div className="flex flex-col h-full pt-4">
                    {/* Header Menu avec TOUTES les infos - 50% PLUS PETIT */}
                    <div className="flex items-center gap-1.5 pb-3 border-b border-primary/20">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                        <Sparkle size={10} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-foreground">Reinigung KI</h3>
                        <p className="text-xs text-muted-foreground">Professionelle Reinigung</p>
                      </div>
                    </div>
                    
                    {/* TOUTES les pages de navigation - 50% PLUS PETIT */}
                    <div className="flex flex-col space-y-1 py-3 flex-1">
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center px-2 py-2 rounded-2xl text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-300 font-medium text-xs border border-transparent hover:border-primary/20"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-1 h-1 bg-primary/60 rounded-full mr-1.5"></div>
                          {item.name}
                        </a>
                      ))}
                    </div>
                    
                    {/* TOUTES les actions du menu - rien supprimé - 50% PLUS PETIT */}
                    <div className="space-y-1.5 pb-3 border-t border-primary/20 pt-3">
                      <Button 
                        variant="outline" 
                        className="w-full gap-1.5 rounded-2xl h-7 text-xs border-2 hover:border-primary/40"
                      >
                        <Phone size={10} />
                        <div className="flex flex-col items-start">
                          <span className="font-semibold text-xs">Anrufen</span>
                          <span className="text-xs text-muted-foreground">+49 221 123 4567</span>
                        </div>
                      </Button>
                      <Button 
                        onClick={() => {
                          setIsOpen(false)
                          navigateTo('/admin')
                        }}
                        variant="ghost"
                        className="w-full text-muted-foreground hover:text-foreground rounded-2xl h-6 text-xs"
                      >
                        Admin-Bereich
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Contact rapide optimisé - 50% PLUS PETIT */}
              <Button variant="outline" className="h-5.5 px-1.5 rounded-xl border-2 border-border/50 hover:border-primary/50 flex-shrink-0">
                <Phone size={9} />
              </Button>
            </div>
            
            {/* LIGNE 3: TOUTES les actions secondaires - Grid adaptatif - 50% PLUS PETIT */}
            <div className="p-1.5 bg-muted/20">
              <div className="grid grid-cols-4 gap-1">
                <Button variant="ghost" className="h-4.5 text-xs rounded-lg flex flex-col items-center py-0.5">
                  <Chat size={7} />
                  <span className="text-[8px] mt-0.5">KI Chat</span>
                </Button>
                <Button variant="ghost" className="h-4.5 text-xs rounded-lg flex flex-col items-center py-0.5">
                  <Phone size={7} />
                  <span className="text-[8px] mt-0.5">Anruf</span>
                </Button>
                <Button variant="ghost" className="h-4.5 text-xs rounded-lg flex flex-col items-center py-0.5">
                  <span className="text-xs">💬</span>
                  <span className="text-[8px] mt-0.5">WhatsApp</span>
                </Button>
                <Button variant="ghost" className="h-4.5 text-xs rounded-lg flex flex-col items-center py-0.5">
                  <span className="text-xs">📧</span>
                  <span className="text-[8px] mt-0.5">E-Mail</span>
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