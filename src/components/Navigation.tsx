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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 gap-2">
          {/* Logo */}
          <div className="flex items-center group flex-shrink-0 min-w-0 max-w-[60%] md:max-w-none">
            <a href="/" onClick={(e) => {
              e.preventDefault()
              navigateTo('/')
            }} className="flex items-center gap-1 sm:gap-2 min-w-0">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                <Sparkle size={12} className="text-white sm:hidden" />
                <Sparkle size={14} className="text-white hidden sm:block md:hidden" />
                <Sparkle size={16} className="text-white hidden md:block" />
              </div>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] sm:max-w-none">
                Reinigung KI
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 lg:px-4 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-all duration-200 font-medium text-sm whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigateTo('/admin')}
              className="text-sm text-muted-foreground hover:text-foreground rounded-full hidden lg:flex"
            >
              Admin
            </Button>
            <Button variant="outline" size="sm" className="gap-2 rounded-full border-border/50 hover:border-primary/50 text-sm">
              <Phone size={16} />
              <span className="hidden xl:inline">+49 221 123 4567</span>
              <span className="xl:hidden hidden lg:inline">Anrufen</span>
              <span className="lg:hidden">Tel</span>
            </Button>
            <Button className="gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/25 transition-all duration-200 text-sm">
              <Chat size={16} />
              <span className="hidden lg:inline">Jetzt chatten</span>
              <span className="lg:hidden">Chat</span>
            </Button>
          </div>

          {/* Mobile CTA + Menu */}
          <div className="flex items-center gap-0 md:hidden flex-shrink-0 max-w-[30%]">
            <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-primary/90 p-0 text-xs h-6 w-6 min-h-[24px] min-w-[24px] max-w-[24px] max-h-[24px]">
              <Chat size={10} />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 w-6 rounded-full flex-shrink-0 p-0 min-h-[24px] min-w-[24px] max-w-[24px] max-h-[24px]">
                  <List size={10} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-background/98 backdrop-blur-md">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between py-6 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                        <Sparkle size={16} className="text-white" />
                      </div>
                      <span className="text-lg font-bold text-foreground">Reinigung KI</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full">
                      <X size={18} />
                    </Button>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex flex-col space-y-2 py-6 flex-1">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center px-4 py-4 rounded-xl text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-all duration-200 font-medium text-base min-h-[48px]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  
                  {/* Footer Actions */}
                  <div className="pt-6 border-t border-border/50 space-y-3">
                    <Button variant="outline" className="w-full gap-2 rounded-xl h-12 text-base">
                      <Phone size={18} />
                      +49 221 123 4567
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        setIsOpen(false)
                        navigateTo('/admin')
                      }}
                      className="w-full text-muted-foreground hover:text-foreground rounded-xl h-10 text-sm"
                    >
                      Admin-Bereich
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}