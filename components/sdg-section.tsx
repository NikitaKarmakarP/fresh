import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export type SDG = {
  number: number
  title: string
  description: string
  // Tailwind color token for accent (e.g., 'blue', 'emerald', 'amber')
  color?: string
}

function sdgColorClasses(color?: string) {
  const map = {
    blue: {
      badge: "inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ring-blue-200/60 bg-blue-50 text-blue-700",
      number: "w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold bg-gradient-to-br from-blue-500 to-blue-600 text-white",
    },
    emerald: {
      badge: "inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ring-emerald-200/60 bg-emerald-50 text-emerald-700",
      number: "w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold bg-gradient-to-br from-emerald-500 to-emerald-600 text-white",
    },
    amber: {
      badge: "inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ring-amber-200/60 bg-amber-50 text-amber-800",
      number: "w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold bg-gradient-to-br from-amber-500 to-amber-600 text-white",
    },
    rose: {
      badge: "inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ring-rose-200/60 bg-rose-50 text-rose-700",
      number: "w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold bg-gradient-to-br from-rose-500 to-rose-600 text-white",
    },
    violet: {
      badge: "inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ring-violet-200/60 bg-violet-50 text-violet-700",
      number: "w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold bg-gradient-to-br from-violet-500 to-violet-600 text-white",
    },
    indigo: {
      badge: "inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ring-indigo-200/60 bg-indigo-50 text-indigo-700",
      number: "w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold bg-gradient-to-br from-indigo-500 to-indigo-600 text-white",
    },
  } as const

  const picked = map[(color ?? "blue") as keyof typeof map] ?? map.blue
  return {
    wrapper: "bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden",
    badge: picked.badge,
    number: picked.number,
  }
}

export function SDGSection({
  title = "Sustainable Development Goals",
  subtitle = "Aligned with the United Nations 2030 Agenda",
  goals,
}: {
  title?: string
  subtitle?: string
  goals: SDG[]
}) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {goals.map((g, idx) => {
            const cls = sdgColorClasses(g.color)
            return (
              <Card key={idx} className={`${cls.wrapper} group`}> 
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className={cls.number}>{g.number}</div>
                    <div>
                      <div className={cls.badge}>UN SDG</div>
                      <CardTitle className="text-lg mt-2 leading-snug">{g.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="mt-3 text-gray-600">
                    {g.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SDGSection