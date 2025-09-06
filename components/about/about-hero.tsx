"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Heart, Sparkles, Award, Globe, Sprout, BookOpen, Briefcase, GraduationCap, Mail, Linkedin, Eye, Star, TrendingUp, Lightbulb, Shield, Zap, Leaf, Building, UserCheck, Calendar, MapPin, Network, Handshake, Cpu, BookOpenCheck, Layers, BarChart3 } from "lucide-react"

export function AboutHero() {
  return (
    <section
      id="overview"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-40"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Beautiful & Clean */}
          <div className="space-y-8">
            {/* Elegant badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-lg">
              <Heart className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-800 tracking-wide">About HAPEF</span>
              <Sparkles className="h-4 w-4 text-emerald-500" />
            </div>

            {/* Beautiful title */}
            <div className="space-y-6 relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-sm"></div>
              <div className="absolute -top-2 -right-8 w-4 h-4 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-sm"></div>
              
              <h1 className="relative text-5xl lg:text-7xl font-bold leading-tight">
                {/* Main empowering text with enhanced gradient */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-600 via-teal-600 to-blue-700 drop-shadow-lg">
                  Empowering
                </span>
                
                {/* Rural Communities with beautiful styling */}
                <span className="block text-gray-900 text-4xl lg:text-5xl mt-4 font-bold">
                  Rural Communities
                </span>
                
                {/* Enhanced decorative flourish */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full shadow-xl shadow-emerald-500/40"></div>
                  <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-teal-500 rounded-full shadow-lg shadow-green-400/30"></div>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                </div>
              </h1>
            </div>

            {/* Elegant description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              HAPEF (Humanitarian Action for Poverty Eradication Foundation) is dedicated to creating sustainable pathways out of poverty for rural communities across India through innovative agricultural programs, community empowerment, and holistic development approaches.
            </p>

            {/* Beautiful buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  Our Programs
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
                  View Impact
                </span>
              </Button>
            </div>
          </div>

          {/* Right Content - Beautiful Image */}
          <div className="relative group -mt-8">
            {/* Main image with elegant styling */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img
                src="/a1.jpg"
                alt="HAPEF team working with rural community members"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating elegant cards */}
            <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Community Driven</div>
                  <div className="text-sm text-emerald-600 font-medium">Grassroots Approach</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Sustainable Impact</div>
                  <div className="text-sm text-blue-600 font-medium">Long-term Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>









        {/* Our Story Section - Enhanced Beautiful Design */}
        <div className="mt-32 relative overflow-hidden">
          {/* Beautiful background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-sm"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced Story Header */}
            <div className="text-center mb-20 relative">
              {/* Decorative elements around header */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-xl"></div>
              
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-200/60 shadow-xl mb-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-bold text-blue-800 tracking-wider uppercase">Our Story</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <div className="relative">
                <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 relative">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-green-600 via-emerald-500 to-purple-600 drop-shadow-sm">
                    Our Journey
                  </span>
                  
                  {/* Beautiful underline decoration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg shadow-blue-400/40 animate-pulse"></div>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                  </div>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-8">
                  From humble beginnings to transformative impact - discover how HAPEF evolved into a beacon of hope for rural communities across India.
                </p>
              </div>
            </div>

            {/* Enhanced Story Content with Image */}
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
              {/* Left Content - Enhanced Story Text */}
              <div className="space-y-8 relative">
                {/* Subtle background decoration */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-lg"></div>
                
                <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-blue-100/50 shadow-xl">
                  <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                    <p className="relative">
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">HAPEF</span> was born from a simple yet powerful vision: to create sustainable pathways out of poverty for rural communities across India. Founded in 2022 by a group of passionate social workers and agricultural experts, our organization emerged from the recognition that traditional charity models, while well-intentioned, often failed to create lasting change.
                    </p>
                    <p>
                      Our founders spent years working directly with rural communities, learning about their challenges, strengths, and aspirations. This grassroots experience shaped our core philosophy: true development must be <span className="font-semibold text-emerald-600">community-driven, sustainable, and respectful</span> of local knowledge and traditions.
                    </p>
                    <p>
                      Starting with a small pilot program in mushroom cultivation in 2022, we quickly realized the transformative power of combining traditional agricultural wisdom with modern techniques. What began as a single-village initiative has grown into a comprehensive development program reaching over <span className="font-bold text-purple-600">50 villages</span> across multiple states in just two years.
                    </p>
                    <p>
                      Our rapid expansion demonstrates both the urgent need for our services and the effectiveness of our community-centered approach, building strong foundations for sustainable development work.
                    </p>
                  </div>
                </div>


              </div>

              {/* Right Content - Enhanced Story Image */}
              <div className="relative group">
                {/* Enhanced main image with beautiful styling */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 transform group-hover:-rotate-1">
                  <img
                    src="/our.jpg"
                    alt="HAPEF founders working with rural community members in the field"
                    className="w-full h-[450px] lg:h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Enhanced overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Enhanced floating story cards */}
                <div className="absolute -top-12 -left-8 bg-gradient-to-br from-white/70 to-blue-50/70 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-blue-200/40 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:rotate-2">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl">
                      <Sprout className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Grassroots Origin</div>
                      <div className="text-sm text-blue-600 font-semibold">Community-Driven Start</div>
                      <div className="text-xs text-blue-500 mt-1">From the ground up</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-12 -right-8 bg-gradient-to-br from-white/70 to-purple-50/70 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-purple-200/40 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-2">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-xl">
                      <TrendingUp className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Rapid Growth</div>
                      <div className="text-sm text-purple-600 font-semibold">Expanding Impact</div>
                      <div className="text-xs text-purple-500 mt-1">Scaling success</div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        {/* Beautiful Mission Section */}
        <div className="mt-32 text-center relative">
          {/* Elegant background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-white/80 to-blue-50/50 rounded-3xl backdrop-blur-sm"></div>
          
          <div className="relative z-10 py-16 px-8">
            {/* Mission header */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-lg mb-8">
                <Sparkles className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-800 tracking-wide uppercase">Our Mission</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-blue-600">
                  Transforming Lives
                </span>
                <span className="block text-gray-900 mt-2">Through Sustainable Development</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-5xl mx-auto">
                To eradicate rural poverty through sustainable agricultural practices, community empowerment, and
                innovative development programs that respect local knowledge while introducing modern techniques for
                lasting positive change.
              </p>
            </div>

            {/* Beautiful value cards */}
            <div className="grid md:grid-cols-3 gap-10">
              <div className="group text-center hover:-translate-y-2 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">Community First</h3>
                <p className="text-gray-600 leading-relaxed text-lg">Putting communities at the center of all our development initiatives with participatory approaches</p>
              </div>

              <div className="group text-center hover:-translate-y-2 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="h-3 w-3 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Sustainable Solutions</h3>
                <p className="text-gray-600 leading-relaxed text-lg">Creating long-term impact through environmentally conscious practices and innovative technologies</p>
              </div>

              <div className="group text-center hover:-translate-y-2 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Holistic Development</h3>
                <p className="text-gray-600 leading-relaxed text-lg">Addressing multiple aspects of rural life for comprehensive growth and sustainable transformation</p>
              </div>

            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="mt-32">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full mb-8">
              <Target className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Our Vision</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                A World Where Every
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Rural Family Thrives
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
              We envision a future where every rural family has access to sustainable livelihoods, food security, and the opportunity to thrive through dignified work and community support.
            </p>
          </div>

          {/* Vision Content */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Vision Text */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 lg:p-12 border border-blue-100">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Our Vision for the Future
                  </span>
                </h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    At HAPEF, we dream of a world where rural communities are not just surviving, but <span className="font-semibold text-blue-600">thriving</span>. A world where every family has access to sustainable agricultural practices, modern technology, and the knowledge to build prosperous futures.
                  </p>
                  <p>
                    We envision villages transformed into <span className="font-semibold text-indigo-600">hubs of innovation</span>, where traditional wisdom meets modern solutions, creating a sustainable model that can be replicated across India and beyond.
                  </p>
                </div>
              </div>

              {/* Right Column - Vision Cards */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl">
                      <Sprout className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Sustainable Livelihoods</h4>
                  </div>
                  <p className="text-gray-600">Creating lasting economic opportunities for rural families</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Food Security</h4>
                  </div>
                  <p className="text-gray-600">Ensuring every family has access to nutritious food</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                    <div className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Families Empowered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section - Enhanced Beautiful Design */}
        <div className="mt-32 relative overflow-hidden">
          {/* Beautiful background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-emerald-300 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-rose-300 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-emerald-200/30 to-rose-200/30 rounded-full blur-sm"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced Values Header */}
            <div className="text-center mb-20 relative">
              {/* Decorative elements around header */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-emerald-100/50 to-rose-100/50 rounded-full blur-xl"></div>
              
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-white/95 to-emerald-50/95 backdrop-blur-sm px-8 py-4 rounded-full border border-emerald-200/60 shadow-xl mb-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-bold text-emerald-800 tracking-wider uppercase">Our Values</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-rose-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <div className="relative">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 relative">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 drop-shadow-sm">
                    The Principles That
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 drop-shadow-sm mt-2">
                    Guide Our Work
                  </span>
                  
                  {/* Beautiful underline decoration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                    <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-rose-500 rounded-full shadow-lg shadow-emerald-400/40 animate-pulse"></div>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                  </div>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mt-8">
                  Our values are the foundation of everything we do. They guide our decisions, shape our programs, and ensure we remain true to our mission of serving rural communities.
                </p>
              </div>
            </div>

            {/* Enhanced Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {/* Sustainability */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:-translate-y-3 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-green-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Sprout className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-emerald-700 transition-colors duration-300">Sustainability</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We prioritize long-term environmental and social impact over short-term gains.</p>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Community Empowerment */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:-translate-y-3 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">Community Empowerment</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We believe in building self-reliant communities that can drive their own development.</p>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Transparency */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:-translate-y-3 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Eye className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-700 transition-colors duration-300">Transparency</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We maintain open and honest communication in all our operations and partnerships.</p>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-purple-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Innovation */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:-translate-y-3 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Lightbulb className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-700 transition-colors duration-300">Innovation</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We continuously seek creative solutions to address complex rural challenges.</p>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orange-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Dignity */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:-translate-y-3 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pink-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-rose-700 transition-colors duration-300">Dignity</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We respect and uphold the dignity and rights of all rural communities.</p>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-rose-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Excellence */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-yellow-100 hover:-translate-y-3 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-yellow-700 transition-colors duration-300">Excellence</h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">We strive for the highest standards in all our programs and initiatives.</p>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Strategic Approach Section */}
        <div className="mt-32 relative overflow-hidden">
          {/* Beautiful background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-300 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-emerald-300 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-gradient-to-br from-indigo-200/30 to-emerald-200/30 rounded-full blur-sm"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced Strategic Approach Header */}
            <div className="text-center mb-20 relative">
              {/* Decorative elements around header */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-indigo-100/50 to-emerald-100/50 rounded-full blur-xl"></div>
              
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-white/95 to-indigo-50/95 backdrop-blur-sm px-8 py-4 rounded-full border border-indigo-200/60 shadow-xl mb-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-bold text-indigo-800 tracking-wider uppercase">Our Strategic Approach</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <div className="relative">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 relative">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 drop-shadow-sm">
                    Strategic Framework for
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 drop-shadow-sm mt-2">
                    Sustainable Impact
                  </span>
                  
                  {/* Beautiful underline decoration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
                    <div className="w-3 h-3 bg-gradient-to-br from-indigo-400 to-emerald-500 rounded-full shadow-lg shadow-indigo-400/40 animate-pulse"></div>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                  </div>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mt-8">
                  Our strategic approach combines innovative methodologies with proven development practices to create lasting positive change in rural communities across India.
                </p>
              </div>
            </div>

            {/* Strategic Pillars Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
              {/* Strategic Partnerships */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Strategic Partnerships</h3>
                <p className="text-gray-600 text-center leading-relaxed">Building strong collaborations with government agencies, NGOs, and community organizations to maximize our impact.</p>
              </div>

              {/* Community-Led Development */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Community-Led Development</h3>
                <p className="text-gray-600 text-center leading-relaxed">Empowering local communities to take ownership of their development journey and create sustainable solutions.</p>
              </div>

              {/* Innovation & Technology */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Innovation & Technology</h3>
                <p className="text-gray-600 text-center leading-relaxed">Leveraging modern agricultural techniques and digital tools to enhance productivity and market access.</p>
              </div>

              {/* Knowledge Transfer */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <BookOpenCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Knowledge Transfer</h3>
                <p className="text-gray-600 text-center leading-relaxed">Creating comprehensive training programs that build skills and knowledge for long-term success.</p>
              </div>

              {/* Scalable Solutions */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Scalable Solutions</h3>
                <p className="text-gray-600 text-center leading-relaxed">Developing replicable models that can be adapted and implemented across different regions.</p>
              </div>

              {/* Impact Measurement */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-100 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Impact Measurement</h3>
                <p className="text-gray-600 text-center leading-relaxed">Implementing robust monitoring and evaluation systems to track progress and demonstrate results.</p>
              </div>
            </div>

            {/* Our Strategic Impact Stats - Simply Beautiful */}
            <div className="relative py-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Strategic Impact
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Measurable results that demonstrate the effectiveness of our strategic approach
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Families Empowered */}
                <div className="text-center group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out">
                      <Users className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-3">
                    500+
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">Families Empowered</div>
                  <div className="text-sm text-gray-600">Direct beneficiaries of our programs</div>
                </div>

                {/* Villages Reached */}
                <div className="text-center group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out">
                      <MapPin className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3">
                    50+
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">Villages Reached</div>
                  <div className="text-sm text-gray-600">Communities across multiple states</div>
                </div>

                {/* Years of Service */}
                <div className="text-center group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out">
                      <Award className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-3">
                    2+
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">Years of Service</div>
                  <div className="text-sm text-gray-600">Continuous community impact</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-center gap-2 text-base font-medium">
                    Explore Our Impact
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
