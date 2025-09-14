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
        {/* DESIGN MOBILE COMPLÈTEMENT NOUVEAU - STYLE APP MOBILE! */}
        <div className="block md:hidden">
          {/* TOP BAR SIMPLE - Juste logo */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
            <div className="flex items-center justify-center py-3">
              <a href="/" onClick={(e) => {
                e.preventDefault()
                navigateTo('/')
              }} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sparkle size={16} className="text-white" />
                </div>
                <span className="text-lg font-bold text-primary">Reinigung KI</span>
              </a>
            </div>
          </div>
          
          {/* PADDING TOP pour compenser la top bar fixe */}
          <div className="h-16"></div>
          
          {/* BOTTOM NAVIGATION - STYLE APP MOBILE */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-t border-border/50 shadow-2xl">
            <div className="grid grid-cols-5 gap-1 p-2">
              {/* Menu Navigation */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="flex flex-col items-center gap-1 h-16 rounded-xl hover:bg-primary/10">
                    <List size={20} className="text-primary" />
                    <span className="text-xs font-medium text-primary">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[320px] bg-gradient-to-b from-background to-primary/5">
                  <div className="flex flex-col h-full pt-8">
                    <div className="flex items-center gap-3 pb-6 border-b border-primary/20">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                        <Sparkle size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Reinigung KI</h3>
                        <p className="text-sm text-muted-foreground">Professionelle Reinigung</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 py-6 flex-1">
                      {navItems.map((item) => (
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

              {/* Chat KI - Action principale */}
              <Button className="flex flex-col items-center gap-1 h-16 rounded-xl bg-primary hover:bg-primary/90 text-white">
                <Chat size={22} />
                <span className="text-xs font-semibold">KI Chat</span>
              </Button>

              {/* Téléphone */}
              <Button variant="ghost" className="flex flex-col items-center gap-1 h-16 rounded-xl hover:bg-primary/10">
                <Phone size={20} className="text-primary" />
                <span className="text-xs font-medium text-primary">Anruf</span>
              </Button>

              {/* WhatsApp */}
              <Button variant="ghost" className="flex flex-col items-center gap-1 h-16 rounded-xl hover:bg-green-100">
                <span className="text-xl">💬</span>
                <span className="text-xs font-medium text-green-600">WhatsApp</span>
              </Button>

              {/* E-Mail */}
              <Button variant="ghost" className="flex flex-col items-center gap-1 h-16 rounded-xl hover:bg-blue-100">
                <span className="text-xl">�</span>
                <span className="text-xs font-medium text-blue-600">E-Mail</span>
              </Button>
            </div>
          </div>
          
          {/* PADDING BOTTOM pour compenser la bottom bar fixe */}
          <div className="h-20"></div>
          
          {/* FLOATING ACTION BUTTON - Admin (optionnel) */}
          <div className="fixed top-20 right-4 z-40">
            <Button 
              onClick={() => navigateTo('/admin')}
              size="sm"
              variant="outline"
              className="rounded-full w-12 h-12 shadow-lg bg-background/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40"
            >
              <span className="text-xs font-bold text-primary">A</span>
            </Button>
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