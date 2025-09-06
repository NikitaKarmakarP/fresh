import { Banner } from "@/components/banner"
import { Hero } from "@/components/hero"
import { AboutHapef } from "@/components/about-hapef"
import { Programs } from "@/components/programs"
import { Impact } from "@/components/impact"
import { WorkingAreas } from "@/components/working-areas"
import { Contact } from "@/components/contact"
import { FeaturedWork } from "@/components/featured-work"
import { ContactSection } from "@/components/contact-section"
import { OurPartners } from "@/components/our-partners"
import { DonorTestimonials } from "@/components/donor-testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Hero />
      <FeaturedWork />
      <AboutHapef />
      <Programs />
      <Impact />
      <OurPartners />
      <DonorTestimonials />
      <WorkingAreas />
      <Contact />
      <ContactSection />
    </main>
  )
}
