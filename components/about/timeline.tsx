import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Award, Sprout, Sparkles } from "lucide-react"

/**
 * Journey timeline shown on /about. Added `id="timeline"`
 * so links like /about#timeline scroll here.
 */
export function Timeline() {
  const milestones = [
    {
      year: "2022",
      title: "Foundation Established",
      description: "HAPEF was officially registered as an NGO in Kolkata with a mission to eradicate rural poverty.",
      icon: Calendar,
    },
    {
      year: "2022",
      title: "First Mushroom Program",
      description: "Launched our flagship mushroom cultivation program in 5 villages of Pakur district.",
      icon: Sprout,
    },
    {
      year: "2023",
      title: "100 Families Milestone",
      description: "Successfully trained and supported 100 families in sustainable agricultural practices.",
      icon: Users,
    },
    {
      year: "2023",
      title: "Government Partnership",
      description: "Established formal partnerships with government departments for program expansion.",
      icon: Award,
    },
    {
      year: "2024",
      title: "Climate-Resilient Agriculture",
      description: "Launched comprehensive climate-resilient agriculture programs to help farmers adapt to environmental challenges.",
      icon: Sprout,
    },
    {
      year: "2024",
      title: "500+ Families Impact",
      description: "Reached milestone of supporting over 500 families across 50+ villages.",
      icon: Users,
    },
    {
      year: "2025",
      title: "Expansion & Innovation",
      description: "Expanding programs to new regions and implementing innovative sustainable development solutions.",
      icon: Sparkles,
    },
  ]

  return (
    <section id="timeline" className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-indigo-50 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(900px_400px_at_10%_10%,#000,transparent)]">
        <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-emerald-200 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-indigo-200 blur-3xl"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="relative text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-emerald-500" />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
                Our Journey
              </span>
            </span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A timeline of dedicated service, continuous growth, and measurable impact in rural communities.
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-300 via-emerald-400/70 to-indigo-300 rounded-full"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={`${milestone.year}-${index}`} className="relative flex items-center">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white ring-4 ring-emerald-300 shadow-lg">
                  <div className="absolute inset-1 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left order-2"}`}>
                  <Card className="bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 border-0">
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                        <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-100 to-indigo-100">
                          <milestone.icon className="h-5 w-5 text-emerald-600" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`w-1/2 ${index % 2 === 0 ? "order-2" : ""}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
