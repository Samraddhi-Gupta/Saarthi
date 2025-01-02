import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const documents = [
  { id: 1, name: "Business Registration", status: "Approved" },
  { id: 2, name: "Financial Statements", status: "Pending" },
  { id: 3, name: "Project Proposal", status: "Rejected" },
]

export default function DocumentManager() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Document Manager</h1>
      <Button className="mb-4">Upload New Document</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Document Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>{doc.name}</TableCell>
              <TableCell>{doc.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

