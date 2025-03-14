import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transformez vos idées en expériences numériques
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Florent Detres est un développeur freelance passionné par la technologie et le développement informatique. 
                il a fondé The Studio Flow pour aider les entreprises à créer des solutions digitales innovantes et performantes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">
                  Discuter de votre projet <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">Découvrir nos services</Link>
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
  )
}

