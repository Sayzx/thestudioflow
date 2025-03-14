import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">À propos de nous</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Une équipe passionnée par la technologie
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Florent est passionné par la technologie et le développement informatique. Il a fondé The Studio Flow pour aider
                les entreprises à créer des solutions digitales innovantes et performantes.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Notre équipe d'experts combine créativité et expertise technique pour transformer vos idées en solutions
                digitales innovantes. Nous croyons que chaque projet mérite une approche personnalisée et une attention
                particulière aux détails.
              </p>
              <p className="text-muted-foreground">
                Avec des années d'expérience dans le développement web, backend et mobile, nous sommes fiers de notre
                capacité à livrer des projets de haute qualité qui répondent aux besoins spécifiques de nos clients.
              </p>
            </div>
            <div>
              <Button asChild>
                <Link href="#contact">Rencontrer l'équipe</Link>
              </Button>
            </div>
          </div>
          <img
            src="/image2.png?height=550&width=550"
            width={550}
            height={550}
            alt="Florent"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
          />
        </div>
      </div>
    </section>
  )
}

