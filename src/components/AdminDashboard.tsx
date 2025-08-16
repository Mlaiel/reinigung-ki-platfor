import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { CalendarDays, Clock, MapPin, Phone, Mail, User, Settings, FileText, TrendingUp, LogOut } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'
import { toast } from 'sonner'

interface Booking {
  id: string
  kundenName: string
  email: string
  telefon: string
  adresse: string
  serviceTyp: string
  datum: string
  uhrzeit: string
  status: 'neu' | 'bestätigt' | 'abgeschlossen' | 'storniert'
  notizen: string
  geschätzterPreis: number
  erstelltAm: string
}

interface DashboardStats {
  gesamtBuchungen: number
  neueBuchungen: number
  heutigeBuchungen: number
  monatlicherUmsatz: number
}

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useKV('admin-authenticated', false)
  const [password, setPassword] = useState('')
  const [bookings, setBookings] = useKV<Booking[]>('admin-bookings', [])
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  // Login-Funktion
  const handleLogin = () => {
    if (password === 'admin123') { // In production würde man ein sicheres Hash-System verwenden
      setIsAuthenticated(true)
      toast.success('Erfolgreich angemeldet')
    } else {
      toast.error('Falsches Passwort')
    }
    setPassword('')
  }

  // Dashboard-Statistiken berechnen
  const calculateStats = (): DashboardStats => {
    const heute = new Date().toISOString().split('T')[0]
    const dieserMonat = new Date().getMonth()
    
    return {
      gesamtBuchungen: bookings.length,
      neueBuchungen: bookings.filter(b => b.status === 'neu').length,
      heutigeBuchungen: bookings.filter(b => b.datum === heute).length,
      monatlicherUmsatz: bookings
        .filter(b => new Date(b.erstelltAm).getMonth() === dieserMonat && b.status === 'abgeschlossen')
        .reduce((sum, b) => sum + b.geschätzterPreis, 0)
    }
  }

  // Buchung-Status aktualisieren
  const updateBookingStatus = (bookingId: string, newStatus: Booking['status']) => {
    setBookings(current => 
      current.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: newStatus }
          : booking
      )
    )
    toast.success('Status aktualisiert')
  }

  // Status-Badge-Farben
  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'neu': return 'bg-blue-500'
      case 'bestätigt': return 'bg-green-500'
      case 'abgeschlossen': return 'bg-gray-500'
      case 'storniert': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const stats = calculateStats()

  // Login-Bildschirm
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-primary">Admin-Dashboard</CardTitle>
            <p className="text-muted-foreground">Reinigung KI Platform</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">Passwort</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Admin-Passwort eingeben"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Anmelden
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">Admin-Dashboard</h1>
            <p className="text-muted-foreground">Reinigung KI Platform - Buchungsverwaltung</p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2"
          >
            <LogOut size={16} />
            Abmelden
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Übersicht</TabsTrigger>
            <TabsTrigger value="bookings">Buchungen</TabsTrigger>
            <TabsTrigger value="customers">Kunden</TabsTrigger>
            <TabsTrigger value="settings">Einstellungen</TabsTrigger>
          </TabsList>

          {/* Übersicht Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Statistik-Karten */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Gesamt Buchungen</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.gesamtBuchungen}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Neue Buchungen</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{stats.neueBuchungen}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Heute</CardTitle>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{stats.heutigeBuchungen}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monatlicher Umsatz</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">€{stats.monatlicherUmsatz}</div>
                </CardContent>
              </Card>
            </div>

            {/* Neueste Buchungen */}
            <Card>
              <CardHeader>
                <CardTitle>Neueste Buchungen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.slice(0, 5).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium">{booking.kundenName}</p>
                          <p className="text-sm text-muted-foreground">{booking.serviceTyp}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{booking.datum}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Buchungen Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alle Buchungen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="font-medium text-lg">{booking.kundenName}</h3>
                          <p className="text-muted-foreground flex items-center gap-2">
                            <Mail size={16} />
                            {booking.email}
                          </p>
                          <p className="text-muted-foreground flex items-center gap-2">
                            <Phone size={16} />
                            {booking.telefon}
                          </p>
                          <p className="text-muted-foreground flex items-center gap-2">
                            <MapPin size={16} />
                            {booking.adresse}
                          </p>
                        </div>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Service:</span> {booking.serviceTyp}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays size={16} />
                          {booking.datum}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {booking.uhrzeit}
                        </div>
                      </div>

                      {booking.notizen && (
                        <div className="text-sm">
                          <span className="font-medium">Notizen:</span> {booking.notizen}
                        </div>
                      )}

                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="font-medium text-lg">€{booking.geschätzterPreis}</span>
                        <div className="flex gap-2">
                          <Select
                            value={booking.status}
                            onValueChange={(value) => updateBookingStatus(booking.id, value as Booking['status'])}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="neu">Neu</SelectItem>
                              <SelectItem value="bestätigt">Bestätigt</SelectItem>
                              <SelectItem value="abgeschlossen">Abgeschlossen</SelectItem>
                              <SelectItem value="storniert">Storniert</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setSelectedBooking(booking)
                              setIsEditDialogOpen(true)
                            }}
                          >
                            Bearbeiten
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {bookings.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      Noch keine Buchungen vorhanden
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Kunden Tab */}
          <TabsContent value="customers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kundenliste</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from(new Set(bookings.map(b => b.email))).map(email => {
                    const customerBookings = bookings.filter(b => b.email === email)
                    const latestBooking = customerBookings[0]
                    
                    return (
                      <div key={email} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <h3 className="font-medium">{latestBooking.kundenName}</h3>
                            <p className="text-muted-foreground">{email}</p>
                            <p className="text-muted-foreground">{latestBooking.telefon}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{customerBookings.length} Buchungen</p>
                            <p className="text-sm text-muted-foreground">
                              Gesamt: €{customerBookings.reduce((sum, b) => sum + b.geschätzterPreis, 0)}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  {bookings.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      Noch keine Kunden vorhanden
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Einstellungen Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System-Einstellungen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    // Demo-Buchungen erstellen
                    const demoBuchungen: Booking[] = [
                      {
                        id: '1',
                        kundenName: 'Max Mustermann',
                        email: 'max@example.com',
                        telefon: '+49 221 123456',
                        adresse: 'Musterstraße 1, 50667 Köln',
                        serviceTyp: 'Büroreinigung',
                        datum: new Date().toISOString().split('T')[0],
                        uhrzeit: '10:00',
                        status: 'neu',
                        notizen: 'Wöchentliche Reinigung gewünscht',
                        geschätzterPreis: 150,
                        erstelltAm: new Date().toISOString()
                      },
                      {
                        id: '2',
                        kundenName: 'Anna Schmidt',
                        email: 'anna@example.com',
                        telefon: '+49 221 789012',
                        adresse: 'Beispielweg 5, 50674 Köln',
                        serviceTyp: 'Hausreinigung',
                        datum: new Date().toISOString().split('T')[0],
                        uhrzeit: '14:00',
                        status: 'bestätigt',
                        notizen: 'Extra Fensterreinigung',
                        geschätzterPreis: 200,
                        erstelltAm: new Date().toISOString()
                      }
                    ]
                    setBookings(demoBuchungen)
                    toast.success('Demo-Daten geladen')
                  }}
                >
                  Demo-Daten laden
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={() => {
                    setBookings([])
                    toast.success('Alle Daten gelöscht')
                  }}
                >
                  Alle Daten löschen
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bearbeiten Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Buchung bearbeiten</DialogTitle>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Kunde</label>
                  <Input value={selectedBooking.kundenName} readOnly />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <Select 
                    value={selectedBooking.status}
                    onValueChange={(value) => {
                      updateBookingStatus(selectedBooking.id, value as Booking['status'])
                      setSelectedBooking({...selectedBooking, status: value as Booking['status']})
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="neu">Neu</SelectItem>
                      <SelectItem value="bestätigt">Bestätigt</SelectItem>
                      <SelectItem value="abgeschlossen">Abgeschlossen</SelectItem>
                      <SelectItem value="storniert">Storniert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Notizen</label>
                <Textarea 
                  value={selectedBooking.notizen}
                  onChange={(e) => setSelectedBooking({...selectedBooking, notizen: e.target.value})}
                  placeholder="Zusätzliche Notizen..."
                />
              </div>
              <Button onClick={() => setIsEditDialogOpen(false)}>
                Schließen
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}