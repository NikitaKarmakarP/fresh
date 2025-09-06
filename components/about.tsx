"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Award, MapPin, Users, Heart, ArrowRight, Sparkles, Star, Leaf } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 animate-float-up">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-30 animate-spin-slow" />
        </div>
        <div className="absolute top-1/3 right-1/5 animate-bounce-gentle">
          <Star className="w-5 h-5 text-pink-400 opacity-30 animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float-up-delayed">
          <div className="w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-ping"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 animate-shimmer">
            <Award className="h-4 w-4 text-green-600 animate-pulse" />
            <span className="text-sm font-semibold text-green-800">About HAPEF</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 animate-gradient-x">
              Sustainable Future
            </span>
            for Rural India
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since our founding, HAPEF has been at the forefront of rural development, combining innovative agricultural
            practices with community empowerment to create lasting positive change across India.
          </p>
        </div>

        {/* Redesigned Our Journey of Impact Section */}
        <div className="relative mb-20 mx-8">
          <div
            className={`bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-[2.5rem] p-16 shadow-2xl border border-green-100/60 relative overflow-hidden transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            {/* Enhanced Background decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-200/40 to-emerald-200/40 rounded-bl-full blur-sm"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-300/30 to-emerald-300/30 rounded-tr-full blur-sm"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-lg"></div>
            
            {/* Floating decorative particles */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-green-400/60 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 right-32 w-3 h-3 bg-emerald-400/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-teal-400/70 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            
            {/* Years of Service Badge - Enhanced */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-green-100/80 hover:scale-110 transition-all duration-500 cursor-pointer group">
              <div className="text-center">
                <div className="text-3xl font-black text-green-600 group-hover:animate-bounce mb-1">2+</div>
                <div className="text-sm text-gray-600 font-semibold tracking-wide">Years of Service</div>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Enhanced Main Content */}
              <div className="mb-16">
                <div className="mb-8">
                  <h3 className="text-5xl font-black text-gray-900 mb-4 leading-tight">Our Journey of Impact</h3>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"></div>
                </div>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium max-w-4xl">
                  <p className="text-xl leading-8">
                    Founded with a vision to <span className="text-green-600 font-semibold">eradicate poverty</span> through sustainable development, HAPEF has evolved into a
                    leading force for rural transformation. Our innovative approach combines <span className="text-emerald-600 font-semibold">traditional agricultural wisdom</span>
                    with modern techniques, creating opportunities that honor both heritage and progress.
                  </p>
                  <p className="text-xl leading-8">
                    Operating primarily in <span className="text-green-600 font-semibold">Pakur district of Jharkhand</span>, with our headquarters in Kolkata, we've built strong
                    partnerships with government departments and community organizations. Our work has gained recognition
                    from <span className="text-emerald-600 font-semibold">ETV Bharat Jharkhand</span> and other media platforms, highlighting our commitment to transparency and
                    measurable impact.
                  </p>
                </div>
              </div>

              {/* Enhanced Icon Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {/* Based in Kolkata Card */}
                <div className="group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-green-100/60 hover:shadow-2xl hover:scale-110 hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 mb-6 shadow-lg">
                      <MapPin className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Based in Kolkata</h4>
                    <p className="text-gray-600 leading-relaxed font-medium">Registered NGO serving rural communities</p>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                {/* Community Focus Card */}
                <div className="group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-blue-100/60 hover:shadow-2xl hover:scale-110 hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 mb-6 shadow-lg">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Community Focus</h4>
                    <p className="text-gray-600 leading-relaxed font-medium">Empowering women and families</p>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                {/* Sustainable Development Card */}
                <div className="group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-emerald-100/60 hover:shadow-2xl hover:scale-110 hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="p-4 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 mb-6 shadow-lg">
                      <Leaf className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">Sustainable Growth</h4>
                    <p className="text-gray-600 leading-relaxed font-medium">Eco-friendly agricultural practices</p>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                {/* Innovation Card */}
                <div className="group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-purple-100/60 hover:shadow-2xl hover:scale-110 hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 mb-6 shadow-lg">
                      <Sparkles className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Innovation</h4>
                    <p className="text-gray-600 leading-relaxed font-medium">Modern techniques with tradition</p>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>

              {/* Enhanced Call to Action Button */}
              <div className="flex justify-start">
                <Link href="/about#our-story">
                  <Button className="group bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white px-12 py-6 text-xl font-bold transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-3xl rounded-3xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="flex items-center gap-4 relative z-10">
                      Learn Our Story
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

          <div
            className={`relative transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"}`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="/ses1.jpg"
                  alt="HAPEF team working with rural community members"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="/ses2.jpg"
                  alt="Agricultural training session with farmers"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6 pt-12">
                <img
                  src="/ses3.jpg"
                  alt="Women empowerment program in action"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="/ses4.jpg"
                  alt="Sustainable farming practices demonstration"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-green-100 animate-float-card hover:scale-110 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 group-hover:animate-bounce">2+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values with Enhanced Animations */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To eradicate poverty through sustainable agricultural practices, community empowerment, and innovative livelihood programs that create lasting positive change in rural India.",
              gradient: "from-green-500 to-emerald-500",
              bgGradient: "from-green-50 to-emerald-50",
              delay: "delay-200",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description:
                "A world where every rural family has access to sustainable livelihoods, food security, and the opportunity to thrive through dignified work and community support.",
              gradient: "from-blue-500 to-cyan-500",
              bgGradient: "from-blue-50 to-cyan-50",
              delay: "delay-400",
            },
            {
              icon: Heart,
              title: "Our Values",
              description:
                "Sustainability, community empowerment, innovation in agriculture, transparency in operations, and unwavering commitment to the dignity and rights of rural communities.",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-50 to-pink-50",
              delay: "delay-600",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${item.bgGradient} hover:-translate-y-4 hover:scale-105 ${isVisible ? `animate-fade-in-up ${item.delay}` : "opacity-0 translate-y-10"}`}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}
                ></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-up-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-card {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-up { animation: float-up 4s ease-in-out infinite; }
        .animate-float-up-delayed { animation: float-up-delayed 5s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-float-card { animation: float-card 4s ease-in-out infinite; }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  )
}
