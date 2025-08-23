import { Button } from "@/components/ui/button"
import { Shield, Lock, Dna, Github } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link"

export default function GencryptionManifestoPage() {
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

      {/* Blog Post */}
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 font-mono tracking-wide transition-colors mb-8"
          >
            <span className="mr-2">←</span>
            BACK TO BLOG
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6 font-mono tracking-wider">
              Gencryption Manifesto
            </h1>
            <div className="flex items-center space-x-4 text-amber-400/60 font-mono mb-6">
              <span>By Gencryption Team</span>
              <span>•</span>
              <span>January 15, 2024</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <p className="text-2xl text-amber-300 font-mono tracking-wide">
              Gencryption = Privacy-first + Genomic Insights
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none text-amber-200/80">
            <div className="space-y-8">
              {/* Design Principles */}
              <div>
                <h2 className="text-2xl font-bold text-amber-400 mb-6 font-mono tracking-wider">
                  We ensure your privacy by three design principles:
                </h2>
                <ul className="space-y-4 ml-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">No data leaves your device unencrypted.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Your private key never leaves your device. Thus, your data can not be decrypted outside of your device.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Full transparency. All our code is open source. Any user can audit our software and judge its safety by themselves.</span>
                  </li>
                </ul>
              </div>

              {/* Three Modes */}
              <div>
                <h2 className="text-2xl font-bold text-amber-400 mb-6 font-mono tracking-wider">
                  Three Modes of Engagement
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🎮</span>
                    <div>
                      <span className="font-semibold text-amber-300 text-lg">Singleplayer</span>
                      <span className="text-amber-200/80"> – Explore your DNA locally using our desktop app.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🎮🎮🎮</span>
                    <div>
                      <span className="font-semibold text-amber-300 text-lg">Multiplayer</span>
                      <span className="text-amber-200/80"> – Get better insights on your DNA from shared insights from DNA of other users.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🔬</span>
                    <div>
                      <span className="font-semibold text-amber-300 text-lg">Research</span>
                      <span className="text-amber-200/80"> – Publish your research code as an open source repository and bring data owners to your project.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Modes */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4 font-mono tracking-wide">1. Singleplayer</h3>
                  <p className="leading-relaxed">Download our desktop app here and enjoy local, private analysis.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4 font-mono tracking-wide">2. Multiplayer</h3>
                  <p className="leading-relaxed">Get better insights on your DNA from shared insights from DNA of other users. Each analysis protocol is open source. Users and independent researchers can judge security and validity of genomic computations and decide for themselves.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4 font-mono tracking-wide">3. Research</h3>
                  <p className="leading-relaxed">Publish your research code as an open source repository. Ask data contributors to securely upload their encrypted data. Do your analysis. Share with research community.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-amber-400/20">
                <p className="text-amber-300 font-semibold text-lg text-center">All code and analysis is transparent and verifiable.</p>
              </div>

              {/* How It Works */}
              <div>
                <h2 className="text-2xl font-bold text-amber-400 mb-6 font-mono tracking-wider">
                  How You Do Collaborative Analysis While Keeping Your Data Private?
                </h2>
                <p className="leading-relaxed text-lg">We use the revolutionary cryptographic technology called <span className="text-amber-300 font-semibold">Homomorphic Encryption</span>. It allows us to perform computations on encrypted data without decrypting it.</p>
              </div>
            </div>
          </article>

          {/* Share/Actions */}
          <div className="mt-16 pt-8 border-t border-amber-400/20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-8 py-3 text-lg font-bold font-mono tracking-wide rounded-none transition-all duration-200 bg-transparent"
              >
                <Github className="w-5 h-5 mr-3" />
                CONTRIBUTE ON GITHUB
              </Button>
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
      </main>
      
      <Footer />
    </div>
  )
}
