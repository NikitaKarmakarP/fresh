"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Building, Users, Sprout, Globe, Heart, Target, Zap, Star, Sparkles, ArrowRight, Map } from "lucide-react"

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

export function WorkingAreas() {
  const [headerRef, headerInView] = useInView(0.2)
  const [cardsRef, cardsInView] = useInView(0.1)
  const [statsRef, statsInView] = useInView(0.1)

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 animate-float-gentle">
          <Globe className="w-8 h-8 text-blue-400 opacity-30 animate-spin-slow" />
        </div>
        <div className="absolute top-1/3 right-1/5 animate-bounce-gentle">
          <MapPin className="w-6 h-6 text-green-400 opacity-30 animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float-gentle-delayed">
          <Star className="w-5 h-5 text-purple-400 opacity-30 animate-ping" />
        </div>
        <div className="absolute top-1/5 right-1/3 animate-float-up">
          <Sparkles className="w-7 h-7 text-yellow-400 opacity-30 animate-spin-slow" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${headerInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-blue-200/50">
            <Map className="h-5 w-5 text-blue-600 animate-pulse" />
            <span className="text-sm font-semibold text-blue-800 tracking-wide">OUR REACH & IMPACT</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Our Working</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 animate-gradient-x">
              Areas
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            HAPEF operates across multiple regions in India, with our headquarters in 
            <span className="font-semibold text-blue-700"> Kolkata</span> and primary focus areas in 
            <span className="font-semibold text-green-700"> Jharkhand state</span>, creating lasting impact in rural communities.
          </p>
        </div>

        {/* Single India Map with Both Locations */}
        <div
          ref={cardsRef}
          className={`mb-20 transition-all duration-1000 ${cardsInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] relative">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 text-white p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              
              <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold relative z-10">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Map className="h-8 w-8 animate-pulse" />
                </div>
                <div className="text-center">
                  <div className="text-white/90 text-sm font-medium mb-1">🇮🇳 OUR PRESENCE IN INDIA</div>
                  <div>Working Areas Map</div>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0 relative">
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <img
                  src="/map.jpg"
                  alt="HAPEF Working Areas in India"
                  className="w-full h-full object-contain transition-transform duration-700 bg-white"
                />
                

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8 relative">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Headquarters Info */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        Headquarters
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        <span className="font-semibold text-blue-700">Bidyadharpur - Madsar Natunpally, Near Naba Sakti Sangha Club, P.O + P.S - Sonarpur, Kolkata - 700150</span>
                        <br />
                        Administrative Hub & Registered Office
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        <Target className="h-3 w-3" />
                        NGO Headquarters
                      </span>
                    </div>
                  </div>

                  {/* Primary Working Area Info */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        Primary Focus Area
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        <span className="font-semibold text-green-700">Pakur District, Jharkhand</span>
                        <br />
                        Hiranpur Block - Implementation Zone
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        <Heart className="h-3 w-3" />
                        Program Area
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-sm text-gray-600 mb-1">Our Geographic Coverage</p>
                      <p className="font-semibold text-gray-900">2 States • 50+ Villages • 10,000+ Lives Impacted</p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="group/btn border-blue-200 hover:border-blue-400 hover:bg-blue-50">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>View Headquarters</span>
                      </Button>
                      <Button variant="outline" size="sm" className="group/btn border-green-200 hover:border-green-400 hover:bg-green-50">
                        <Sprout className="h-4 w-4 mr-2" />
                        <span>Explore Programs</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Coverage Statistics */}
        <div
          ref={statsRef}
          className={`transition-all duration-1000 ${statsInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Geographic Impact</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our programs span across multiple regions, creating a network of sustainable development and community empowerment. 
              We focus primarily on <span className="font-semibold text-green-700">Hiranpur Block under Pakur District</span>, 
              measuring our reach across regions and communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* States Covered */}
            <Card className="group text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/20 rounded-full blur-xl"></div>
              
              <CardContent className="p-8 relative">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">States Covered</div>
                <div className="text-sm text-gray-600 leading-relaxed">West Bengal & Jharkhand</div>
                <div className="mt-3 h-1 bg-gradient-to-r from-green-200 to-emerald-300 rounded-full"></div>
              </CardContent>
            </Card>

            {/* Villages Reached */}
            <Card className="group text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-xl"></div>
              
              <CardContent className="p-8 relative">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Villages Reached</div>
                <div className="text-sm text-gray-600 leading-relaxed">Across Pakur District</div>
                <div className="mt-3 h-1 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-full"></div>
              </CardContent>
            </Card>

            {/* Primary Block */}
            <Card className="group text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/20 rounded-full blur-xl"></div>
              
              <CardContent className="p-8 relative">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">1</div>
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Primary Block</div>
                <div className="text-sm text-gray-600 leading-relaxed">Hiranpur Block Focus</div>
                <div className="mt-3 h-1 bg-gradient-to-r from-purple-200 to-pink-300 rounded-full"></div>
              </CardContent>
            </Card>

            {/* People Impacted */}
            <Card className="group text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200/20 rounded-full blur-xl"></div>
              
              <CardContent className="p-8 relative">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">People Impacted</div>
                <div className="text-sm text-gray-600 leading-relaxed">Direct & Indirect Beneficiaries</div>
                <div className="mt-3 h-1 bg-gradient-to-r from-orange-200 to-red-300 rounded-full"></div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-gray-200/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Currently Active in</span>
              </div>
              <div className="flex items-center gap-6 text-sm font-semibold">
                <span className="text-blue-700">Kolkata, WB</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-green-700">Pakur, JH</span>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <span>Expand Our Reach</span>
                <Zap className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
