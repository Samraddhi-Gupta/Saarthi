import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Support() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <ul className="space-y-2">
            <li>
              <h3 className="font-medium">How do I check my application status?</h3>
              <p>You can check your application status in your user dashboard.</p>
            </li>
            <li>
              <h3 className="font-medium">What documents do I need to apply?</h3>
              <p>Required documents vary by scheme. Check the scheme details for specific requirements.</p>
            </li>
            <li>
              <h3 className="font-medium">How long does the application process take?</h3>
              <p>Processing times vary, but most applications are reviewed within 4-6 weeks.</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

