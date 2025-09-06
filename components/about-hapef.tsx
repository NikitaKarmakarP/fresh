"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Users, Heart, Leaf, Target, Eye, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutHapef() {
  return (
    <section className="py-20 bg-white">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        @keyframes pulse-icon {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-2deg);
          }
          25% {
            transform: rotate(-4deg);
          }
          75% {
            transform: rotate(0deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(12deg);
          }
          100% {
            transform: translateX(400%) skewX(12deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-icon {
          animation: pulse-icon 2s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About HAPEF
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          
          {/* Beautiful Main Heading */}
          <div className="relative mb-8">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="inline-block">
                <span className="text-gray-800">Building a </span>
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 animate-pulse">
                    Sustainable Future
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-in-out_infinite] origin-left"></div>
                </span>
              </span>
              <br />
              <span className="text-gray-700">for </span>
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
                  Rural India
                </span>
                <div className="absolute -top-1 -right-1">
                  <Heart className="w-6 h-6 text-red-400 animate-pulse" />
                </div>
              </span>
            </h3>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since our founding, HAPEF has been at the forefront of rural development, combining innovative 
            agricultural practices with community empowerment to create lasting positive change across India.
          </p>
        </div>

        {/* Journey Section */}
        <div className="mb-20 py-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-black">Our</span> <span className="text-green-800">Journey</span> <span className="text-black">of</span> <span className="text-green-800">Impact</span>
            </h3>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-8 max-w-xl">
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded with a vision to eradicate poverty through sustainable development, HAPEF has evolved 
                into a leading force for rural transformation. Our innovative approach combines traditional 
                agricultural wisdom with modern techniques, creating opportunities that honor both heritage and progress.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Operating primarily in Pakur district of Jharkhand, with our headquarters in Kolkata, we've built 
                strong partnerships with government departments and community organizations, highlighting our commitment to 
                transparency and measurable impact.
              </p>
              
              {/* Info cards removed from homepage */}
              
              {/* Learn Our Story Button - Enhanced with animations */}
              <div className="text-left mt-8">
                <Link href="/about#our-story">
                  <div className="relative inline-block group">
                    {/* Animated background glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500 group-hover:duration-200 animate-pulse"></div>
                    
                    {/* Main button */}
                    <Button size="lg" className="relative bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-700 hover:from-emerald-600 hover:via-green-700 hover:to-emerald-800 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 border-emerald-400/50 hover:border-emerald-300 overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 w-1/4 animate-[shimmer_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                      
                      {/* Button content */}
                      <span className="relative flex items-center">
                        <span className="mr-3">Learn Our Story</span>
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                      </span>
                      
                      {/* Floating particles */}
                      <div className="absolute top-1 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{animationDelay: '0s'}}></div>
                      <div className="absolute top-3 right-6 w-1 h-1 bg-white/40 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{animationDelay: '0.3s'}}></div>
                      <div className="absolute bottom-2 left-8 w-0.5 h-0.5 bg-white/50 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{animationDelay: '0.6s'}}></div>
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Image Gallery */}
            <div className="relative grid grid-cols-2 gap-6 max-w-4xl ml-12 mt-8">
              {/* Animated Years Badge */}
              <div className="absolute -top-4 -right-4 z-10 animate-bounce">
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2+</div>
                    <div className="text-sm font-medium">Years of Service</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src="/ses1.jpg"
                    alt="Community Development"
                    width={400}
                    height={280}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src="/ses2.jpg"
                    alt="Agricultural Innovation"
                    width={400}
                    height={280}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="space-y-6 mt-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src="/ses3.jpg"
                    alt="Women Empowerment"
                    width={400}
                    height={280}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src="/ses4.jpg"
                    alt="Rural Development"
                    width={400}
                    height={280}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Mission, Vision, Values Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission - Floating Animation */}
            <div className="relative group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500 animate-float"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  To eradicate poverty through sustainable agricultural practices, community empowerment, 
                  and innovative livelihood programs that create lasting positive change in rural India.
                </p>
              </div>
            </div>

            {/* Vision - Pulse Animation */}
            <div className="relative group animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg animate-pulse-slow"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-pulse-icon">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed">
                  A world where every rural family has access to sustainable livelihoods, food security, 
                  and the opportunity to thrive through dignified work and community support.
                </p>
              </div>
            </div>

            {/* Values - Rotate Animation */}
            <div className="relative group animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-lg transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500 animate-wiggle"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-spin-slow">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Values</h4>
                <p className="text-gray-600 leading-relaxed">
                  Sustainability, community empowerment, innovation in agriculture, transparency in operations, 
                  and unwavering commitment to the dignity and rights of rural communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}