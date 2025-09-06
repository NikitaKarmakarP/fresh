import { AboutHero } from "@/components/about/about-hero"
import { Leadership } from "@/components/about/leadership"
import { Timeline } from "@/components/about/timeline"
import { Recognition } from "@/components/about/recognition"
import { ContactSection } from "@/components/contact-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Subtle background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-yellow-100/20 to-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content sections */}
      <div className="relative z-10">
        <AboutHero />
        
        <Timeline />
        <Leadership />
        <Recognition />
        <ContactSection />
      </div>
    </main>
  )
}
