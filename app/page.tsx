import { Button } from "@/components/ui/button"
import { Shield, Lock, BarChart3, Share2, Github } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

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
      <div className="absolute bottom-4 left-4 text-amber-400/60 text-xs font-mono">
        <div>DNA SEQUENCES: PROTECTED</div>
        <div>PRIVACY: GUARANTEED</div>
      </div>
      <div className="absolute bottom-4 right-4 text-amber-400/60 text-xs font-mono">
        <div>GENOME ANALYSIS: READY</div>
        <div>SHARING: CONTROLLED</div>
      </div>

      <Header />

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-amber-400 mb-4 leading-tight font-mono tracking-wider">
              gencryption
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-2xl text-amber-300 mb-16 max-w-3xl mx-auto leading-relaxed font-mono tracking-wide">
            A PROTOCOL TO NAVIGATE YOUR DNA
          </p>

          <p className="text-lg text-amber-200/80 mb-16 max-w-2xl mx-auto leading-relaxed">
            Your genomic data is the most valuable information you possess. Secure and analyze it with the same technologies that protect trillions of dollars in cryptocurrency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black px-10 py-4 text-lg font-bold font-mono tracking-wide rounded-none border-2 border-amber-400 shadow-lg hover:shadow-amber-400/20 transition-all duration-200"
            >
              <Github className="w-5 h-5 mr-3" />
              CONTRIBUTE ON GITHUB
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-10 py-4 text-lg font-bold font-mono tracking-wide rounded-none transition-all duration-200 bg-transparent"
            >
              READ THE WHITEPAPER
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-amber-400/20">
            <p className="text-sm text-amber-400/60 mb-6 font-mono tracking-wide">
              TRUSTED BY GENETIC RESEARCHERS ACROSS THE WORLD
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

      {/* Protocol Section */}
      <section id="protocol" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 font-mono tracking-wider">
              PROTOCOL
            </h2>
            <p className="text-lg text-amber-200/80 max-w-2xl mx-auto font-mono tracking-wide">
              A set of tools that allow you to apply cutting-edge genomic analysis tools to your data without ever revealing anything to a third party.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-amber-400/5 border border-amber-400/20 rounded-lg backdrop-blur-sm hover:bg-amber-400/10 transition-all duration-200">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-amber-400 font-mono tracking-wide">SECURE VAULT</h3>
              <p className="text-amber-200/80 text-sm leading-relaxed">
                Military-grade encryption for your genomic data with zero-knowledge protocols
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-amber-400/5 border border-amber-400/20 rounded-lg backdrop-blur-sm hover:bg-amber-400/10 transition-all duration-200">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <BarChart3 className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-amber-400 font-mono tracking-wide">DNA ANALYSIS</h3>
              <p className="text-amber-200/80 text-sm leading-relaxed">
                Advanced algorithms for comprehensive genetic analysis and insights
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-amber-400/5 border border-amber-400/20 rounded-lg backdrop-blur-sm hover:bg-amber-400/10 transition-all duration-200">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Share2 className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-amber-400 font-mono tracking-wide">CONTROLLED ACCESS</h3>
              <p className="text-amber-200/80 text-sm leading-relaxed">
                Granular permissions and secure sharing protocols for your genetic data
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-amber-400/5 border border-amber-400/20 rounded-lg backdrop-blur-sm hover:bg-amber-400/10 transition-all duration-200">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Lock className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-amber-400 font-mono tracking-wide">QUANTUM ENCRYPTION</h3>
              <p className="text-amber-200/80 text-sm leading-relaxed">
                Future-proof encryption that withstands quantum computing threats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Placeholder for Security Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md h-80 bg-amber-400/10 border-2 border-dashed border-amber-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Lock className="w-16 h-16 text-amber-400/40 mx-auto mb-4" />
                  <p className="text-amber-400/60 font-mono tracking-wide">SECURITY VISUALIZATION</p>
                  <p className="text-amber-400/40 text-sm mt-2">Placeholder for security diagram</p>
                </div>
              </div>
            </div>

            {/* Security Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6 font-mono tracking-wider">
                SECURITY
              </h2>
              <p className="text-lg text-amber-200/80 leading-relaxed mb-8 font-mono tracking-wide">
                Gencryption relies on advances in homomorphic encryption, which allow you to share your encrypted data with a third party for analysis without allowing it to be decrypted.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="text-amber-300 font-mono tracking-wide">Zero-knowledge computation protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="text-amber-300 font-mono tracking-wide">Mathematical guarantees on data privacy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="text-amber-300 font-mono tracking-wide">Cryptographic proof of security</span>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-8 py-3 text-lg font-bold font-mono tracking-wide rounded-none transition-all duration-200 bg-transparent"
              >
                READ THE WHITEPAPER
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
