"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Users,
  Briefcase,
  MapPinIcon,
  Calendar,
  DollarSign,
  Filter,
  Upload,
  ArrowRight,
  Heart,
  TrendingUp,
  Shield,
  Target,
  CheckCircle,
  Send
} from "lucide-react"

export default function GetInvolvedPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")

  const jobPositions = [
    {
      id: 1,
      title: "Program Manager - Rural Development",
      department: "Programs",
      location: "Kolkata, West Bengal",
      type: "Full-time",
      salary: "₹8-12 LPA",
      experience: "5-8 years experience",
      posted: "1/15/2024",
      urgent: true,
      description: "Lead and manage rural development programs focusing on sustainable agriculture and community empowerment."
    },
    {
      id: 2,
      title: "Agricultural Specialist",
      department: "Agriculture",
      location: "Remote",
      type: "Full-time",
      salary: "₹6-9 LPA",
      experience: "3-5 years experience",
      posted: "1/10/2024",
      urgent: false,
      remote: true,
      description: "Provide technical expertise in sustainable agriculture practices and mushroom cultivation techniques."
    },
    {
      id: 3,
      title: "Community Outreach Coordinator",
      department: "Community Development",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "₹4-6 LPA",
      experience: "2-4 years experience",
      posted: "1/8/2024",
      urgent: true,
      description: "Build relationships with rural communities and coordinate outreach programs."
    },
    {
      id: 4,
      title: "Marketing & Communications Intern",
      department: "Communications",
      location: "Kolkata, West Bengal",
      type: "Internship",
      salary: "₹15,000/month",
      experience: "0-1 years experience",
      posted: "1/5/2024",
      urgent: false,
      description: "Support marketing and communications efforts to raise awareness about our programs."
    },
    {
      id: 5,
      title: "Finance & Operations Manager",
      department: "Finance",
      location: "Kolkata, West Bengal",
      type: "Full-time",
      salary: "₹7-10 LPA",
      experience: "4-6 years experience",
      posted: "1/3/2024",
      urgent: false,
      description: "Manage financial operations, budgeting, and ensure compliance with NGO regulations."
    }
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Submit Application",
      duration: "5 minutes",
      description: "Fill out our online application form with your details and upload your resume"
    },
    {
      step: 2,
      title: "Application Review",
      duration: "3-5 business days",
      description: "Our HR team reviews your application and qualifications"
    },
    {
      step: 3,
      title: "Initial Interview",
      duration: "30-45 minutes",
      description: "Phone or video interview to discuss your background and interest"
    },
    {
      step: 4,
      title: "Final Interview",
      duration: "1-2 hours",
      description: "In-person or video interview with the hiring manager and team"
    },
    {
      step: 5,
      title: "Offer & Onboarding",
      duration: "1-2 weeks",
      description: "Receive offer letter and begin the onboarding process"
    }
  ]

  const applicationTips = [
    "Tailor your cover letter to the specific position and our mission",
    "Highlight relevant experience in rural development or NGO sector",
    "Include specific examples of your impact in previous roles",
    "Demonstrate your passion for community development"
  ]

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: "Purpose-Driven Work",
      description: "Every day, you'll contribute to meaningful change in rural communities",
      features: [
        "Direct impact on community development",
        "Work with passionate professionals",
        "Continuous learning opportunities"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Growth & Development",
      description: "Advance your career while making a positive impact",
      features: [
        "Professional development programs",
        "Mentorship and training opportunities",
        "Career advancement pathways"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Supportive Environment",
      description: "Work in a collaborative and inclusive team culture",
      features: [
        "Flexible work arrangements",
        "Health and wellness benefits",
        "Inclusive and diverse workplace"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-40"></div>
          <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-lg mb-8">
              <Briefcase className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-800 tracking-wide">Join Our Mission</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-600 to-blue-700 drop-shadow-lg">
                Build Your Career
              </span>
              <span className="block text-gray-900 text-4xl lg:text-5xl mt-4 font-bold">
                With Purpose
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
              Join our dedicated team working to transform rural communities through sustainable development, innovative agricultural programs, and community empowerment initiatives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  <Target className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Learn How to Apply
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
                <div className="text-sm text-gray-600 font-medium">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Remote Friendly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Open Positions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and make a difference in rural communities across India. Find the perfect role that matches your skills and passion.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12 p-6 bg-gray-50 rounded-2xl">
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Departments">All Departments</SelectItem>
                <SelectItem value="Programs">Programs</SelectItem>
                <SelectItem value="Agriculture">Agriculture</SelectItem>
                <SelectItem value="Community Development">Community Development</SelectItem>
                <SelectItem value="Communications">Communications</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Types">All Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Locations">All Locations</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="Kolkata, West Bengal">Kolkata, West Bengal</SelectItem>
                <SelectItem value="Multiple Locations">Multiple Locations</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="text-gray-600">
              Clear Filters
            </Button>
          </div>

          {/* Job Listings */}
          <div className="space-y-6 mb-12">
            {jobPositions.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        {job.urgent && (
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                            Urgent
                          </Badge>
                        )}
                        {job.remote && (
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                            Remote
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{job.experience}</span>
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                    
                    <div className="lg:ml-8">
                      <Button className="w-full lg:w-auto bg-emerald-600 hover:bg-emerald-700">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center text-gray-600">
            Showing 5 of 5 positions
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our application process is designed to be simple and transparent. Follow these steps to join our team and make a difference.
            </p>
          </div>

          {/* Application Process */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Application Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={step.step} className="text-center relative">
                  {index < applicationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-emerald-200 transform -translate-y-1/2 z-0"></div>
                  )}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-emerald-600 font-medium mb-2">{step.duration}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Tips */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Tips</h3>
            <p className="text-gray-600 mb-6">Make your application stand out with these helpful tips</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applicationTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quick Application
            </h2>
            <p className="text-xl text-gray-600">
              Start your application process by filling out this form
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      className="mt-1"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      className="mt-1"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-1"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="mt-1"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="position" className="text-sm font-medium text-gray-700">
                      Position of Interest *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="program-manager">Program Manager - Rural Development</SelectItem>
                        <SelectItem value="agricultural-specialist">Agricultural Specialist</SelectItem>
                        <SelectItem value="community-coordinator">Community Outreach Coordinator</SelectItem>
                        <SelectItem value="marketing-intern">Marketing & Communications Intern</SelectItem>
                        <SelectItem value="finance-manager">Finance & Operations Manager</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                      Years of Experience *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-4">2-4 years</SelectItem>
                        <SelectItem value="5-8">5-8 years</SelectItem>
                        <SelectItem value="8+">8+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="resume" className="text-sm font-medium text-gray-700">
                    Resume/CV *
                  </Label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, DOC, or DOCX (max 5MB)</p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="coverLetter" className="text-sm font-medium text-gray-700">
                    Cover Letter
                  </Label>
                  <Textarea
                    id="coverLetter"
                    className="mt-1"
                    rows={4}
                    placeholder="Tell us why you're interested in this position and how you can contribute to our mission..."
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio" className="text-sm font-medium text-gray-700">
                    Portfolio/Website (Optional)
                  </Label>
                  <Input
                    id="portfolio"
                    type="url"
                    className="mt-1"
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                <div>
                  <Label htmlFor="hearAbout" className="text-sm font-medium text-gray-700">
                    How did you hear about us?
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Our Website</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="indeed">Indeed</SelectItem>
                      <SelectItem value="referral">Employee Referral</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Application
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this application, you agree to our privacy policy and consent to being contacted regarding your application.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Ready to Make a Difference?
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Join our dedicated team and help us transform rural communities through sustainable development, innovative programs, and community empowerment initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4"
              >
                View Open Positions
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4"
              >
                Start Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our HR team is here to help. Reach out to us for any questions about our positions, application process, or working at HAPEF.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-emerald-600 font-medium">careers@hapef.org</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-blue-600 font-medium">+91 98765 43210</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-purple-600 font-medium">Kolkata, West Bengal</p>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow us for updates</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay connected with us on social media to get the latest updates about new positions, team events, and our impact in rural communities.
            </p>
            
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Facebook className="w-6 h-6 text-blue-600" />
              </a>
              <a href="#" className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Twitter className="w-6 h-6 text-blue-600" />
              </a>
              <a href="#" className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-200 transition-colors">
                <Instagram className="w-6 h-6 text-pink-600" />
              </a>
              <a href="#" className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}