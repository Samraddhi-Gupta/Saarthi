import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"

const schemes = {
  "1": {
    id: "1",
    title: "Small Business Grant",
    description: "Financial support for small businesses affected by economic challenges.",
    eligibility: "Businesses with fewer than 50 employees and annual turnover less than $10 million.",
    funding: "Up to $50,000 per eligible business.",
    deadline: "December 31, 2023",
  }
}

export default function SchemeDetails({ params }: { params: { id: string } }) {
  const scheme = schemes[params.id as keyof typeof schemes]

  if (!scheme) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{scheme.title}</h1>
      <div className="space-y-4">
        <p><strong>Description:</strong> {scheme.description}</p>
        <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
        <p><strong>Funding:</strong> {scheme.funding}</p>
        <p><strong>Application Deadline:</strong> {scheme.deadline}</p>
      </div>
      <Button className="mt-6">Apply Now</Button>
    </div>
  )
}

