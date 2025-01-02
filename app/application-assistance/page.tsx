"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ApplicationAssistance() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center gradient-text">Application Assistance</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Apply for a Scheme</CardTitle>
          <CardDescription>Follow the steps below to submit your application.</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Step 1: Basic Information</h2>
              <div>
                <Label htmlFor="business-name">Business Name</Label>
                <Input id="business-name" required />
              </div>
              <div>
                <Label htmlFor="contact-name">Contact Name</Label>
                <Input id="contact-name" required />
              </div>
              <Button onClick={nextStep} className="w-full">Next</Button>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Step 2: Project Details</h2>
              <div>
                <Label htmlFor="project-description">Project Description</Label>
                <Textarea id="project-description" required />
              </div>
              <div>
                <Label htmlFor="funding-amount">Requested Funding Amount</Label>
                <Input id="funding-amount" type="number" required />
              </div>
              <div className="space-x-4">
                <Button onClick={prevStep} variant="outline">Previous</Button>
                <Button onClick={nextStep}>Next</Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Step 3: Review & Submit</h2>
              <p>Please review your application before submitting.</p>
              <div className="space-x-4">
                <Button onClick={prevStep} variant="outline">Previous</Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  Submit Application
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

