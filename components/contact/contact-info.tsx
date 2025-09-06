import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="p-10 lg:p-16 bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-2xl shadow-sm rounded-2xl">
        <CardContent className="space-y-10 p-10">
          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="h-7 w-7 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                Humanitarian Aid for Poverty Eradication Foundation
                <br />
                Bidyadharpur - Madsar Natunpally, Near Naba Sakti Sangha Club
                <br />
                P.O + P.S - Sonarpur, Kolkata - 700150
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="h-7 w-7 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-700 text-base">+91&nbsp;XXXX&nbsp;XXXXXX</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="h-7 w-7 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-700 text-base">info@hapef.org</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex gap-5">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-green-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
