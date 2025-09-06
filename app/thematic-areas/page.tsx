import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThematicAreasPage() {
  const thematicAreas = [
    {
      title: "Empowering Communities",
      description: "Building capacity and strengthening local communities through participatory development approaches.",
      icon: "🤝",
      color: "bg-blue-100 text-blue-800",
      href: "/thematic-areas/empowering-communities"
    },
    {
      title: "Livelihoods",
      description: "Creating sustainable income opportunities and improving economic conditions for vulnerable populations.",
      icon: "💼",
      color: "bg-green-100 text-green-800",
      href: "/thematic-areas/livelihoods"
    },
    {
      title: "Environment Sustainability & Disaster Management",
      description: "Promoting environmental conservation and building resilience against natural disasters.",
      icon: "🌱",
      color: "bg-emerald-100 text-emerald-800",
      href: "/thematic-areas/environment-sustainability"
    },
    {
      title: "Enterprise & Marketing Linkages",
      description: "Connecting local enterprises with markets and building sustainable business networks.",
      icon: "🔗",
      color: "bg-purple-100 text-purple-800",
      href: "/thematic-areas/enterprise-marketing"
    },
    {
      title: "Strategic Partnerships",
      description: "Building collaborative relationships with stakeholders for greater development impact.",
      icon: "🤝",
      color: "bg-orange-100 text-orange-800",
      href: "/thematic-areas/strategic-partnerships"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thematic Areas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Our comprehensive approach to development focuses on key thematic areas that address the most pressing challenges in our communities.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-lg">Integrated Development Approach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              HAPEF's work is organized around five key thematic areas that form the foundation of our development interventions. Each area is designed to address specific challenges while contributing to overall community development.
            </p>
          </div>
        </div>
      </section>

      {/* Thematic Areas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {thematicAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${area.color} flex items-center justify-center text-2xl mb-4`}>
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link href={area.href}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Integrated Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our thematic areas work together synergistically to create comprehensive solutions. We believe that sustainable development requires addressing multiple dimensions of community needs simultaneously.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Targeted Impact</h3>
                <p className="text-gray-600">Focused interventions in each thematic area for maximum effectiveness.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🔄
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Synergistic Effects</h3>
                <p className="text-gray-600">Cross-cutting approaches that amplify impact across all areas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  📈
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Growth</h3>
                <p className="text-gray-600">Long-term development that builds on interconnected strengths.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Us
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to create sustainable development across all thematic areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Involved
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}