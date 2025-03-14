import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WorkSection() {
  return (
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
            <Link href="#contact">Voir tous les projets</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

