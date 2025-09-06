import { AnnualReportsHero } from "@/components/knowledge-hub/annual-reports/annual-reports-hero"
import { AnnualReportsList } from "@/components/knowledge-hub/annual-reports/annual-reports-list"
import { AnnualReportsSidebar } from "@/components/knowledge-hub/annual-reports/annual-reports-sidebar"
import { ContactSection } from "@/components/contact-section"

export default function AnnualReportsPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnualReportsHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnnualReportsList />
          </div>
          <div className="lg:col-span-1">
            <AnnualReportsSidebar />
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}