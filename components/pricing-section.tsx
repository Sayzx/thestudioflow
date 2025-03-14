import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Layout, Monitor, Code, Check, Plus, ArrowRight } from "lucide-react"

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 lg:py-19 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Tarifs</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Nos Offres</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Des solutions adaptées à tous vos besoins web, de la simple vitrine à l'application sur mesure.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-8 lg:grid-cols-3">
          {/* Offre 1: Site Vitrine */}
          <div className="relative flex flex-col h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
              <Layout className="h-6 w-6" />
            </div>

            <div className="mb-5">
              <h3 className="text-2xl font-bold">Site Vitrine</h3>
              <p className="mt-2 text-muted-foreground">Landing page professionnelle et efficace.</p>
            </div>

            <div className="mb-5">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">300€</span>
                <span className="text-muted-foreground ml-1">à partir de</span>
              </div>
            </div>

            <ul className="mb-8 space-y-3 text-sm">
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                <span>Template professionnel personnalisé avec vos informations</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                <span>Déploiement rapide et économique</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                <span>Optimisé pour les moteurs de recherche</span>
              </li>
              <li className="flex items-start">
                <Plus className="mr-2 h-4 w-4 text-primary mt-1" />
                <span className="text-muted-foreground">Options de personnalisation disponibles</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Button asChild className="w-full" variant="outline">
                <Link href="#contact">Choisir cette offre</Link>
              </Button>
            </div>
          </div>

          {/* Offre 2: Site Dynamique */}
          <div className="relative flex flex-col h-full rounded-xl border-2 border-primary bg-card p-6 shadow-md transition-all duration-200 hover:shadow-lg">
            <div className="absolute -top-3 right-4">
              <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Populaire
              </div>
            </div>

            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
              <Monitor className="h-6 w-6" />
            </div>

            <div className="mb-5">
              <h3 className="text-2xl font-bold">Site Dynamique</h3>
              <p className="mt-2 text-muted-foreground">Multi-pages avec administration.</p>
            </div>

            <div className="mb-5">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">1200€</span>
                <span className="text-muted-foreground ml-1">à partir de</span>
              </div>
            </div>

            <ul className="mb-8 space-y-3 text-sm">
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                <span>Template avancé avec plusieurs pages</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                <span>Panneau d'administration complet</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                <span>Fonctionnalités dynamiques (blog, e-commerce, etc.)</span>
              </li>
              <li className="flex items-start">
                <Plus className="mr-2 h-4 w-4 text-primary mt-1" />
                <span className="text-muted-foreground">Options de personnalisation avancées</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Button asChild className="w-full">
                <Link href="#contact">Choisir cette offre</Link>
              </Button>
            </div>
          </div>

          {/* Offre 3: Application Web */}
          <div className="relative flex flex-col h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
              <Code className="h-6 w-6" />
            </div>

            <div className="mb-5">
              <h3 className="text-2xl font-bold">Application Web</h3>
              <p className="mt-2 text-muted-foreground">Solution sur mesure de bout en bout.</p>
            </div>

            <div className="mb-5">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">Sur devis</span>
              </div>
            </div>

            <ul className="mb-8 space-y-3 text-sm">
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                <span>Développement entièrement personnalisé</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                <span>Expérience utilisateur hors du commun</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                <span>Fonctionnalités avancées sur mesure</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-primary mt-1" />
                <span>Accompagnement complet du projet</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Button asChild className="w-full group" variant="outline">
                <Link href="#contact" className="flex items-center justify-center">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Besoin d'une solution spécifique ? Contactez-nous pour discuter de votre projet.
          </p>
          <Button asChild variant="secondary">
            <Link href="#contact">Discuter de mon projet</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

