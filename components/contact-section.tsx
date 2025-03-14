"use client"
import { useState } from "react"
import { Code, Smartphone, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Define the available offers
const offers = [
  {
    id: "basic",
    name: "Offre Basic",
    additionalOptions: [
      { id: "basic-option-1", label: "Support technique" },
      { id: "basic-option-2", label: "Mise à jour mensuelle" },
    ],
  },
  {
    id: "standard",
    name: "Offre Standard",
    additionalOptions: [
      { id: "standard-option-1", label: "Support technique premium" },
      { id: "standard-option-2", label: "Mise à jour hebdomadaire" },
      { id: "standard-option-3", label: "SEO de base" },
    ],
  },
  {
    id: "premium",
    name: "Offre Premium",
    additionalOptions: [
      { id: "premium-option-1", label: "Support technique 24/7" },
      { id: "premium-option-2", label: "Mise à jour en temps réel" },
      { id: "premium-option-3", label: "SEO avancé" },
      { id: "premium-option-4", label: "Analyse de performance" },
    ],
  },
]

export default function ContactSection() {
  const [selectedOffer, setSelectedOffer] = useState("")
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  // Get the additional options for the selected offer
  const additionalOptions = offers.find((offer) => offer.id === selectedOffer)?.additionalOptions || []

  // Handle checkbox change
  const handleOptionChange = (optionId: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions((prev) => [...prev, optionId])
    } else {
      setSelectedOptions((prev) => prev.filter((id) => id !== optionId))
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Parlons de votre projet</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Prêt à donner vie à votre vision ? Contactez-nous dès aujourd'hui.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Informations de contact</h3>
              <p className="text-muted-foreground">
                N'hésitez pas à nous contacter pour discuter de votre projet ou pour toute question.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <p>contact@thestudioflow.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <p>+33 X XX XX XX XX</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Prénom
                  </label>
                  <input
                    id="first-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Prénom"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nom
                  </label>
                  <input
                    id="last-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nom"
                  />
                </div>
              </div>

              {/* Company Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Nom de l'entreprise
                </label>
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <input
                    id="company"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="email@exemple.com"
                />
              </div>

              {/* Offer Selection */}
              <div className="space-y-2">
                <label
                  htmlFor="offer"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Offre souhaitée
                </label>
                <Select onValueChange={setSelectedOffer} value={selectedOffer}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez une offre" />
                  </SelectTrigger>
                  <SelectContent>
                    {offers.map((offer) => (
                      <SelectItem key={offer.id} value={offer.id}>
                        {offer.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Options (conditional) */}
              {selectedOffer && additionalOptions.length > 0 && (
                <div className="space-y-3 p-4 border rounded-md bg-background/50">
                  <h4 className="font-medium">Options supplémentaires</h4>
                  <div className="space-y-2">
                    {additionalOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={selectedOptions.includes(option.id)}
                          onCheckedChange={(checked) => handleOptionChange(option.id, checked as boolean)}
                        />
                        <Label htmlFor={option.id}>{option.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <Button type="submit" className="w-full">
                Envoyer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

