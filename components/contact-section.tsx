"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Phone, Mail, MessageCircle, Heart, Sparkles, ArrowRight, Globe, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
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

export function ContactSection() {
  const [headerRef, headerInView] = useInView(0.2)
  const [cardsRef, cardsInView] = useInView(0.1)
  const [ctaRef, ctaInView] = useInView(0.2)

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Bidyadharpur - Madsar Natunpally, Near Naba Sakti Sangha Club, P.O + P.S - Sonarpur, Kolkata - 700150",
      description: "Visit us at our headquarters in the heart of West Bengal",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      link: "https://maps.google.com/maps?q=Bidyadharpur+Madsar+Natunpally+Near+Naba+Sakti+Sangha+Club+Sonarpur+Kolkata+700150",
      linkText: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 8240374731",
      description: "Available Monday to Friday, 9 AM to 6 PM",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      link: "tel:+918240374731",
      linkText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info.hapef@gmail.com",
      description: "We'll respond within 24 hours",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      link: "mailto:info.hapef@gmail.com",
      linkText: "Send Email"
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-100/10 to-green-100/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/12 animate-bounce-slow">
          <Sparkles className="w-6 h-6 text-green-300 opacity-40" />
        </div>
        <div className="absolute top-1/3 right-1/8 animate-float-gentle">
          <Heart className="w-5 h-5 text-pink-300 opacity-30" />
        </div>
        <div className="absolute bottom-1/4 left-1/6 animate-bounce-slow">
          <Globe className="w-7 h-7 text-blue-300 opacity-35" />
        </div>
        <div className="absolute bottom-1/3 right-1/5 animate-float-gentle">
          <MessageCircle className="w-6 h-6 text-purple-300 opacity-40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Beautiful Animated Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full mb-8 shadow-lg transition-all duration-700 ${
            headerInView ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
          }`}>
            <MessageCircle className={`h-5 w-5 text-green-600 transition-all duration-500 ${
              headerInView ? 'rotate-0' : 'rotate-12'
            }`} />
            <span className="text-green-800 font-medium">Let's Connect</span>
          </div>

          {/* Main Title */}
          <h2 className={`text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <span className="text-gray-900">Get in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
              Touch
            </span>
          </h2>

          {/* Subtitle */}
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Have questions or want to learn more about our programs? We'd love to hear from you and 
            explore how we can work together to create positive change.
          </p>
        </div>

        {/* Enhanced Contact Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 border border-white/50 overflow-hidden ${
                cardsInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                {/* Icon with enhanced animation */}
                <div className={`p-6 bg-gradient-to-br ${info.color} rounded-3xl w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <info.icon className="h-12 w-12 text-white transition-all duration-500 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center transition-all duration-300 group-hover:text-gray-700">
                  {info.title}
                </h3>

                {/* Main content */}
                <div className="text-center mb-4">
                  <a 
                    href={info.link}
                    className={`text-lg font-semibold bg-gradient-to-r ${info.color} bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block`}
                  >
                    {info.content}
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                  {info.description}
                </p>

                {/* Action button */}
                <div className="text-center">
                  <a
                    href={info.link}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${info.color} text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:animate-pulse`}
                  >
                    {info.linkText}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div 
          ref={ctaRef}
          className={`text-center transition-all duration-1000 ${
            ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-white/80" />
                <span className="text-white/90 font-medium">Quick Response Guaranteed</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Make a Difference?
              </h3>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join us in our mission to empower rural communities. Every conversation starts with a simple message.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                    <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Contact Us Now
                  </Button>
                </Link>
                
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  <span className="text-sm">Usually responds within 2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
