"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Code2, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { SiSpring } from "react-icons/si"

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("Home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-full max-w-6xl px-2 sm:px-4">
      <nav className="bg-background/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-border/50 px-3 sm:px-6 py-3 sm:py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigationItems.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                className={`px-2 lg:px-4 py-2 text-xs lg:text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.name
                    ? "text-green-500"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Active underline - width matches text */}
                {activeSection === item.name && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-green-500 rounded-full transition-all duration-300"
                       style={{ width: `${item.name.length * 0.6}em` }}></div>
                )}
                {/* Hover underline - width matches text */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-green-500/50 rounded-full transition-all duration-300 ${
                  activeSection === item.name ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}
                     style={{ width: `${item.name.length * 0.6}em` }}></div>
              </Link>
            ))}
          </div>

          {/* Logo - Center */}
          <Link href="#home" onClick={() => setActiveSection("Home")} className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer">
              <SiSpring className="w-8 h-8 sm:w-12 sm:h-12 dark:text-green-500 text-green-500" />
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigationItems.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                className={`px-2 lg:px-4 py-2 text-xs lg:text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.name
                    ? "text-green-500"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Active underline - width matches text */}
                {activeSection === item.name && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-green-500 rounded-full transition-all duration-300"
                       style={{ width: `${item.name.length * 0.6}em` }}></div>
                )}
                {/* Hover underline - width matches text */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-green-500/50 rounded-full transition-all duration-300 ${
                  activeSection === item.name ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}
                     style={{ width: `${item.name.length * 0.6}em` }}></div>
              </Link>
            ))}
            <div className="ml-2 lg:ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hover:bg-muted p-2 w-9 h-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-border">
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.name)
                    setIsMenuOpen(false)
                  }}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-300 relative rounded-lg group ${
                    activeSection === item.name
                      ? "text-green-500 bg-green-500/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Active indicator - left border */}
                  {activeSection === item.name && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-green-500 rounded-r-full transition-all duration-300"></div>
                  )}
                  {/* Hover indicator - left border */}
                  <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-green-500/50 rounded-r-full transition-all duration-300 ${
                    activeSection === item.name ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  {/* Bottom underline for mobile - width matches text */}
                  {/* {activeSection === item.name && (
                    <div className="absolute bottom-1 left-4 h-0.5 bg-green-500 rounded-full transition-all duration-300"
                         style={{ width: `${item.name.length * 0.6}em` }}></div>
                  )} */}
                  {/* Hover underline for mobile */}
                  {/* <div className={`absolute bottom-1 left-4 h-0.5 bg-green-500/50 rounded-full transition-all duration-300 ${
                    activeSection === item.name ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                  }`}
                       style={{ width: `${item.name.length * 0.6}em` }}></div> */}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
