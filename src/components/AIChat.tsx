import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useKV } from "@github/spark/hooks"
import { 
  MessageCircle, 
  X, 
  Send, 
  Upload,
  Sparkle,
  Clock
} from "@phosphor-icons/react"

interface ChatMessage {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useKV<ChatMessage[]>("chat-messages", [])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const addMessage = (content: string, type: 'user' | 'ai') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    }
    setMessages(current => [...current, newMessage])
  }

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    addMessage(userMessage, 'user')
    setIsTyping(true)

    // Simulate AI response with realistic delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    let aiResponse = "Ich verstehe, dass Sie Reinigungsdienste benötigen. "

    // Simple keyword-based responses
    if (userMessage.toLowerCase().includes('angebot') || userMessage.toLowerCase().includes('preis') || userMessage.toLowerCase().includes('kosten')) {
      aiResponse = "Ich kann sofort ein Angebot für Sie erstellen! Können Sie mir sagen: 1) Welche Art von Objekt (Büro, medizinisch, privat)? 2) Quadratmeter? 3) Wie oft benötigen Sie Reinigung? Ich kann auch Fotos analysieren, wenn Sie welche hochladen."
    } else if (userMessage.toLowerCase().includes('medizinisch') || userMessage.toLowerCase().includes('krankenhaus') || userMessage.toLowerCase().includes('arzt')) {
      aiResponse = "Perfekt! Unsere medizinische Einrichtungsreinigung beginnt bei €45/Stunde mit vollständiger OSHA-Konformität und Desinfektionsprotokollen. Können Sie die Quadratmeter und spezifischen Anforderungen mitteilen? Ich kann sofort eine Schätzung erstellen."
    } else if (userMessage.toLowerCase().includes('büro') || userMessage.toLowerCase().includes('gewerbe') || userMessage.toLowerCase().includes('office')) {
      aiResponse = "Großartige Wahl! Büroreinigung beginnt bei €25/Stunde. Für ein genaues Angebot benötige ich: Gebäudegröße, Anzahl Etagen und Häufigkeit (täglich, wöchentlich, monatlich). Soll ich das jetzt berechnen?"
    } else if (userMessage.toLowerCase().includes('notfall') || userMessage.toLowerCase().includes('dringend') || userMessage.toLowerCase().includes('sofort')) {
      aiResponse = "Wir bieten 24/7 Notfallreinigung! Ich kann Sie sofort mit unserem Einsatzteam verbinden. Was ist die Art des Notfalls und der Standort? Notfallreaktion erfolgt normalerweise innerhalb von 2 Stunden."
    } else {
      aiResponse = "Ich bin Ihr KI-Reinigungsassistent! Ich kann bei sofortigen Angeboten, Terminplanung und Service-Informationen helfen. Fragen Sie nach: Preisen, medizinischer Reinigung, Büroservices oder laden Sie ein Foto zur Analyse hoch. Wie kann ich Ihnen heute helfen?"
    }

    setIsTyping(false)
    addMessage(aiResponse, 'ai')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  const quickActions = [
    "Sofortiges Angebot erhalten",
    "Fotos zur Analyse hochladen", 
    "Beratung vereinbaren",
    "Notfall-Service"
  ]

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-transform z-50"
          size="lg"
        >
          <MessageCircle size={24} />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="flex-row items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Sparkle size={16} />
              </div>
              <div>
                <CardTitle className="text-sm">KI-Assistent</CardTitle>
                <p className="text-xs opacity-80">Sofortige Angebote & Support</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X size={16} />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Sparkle size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">KI-Reinigungsassistent</h3>
                    <p className="text-xs text-muted-foreground">
                      Erhalten Sie sofortige Angebote, laden Sie Fotos zur Analyse hoch oder stellen Sie Reinigungsfragen!
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs h-8"
                        onClick={() => {
                          setInput(action)
                          setTimeout(() => sendMessage(), 0)
                        }}
                      >
                        {action}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 text-sm ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.content}
                    <div
                      className={`text-xs mt-1 opacity-70 ${
                        message.type === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground rounded-lg p-3 text-sm flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    KI tippt...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Fragen Sie nach Preisen, Services oder laden Sie Fotos hoch..."
                  className="flex-1"
                />
                <Button 
                  size="sm" 
                  onClick={sendMessage}
                  disabled={!input.trim() || isTyping}
                >
                  <Send size={16} />
                </Button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <Button variant="ghost" size="sm" className="text-xs gap-1">
                  <Upload size={12} />
                  Foto hochladen
                </Button>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={12} />
                  <span>Ø Antwortzeit: 15s</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}