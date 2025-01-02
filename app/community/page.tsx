import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const forumTopics = [
  { id: 1, title: "Tips for a successful application", replies: 15, lastActivity: "2 hours ago" },
  { id: 2, title: "Sharing success stories", replies: 8, lastActivity: "1 day ago" },
  { id: 3, title: "Questions about eligibility criteria", replies: 22, lastActivity: "3 hours ago" },
]

export default function Community() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Community Forum</h1>
      <Button className="mb-4">Start New Topic</Button>
      <div className="space-y-4">
        {forumTopics.map((topic) => (
          <Card key={topic.id}>
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>Replies: {topic.replies} | Last activity: {topic.lastActivity}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">View Topic</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

