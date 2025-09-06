"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MouseIcon as Mushroom, Gift, Leaf, Users, ArrowRight, Sparkles, Target } from "lucide-react"
import Link from "next/link"

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

export function Programs() {
  const [headerRef, headerInView] = useInView(0.2)
  const [programsRef, programsInView] = useInView(0.1)

  const programs = [
    {
      icon: Mushroom,
      title: "Mushroom Entrepreneurship Program",
      description:
        "Comprehensive training and resources for oyster and button mushroom cultivation, helping rural families generate sustainable income through modern farming techniques.",
      features: ["Training workshops", "Seed funding support", "Market linkage", "Technical guidance"],
      image: "/m1.jpg",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      hoverColor: "hover:from-emerald-100 hover:to-green-100",
      href: "/programs/mushroom-entrepreneurship"
    },
    {
      icon: Gift,
      title: "Christmas Blanket Distribution",
      description:
        "Annual initiative providing warm blankets to vulnerable families during winter months, ensuring comfort and protection from harsh weather conditions.",
      features: [
        "Community outreach",
        "Vulnerable family identification",
        "Quality blanket distribution",
        "Follow-up support",
      ],
      image: "/m2.jpg",
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-50 to-pink-50",
      hoverColor: "hover:from-red-100 hover:to-pink-100",
      href: "/programs/christmas-blanket-distribution"
    },
    {
      icon: Leaf,
      title: "Climate-Resilient Agriculture & BRC",
      description:
        "Building resilient communities through sustainable agriculture practices, climate adaptation strategies, and Block Resource Center initiatives.",
      features: [
        "Climate adaptation training",
        "Sustainable farming methods",
        "Resource center development",
        "Community resilience building",
      ],
      image: "/m3.jpg",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      hoverColor: "hover:from-blue-100 hover:to-cyan-100",
      href: "/programs/climate-resilient-agriculture"
    },
    {
      icon: Users,
      title: "Convergence",
      description:
        "Collaborative initiatives bringing together government departments, NGOs, and communities to create synergistic development programs.",
      features: [
        "Multi-stakeholder partnerships",
        "Integrated development approach",
        "Resource optimization",
        "Impact amplification",
      ],
      image: "/m4.jpg",
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      hoverColor: "hover:from-purple-100 hover:to-indigo-100",
      href: "/programs/convergence"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-200/10 to-orange-200/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Beautiful Animated Heading */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-8 shadow-lg transition-all duration-700 ${
            headerInView ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
          }`}>
            <Target className={`h-5 w-5 text-blue-600 transition-all duration-500 ${
              headerInView ? 'rotate-0' : 'rotate-12'
            }`} />
            <span className="text-blue-800 font-medium">Empowering Communities</span>
          </div>
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <span className="text-gray-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 animate-gradient-x">
              Programs
            </span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Discover our comprehensive initiatives designed to empower rural communities through sustainable
            development, agricultural innovation, and community support programs.
          </p>
        </div>

        {/* Animated Programs Grid */}
        <div ref={programsRef} className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 group relative ${
                programsInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Image section with enhanced animations */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Floating animated icon */}
                <div className={`absolute top-6 left-6 p-4 bg-gradient-to-br ${program.color} rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl`}>
                  <program.icon className="h-8 w-8 text-white transition-all duration-500 group-hover:scale-110" />
                </div>
                
                {/* Sparkle effects */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                  <Sparkles className="h-6 w-6 text-white animate-pulse" />
                </div>
                <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
              
              <CardHeader className="relative">
                <CardTitle className="text-2xl text-gray-900 transition-all duration-300 group-hover:text-gray-700 group-hover:scale-105">
                  {program.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-gray-600 mb-6 leading-relaxed transition-all duration-300 group-hover:text-gray-500">
                  {program.description}
                </p>
                
                {/* Enhanced features list */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg transition-all duration-300 group-hover:text-gray-700">
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-center text-gray-600 transition-all duration-500 group-hover:text-gray-500 group-hover:translate-x-2 ${
                          programsInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{ transitionDelay: `${(index * 150) + (idx * 100)}ms` }}
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${program.color} rounded-full mr-3 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg flex-shrink-0`}></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Enhanced button */}
                <Link href={program.href}>
                  <Button
                    className={`w-full bg-gradient-to-r ${program.color} text-white border-0 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 group-hover:shadow-2xl relative overflow-hidden`}
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
