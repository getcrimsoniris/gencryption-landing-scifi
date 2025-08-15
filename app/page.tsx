import { Button } from "@/components/ui/button"
import { Shield, Lock, BarChart3, Share2, Download, Dna } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 191, 0, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 40% 70%, rgba(255, 191, 0, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 90% 80%, rgba(255, 140, 0, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 10% 90%, rgba(255, 191, 0, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 60% 10%, rgba(255, 140, 0, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px, 150px 150px, 200px 200px, 120px 120px, 180px 180px, 90px 90px",
          }}
        />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255, 191, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 191, 0, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Technical Readouts */}
      <div className="absolute top-4 left-4 text-amber-400/60 text-xs font-mono">
        <div>GENCRYPT-1.0</div>
        <div>STATUS: ACTIVE</div>
      </div>
      <div className="absolute top-4 right-4 text-amber-400/60 text-xs font-mono">
        <div>SECURITY: MAX</div>
        <div>ENCRYPTION: AES-256</div>
      </div>
      <div className="absolute bottom-4 left-4 text-amber-400/60 text-xs font-mono">
        <div>DNA SEQUENCES: PROTECTED</div>
        <div>PRIVACY: GUARANTEED</div>
      </div>
      <div className="absolute bottom-4 right-4 text-amber-400/60 text-xs font-mono">
        <div>GENOME ANALYSIS: READY</div>
        <div>SHARING: CONTROLLED</div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 transform rotate-45 flex items-center justify-center">
              <Dna className="w-5 h-5 text-black transform -rotate-45" />
            </div>
            <span className="text-2xl font-bold text-amber-400 font-mono tracking-wider">gencryption</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-amber-300/80 hover:text-amber-300 transition-colors font-mono">
              FEATURES
            </a>
            <a href="#security" className="text-amber-300/80 hover:text-amber-300 transition-colors font-mono">
              SECURITY
            </a>
            <a href="#pricing" className="text-amber-300/80 hover:text-amber-300 transition-colors font-mono">
              PRICING
            </a>
            <Button
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400/10 bg-transparent font-mono"
            >
              ACCESS
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-12 mb-20">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <span className="text-sm text-amber-300 font-mono tracking-wide">SECURE VAULT</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <BarChart3 className="w-8 h-8 text-amber-400" />
              </div>
              <span className="text-sm text-amber-300 font-mono tracking-wide">DNA ANALYSIS</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Share2 className="w-8 h-8 text-amber-400" />
              </div>
              <span className="text-sm text-amber-300 font-mono tracking-wide">CONTROLLED ACCESS</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Lock className="w-8 h-8 text-amber-400" />
              </div>
              <span className="text-sm text-amber-300 font-mono tracking-wide">QUANTUM ENCRYPTION</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <div className="text-amber-400 font-mono text-lg mb-4 tracking-widest">MISSION PROTOCOL:</div>
            <h1 className="text-6xl md:text-7xl font-bold text-amber-400 mb-4 leading-tight font-mono tracking-wider">
              gencryption
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-2xl text-amber-300 mb-16 max-w-3xl mx-auto leading-relaxed font-mono tracking-wide">
            NAVIGATE THE CODE OF LIFE
          </p>

          <p className="text-lg text-amber-200/80 mb-16 max-w-2xl mx-auto leading-relaxed">
            Your genomic data is the most valuable information you possess. Secure it with military-grade encryption,
            analyze it with advanced algorithms, and control who accesses your genetic blueprint.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black px-10 py-4 text-lg font-bold font-mono tracking-wide rounded-none border-2 border-amber-400 shadow-lg hover:shadow-amber-400/20 transition-all duration-200"
            >
              <Download className="w-5 h-5 mr-3" />
              DOWNLOAD PROTOCOL
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-10 py-4 text-lg font-bold font-mono tracking-wide rounded-none transition-all duration-200 bg-transparent"
            >
              MISSION BRIEFING
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-amber-400/20">
            <p className="text-sm text-amber-400/60 mb-6 font-mono tracking-wide">
              TRUSTED BY GENETIC RESEARCHERS ACROSS THE GALAXY
            </p>
            <div className="flex justify-center items-center space-x-12 text-amber-300/60">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-mono tracking-wide">ZERO-KNOWLEDGE PROTOCOL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5" />
                <span className="text-sm font-mono tracking-wide">QUANTUM-RESISTANT ENCRYPTION</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-mono tracking-wide">OPEN SOURCE VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
