import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"


export default function EmpoweringCommunitiesPage() {
  const initiatives = [
    {
      title: "Community Leadership Development",
      description: "Training local leaders to drive sustainable development in their communities.",
      icon: "👥"
    },
    {
      title: "Participatory Planning",
      description: "Involving communities in planning and decision-making processes for their development.",
      icon: "📋"
    },
    {
      title: "Capacity Building Programs",
      description: "Strengthening skills and knowledge of community members across various sectors.",
      icon: "🎓"
    },
    {
      title: "Social Mobilization",
      description: "Organizing communities to collectively address their challenges and opportunities.",
      icon: "🤝"
    }
  ]

  const impacts = [
    { number: "150+", label: "Communities Empowered" },
    { number: "2,500+", label: "Leaders Trained" },
    { number: "50+", label: "Community Organizations Formed" },
    { number: "85%", label: "Sustainability Rate" }
  ]

  // 5 images for Thematic Impact Highlights (replace with your own)
  const highlightImages = [
    "/sta.jpg",
    "/q.jpg",
    "/en.jpg",
    "/map.jpg",
    "/our.jpg",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-blue-900/90 to-blue-700/90 text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80">
          {/* You can replace this div with an actual Image component when you have the image */}
          <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-600 opacity-20"></div>
          {/* 
          Uncomment and use this when you have an actual image:
          <Image
            src="/images/empowering-communities-banner.jpg"
            alt="Empowering Communities"
            fill
            className="object-cover"
            priority
          />
          */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-200 font-medium">Thematic Area</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse">
                Empowering
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                Rural Communities
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Building capacity and strengthening local communities through participatory development approaches that put people at the center of change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Our Approach
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Impact
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
                Our Community-Centered Approach
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that sustainable development happens when communities are empowered to lead their own transformation. Our approach focuses on building local capacity, fostering leadership, and creating systems that ensure long-term sustainability.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through participatory methodologies and inclusive practices, we work alongside communities to identify their priorities, develop solutions, and implement programs that address their most pressing needs.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Community-Led Development</h3>
                  <p className="text-gray-600">Putting communities in the driver's seat of their own development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sta.jpg"
                alt="Community Empowerment"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>



      {/* Key Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to community empowerment encompasses multiple interconnected initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {initiative.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {initiative.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {initiative.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Measurable results from our community empowerment initiatives across the region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{impact.number}</div>
                <div className="text-blue-200 font-medium">{impact.label}</div>
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

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Methodology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven approach that ensures sustainable community development and lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                🔍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Planning</h3>
              <p className="text-gray-600">
                Comprehensive community assessments and participatory planning to identify priorities and develop action plans.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Collaborative implementation with strong community ownership and continuous capacity building throughout the process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                📊
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitoring & Sustainability</h3>
              <p className="text-gray-600">
                Ongoing monitoring, evaluation, and handover processes to ensure long-term sustainability and community ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community Empowerment Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Partner with us to empower more communities and create lasting positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved/partner">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Partner With Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Us
              </Button>
            </Link>
            <Link href="/thematic-areas">
              <Button size="lg" variant="ghost" className="text-white hover:bg-blue-500">
                Back to Thematic Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}