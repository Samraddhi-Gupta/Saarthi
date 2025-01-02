import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 gradient-text">
          Welcome to SchemeHub
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore schemes, check your eligibility, and manage your applications all in one place. Your gateway to opportunities awaits!
        </p>
        <div className="flex space-x-4 justify-center">
          <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
            <Link href="/scheme-explorer">Explore Schemes</Link>
          </Button>
          <Button variant="outline" asChild className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            <Link href="/eligibility-checker">Check Eligibility</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


