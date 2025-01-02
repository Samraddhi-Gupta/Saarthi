import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

const schemes = [
  { id: 1, title: "Small Business Grant", description: "Financial support for small businesses", category: "Finance" },
  { id: 2, title: "Green Energy Initiative", description: "Funding for renewable energy projects", category: "Environment" },
  { id: 3, title: "Digital Transformation Fund", description: "Support for businesses going digital", category: "Technology" },
  { id: 4, title: "Rural Development Program", description: "Assistance for rural communities", category: "Community" },
  { id: 5, title: "Innovation Research Grant", description: "Funding for innovative research projects", category: "Research" },
  { id: 6, title: "Youth Entrepreneurship Scheme", description: "Support for young entrepreneurs", category: "Entrepreneurship" },
]

export default function SchemeExplorer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center gradient-text">Scheme Explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemes.map((scheme) => (
          <Card key={scheme.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-600 dark:text-blue-400">{scheme.title}</CardTitle>
              <Badge variant="secondary">{scheme.category}</Badge>
            </CardHeader>
            <CardContent>
              <CardDescription>{scheme.description}</CardDescription>
              <Link href={`/scheme-details/${scheme.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                Learn More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

