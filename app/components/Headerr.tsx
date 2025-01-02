import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          SchemeHub
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/scheme-explorer" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Explore</Link></li>
            <li><Link href="/eligibility-checker" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Eligibility</Link></li>
            <li><Link href="/application-assistance" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Apply</Link></li>
            <li><Link href="/document-manager" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Documents</Link></li>
            <li><Link href="/support" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Support</Link></li>
            <li><Link href="/community" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Community</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header

