export default function TestimonialsSection() {
    return (
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Témoignages</div>
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
                  "Florent a transformé notre vision en une réalité numérique exceptionnelle. Leur expertise
                  technique et leur créativité ont dépassé nos attentes."
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
                  "Une équipe professionnelle et réactive qui a su comprendre nos besoins et livrer un produit de qualité
                  dans les délais impartis."
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
    )
  }
  
  