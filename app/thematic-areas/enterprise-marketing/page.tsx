import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import SDGSection from "@/components/sdg-section"

export default function EnterpriseMarketingPage() {
  const services = [
    {
      title: "Market Linkage Development",
      description: "Connecting producers directly with buyers and establishing sustainable market relationships.",
      icon: "🔗"
    },
    {
      title: "Business Development Support",
      description: "Comprehensive business planning, mentoring, and growth strategy development.",
      icon: "📈"
    },
    {
      title: "Digital Marketing Training",
      description: "Building digital presence and online marketing capabilities for rural enterprises.",
      icon: "💻"
    },
    {
      title: "Supply Chain Optimization",
      description: "Streamlining supply chains to reduce costs and improve market access.",
      icon: "🚚"
    },
    {
      title: "Quality Certification Support",
      description: "Helping enterprises achieve quality standards and certifications for better market access.",
      icon: "🏆"
    },
    {
      title: "Financial Linkages",
      description: "Connecting enterprises with appropriate financial institutions and investment opportunities.",
      icon: "💰"
    }
  ]

  const impacts = [
    { number: "800+", label: "Enterprises Supported" },
    { number: "₹5Cr+", label: "Revenue Generated" },
    { number: "150+", label: "Market Linkages Created" },
    { number: "90%", label: "Business Sustainability Rate" }
  ]

  // 5 images for Thematic Impact Highlights (replace with your own)
  const highlightImages = [
    "/ent.jpg",
    "/b2.jpg",
    "/b3.jpg",
    "/b4.jpg",
    "/b5.jpg",
  ]

  const marketChannels = [
    { name: "Direct Sales", percentage: 40, color: "bg-purple-500" },
    { name: "Online Platforms", percentage: 25, color: "bg-blue-500" },
    { name: "Retail Partnerships", percentage: 20, color: "bg-green-500" },
    { name: "Export Markets", percentage: 15, color: "bg-orange-500" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-purple-900/90 to-purple-700/90 text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/80">
          <div className="w-full h-full bg-gradient-to-br from-purple-800 to-purple-600 opacity-20"></div>
          {/* 
          Uncomment and use this when you have an actual image:
          <Image
            src="/images/enterprise-marketing-banner.jpg"
            alt="Enterprise & Marketing Linkages"
            fill
            className="object-cover"
            priority
          />
          */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
              <span className="text-purple-200 font-medium">Thematic Area</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Enterprise & Marketing Linkages
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
              Connecting local enterprises with markets and building sustainable business networks that drive economic growth and community prosperity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Our Services
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Market Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bridging Markets & Enterprises
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our enterprise and marketing linkage programs focus on creating sustainable connections between local producers and markets, enabling rural enterprises to access broader opportunities and achieve sustainable growth.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide comprehensive support from business development to market access, helping enterprises build capacity, improve quality, and establish lasting relationships with buyers and distributors.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Market-Driven Approach</h3>
                    <p className="text-gray-600">Demand-driven solutions that meet market requirements</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Partnership Building</h3>
                    <p className="text-gray-600">Creating lasting relationships between stakeholders</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/ent.jpg"
                  alt="Bridging Markets & Enterprises"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Enterprise Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services to help enterprises grow and access new markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Channels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Market Channel Distribution
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our enterprises access markets through diverse channels, ensuring resilience and maximizing opportunities for growth and sustainability.
              </p>
              <div className="space-y-6">
                {marketChannels.map((channel, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{channel.name}</span>
                      <span className="text-gray-600">{channel.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`${channel.color} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${channel.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600 font-medium">Market Distribution Chart</p>
                  <p className="text-sm text-gray-500">Replace with actual chart/image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise Impact
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Measurable results from our enterprise development and marketing linkage programs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{impact.number}</div>
                <div className="text-purple-200 font-medium">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thematic Impact Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thematic Impact Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse of on-ground impact through recent thematic activities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {highlightImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-sm group">
                <Image
                  src={src}
                  alt={`Impact highlight ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Development Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sustainable Development Goals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our livelihoods initiatives advance these priority SDGs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { number: 1, title: "No Poverty", color: "bg-red-500", description: "Inclusive growth and income security." },
              { number: 2, title: "Zero Hunger", color: "bg-yellow-500", description: "Nutrition, food security, and agri-value chains." },
              { number: 5, title: "Gender Equality", color: "bg-pink-500", description: "Women's economic empowerment and agency." },
              { number: 8, title: "Decent Work & Growth", color: "bg-amber-600", description: "Jobs, skills, and microenterprise support." },
              { number: 10, title: "Reduced Inequalities", color: "bg-purple-600", description: "Opportunities for marginalized groups." },
            ].map((g) => (
              <div key={g.number} className="rounded-xl border border-gray-200 shadow-sm p-6 text-center bg-white">
                <div className={`w-14 h-14 ${g.color} text-white rounded-lg flex items-center justify-center mx-auto font-bold text-2xl mb-4`}>
                  {g.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{g.title}</h3>
                <p className="text-sm text-gray-600">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Chain Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Value Chain Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work across the entire value chain to ensure enterprises can compete effectively in the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                🌱
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Production</h3>
              <p className="text-gray-600">
                Quality improvement, standardization, and efficient production processes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                📦
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Processing</h3>
              <p className="text-gray-600">
                Value addition, packaging, and branding to increase market appeal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                🚚
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Distribution</h3>
              <p className="text-gray-600">
                Efficient logistics and distribution networks for market reach.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                🛒
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing</h3>
              <p className="text-gray-600">
                Brand building, customer engagement, and market expansion strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real transformations from our enterprise development and marketing programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                  🏪
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Artisan Collective Growth</h3>
                  <p className="text-gray-600 mb-4">
                    "HAPEF helped our handicraft collective access online markets. Our sales increased by 400% and we now export to 5 countries."
                  </p>
                  <div className="text-sm text-purple-600 font-medium">Handicraft Collective Leader</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                  🌾
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Farmer Producer Organization</h3>
                  <p className="text-gray-600 mb-4">
                    "Through market linkage support, our FPO now supplies directly to supermarket chains, eliminating middlemen and increasing farmer income by 60%."
                  </p>
                  <div className="text-sm text-purple-600 font-medium">FPO Chairman</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Grow Your Enterprise With Us
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Partner with us to access new markets and scale your business sustainably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved/partner">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
                Partner With Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Get Support
              </Button>
            </Link>
            <Link href="/thematic-areas">
              <Button size="lg" variant="ghost" className="text-white hover:bg-purple-500">
                Back to Thematic Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}