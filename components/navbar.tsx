"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isKnowledgeHubOpen, setIsKnowledgeHubOpen] = useState(false)
  const [isMediaRoomOpen, setIsMediaRoomOpen] = useState(false)
  const [isNewsEventsOpen, setIsNewsEventsOpen] = useState(false)
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false)
  const [isLeadershipOpen, setIsLeadershipOpen] = useState(false)
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false)
  const [isThematicAreasOpen, setIsThematicAreasOpen] = useState(false)
  const [isOurImpactOpen, setIsOurImpactOpen] = useState(false)
  const [isOurInternsOpen, setIsOurInternsOpen] = useState(false)

  const programs = [
    {
      title: "Mushroom Entrepreneurship Program",
      href: "/programs/mushroom-entrepreneurship",
    },
    {
      title: "Christmas Blanket Distribution",
      href: "/programs/christmas-blanket-distribution",
    },
    {
      title: "Climate-Resilient Agriculture & BRC",
      href: "/programs/climate-resilient-agriculture",
    },
    {
      title: "Convergence",
      href: "/programs/convergence",
    },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center -ml-6 sm:-ml-8 lg:-ml-12">
            <Link href="/" className="flex items-center space-x-1">
              <img 
                src="/Logo.png" 
                alt="HAPEF Logo" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <span className="font-bold text-xl md:text-2xl text-gray-900">HAPEF</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            
            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors py-2">
                About Us
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">About Us</h4>
                  </div>

                  {/* Main About Us Link */}
                  <Link
                    href="/about#overview"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-blue-600">Overview</div>
                    </div>
                  </Link>

                  {/* Our Story */}
                  <Link
                    href="/about#our-story"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-green-600">Our Story</div>
                    </div>
                  </Link>

                  {/* Timeline */}
                  <Link
                    href="/about#timeline"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-purple-600">Our Timeline</div>
                    </div>
                  </Link>

                  {/* Leadership with Sub-dropdown */}
                  <div className="relative group/leadership">
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer mb-1">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">Leadership Team</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for Leadership */}
                    <div className="absolute left-full top-0 ml-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/leadership:opacity-100 group-hover/leadership:visible transition-all duration-300 z-50">
                      <div className="p-3">
                        <h5 className="font-medium text-gray-900 mb-2">Leadership Team</h5>
                        <div className="space-y-1">
                          <Link
                            href="/about#executive-team"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">
                              Executive Team
                            </div>
                          </Link>
                          <Link
                            href="/about#board-directors"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">
                              Board of Directors
                            </div>
                          </Link>
                          <Link
                            href="/about#advisory-board"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-purple-600 text-sm">
                              Advisory Board
                            </div>
                          </Link>
                          <Link
                            href="/about#our-interns"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-orange-600 text-sm">
                              Our Interns
                            </div>
                          </Link>
                          <Link
                            href="/about#our-notable-interns"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-orange-600 text-sm">
                              Our Notable Interns
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recognition */}
                  <Link
                    href="/about#recognition"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-red-600">
                        Recognition & Awards
                      </div>
                    </div>
                  </Link>

                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <Link
                      href="/about"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      View Complete About Us
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Do Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors py-2">
                What We Do
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Do</h4>
                  </div>

                  {/* Thematic Areas Sub-dropdown */}
                  <div className="relative group/thematic">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">Thematic Areas</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for Thematic Areas */}
                    <div className="absolute left-full top-0 ml-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/thematic:opacity-100 group-hover/thematic:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 mb-3">Thematic Areas</h5>
                        <div className="space-y-1">
                          <Link
                            href="/thematic-areas/empowering-communities"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">
                              Empowering Communities
                            </div>
                          </Link>
                          <Link
                            href="/thematic-areas/livelihoods"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">
                              Livelihoods
                            </div>
                          </Link>
                          <Link
                            href="/thematic-areas/environment-sustainability"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">
                              Environment Sustainability & Disaster Management
                            </div>
                          </Link>
                          <Link
                            href="/thematic-areas/enterprise-marketing"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">
                              Enterprise & Marketing Linkages
                            </div>
                          </Link>
                          <Link
                            href="/thematic-areas/strategic-partnerships"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">
                              Strategic Partnerships
                            </div>
                          </Link>
                        </div>
                        <div className="pt-3 mt-3 border-t border-gray-200">
                          <Link
                            href="/thematic-areas"
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                          >
                            View All Thematic Areas
                            <ChevronRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Our Projects Sub-dropdown */}
                  <div className="relative group/projects">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">Our Programs</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for Projects */}
                    <div className="absolute left-full top-0 ml-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/projects:opacity-100 group-hover/projects:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 mb-3">Our Programs</h5>
                        <div className="space-y-1">
                          {programs.map((program) => (
                            <Link
                              key={program.href}
                              href={program.href}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                            >
                              <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">
                                {program.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="pt-3 mt-3 border-t border-gray-200">
                          <Link
                            href="/programs"
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                          >
                            View All Programs
                            <ChevronRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <Link
                      href="/programs"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      View All What We Do
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Impact Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors py-2">
                Our Impact
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Impact</h4>
                  </div>

                  {/* Impact Stats */}
                  <Link
                    href="/impact#impact-by-numbers"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-green-600">Impact Stats</div>
                    </div>
                  </Link>

                  {/* Stories of Transformation */}
                  <Link
                    href="/impact#stories-of-transformation"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-blue-600">Stories of Transformation</div>
                    </div>
                  </Link>

                  {/* Impact Map */}
                  <Link
                    href="/impact#geographic-impact"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-purple-600">Impact Map</div>
                    </div>
                  </Link>

                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <Link
                      href="/impact"
                      className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center"
                    >
                      View Complete Impact
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Knowledge Hub Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors py-2">
                Knowledge Hub
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Knowledge Hub</h4>
                  </div>

                  <div className="relative group/resources">
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer mb-1">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">Resources & Guides</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for Resources & Guides */}
                    <div className="absolute left-full top-0 ml-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/resources:opacity-100 group-hover/resources:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 mb-3">Resources & Guides</h5>
                        <div className="space-y-1">
                          <Link
                            href="/knowledge-hub/newsletters"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">All Resources</div>
                            <div className="text-xs text-gray-500">Browse all downloadable resources</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/annual-reports"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">Annual Reports</div>
                            <div className="text-xs text-gray-500">Yearly impact and financial summaries</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group/media">
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer mb-1">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">Media Room</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for Media Room */}
                    <div className="absolute left-full top-0 ml-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/media:opacity-100 group-hover/media:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 mb-3">Media Room</h5>
                        <div className="space-y-1">
                          <Link
                            href="/knowledge-hub/media-room/press-releases"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">Press Releases</div>
                            <div className="text-xs text-gray-500">Latest announcements and updates</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/photo-gallery"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">Photo Gallery</div>
                            <div className="text-xs text-gray-500">Images from our programs and events</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/video-library"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">Video Library</div>
                            <div className="text-xs text-gray-500">Training videos and documentaries</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/media-coverage"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">Media Coverage</div>
                            <div className="text-xs text-gray-500">News articles and features</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group/news">
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer mb-1">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">News & Events</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for News & Events */}
                    <div className="absolute left-full top-0 ml-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/news:opacity-100 group-hover/news:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 mb-3">News & Events</h5>
                        <div className="space-y-1">
                          <Link
                            href="/knowledge-hub/news-events/latest-news"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-purple-600 text-sm">Latest News</div>
                            <div className="text-xs text-gray-500">Recent updates and announcements</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/upcoming-events"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-purple-600 text-sm">Upcoming Events</div>
                            <div className="text-xs text-gray-500">Workshops, training, and community events</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/past-events"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-purple-600 text-sm">Past Events</div>
                            <div className="text-xs text-gray-500">Archive of completed events</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/newsletters"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-purple-600 text-sm">Newsletters</div>
                            <div className="text-xs text-gray-500">Monthly updates and stories</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <Link
                      href="/knowledge-hub"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      View All Knowledge Hub
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/get-involved" className="text-gray-700 hover:text-green-600 transition-colors">
              Get Involved
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact Us
            </Link>
            <Link href="/donate" aria-label="Donate Now">
              <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30 hover:from-emerald-600 hover:to-green-700 transition-all duration-200 px-5 py-2 md:px-6 md:py-2.5">
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/20 group-hover:translate-x-0 transition-transform duration-300"></span>
                <HeartHandshake className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Home
              </Link>

              {/* About Us Mobile */}
              <div>
                <button
                  onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-green-600"
                >
                  <span>About Us</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isAboutUsOpen ? "rotate-180" : ""}`} />
                </button>

                {isAboutUsOpen && (
                  <div className="mt-1 pl-4 space-y-1">
                    <Link
                      href="/about#overview"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        Overview
                      </div>
                    </Link>
                    <Link
                      href="/about#our-story"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        Our Story
                      </div>
                    </Link>
                    <Link
                      href="/about#timeline"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                        Our Timeline
                      </div>
                    </Link>

                    {/* Leadership Mobile Sub-menu */}
                    <div>
                      <button
                        onClick={() => setIsLeadershipOpen(!isLeadershipOpen)}
                        className="flex items-center justify-between w-full py-2 text-sm text-gray-600 hover:text-green-600"
                      >
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                          Leadership Team
                        </div>
                        <ChevronDown className={`h-3 w-3 transition-transform ${isLeadershipOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isLeadershipOpen && (
                        <div className="mt-1 pl-4 space-y-1">
                          <Link
                            href="/about#executive-team"
                            className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Executive Team
                          </Link>
                          <Link
                            href="/about#board-directors"
                            className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Board of Directors
                          </Link>
                          <Link
                            href="/about#advisory-board"
                            className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Advisory Board
                          </Link>
                          <Link
                            href="/about#our-interns"
                            className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Our Interns
                          </Link>
                          <Link
                            href="/about#our-notable-interns"
                            className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Our Notable Interns
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      href="/about#recognition"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        Recognition & Awards
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* What We Do Mobile */}
              <div>
                <button
                  onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-green-600"
                >
                  <span>What We Do</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isWhatWeDoOpen ? "rotate-180" : ""}`} />
                </button>

                {isWhatWeDoOpen && (
                  <div className="mt-1 pl-4 space-y-1">
                    {/* Thematic Areas Mobile Sub-menu */}
                    <div>
                      <button
                        onClick={() => setIsThematicAreasOpen(!isThematicAreasOpen)}
                        className="flex items-center justify-between w-full py-2 text-sm text-gray-600 hover:text-green-600"
                      >
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          Thematic Areas
                        </div>
                        <ChevronDown className={`h-3 w-3 transition-transform ${isThematicAreasOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isThematicAreasOpen && (
                        <div className="mt-1 pl-4 space-y-1">
                          <Link
                            href="/thematic-areas/empowering-communities"
                            className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Empowering Communities
                          </Link>
                          <Link
                            href="/thematic-areas/livelihoods"
                            className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Livelihoods
                          </Link>
                          <Link
                            href="/thematic-areas/environment-sustainability"
                            className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Environment Sustainability & Disaster Management
                          </Link>
                          <Link
                            href="/thematic-areas/enterprise-marketing"
                            className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Enterprise & Marketing Linkages
                          </Link>
                          <Link
                            href="/thematic-areas/strategic-partnerships"
                            className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Strategic Partnerships
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Our Projects Mobile Sub-menu */}
                    <div>
                      <button
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        className="flex items-center justify-between w-full py-2 text-sm text-gray-600 hover:text-green-600"
                      >
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                          Our Programs
                        </div>
                        <ChevronDown className={`h-3 w-3 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isProjectsOpen && (
                        <div className="mt-1 pl-4 space-y-1">
                          {programs.map((program) => (
                            <Link
                              key={program.href}
                              href={program.href}
                              className="block py-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {program.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Knowledge Hub Mobile */}
              <div>
                <button
                  onClick={() => setIsKnowledgeHubOpen(!isKnowledgeHubOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-green-600"
                >
                  <span>Knowledge Hub</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isKnowledgeHubOpen ? "rotate-180" : ""}`} />
                </button>

                {isKnowledgeHubOpen && (
                  <div className="mt-1 pl-4 space-y-1">
                    <Link
                      href="/knowledge-hub/newsletters"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        Newsletters
                      </div>
                    </Link>
                    <div>
                      <button
                        onClick={() => setIsMediaRoomOpen(!isMediaRoomOpen)}
                        className="flex items-center justify-between w-full py-2 text-sm text-gray-600 hover:text-green-600"
                      >
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                          Media Room
                        </div>
                        <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${isMediaRoomOpen ? "rotate-90" : ""}`} />
                      </button>

                      {isMediaRoomOpen && (
                        <div className="mt-1 pl-4 space-y-1">
                          <Link
                            href="/knowledge-hub/media-room/press-releases"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                              Press Releases
                            </div>
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/photo-gallery"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                              Photo Gallery
                            </div>
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/video-library"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                              Video Library
                            </div>
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/media-coverage"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                              Media Coverage
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div>
                      <button
                        onClick={() => setIsNewsEventsOpen(!isNewsEventsOpen)}
                        className="flex items-center justify-between w-full py-2 text-sm text-gray-600 hover:text-green-600"
                      >
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                          News & Events
                        </div>
                        <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${isNewsEventsOpen ? "rotate-90" : ""}`} />
                      </button>

                      {isNewsEventsOpen && (
                        <div className="mt-1 pl-4 space-y-1">
                          <Link
                            href="/knowledge-hub/news-events/latest-news"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                              Latest News
                            </div>
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/upcoming-events"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                              Upcoming Events
                            </div>
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/past-events"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                              Past Events
                            </div>
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/newsletters"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                              Newsletters
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Our Impact Section */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsOurImpactOpen(!isOurImpactOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-green-600 font-medium"
                >
                  Our Impact
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOurImpactOpen ? "rotate-180" : ""}`} />
                </button>

                {isOurImpactOpen && (
                  <div className="mt-2 pl-4">
                    {/* Impact Stats */}
                    <Link
                      href="/impact#impact-by-numbers"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        Impact Stats
                      </div>
                    </Link>

                    {/* Stories of Transformation */}
                    <Link
                      href="/impact#stories-of-transformation"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        Stories of Transformation
                      </div>
                    </Link>

                    {/* Impact Map */}
                    <Link
                      href="/impact#geographic-impact"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                        Impact Map
                      </div>
                    </Link>

                    {/* View Complete Impact */}
                    <div className="pt-2 mt-2 border-t border-gray-200">
                      <Link
                        href="/impact"
                        className="block py-2 text-sm text-green-600 hover:text-green-700 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center">
                          View Complete Impact
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Get Involved Mobile */}
              <div>
                <button
                  onClick={() => setIsGetInvolvedOpen(!isGetInvolvedOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-green-600"
                >
                  <span>Get Involved</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isGetInvolvedOpen ? "rotate-180" : ""}`} />
                </button>

                {isGetInvolvedOpen && (
                  <div className="mt-1 pl-4 space-y-1">
                    <Link
                      href="/get-involved/volunteer"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        Volunteer
                      </div>
                    </Link>

                    <Link
                      href="/get-involved/internship"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        Internship
                      </div>
                    </Link>

                    <Link
                      href="/get-involved/partner"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                        Partner with Us
                      </div>
                    </Link>

                    <Link
                      href="/get-involved/corporate-csr"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        Corporate CSR
                      </div>
                    </Link>

                    <Link
                      href="/get-involved/fundraising"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                        Fundraising Events
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Contact Us
              </Link>
              <div className="px-3 py-2">
                <Link href="/donate" aria-label="Donate Now">
                  <Button className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md shadow-emerald-500/20 hover:from-emerald-600 hover:to-green-700 transition-all duration-200 px-5 py-3">
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/20 group-hover:translate-x-0 transition-transform duration-300"></span>
                    <div className="flex items-center justify-center">
                      <HeartHandshake className="mr-2 h-4 w-4" />
                      Donate Now
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}