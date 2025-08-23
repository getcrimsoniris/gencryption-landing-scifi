import { Button } from "@/components/ui/button"
import { Dna } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 transform rotate-45 flex items-center justify-center">
              <Dna className="w-5 h-5 text-black transform -rotate-45" />
            </div>
            <span className="text-2xl font-bold text-amber-400 font-mono tracking-wider">gencryption</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#protocol" className="text-amber-300/80 hover:text-amber-300 transition-colors font-mono">
            PROTOCOL
          </Link>
          <Link href="/#security" className="text-amber-300/80 hover:text-amber-300 transition-colors font-mono">
            SECURITY
          </Link>
          <Link href="/blog" className="text-amber-300/80 hover:text-amber-300 transition-colors font-mono">
            BLOG
          </Link>
          <Link href="/researchers" className="text-amber-300/80 hover:text-amber-300 transition-colors font-mono">
            RESEARCHERS
          </Link>
          <Button
            variant="outline"
            className="border-amber-400 text-amber-400 hover:bg-amber-400/10 bg-transparent font-mono"
          >
            BUY $GENCRYPT
          </Button>
        </nav>
      </div>
    </header>
  )
}
