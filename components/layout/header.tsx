"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Code2, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/common/theme-toggle"

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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className="bg-background/80 backdrop-blur-xl rounded-3xl border border-border/50 px-6 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.name
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <Leaf className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.name
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.name)
                    setIsMenuOpen(false)
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.name
                      ? "bg-green-500 text-white"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
