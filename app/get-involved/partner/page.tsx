import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Collaborate with us for greater impact and sustainable development.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-lg">Collaborate for greater impact</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Partnership Opportunities
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            This page is under construction. Please check back soon for partnership opportunities.
          </p>
          <Link href="/get-involved">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Back to Get Involved
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}