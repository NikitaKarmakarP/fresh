import { Card, CardContent } from "@/components/ui/card"
import { Camera, Users, Heart, Target } from "lucide-react"

export function ImageGallery() {
  const galleryImages = [
    {
      src: "/ses1.jpg",
      alt: "HAPEF team working with rural community members",
      title: "Community Engagement",
      description: "Working directly with rural families to understand their needs and challenges",
      icon: Users,
    },
    {
      src: "/ses2.jpg",
      alt: "Agricultural training session with farmers",
      title: "Knowledge Transfer",
      description: "Sharing innovative agricultural techniques with local farmers",
      icon: Target,
    },
    {
      src: "/ses3.jpg",
      alt: "Women empowerment program in action",
      title: "Women Empowerment",
      description: "Empowering women through skill development and entrepreneurship programs",
      icon: Heart,
    },
    {
      src: "/ses4.jpg",
      alt: "Sustainable farming practices demonstration",
      title: "Sustainable Practices",
      description: "Demonstrating eco-friendly farming methods for long-term sustainability",
      icon: Camera,
    },
  ]

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-sm mb-6">
            <Camera className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Our Work in Action</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Moments of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Impact & Change
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Witness the transformative power of community-driven development through these glimpses of our work 
            across rural India, where every interaction creates lasting positive change.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {galleryImages.map((image, index) => {
            const IconComponent = image.icon
            return (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="h-5 w-5" />
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                    </div>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{image.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{image.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Be Part of Our Story
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every image tells a story of transformation, hope, and sustainable change. 
            Join us in creating more such moments of impact across rural India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
              View Our Programs
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGallery