import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { HomeIcon, LineChart, BookOpen, Search } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/">
              <a className="flex items-center">
                <LineChart className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold text-gray-900">EasyETF</span>
              </a>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink href="/" icon={<HomeIcon className="w-4 h-4" />} text="Home" current={location === "/"} />
              <NavLink href="/dashboard" icon={<LineChart className="w-4 h-4" />} text="Dashboard" current={location === "/dashboard"} />
              <NavLink href="/discover" icon={<Search className="w-4 h-4" />} text="Discover" current={location === "/discover"} />
              <NavLink href="/learn" icon={<BookOpen className="w-4 h-4" />} text="Learn" current={location === "/learn"} />
            </div>
          </div>
          
          <div className="flex items-center">
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, text, current }: { href: string; icon: React.ReactNode; text: string; current: boolean }) {
  return (
    <Link href={href}>
      <a className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
        current 
          ? "text-primary border-b-2 border-primary" 
          : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
      }`}>
        {icon}
        <span className="ml-2">{text}</span>
      </a>
    </Link>
  );
}
