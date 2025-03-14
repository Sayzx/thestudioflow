import { Globe, Database, Archive, Figma, Smartphone, SquareKanban } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Nos Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Solutions complètes de développement</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Nous proposons une gamme complète de services pour répondre à tous vos besoins numériques.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Développement Web</h3>
            <p className="text-center text-muted-foreground">
              Sites vitrines, e-commerce et applications web sur mesure avec les dernières technologies.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Développement Backend</h3>
            <p className="text-center text-muted-foreground">
              APIs robustes, architectures cloud et systèmes de gestion de données performants.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Archive className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Dev-Ops</h3>
            <p className="text-center text-muted-foreground">
              Automatisation des déploiements, monitoring et gestion des infrastructures cloud.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Figma className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Design UI/UX</h3>
            <p className="text-center text-muted-foreground">
              Conception d'interfaces utilisateur intuitives et expériences, wireframes et prototypes interactifs.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Applications Mobiles</h3>
            <p className="text-center text-muted-foreground">
              Applications iOS et Android natives ou cross-platform pour tous vos besoins.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <SquareKanban className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Gestion de Projet</h3>
            <p className="text-center text-muted-foreground">
              Méthodologies agiles, suivi de projet et gestion de l'équipe de développement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

