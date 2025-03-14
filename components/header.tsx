import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Layers } from "lucide-react"

export default function Header() {
  return (
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
          <Link href="#contact">Démarrer un projet</Link>
        </Button>
      </div>
    </header>
  )
}

