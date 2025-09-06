"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Handshake, Sparkles, Star, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function CallToAction() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("cta-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="cta-section"
      className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%),
          linear-gradient(135deg, #059669 0%, #10b981 25%, #14b8a6 50%, #0d9488 75%, #0f766e 100%)
        `
      }}
    >
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full animate-pulse-slow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.3" />
              <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.2" />
              <circle cx="15" cy="15" r="1" fill="currentColor" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 animate-float-gentle">
          <div className="relative">
            <Sparkles className="w-8 h-8 text-white opacity-30 animate-spin-slow" />
            <div className="absolute inset-0 w-8 h-8 bg-white rounded-full opacity-10 animate-ping"></div>
          </div>
        </div>
        <div className="absolute top-1/3 right-1/5 animate-bounce-gentle">
          <div className="relative">
            <Star className="w-6 h-6 text-yellow-300 opacity-40 animate-pulse" />
            <div className="absolute -inset-2 bg-yellow-300 rounded-full opacity-5 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float-gentle-delayed">
          <div className="w-8 h-8 bg-gradient-to-r from-white to-green-200 rounded-full opacity-20 animate-ping"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-bounce-gentle">
          <div className="relative">
            <Zap className="w-7 h-7 text-yellow-300 opacity-35 animate-pulse" />
            <div className="absolute inset-0 w-7 h-7 bg-yellow-300 rounded-full opacity-10 animate-ping"></div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/12 animate-float-gentle">
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-25 animate-bounce"></div>
        </div>
        <div className="absolute top-3/4 right-1/12 animate-bounce-gentle">
          <div className="w-5 h-5 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full opacity-20 animate-pulse"></div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="block animate-slide-in-left">Join Our Mission to</span>
            <span className="block animate-slide-in-right delay-300">Transform Rural Lives</span>
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-600">
            Every contribution, partnership, and volunteer hour brings us closer to a world where rural communities
            thrive with dignity, sustainability, and hope.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: "Donate",
              description: "Support our programs with a donation that directly impacts rural families and communities.",
              link: "/donate",
              buttonText: "Make a Donation",
              color: "red",
              delay: "delay-200",
            },
            {
              icon: Users,
              title: "Volunteer",
              description: "Share your skills and time to directly contribute to our community development programs.",
              link: "#",
              buttonText: "Join as Volunteer",
              color: "blue",
              delay: "delay-400",
            },
            {
              icon: Handshake,
              title: "Partner",
              description:
                "Collaborate with us to amplify impact through strategic partnerships and joint initiatives.",
              link: "#",
              buttonText: "Become a Partner",
              color: "purple",
              delay: "delay-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${isVisible ? `animate-slide-in-up ${item.delay}` : "opacity-0 translate-y-10"}`}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative">
                <item.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:animate-pulse">{item.title}</h3>
              <p className="text-green-100 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                {item.description}
              </p>
              <Link href={item.link}>
                <Button className="group/btn bg-white text-green-600 hover:bg-green-50 w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="flex items-center gap-2">
                    {item.buttonText}
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-green-100 mb-8 text-lg animate-pulse">
            Ready to make a difference? Get in touch with us today.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg bg-transparent transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              Contact Us Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes float-gentle-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-float-gentle-delayed { animation: float-gentle-delayed 5s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </section>
  )
}
