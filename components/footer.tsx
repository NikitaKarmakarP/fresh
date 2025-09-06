import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/Logo.png"
                alt="HAPEF Logo"
                width={56}
                height={56}
                className="object-contain"
              />
              <span className="font-bold text-xl">HAPEF</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Humanitarian Aid for Poverty Eradication Foundation is dedicated to empowering rural communities through
              sustainable agriculture, mushroom farming, and community development programs across India.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bidyadharpur - Madsar Natunpally, Near Naba Sakti Sangha Club, P.O + P.S - Sonarpur, Kolkata - 700150</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 8240374731</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info.hapef@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-green-400 transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-green-400 transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub" className="hover:text-green-400 transition-colors">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-green-400 transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/programs/mushroom-entrepreneurship" className="hover:text-green-400 transition-colors">
                  Mushroom Farming
                </Link>
              </li>
              <li>
                <Link href="/programs/christmas-blanket-distribution" className="hover:text-green-400 transition-colors">
                  Blanket Distribution
                </Link>
              </li>
              <li>
                <Link href="/programs/climate-resilient-agriculture" className="hover:text-green-400 transition-colors">
                  Climate Resilient Agriculture
                </Link>
              </li>
              <li>
                <Link href="/programs/convergence" className="hover:text-green-400 transition-colors">
                  Convergence
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 HAPEF - Humanitarian Aid for Poverty Eradication Foundation. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1BqzZw9X6B/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/humanitarian-aid-for-poverty-eradication-foundation/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}