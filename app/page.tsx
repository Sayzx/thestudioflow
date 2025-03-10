import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Globe, Layers, Smartphone, Archive, Figma, SquareKanban  } from 'lucide-react'
import { Check, Plus } from 'lucide-react'
import { Monitor } from 'lucide-react'
import { Layout } from 'lucide-react'




export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <title>The Studio Flow</title>
      <meta name="description" content="The Studio Flow est une agence de développement web spécialisée dans la création de solutions digitales sur mesure." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22><text y=%2222%22 font-size=%2222%22>🚀</text></svg>" />
      <meta property="og:title" content="The Studio Flow" />
      <meta property="og:description" content="The Studio Flow est une agence de développement web spécialisée dans la création de solutions digitales sur mesure." />
      <meta property="og:image" content="https://www.workflow.fr/images/og-image.png"></meta>
      <meta property="og:url" content="https://www.thestudioflow.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Layers className="h-6 w-6" />
            <span>The Studio Flow</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              À propos
            </Link>
            <Link href="#work" className="text-sm font-medium hover:text-primary">
              Projets
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Témoignages
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">
              Démarrer un projet
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transformez vos idées en expériences numériques
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The Studio Flow est une agence de développement web spécialisée dans la création de solutions digitales sur mesure.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">
                      Discuter de votre projet <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">
                      Découvrir nos services
                    </Link>
                  </Button>
                </div>
              </div>
              <img
                src="/image.png?height=550&width=550"
                width={550}
                height={550}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>
        
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
        
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    À propos de nous
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Une équipe passionnée par la technologie
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The Studio Flow est né de la passion pour le développement et la création d'expériences numériques exceptionnelles.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Notre équipe d'experts combine créativité et expertise technique pour transformer vos idées en solutions digitales innovantes. Nous croyons que chaque projet mérite une approche personnalisée et une attention particulière aux détails.
                  </p>
                  <p className="text-muted-foreground">
                    Avec des années d'expérience dans le développement web, backend et mobile, nous sommes fiers de notre capacité à livrer des projets de haute qualité qui répondent aux besoins spécifiques de nos clients.
                  </p>
                </div>
                <div>
                  <Button asChild>
                    <Link href="#contact">
                      Rencontrer l'équipe
                    </Link>
                  </Button>
                </div>
              </div>
              <img
                src="/image2.png?height=550&width=550"
                width={550}
                height={550}
                alt="L'équipe The Studio Flow"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>
        
        <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Nos Projets
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Découvrez nos réalisations</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Une sélection de projets qui illustrent notre expertise et notre créativité.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Projet E-commerce"
                  className="aspect-video w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">Plateforme E-commerce</h3>
                  <p className="text-white/80">Next.js, Tailwind, Stripe</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Application Mobile"
                  className="aspect-video w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">Application Mobile</h3>
                  <p className="text-white/80">React Native, Firebase</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Dashboard Analytics"
                  className="aspect-video w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">Dashboard Analytics</h3>
                  <p className="text-white/80">Vue.js, Node.js, MongoDB</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="#contact">
                  Voir tous les projets
                </Link>
              </Button>
            </div>
          </div>
        </section>


        <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
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

        
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Témoignages
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ce que disent nos clients</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Découvrez les expériences de ceux qui nous ont fait confiance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The Studio Flow a transformé notre vision en une réalité numérique exceptionnelle. Leur expertise technique et leur créativité ont dépassé nos attentes."
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Sophie Martin</p>
                    <p className="text-sm text-muted-foreground">Directrice Marketing, Ynpasnov</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "Une équipe professionnelle et réactive qui a su comprendre nos besoins et livrer un produit de qualité dans les délais impartis."
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Thomas Dubois</p>
                    <p className="text-sm text-muted-foreground">Fondateur, Expluno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact
                </div>
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
                      <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Prénom
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Prénom"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Nom
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Nom"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="email@exemple.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Layers className="h-6 w-6" />
            <span>The Studio Flow</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Studio Flow. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Mentions légales
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}