"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, MapPin, Award, Sprout, Heart } from "lucide-react"

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

// Custom hook for number animation
function useCountUp(end: number, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(startValue + (end - startValue) * easeOutQuart))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, shouldStart])

  return count
}

export function Impact() {
  const [headerRef, headerInView] = useInView(0.2)
  const [statsRef, statsInView] = useInView(0.1)
  const [storiesRef, storiesInView] = useInView(0.2)

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: "+",
      label: "Families Empowered",
      description: "Rural families supported through our various programs",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      number: 50,
      suffix: "+",
      label: "Villages Reached",
      description: "Communities across Hiranpur Block under Pakur District and beyond",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Sprout,
      number: 200,
      suffix: "+",
      label: "Farmers Trained",
      description: "In sustainable agriculture and mushroom cultivation",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      number: 1000,
      suffix: "+",
      label: "Blankets Distributed",
      description: "Providing warmth during winter months",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingUp,
      number: 75,
      suffix: "%",
      label: "Income Increase",
      description: "Average income improvement for participating families",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      number: 2,
      suffix: "+",
      label: "Years of Service",
      description: "Dedicated to rural community development",
      color: "from-emerald-500 to-emerald-600"
    },
  ]



  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
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
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full mb-8 shadow-lg transition-all duration-700 ${
            headerInView ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
          }`}>
            <Award className={`h-5 w-5 text-green-600 transition-all duration-500 ${
              headerInView ? 'rotate-0' : 'rotate-12'
            }`} />
            <span className="text-green-800 font-medium">Measuring Our Success</span>
          </div>
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <span className="text-gray-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 animate-gradient-x">
              Impact
            </span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Measuring success through the positive changes we bring to rural communities across India. Every number
            represents lives transformed and communities empowered.
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div ref={statsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.number, 2000, statsInView)
            return (
              <Card 
                key={index} 
                className={`text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden ${
                  statsInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative">
                  {/* Animated icon container */}
                  <div className={`p-6 bg-gradient-to-br ${stat.color} rounded-3xl w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <stat.icon className="h-14 w-14 text-white transition-all duration-500 group-hover:scale-110" />
                  </div>
                  
                  {/* Animated number */}
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 transition-all duration-500 group-hover:scale-110">
                    <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {statsInView ? count : 0}
                    </span>
                    <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.suffix}
                    </span>
                  </div>
                  
                  {/* Animated label */}
                  <div className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:text-gray-700">
                    {stat.label}
                  </div>
                  
                  {/* Animated description */}
                  <div className="text-sm text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-500">
                    {stat.description}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </CardContent>
              </Card>
            )
          })}
        </div>



        {/* Animated Success Stories Section */}
        <div 
          ref={storiesRef}
          className={`bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden transition-all duration-1000 ${
            storiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-full blur-2xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            <div className={`transition-all duration-1000 delay-200 ${
              storiesInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                  Success Stories
                </span>
              </h3>
              <div className="space-y-6">
                {/* Mushroom Farming Success Story */}
                <div className={`bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 group border border-green-100 relative overflow-hidden ${
                  storiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`} style={{ transitionDelay: '400ms' }}>
                  {/* Background decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100/50 to-emerald-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="flex items-start gap-4 relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Sprout className="h-7 w-7 text-white group-hover:animate-bounce" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <h4 className="font-bold text-gray-900 text-xl group-hover:text-green-700 transition-colors duration-300">
                          Mushroom Farming Success
                        </h4>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionDelay: `${i * 100}ms` }}></div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-2 top-0 text-4xl text-green-200 font-serif">"</div>
                        <p className="text-gray-600 leading-relaxed mb-4 pl-4 italic">
                          Through HAPEF's mushroom cultivation program, I was able to start my own business and increase my
                          family's monthly income by <span className="font-bold text-green-600">300%</span>. The training and ongoing support have been invaluable.
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">PD</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-green-700">Priya Devi</div>
                          <div className="text-xs text-gray-500">Hiranpur Block, Pakur District • Mushroom Entrepreneur</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Community Transformation Story */}
                <div className={`bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 group border border-blue-100 relative overflow-hidden ${
                  storiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`} style={{ transitionDelay: '600ms' }}>
                  {/* Background decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="flex items-start gap-4 relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Users className="h-7 w-7 text-white group-hover:animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <h4 className="font-bold text-gray-900 text-xl group-hover:text-blue-700 transition-colors duration-300">
                          Community Transformation
                        </h4>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionDelay: `${i * 100}ms` }}></div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-2 top-0 text-4xl text-blue-200 font-serif">"</div>
                        <p className="text-gray-600 leading-relaxed mb-4 pl-4 italic">
                          Our entire village has benefited from HAPEF's sustainable agriculture programs. We now have 
                          <span className="font-bold text-blue-600"> better crop yields</span> and improved food security for all families.
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">RK</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-blue-700">Ram Kumar</div>
                          <div className="text-xs text-gray-500">Village Head • Community Leader</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${
              storiesInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative group">
                {/* Enhanced background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Main image container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <img
                    src="/succes.jpg"
                    alt="HAPEF success stories - Mushroom farming and community transformation programs empowering rural families"
                    className="w-full h-[400px] object-cover"
                  />
                  
                  {/* Gradient overlay for better visual depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Success badge overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-800">Success Stories</span>
                    </div>
                  </div>
                  
                  {/* Bottom info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white">
                      <div className="text-sm font-medium mb-1">Real Impact Stories</div>
                      <div className="text-xs text-white/80">From Hiranpur Block, Pakur District & Beyond</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-500 animate-bounce-gentle"></div>
                <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
