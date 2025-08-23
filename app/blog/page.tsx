import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link"

export default function BlogPage() {
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

      {/* Blog Section */}
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 font-mono tracking-wider">
              BLOG
            </h1>
            <p className="text-lg text-amber-200/80 max-w-2xl mx-auto font-mono tracking-wide">
              Insights, updates, and the future of genomic privacy
            </p>
          </div>

          {/* Blog Post Snippet */}
          <article className="bg-amber-400/5 border border-amber-400/20 rounded-lg p-8 backdrop-blur-sm hover:bg-amber-400/10 transition-all duration-200">
            <header className="mb-6">
              <Link href="/blog/gencryption-manifesto" className="block hover:opacity-80 transition-opacity">
                <h2 className="text-3xl font-bold text-amber-400 mb-4 font-mono tracking-wider hover:text-amber-300 transition-colors">
                  Gencryption Manifesto
                </h2>
              </Link>
              <div className="flex items-center space-x-4 text-sm text-amber-400/60 font-mono mb-4">
                <span>By Gencryption Team</span>
                <span>•</span>
                <span>January 15, 2024</span>
              </div>
              <p className="text-xl text-amber-300 font-mono tracking-wide">
                Gencryption = Privacy-first + Genomic Insights
              </p>
            </header>

            <div className="text-amber-200/80 mb-6">
              <p className="leading-relaxed mb-4">
                We ensure your privacy by three design principles: No data leaves your device unencrypted, your private key never leaves your device, and full transparency through open source code.
              </p>
              <p className="leading-relaxed">
                Discover our three modes of engagement: Singleplayer for local DNA exploration, Multiplayer for shared insights, and Research for collaborative analysis...
              </p>
            </div>

            <Link 
              href="/blog/gencryption-manifesto"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 font-mono tracking-wide transition-colors"
            >
              READ FULL POST
              <span className="ml-2">→</span>
            </Link>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
