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
        {/* NAVIGATION MOBILE OPTIMISÉE POUR ZOOM 0.9 */}
        
        {/* Mobile Layout - COMPACT ET RESPONSIVE */}
        <div className="block md:hidden">
          {/* Navigation principale en une ligne */}
          <div className="flex items-center justify-between h-14 px-4">
            {/* Groupe gauche: Menu + Logo */}
            <div className="flex items-center gap-3">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <List size={18} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] bg-background/98 backdrop-blur-md">
                  <div className="flex flex-col h-full pt-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-6 border-b border-border/50">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                        <Sparkle size={16} className="text-white" />
                      </div>
                      <span className="text-lg font-bold text-foreground">Reinigung KI</span>
                    </div>
                    
                    {/* Navigation */}
                    <div className="flex flex-col space-y-1 py-6">
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center px-3 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-all duration-200 font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    
                    {/* Actions */}
                    <div className="mt-auto space-y-3 pb-6">
                      <Button variant="outline" className="w-full gap-2 rounded-lg h-12">
                        <Phone size={18} />
                        +49 221 123 4567
                      </Button>
                      <Button 
                        variant="ghost" 
                        onClick={() => {
                          setIsOpen(false)
                          navigateTo('/admin')
                        }}
                        className="w-full text-muted-foreground hover:text-foreground rounded-lg h-10"
                      >
                        Admin-Bereich
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Logo */}
              <a href="/" onClick={(e) => {
                e.preventDefault()
                navigateTo('/')
              }} className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                  <Sparkle size={14} className="text-white" />
                </div>
                <span className="text-base font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Reinigung KI
                </span>
              </a>
            </div>

            {/* Groupe droite: Actions */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 px-2 text-xs">
                <Phone size={14} />
                <span className="ml-1">Tel</span>
              </Button>
              <Button size="sm" className="h-8 px-3 bg-primary text-primary-foreground text-xs">
                <Chat size={14} />
                <span className="ml-1">Chat</span>
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