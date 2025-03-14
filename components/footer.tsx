import Link from "next/link"
import { Layers } from "lucide-react"

export default function Footer() {
  return (
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
  )
}

