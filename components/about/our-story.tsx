"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sprout, Users, Target, Sparkles, Award, Globe, MapPin, Star } from "lucide-react"

/**
 * The “Our Story” section for the About page.
 * Exposes an `id` for in-page links (#our-story) and
 * highlights HAPEF’s founding journey and core values.
 */
export function OurStory() {
  return (
    <section id="our-story" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-emerald-100 px-6 py-3 rounded-full mb-8">
            <Heart className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-800 tracking-wide uppercase">Our Story</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Our Journey
            </span>
          </h2>
        </div>

        {/* Story Content - Two Column Layout */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story Text */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-emerald-600">HAPEF was born from a simple yet powerful vision:</span> to create sustainable pathways out of poverty for rural communities across India. Founded in <span className="font-semibold text-emerald-600">2022</span> by a group of passionate social workers and agricultural experts, our organization emerged from the recognition that traditional charity models, while well-intentioned, often failed to create lasting change.
                </p>

                <p>
                  Our founders spent years working directly with rural communities, learning about their challenges, strengths, and aspirations. This grassroots experience shaped our core philosophy: <span className="font-semibold text-emerald-600">true development must be community-driven, sustainable, and respectful of local knowledge and traditions.</span>
                </p>

                <p>
                  Starting with a small pilot program in <span className="font-semibold text-emerald-600">mushroom cultivation in 2022</span>, we quickly realized the transformative power of combining traditional agricultural wisdom with modern techniques. What began as a single-village initiative has grown into a comprehensive development program reaching over <span className="font-semibold text-emerald-600">50 villages across multiple states</span> in just two years.
                </p>

                <p>
                  Our rapid expansion demonstrates both the urgent need for our services and the effectiveness of our community-centered approach, building <span className="font-semibold text-emerald-600">strong foundations for sustainable development work.</span>
                </p>
              </div>
            </div>

            {/* Right Column - Beautiful Image */}
            <div className="relative group">
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="/ses1.jpg"
                  alt="HAPEF team working with rural community members, showcasing our grassroots approach to sustainable development"
                  className="w-full h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Beautiful Floating Stats Cards */}
              <div className="absolute -top-8 -left-8 group/card">
                <div className="relative bg-gradient-to-br from-white via-white to-emerald-50/30 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-emerald-200/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-green-500/10 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-5">
                    <div className="relative">
                      <div className="p-4 bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 rounded-2xl shadow-lg group-hover/card:shadow-xl transition-all duration-300 group-hover/card:scale-110">
                        <Heart className="h-7 w-7 text-white" />
                      </div>
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 bg-emerald-400 rounded-2xl animate-ping opacity-20"></div>
                      {/* Sparkle effect */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-3xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">2022</div>
                      <div className="text-sm text-emerald-700 font-semibold tracking-wide uppercase">Founded</div>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 mt-1 group-hover/card:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-green-400 rounded-full opacity-40"></div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 group/card">
                <div className="relative bg-gradient-to-br from-white via-white to-blue-50/30 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-blue-200/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-5">
                    <div className="relative">
                      <div className="p-4 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl shadow-lg group-hover/card:shadow-xl transition-all duration-300 group-hover/card:scale-110">
                        <MapPin className="h-7 w-7 text-white" />
                      </div>
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20"></div>
                      {/* Sparkle effect */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50+</div>
                      <div className="text-sm text-blue-700 font-semibold tracking-wide uppercase">Villages Reached</div>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mt-1 group-hover/card:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-40"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full shadow-lg opacity-80 animate-pulse"></div>
              <div className="absolute top-1/4 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-lg opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Holistic Approach - Full Width Card */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <Globe className="h-10 w-10 text-white" />
                </div>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold mb-4">Holistic Approach</h4>
              <p className="text-xl text-emerald-100 leading-relaxed">
                Addressing multiple aspects of rural development from economic to social and environmental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————————————————————————
   Exports
   —————————————————————————————————————————— */
export default OurStory // optional default export
