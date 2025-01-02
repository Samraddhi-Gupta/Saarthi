"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EligibilityChecker() {
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd check eligibility based on the form data
    setResult("Based on the information provided, you may be eligible for the Small Business Grant.")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Eligibility Checker</h1>
      <Card>
        <CardHeader>
          <CardTitle>Check Your Eligibility</CardTitle>
          <CardDescription>Fill out the form below to check if you're eligible for our schemes.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="business-name">Business Name</Label>
              <Input id="business-name" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="employees">Number of Employees</Label>
              <Input id="employees" type="number" required className="mt-1" />
            </div>
            <div>
              <Label>Business Type</Label>
              <RadioGroup defaultValue="sole-proprietorship" className="mt-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sole-proprietorship" id="sole-proprietorship" />
                  <Label htmlFor="sole-proprietorship">Sole Proprietorship</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="partnership" id="partnership" />
                  <Label htmlFor="partnership">Partnership</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="corporation" id="corporation" />
                  <Label htmlFor="corporation">Corporation</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">Check Eligibility</Button>
          </form>
        </CardContent>
      </Card>
      {result && (
        <Card className="mt-6 bg-green-50 dark:bg-green-900">
          <CardContent className="pt-6">
            <p className="text-green-700 dark:text-green-300">{result}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

