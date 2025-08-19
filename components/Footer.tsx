import { Github, Twitter, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-amber-400/20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 transform rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-black transform -rotate-45"></div>
            </div>
            <span className="text-lg font-bold text-amber-400 font-mono tracking-wider">gencryption</span>
          </div>
          
          {/* Copyright */}
          <div className="text-amber-400/60 text-sm font-mono tracking-wide">
            © 2024 gencryption. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/barisozmen/securegenomics" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400/60 hover:text-amber-400 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/gencryptionxyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400/60 hover:text-amber-400 transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://discord.gg/PecDpN3e" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400/60 hover:text-amber-400 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-amber-400/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-amber-400/40 text-xs font-mono tracking-wide">
              SECURE GENOMIC ANALYSIS • ZERO-KNOWLEDGE PROTOCOLS • OPEN SOURCE
            </div>
            <div className="text-amber-400/40 text-xs font-mono tracking-wide">
              STATUS: ACTIVE • ENCRYPTION: AES-256
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


