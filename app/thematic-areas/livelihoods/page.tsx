import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function LivelihoodsPage() {
  const programs = [
    {
      title: "Skill Development Training",
      description: "Comprehensive training programs in various trades and vocational skills.",
      icon: "🛠️"
    },
    {
      title: "Microenterprise Development",
      description: "Supporting small business creation and growth through mentorship and resources.",
      icon: "🏪"
    },
    {
      title: "Financial Inclusion",
      description: "Connecting communities with financial services and literacy programs.",
      icon: "💰"
    },
    {
      title: "Agricultural Enhancement",
      description: "Improving farming techniques and connecting farmers to better markets.",
      icon: "🌾"
    },
    {
      title: "Women's Economic Empowerment",
      description: "Specialized programs to enhance women's participation in economic activities.",
      icon: "👩‍💼"
    },
    {
      title: "Youth Employment",
      description: "Creating opportunities and pathways for young people to enter the workforce.",
      icon: "👨‍🎓"
    }
  ]

  const impacts = [
    { number: "5,000+", label: "People Trained" },
    { number: "1,200+", label: "Businesses Created" },
    { number: "₹2.5Cr+", label: "Income Generated" },
    { number: "75%", label: "Success Rate" }
  ]

  // 5 images for Thematic Impact Highlights (replace with your own)
  const highlightImages = [
    "/q.jpg",
    "/m1.jpg",
    "/m2.jpg",
    "/m3.jpg",
    "/m4.jpg",
  ]

  const sectors = [
    { name: "Agriculture & Farming", percentage: 35, color: "bg-green-500" },
    { name: "Small Business & Trade", percentage: 25, color: "bg-blue-500" },
    { name: "Handicrafts & Artisan", percentage: 20, color: "bg-purple-500" },
    { name: "Technology & Services", percentage: 20, color: "bg-orange-500" }
  ]

  const sdgs = [
    { number: 1, title: "No Poverty", color: "bg-red-500", description: "Inclusive growth and income security." },
    { number: 2, title: "Zero Hunger", color: "bg-yellow-500", description: "Nutrition, food security, and agri-value chains." },
    { number: 5, title: "Gender Equality", color: "bg-pink-500", description: "Women's economic empowerment and agency." },
    { number: 8, title: "Decent Work & Growth", color: "bg-amber-600", description: "Jobs, skills, and microenterprise support." },
    { number: 10, title: "Reduced Inequalities", color: "bg-purple-600", description: "Opportunities for marginalized groups." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-green-900/90 to-green-700/90 text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/80">
          <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-600 opacity-20"></div>
          {/* 
          Uncomment and use this when you have an actual image:
          <Image
            src="/images/livelihoods-banner.jpg"
            alt="Livelihoods Development"
            fill
            className="object-cover"
            priority
          />
          */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-200 font-medium">Thematic Area</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Livelihoods Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
              Creating sustainable income opportunities and improving economic conditions for vulnerable populations through skill development and enterprise support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Our Programs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Success Stories
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
                Sustainable Economic Opportunities
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our livelihoods programs focus on creating pathways out of poverty by developing skills, supporting entrepreneurship, and connecting people with sustainable income opportunities.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We work across multiple sectors including agriculture, small business development, handicrafts, and emerging technology services to ensure diverse economic opportunities for all community members.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation-Driven</h3>
                    <p className="text-gray-600">Leveraging new technologies and market trends</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Market-Linked</h3>
                    <p className="text-gray-600">Connecting producers directly with buyers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="/q.jpg"
                  alt="Sustainable Economic Opportunities"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Livelihood Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to create sustainable economic opportunities across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Distribution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sector Focus Areas
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our livelihood interventions span across multiple sectors, ensuring diverse opportunities that match local resources and market demands.
              </p>
              <div className="space-y-6">
                {sectors.map((sector, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{sector.name}</span>
                      <span className="text-gray-600">{sector.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`${sector.color} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${sector.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600 font-medium">Sector Distribution Chart</p>
                  <p className="text-sm text-gray-500">Replace with actual chart/image</p>
                </div>
              </div>
            </div>
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
            {sdgs.map((g) => (
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

      {/* Impact Statistics */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Livelihood Impact
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Transforming lives through sustainable economic opportunities and skill development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{impact.number}</div>
                <div className="text-green-200 font-medium">{impact.label}</div>
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

      {/* Success Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories of transformation from our livelihood development programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  👩‍🌾
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya's Organic Farm</h3>
                  <p className="text-gray-600 mb-4">
                    "Through HAPEF's agricultural training, I transformed my small plot into a thriving organic farm. My income has increased by 300% in just two years."
                  </p>
                  <div className="text-sm text-green-600 font-medium">Agriculture Program Graduate</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Raj's Tech Services</h3>
                  <p className="text-gray-600 mb-4">
                    "The digital skills training helped me start my own computer repair business. Now I employ 5 other young people from my village."
                  </p>
                  <div className="text-sm text-green-600 font-medium">Technology Training Graduate</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Livelihood Development
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Join us in creating sustainable economic opportunities for vulnerable communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved/partner">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                Partner With Us
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Support Our Work
              </Button>
            </Link>
            <Link href="/thematic-areas">
              <Button size="lg" variant="ghost" className="text-white hover:bg-green-500">
                Back to Thematic Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}