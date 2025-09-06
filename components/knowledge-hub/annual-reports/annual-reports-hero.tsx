import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, ShieldCheck, BarChart3, Users, Download, ArrowRight, Sparkle } from "lucide-react"

export function AnnualReportsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(900px_400px_at_10%_10%,#000,transparent)]">
        <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-purple-300 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text and CTAs */}
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 mb-4">
              <FileText className="h-3.5 w-3.5 mr-1.5" /> Official Publications
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Annual Reports
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Yearly impact and financial summaries showcasing our work, outcomes, and audited statements.
            </p>

            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                <ShieldCheck className="h-3.5 w-3.5" /> Audited Financials
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                <BarChart3 className="h-3.5 w-3.5" /> Impact Metrics
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                <Users className="h-3.5 w-3.5" /> Community Outcomes
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="#reports">
                  Browse reports
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="bg-transparent" asChild>
                <a href="#">
                  <Download className="mr-2 h-4 w-4" /> Download latest PDF
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#report-2022-2023">View archive</a>
              </Button>
            </div>
          </div>

          {/* Right: Highlight card */}
          <div className="md:justify-self-end w-full">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-600/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Latest available</p>
                  <p className="font-semibold text-gray-900">Annual Report 2024-2025</p>
                </div>
              </div>

              {/* Mini metrics */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-blue-50 p-3 text-center">
                  <div className="text-xs text-blue-700 font-medium">Lives</div>
                  <div className="text-lg font-bold text-blue-700">12,500+</div>
                </div>
                <div className="rounded-lg bg-green-50 p-3 text-center">
                  <div className="text-xs text-green-700 font-medium">Programs</div>
                  <div className="text-lg font-bold text-green-700">18</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-3 text-center">
                  <div className="text-xs text-purple-700 font-medium">Districts</div>
                  <div className="text-lg font-bold text-purple-700">4</div>
                </div>
              </div>

              {/* Quick jump */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "2024-2025", href: "#report-2024-2025" },
                  { label: "2023-2024", href: "#report-2023-2024" },
                  { label: "2022-2023", href: "#report-2022-2023" },
                ].map((y) => (
                  <a
                    key={y.label}
                    href={y.href}
                    className="rounded-full border px-3 py-1 text-xs text-gray-700 hover:bg-gray-50"
                  >
                    {y.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}