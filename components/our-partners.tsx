"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import { useRef } from "react"

export function OurPartners() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const partners = [
    {
      name: "Government of West Bengal",
      category: "Government Partner",
      logo: "🏛️",
      description: "Strategic partnership for rural development initiatives across West Bengal."
    },
    {
      name: "UNICEF India",
      category: "International Organization",
      logo: "🌍",
      description: "Collaboration on child welfare and education programs in rural communities."
    },
    {
      name: "Tata Trusts",
      category: "Corporate Foundation",
      logo: "🏢",
      description: "Supporting livelihood development and women empowerment programs."
    },
    {
      name: "Ford Foundation",
      category: "International Foundation",
      logo: "🌐",
      description: "Funding social justice and community development initiatives."
    },
    {
      name: "State Bank of India",
      category: "Financial Institution",
      logo: "🏦",
      description: "Financial inclusion and microfinance partnership for rural entrepreneurs."
    },
    {
      name: "Indian Institute of Technology",
      category: "Academic Institution",
      logo: "🎓",
      description: "Research collaboration on sustainable technology solutions."
    },
    {
      name: "Oxfam India",
      category: "NGO Partner",
      logo: "🤝",
      description: "Joint programs on poverty alleviation and disaster management."
    },
    {
      name: "Microsoft India",
      category: "Technology Partner",
      logo: "💻",
      description: "Digital literacy and technology access programs for rural communities."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-blue-600 rounded-full mr-3"></div>
            <span className="text-blue-600 font-semibold uppercase tracking-wide">Partnerships</span>
            <div className="w-12 h-1 bg-blue-600 rounded-full ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with diverse organizations to amplify our impact and create sustainable solutions for community development.
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="mb-16">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                  <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {partner.logo}
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {partner.name}
                      </CardTitle>
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {partner.category}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-sm leading-relaxed">
                        {partner.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

      </div>
    </section>
  )
}