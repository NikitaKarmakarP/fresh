import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FundraisingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fundraising Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Organize events to support our cause and raise awareness in your community.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-orange-400 rounded-full mr-3"></div>
              <span className="text-lg">Organize events to support our cause</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Fundraising Opportunities
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            This page is under construction. Please check back soon for fundraising event opportunities.
          </p>
          <Link href="/get-involved">
            <Button className="bg-orange-600 hover:bg-orange-700">
              Back to Get Involved
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}