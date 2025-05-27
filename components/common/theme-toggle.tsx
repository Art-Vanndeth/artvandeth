"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder that matches the structure to avoid layout shift
    return (
      <button
        className="relative w-14 h-8 bg-muted rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
      >
        <div className="absolute top-1 w-6 h-6 bg-background rounded-full shadow-md transition-all duration-300 flex items-center justify-center border border-border translate-x-1">
          <Sun className="w-3 h-3 text-green-500" />
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-14 h-8 bg-muted rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
    >
      <div
        className={`absolute top-1 w-6 h-6 bg-background rounded-full shadow-md transition-all duration-300 flex items-center justify-center border border-border ${
          theme === "dark" ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {theme === "dark" ? <Moon className="w-3 h-3 text-green-500" /> : <Sun className="w-3 h-3 text-green-500" />}
      </div>
    </button>
  )
}
