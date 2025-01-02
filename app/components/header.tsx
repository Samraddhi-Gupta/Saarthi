import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const Header = () => {
  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md dark:bg-gray-800 dark:bg-opacity-80 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          SchemeManage
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/scheme-explorer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Explore</Link></li>
            <li><Link href="/eligibility-checker" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Check Eligibility</Link></li>
            <li><Link href="/application-assistance" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Apply</Link></li>
            <li><Link href="/document-manager" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Documents</Link></li>
            <li><Link href="/support" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Support</Link></li>
            <li><Link href="/community" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Community</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header



