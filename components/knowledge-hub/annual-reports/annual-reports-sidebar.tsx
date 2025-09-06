import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileArchive, Info, ShieldCheck } from "lucide-react"

export function AnnualReportsSidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <FileArchive className="h-5 w-5 mr-2 text-blue-600" /> Archive
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p className="text-gray-600">Browse past years:</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "2024-2025", href: "#report-2024-2025" },
                { label: "2023-2024", href: "#report-2023-2024" },
                { label: "2022-2023", href: "#report-2022-2023" },
              ].map((y) => (
                <Button key={y.label} size="sm" variant="outline" className="bg-transparent" asChild>
                  <a href={y.href}>{y.label}</a>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <ShieldCheck className="h-5 w-5 mr-2 text-blue-600" /> Governance
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600 space-y-2">
          <p>All financial statements are prepared and audited in accordance with applicable standards.</p>
          <Button variant="outline" size="sm" className="bg-transparent">Read Policy</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Info className="h-5 w-5 mr-2 text-blue-600" /> Help
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600 space-y-2">
          <p>Looking for a specific year or document? Contact us for assistance.</p>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Get Support</Button>
        </CardContent>
      </Card>
    </div>
  )
}