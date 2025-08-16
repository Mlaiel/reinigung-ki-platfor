import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useKV } from "@github/spark/hooks"
import { 
  Upload, 
  MessageCircle, 
  CheckCircle, 
  Calculator,
  Clock,
  Euro
} from "@phosphor-icons/react"

interface QuoteData {
  propertyType: string
  squareMeters: string
  serviceType: string
  frequency: string
  description: string
  photos: string[]
}

export function QuoteSection() {
  const [quoteData, setQuoteData] = useKV<QuoteData>("quote-form", {
    propertyType: "",
    squareMeters: "",
    serviceType: "",
    frequency: "",
    description: "",
    photos: []
  })
  
  const [isProcessing, setIsProcessing] = useState(false)
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      // Simulate file upload
      const fileNames = Array.from(files).map(file => file.name)
      setQuoteData(current => ({
        ...current,
        photos: [...current.photos, ...fileNames]
      }))
    }
  }

  const generateQuote = async () => {
    setIsProcessing(true)
    
    // Simulate AI processing with realistic calculation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const baseRates = {
      medical: 45,
      commercial: 25, 
      hospitality: 35,
      residential: 20
    }
    
    const frequencyMultipliers = {
      "one-time": 1.5,
      weekly: 1.0,
      biweekly: 1.1,
      monthly: 1.3
    }
    
    const baseRate = baseRates[quoteData.serviceType as keyof typeof baseRates] || 25
    const frequencyMultiplier = frequencyMultipliers[quoteData.frequency as keyof typeof frequencyMultipliers] || 1.0
    const area = parseInt(quoteData.squareMeters) || 100
    
    // Estimate 1 hour per 50 square meters
    const estimatedHours = Math.max(1, Math.ceil(area / 50))
    const cost = Math.round(baseRate * estimatedHours * frequencyMultiplier)
    
    setEstimatedCost(cost)
    setIsProcessing(false)
  }

  return (
    <section id="quote" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-sm font-medium">
            Instant Quote
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get Your AI-Powered Quote in Minutes
          </h2>
          <p className="text-xl text-muted-foreground">
            Upload photos, describe your needs, and get accurate pricing instantly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quote Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="text-primary" size={20} />
                Service Details
              </CardTitle>
              <CardDescription>
                Tell us about your cleaning requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="property-type">Property Type</Label>
                  <Select 
                    value={quoteData.propertyType} 
                    onValueChange={(value) => setQuoteData(current => ({...current, propertyType: value}))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical">Medical Facility</SelectItem>
                      <SelectItem value="commercial">Office Building</SelectItem>
                      <SelectItem value="hospitality">Hotel/Restaurant</SelectItem>
                      <SelectItem value="residential">Residential</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="square-meters">Square Meters</Label>
                  <Input
                    id="square-meters"
                    type="number"
                    placeholder="e.g. 150"
                    value={quoteData.squareMeters}
                    onChange={(e) => setQuoteData(current => ({...current, squareMeters: e.target.value}))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select 
                    value={quoteData.serviceType}
                    onValueChange={(value) => setQuoteData(current => ({...current, serviceType: value}))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Cleaning</SelectItem>
                      <SelectItem value="deep">Deep Cleaning</SelectItem>
                      <SelectItem value="move">Move-in/out</SelectItem>
                      <SelectItem value="post-construction">Post-Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select 
                    value={quoteData.frequency}
                    onValueChange={(value) => setQuoteData(current => ({...current, frequency: value}))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="How often?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Additional Details</Label>
                <Textarea
                  id="description"
                  placeholder="Describe any specific requirements, problem areas, or special instructions..."
                  value={quoteData.description}
                  onChange={(e) => setQuoteData(current => ({...current, description: e.target.value}))}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Upload Photos (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload size={32} className="mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload photos for more accurate pricing
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <Button variant="outline" size="sm" asChild>
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      Choose Files
                    </label>
                  </Button>
                </div>
                {quoteData.photos.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {quoteData.photos.map((photo, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {photo}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <Button 
                className="w-full gap-2" 
                onClick={generateQuote}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    AI Analyzing...
                  </>
                ) : (
                  <>
                    <MessageCircle size={16} />
                    Generate Quote
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Quote Result */}
          <div className="space-y-6">
            {estimatedCost ? (
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CheckCircle size={20} />
                    Quote Generated
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-6">
                    <div className="text-4xl font-bold text-primary flex items-center justify-center gap-1">
                      <Euro size={32} />
                      {estimatedCost}
                    </div>
                    <p className="text-muted-foreground mt-2">Estimated cost</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Service type:</span>
                      <span className="font-medium">{quoteData.serviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <span className="font-medium">{quoteData.squareMeters}m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span className="font-medium">{quoteData.frequency}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 gap-2">
                      <Clock size={16} />
                      Book Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Modify Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <MessageCircle size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Ready for Your Quote?</h3>
                  <p className="text-muted-foreground">
                    Fill out the form to get an instant AI-powered estimate
                  </p>
                </CardContent>
              </Card>
            )}

            <Card className="bg-muted">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Why Choose Our AI Quotes?</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    <span>Instant results in under 2 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    <span>Photo analysis for accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    <span>No hidden fees or surprises</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    <span>Free consultation included</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}