import { Button } from "@/components/ui/button"
import { Shield, Lock, Dna, Github } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function GencryptPage() {
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
      <div className="absolute bottom-4 left-4 text-amber-400/60 text-xs font-mono">
        <div>TOKEN: GENCRYPT</div>
        <div>CHAIN: SOLANA</div>
      </div>
      <div className="absolute bottom-4 right-4 text-amber-400/60 text-xs font-mono">
        <div>STATUS: LAUNCHING SOON</div>
        <div>NETWORK: MAINNET</div>
      </div>

      <Header />

      {/* Main Content */}
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-amber-400 mb-4 leading-tight font-mono tracking-wider">
              Nearly ready to launch
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-2xl text-amber-300 mb-16 max-w-3xl mx-auto leading-relaxed font-mono tracking-wide">
            $GENCRYPT will be available on the Solana chain shortly
          </p>

          {/* Additional Info */}
          <div className="space-y-8 mb-20">
            <div className="bg-amber-400/5 border border-amber-400/20 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-amber-400 mb-6 font-mono tracking-wider">
                TOKEN UTILITY
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-amber-200/80">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-300 mb-2">Staking</h3>
                  <p className="text-sm">Earn rewards by contributing to the network</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Dna className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-300 mb-2">Access</h3>
                  <p className="text-sm">Premium features and early access to tools</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black px-10 py-4 text-lg font-bold font-mono tracking-wide rounded-none border-2 border-amber-400 shadow-lg hover:shadow-amber-400/20 transition-all duration-200"
            >
              <Github className="w-5 h-5 mr-3" />
              JOIN WAITLIST
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-10 py-4 text-lg font-bold font-mono tracking-wide rounded-none transition-all duration-200 bg-transparent"
            >
              READ WHITEPAPER
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-amber-400/20">
            <p className="text-sm text-amber-400/60 mb-6 font-mono tracking-wide">
              BUILT ON SOLANA • FAST • SCALABLE • SECURE
            </p>
            <div className="flex justify-center items-center space-x-12 text-amber-300/60">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-mono tracking-wide">SOLANA MAINNET</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-mono tracking-wide">AUDITED SMART CONTRACTS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5" />
                <span className="text-sm font-mono tracking-wide">SECURE WALLET INTEGRATION</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
