"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    {
      id: 1,
      title: "Empowering Rural Communities",
      subtitle: "Building sustainable livelihoods through innovative programs",
      image: "/b1.jpg",
      cta: "Learn More",
      color: "from-green-500/90 via-emerald-600/90 to-teal-700/90",
      href: "/about"
    },
    {
      id: 2,
      title: "Mushroom Entrepreneurship",
      subtitle: "Training farmers in sustainable mushroom cultivation for better income",
      image: "/b2.jpg",
      cta: "Join Program",
      color: "from-blue-500/90 via-indigo-600/90 to-purple-700/90",
      href: "/programs/mushroom-entrepreneurship"
    },
    {
      id: 3,
      title: "Climate Resilient Agriculture",
      subtitle: "Helping farmers adapt to climate change with modern techniques",
      image: "/b3.jpg",
      cta: "Discover More",
      color: "from-emerald-500/90 via-green-600/90 to-teal-700/90",
      href: "/programs/climate-resilient-agriculture"
    },
    {
      id: 4,
      title: "Community Development",
      subtitle: "Strengthening rural communities through education and healthcare",
      image: "/b4.jpg",
      cta: "Get Involved",
      color: "from-purple-500/90 via-pink-600/90 to-rose-700/90",
      href: "/get-involved"
    },
    {
      id: 5,
      title: "Sustainable Livelihoods",
      subtitle: "Creating opportunities for economic growth and self-reliance in rural areas",
      image: "/b6.jpg",
      cta: "Explore Programs",
      color: "from-teal-500/90 via-cyan-600/90 to-blue-700/90",
      href: "/programs"
    },
    {
      id: 6,
      title: "Winter Relief Program",
      subtitle: "Providing warmth and comfort during harsh winter months",
      image: "/b5.jpg",
      cta: "Donate Now",
      color: "from-orange-500/90 via-red-600/90 to-pink-700/90",
      href: "/donate"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 4000) // Change slide every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [slides.length, isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    // Restart auto-play after manual navigation
    if (isPlaying && intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 4000)
    }
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    // Restart auto-play after manual navigation
    if (isPlaying && intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 4000)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    // Restart auto-play after manual navigation
    if (isPlaying && intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 4000)
    }
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-1000 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex items-center justify-center"
          >
            {/* Slide Background */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${slide.color}`}
              style={{
                backgroundImage: `
                  linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%),
                  url(${slide.image})
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* Content - Left Bottom Corner */}
            <div className={`absolute bottom-16 left-8 text-left text-white z-10 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}>
              <div className="max-w-lg">
                {/* Animated Badge */}
                <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-4 border border-white/20 shadow-lg transition-all duration-700 ${
                  index === currentSlide ? 'animate-fade-in-up' : ''
                }`}>
                  <Sparkles className="h-3 w-3 text-yellow-300 animate-pulse" />
                  <span className="text-white text-xs font-medium tracking-wide">HAPEF Initiative</span>
                </div>

                {/* Title with Gradient Text */}
                <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight transition-all duration-700 delay-200 ${
                  index === currentSlide ? 'animate-fade-in-up' : ''
                }`}>
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className={`text-sm md:text-base mb-6 text-white/90 leading-relaxed font-light transition-all duration-700 delay-400 ${
                  index === currentSlide ? 'animate-fade-in-up' : ''
                }`}>
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <div className={`transition-all duration-700 delay-600 ${
                  index === currentSlide ? 'animate-fade-in-up' : ''
                }`}>
                  <Link href={slide.href}>
                    <Button 
                      size="sm" 
                      className="bg-white/95 text-gray-900 hover:bg-white hover:text-black px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-sm border border-white/20"
                    >
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Elegant Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-6 right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Play className="h-5 w-5" />
        )}
      </button>

      {/* Beautiful Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-3 bg-white shadow-lg' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/75 hover:scale-125'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: 'width 0.3s ease-out'
          }}
        />
      </div>
    </div>
  )
}