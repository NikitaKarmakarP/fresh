"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Target, 
  Eye, 
  Users, 
  Globe,
  Sparkles,
  Heart,
  Shield,
  Leaf,
  Building2,
  TrendingUp,
  Award
} from "lucide-react"

// Custom hook for intersection observer
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

export function MissionVisionValues() {
  const [aboutRef, aboutInView] = useInView(0.1)
  const [sectionRef, sectionInView] = useInView(0.1)

  const values = [
    {
      title: "Sustainability",
      description: "Creating long-term solutions that protect our environment while empowering communities",
      icon: Globe,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-500"
    },
    {
      title: "Community Empowerment",
      description: "Putting communities at the center of development initiatives and decision-making processes",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-500"
    },
    {
      title: "Innovation in Agriculture",
      description: "Combining traditional wisdom with modern techniques for sustainable farming practices",
      icon: Sparkles,
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-500"
    },
    {
      title: "Transparency",
      description: "Maintaining open communication and accountability in all our operations and impact reporting",
      icon: Shield,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-500"
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-rose-300/15 to-amber-300/15 rounded-full blur-3xl"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce shadow-lg"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-blue-300/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 border-2 border-purple-300/30 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* About HAPEF Section */}
        <div ref={aboutRef} className="mb-16">
          <div className={`bg-white/70 backdrop-blur-lg rounded-[2rem] shadow-xl border border-white/30 p-8 md:p-16 relative overflow-hidden transition-all duration-1000 ${
            aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-blue-500/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-tr-full"></div>
            
            {/* Content */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-green-50/80 to-blue-50/80 backdrop-blur-sm px-8 py-4 rounded-full mb-8 shadow-xl border border-white/30 hover:scale-105 transition-transform duration-300 ${
                aboutInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-full blur-md opacity-50"></div>
                  <div className="relative p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full shadow-lg">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="text-green-800 font-bold text-lg tracking-wide">About HAPEF</span>
              </div>
              
              <h2 className={`text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-green-900 to-blue-900 bg-clip-text text-transparent leading-tight tracking-tight transition-all duration-1000 delay-200 ${
                aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Building a<br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Sustainable Future</span><br />
                for Rural India
              </h2>
              
              <div className={`flex items-center justify-center gap-3 mt-8 transition-all duration-1000 delay-300 ${
                aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="w-16 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg animate-pulse"></div>
                <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
              </div>
            </div>
            
            {/* Key highlights grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: Leaf,
                  title: "Sustainable Development",
                  description: "Implementing eco-friendly practices that ensure long-term environmental and economic sustainability",
                  color: "from-green-500 to-emerald-600",
                  bgColor: "from-green-50 to-emerald-50"
                },
                {
                  icon: TrendingUp,
                  title: "Community Growth",
                  description: "Empowering rural communities through skill development, education, and economic opportunities",
                  color: "from-blue-500 to-cyan-600",
                  bgColor: "from-blue-50 to-cyan-50"
                },
                {
                  icon: Award,
                  title: "Proven Impact",
                  description: "Delivering measurable results through innovative programs and strategic partnerships",
                  color: "from-purple-500 to-indigo-600",
                  bgColor: "from-purple-50 to-indigo-50"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`group transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                    aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500 opacity-60`}></div>
                    
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 text-center">
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110`}></div>
                        <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 transition-all duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.description}
                      </p>
                      
                      <div className={`w-12 h-1 bg-gradient-to-r ${item.color} mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 mt-4`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Container - Ultra Modern Glass Morphism Layout */}
        <div ref={sectionRef} className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/20 p-8 md:p-20 relative overflow-hidden">
          {/* Enhanced decorative corner elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-emerald-500/15 to-teal-500/15 rounded-tl-full"></div>
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
          
          {/* Ultra Modern Section Header */}
          <div className={`text-center mb-24 transition-all duration-1000 ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 backdrop-blur-sm px-10 py-5 rounded-full mb-10 shadow-2xl border border-white/30 hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-50"></div>
                <div className="relative p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-blue-800 font-bold text-xl tracking-wide">Our Foundation</span>
            </div>
            
            <h2 className="text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight tracking-tight">
              Mission, Vision & Values
            </h2>
            
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
              The fundamental principles that drive our commitment to transforming rural communities 
              and creating sustainable change across India
            </p>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Ultra Modern Mission & Vision Row */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 mb-24">
            {/* Mission - Ultra Modern Card */}
            <div className={`group transition-all duration-1000 hover:scale-[1.02] hover:-translate-y-2 ${
              sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative">
                {/* Enhanced decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-cyan-500/8 rounded-[2rem] transform rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] p-10 shadow-2xl border border-blue-100/50 group-hover:shadow-3xl group-hover:border-blue-200/70 transition-all duration-700">
                  <div className="flex items-center mb-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 scale-110"></div>
                      <div className="relative p-5 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <Target className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-4xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-500 tracking-tight">Our Mission</h3>
                      <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mt-3 group-hover:w-24 transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full shadow-lg"></div>
                    <div className="pl-8">
                      <p className="text-gray-700 leading-relaxed text-xl font-medium">
                        To eradicate poverty through sustainable agricultural practices, community empowerment, and 
                        innovative livelihood programs that create lasting positive change in rural India.
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced decorative elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-6 right-10 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-8 right-12 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500"></div>
                  <div className="absolute bottom-12 right-6 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>

            {/* Vision - Ultra Modern Card */}
            <div className={`group transition-all duration-1000 delay-200 hover:scale-[1.02] hover:-translate-y-2 ${
              sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                {/* Enhanced decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 to-indigo-500/8 rounded-[2rem] transform -rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] p-10 shadow-2xl border border-purple-100/50 group-hover:shadow-3xl group-hover:border-purple-200/70 transition-all duration-700">
                  <div className="flex items-center mb-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 scale-110"></div>
                      <div className="relative p-5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <Eye className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-4xl font-black text-gray-900 group-hover:text-purple-600 transition-colors duration-500 tracking-tight">Our Vision</h3>
                      <div className="w-16 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mt-3 group-hover:w-24 transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full shadow-lg"></div>
                    <div className="pl-8">
                      <p className="text-gray-700 leading-relaxed text-xl font-medium">
                        A world where every rural family has access to sustainable livelihoods, food security, and the 
                        opportunity to thrive through dignified work and community support.
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced decorative elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-purple-500/15 to-indigo-500/15 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-6 right-10 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-8 right-12 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500"></div>
                  <div className="absolute bottom-12 right-6 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ultra Modern Values Section */}
          <div className={`transition-all duration-1000 delay-400 ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50/80 to-blue-50/80 backdrop-blur-sm px-8 py-4 rounded-full mb-8 shadow-2xl border border-white/30 hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full blur-md opacity-50"></div>
                  <div className="relative p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="text-emerald-800 font-bold text-lg tracking-wide">Core Values</span>
              </div>
              
              <h3 className="text-5xl font-black text-gray-900 mb-8 bg-gradient-to-r from-gray-900 via-emerald-900 to-blue-900 bg-clip-text text-transparent tracking-tight">
                Our Values
              </h3>
              
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                The core principles that guide our work and define our commitment to rural communities
              </p>
              
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="w-16 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full shadow-lg animate-pulse"></div>
                <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`group transition-all duration-700 hover:scale-[1.05] hover:-translate-y-4 ${
                    sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="relative">
                    {/* Enhanced decorative background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} rounded-[2rem] transition-transform duration-700 opacity-60`}></div>
                    
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] p-10 shadow-2xl border border-gray-100/50 group-hover:shadow-3xl group-hover:border-gray-200/70 transition-all duration-700 text-center">
                      {/* Icon with mission-like animation */}
                      <div className="relative mb-8">
                        {/* Glow like Mission card icon */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 scale-110`}></div>
                        {/* Icon container matching Mission behavior (scale on hover) */}
                        <div className={`relative p-5 bg-gradient-to-r ${value.color} rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                          <value.icon className="h-10 w-10 text-white" />
                        </div>
                        
                        {/* Enhanced floating particles around icon */}
                        <div className={`absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-r ${value.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce shadow-lg`}></div>
                        <div className={`absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-r ${value.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce shadow-lg`} style={{ animationDelay: '0.5s' }}></div>
                        <div className={`absolute top-0 left-0 w-2 h-2 bg-gradient-to-r ${value.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce shadow-lg`} style={{ animationDelay: '1s' }}></div>
                      </div>
                      
                      {/* Title with ultra modern styling */}
                      <h4 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 transition-all duration-500 tracking-tight">
                        {value.title}
                      </h4>
                      
                      {/* Description with enhanced typography */}
                      <p className="text-gray-600 leading-relaxed text-base mb-8 font-medium">
                        {value.description}
                      </p>
                      
                      {/* Enhanced decorative elements */}
                      <div className={`w-20 h-1.5 bg-gradient-to-r ${value.color} mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-0 group-hover:scale-100 shadow-lg`}></div>
                      
                      {/* Enhanced corner decorations */}
                      <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-br ${value.color} opacity-15 rounded-full group-hover:scale-110 transition-transform duration-500`}></div>
                      <div className={`absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br ${value.color} opacity-10 rounded-full group-hover:scale-110 transition-transform duration-700`}></div>
                      
                      {/* Subtle grid pattern */}
                      <div className="absolute inset-0 opacity-[0.02] rounded-[2rem]" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                        backgroundSize: '15px 15px'
                      }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}