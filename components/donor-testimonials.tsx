"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote, Star } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import { useRef } from "react"

export function DonorTestimonials() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Corporate Foundation Director",
      organization: "Kumar Industries Foundation",
      image: "👨‍💼",
      rating: 5,
      testimonial: "HAPEF's transparent approach and measurable impact convinced us to become long-term partners. Their work in rural development is truly transformational.",
      donationAmount: "₹50 Lakhs",
      program: "Livelihood Development"
    },
    {
      name: "Ms. Priya Sharma",
      title: "Individual Philanthropist",
      organization: "Social Impact Investor",
      image: "👩‍💼",
      rating: 5,
      testimonial: "I've been supporting HAPEF for 3 years now. Their community-centered approach and regular updates give me confidence that my donations are making real difference.",
      donationAmount: "₹2 Lakhs",
      program: "Education & Skill Development"
    },
    {
      name: "Mr. Amit Patel",
      title: "CEO",
      organization: "TechCorp Solutions",
      image: "👨‍💻",
      rating: 5,
      testimonial: "Through our CSR partnership with HAPEF, we've seen incredible results. The digital literacy program we funded has empowered over 1000 rural youth.",
      donationAmount: "₹75 Lakhs",
      program: "Digital Literacy Initiative"
    },
    {
      name: "Mrs. Sunita Devi",
      title: "Retired Teacher",
      organization: "Individual Donor",
      image: "👩‍🏫",
      rating: 5,
      testimonial: "Even my small monthly contribution feels meaningful with HAPEF. They show exactly how my ₹1000 helps educate children in remote villages.",
      donationAmount: "₹12,000/year",
      program: "Child Education Support"
    },
    {
      name: "Dr. Michael Johnson",
      title: "International Development Expert",
      organization: "Global Impact Foundation",
      image: "👨‍⚕️",
      rating: 5,
      testimonial: "HAPEF's innovative approaches to community development align perfectly with our global mission. Their impact measurement is world-class.",
      donationAmount: "$25,000",
      program: "Environment Sustainability"
    },
    {
      name: "Ms. Kavita Singh",
      title: "Social Entrepreneur",
      organization: "Women's Empowerment Fund",
      image: "👩‍💼",
      rating: 5,
      testimonial: "The women's empowerment programs funded through HAPEF have created ripple effects across entire communities. Truly inspiring work!",
      donationAmount: "₹30 Lakhs",
      program: "Women Entrepreneurship"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-green-600 rounded-full mr-3"></div>
            <span className="text-green-600 font-semibold uppercase tracking-wide">Testimonials</span>
            <div className="w-12 h-1 bg-green-600 rounded-full ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-green-600">Donors Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our valued donors and partners about their experience supporting our mission and the impact they've witnessed.
          </p>
        </div>

        {/* Testimonials Carousel */}
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 h-full">
                    <CardHeader>
                      {/* Quote Icon and Rating */}
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="w-8 h-8 text-green-600 opacity-60" />
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                        "{testimonial.testimonial}"
                      </blockquote>
                    </CardHeader>

                    <CardContent>
                      {/* Program & Donation Info */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Program:</span>
                          <span className="font-medium text-green-700">{testimonial.program}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm mt-2">
                          <span className="text-gray-600">Contribution:</span>
                          <span className="font-bold text-green-600">{testimonial.donationAmount}</span>
                        </div>
                      </div>

                      {/* Donor Info */}
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center text-2xl mr-4">
                          {testimonial.image}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-green-600 font-medium text-sm">{testimonial.title}</p>
                          <p className="text-gray-500 text-sm">{testimonial.organization}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/90 hover:bg-white border-green-200 text-green-600" />
            <CarouselNext className="right-0 bg-white/90 hover:bg-white border-green-200 text-green-600" />
          </Carousel>
        </div>

        {/* Impact Stats removed from homepage */}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join Our Community of Changemakers
            </h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Your support can transform lives and communities. Start your journey of impact with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                  Donate Now
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}