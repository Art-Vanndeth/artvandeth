"use client"

import {SiX} from "react-icons/si"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ChevronDown,
  Eye,
  Download,
  Code2,
  Terminal,
  Sparkles,
  Zap,
  Rocket,
  Star,
  Coffee,
  Leaf,
  Music,
  Plane,
} from "lucide-react"

const roles = ["Spring Boot Developer", "Microservices Architect", "Java Developer", "Full Stack Developer", "Java Specialist", "UI/UX Designer", "Problem Solver"]
export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const role = roles[currentRole]
    let index = 0

    const typeInterval = setInterval(() => {
      if (isTyping) {
        if (index < role.length) {
          setDisplayText(role.slice(0, index + 1))
          index++
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            setCurrentRole((prev) => (prev + 1) % roles.length)
            setDisplayText("")
            index = 0
          }, 2000)
        }
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentRole, isTyping])

  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/Art-Vanndeth", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/art-vandeth-1a15a3325", label: "LinkedIn" },
    { icon: SiX, href: "https://x.com/vandeth10726", label: "SpaceX" },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background transition-colors duration-500"
    >
      {/* Modern Geometric Background */}
      <div className="absolute inset-0">
        {/* Left geometric shape */}
        {/* <div
          className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 transition-colors duration-500 opacity-10"
          style={{
            clipPath: "polygon(0 0, 60% 0, 20% 40%, 0% 100%)",
          }}
        /> */}

        {/* Right geometric accent */}
        {/* <div
          className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 transition-colors duration-500 opacity-10"
          style={{
            clipPath: "polygon(100% 0%, 40% 0%, 80% 40%, 100% 100%)",
          }}
        /> */}


        {/* <div
          className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 transition-colors duration-500 opacity-20"
          style={{
            clipPath: "polygon(0 0, 30% 0, 25% 40%, 0% 40%)",
          }}
        />

        <div
          className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 transition-colors duration-500 opacity-15"
          style={{
            clipPath: "polygon(100% 100%, 70% 100%, 75% 60%, 100% 60%)",
          }}
        /> */}

      </div>

      {/* Floating Animated Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-44 left-28 animate-pulse">
          <Rocket className="w-8 h-8 dark:text-green-400/35 text-white" />
        </div>

        {/* Top Right */}
        <div className="absolute top-32 right-32 animate-bounce-slow">
          <Music className="w-10 h-10 dark:text-green-400/35 text-white" />
        </div>

        {/* Middle Left */}
        <div className="absolute top-1/2 left-16 animate-spin-slow">
          <Terminal className="w-10 h-10 dark:text-green-400/35 text-white" />
        </div>

        {/* Middle Right */}
        <div className="absolute top-1/3 right-20 animate-spin-slow" style={{ animationDelay: "1s" }}>
          <Zap className="w-7 h-7 dark:text-green-400/35 text-white" />
        </div>

        {/* Middle Right */}
        <div className="absolute top-2/4 right-28 animate-bounce-slow" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-7 h-7 dark:text-green-400/35 text-white" />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-32 left-32 animate-pulse" style={{ animationDelay: "2s" }}>
          <Coffee className="w-9 h-9 dark:text-green-400/35 text-white" />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-44 right-48 animate-pulse" style={{ animationDelay: "0.5s" }}>
          <Plane className="w-8 h-8 dark:text-green-400/35 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight">
              ART VANDETH
              <br />
              <span className="text-green-600">development</span>
              <br />
              simple.
            </h1>

            {/* Code Brackets with animation */}
            <div className="flex justify-center items-center gap-4 text-foreground/50 text-4xl font-mono animate-pulse">
              <span>{"{ }"}</span>
            </div>

            <div className="space-y-4">
              <p className="text-2xl md:text-4xl text-muted-foreground">
                I'm a{" "}
                <span className="text-green-600 font-semibold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A passionate leader and collaborator, I thrive in dynamic environments. With strong communication and
                organizational skills, I embrace new technologies and drive innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <Button
                variant="outline"
                size="lg"
                className="dark:bg-white bg-gray-800 dark:hover:bg-green-600 dark:hover:text-black hover:bg-green-600 text-green-500 font-semibold px-12 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl group"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                VIEW PROJECTS
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold px-12 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                DOWNLOAD CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center pt-8">
              {socialLinks.map(({ icon: IconComponent, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-card shadow-lg flex items-center justify-center transition-all duration-300 group transform hover:scale-110 hover:shadow-xl modern-card hover:rotate-12"
                  aria-label={label}
                >
                  <IconComponent className="w-7 h-7 text-muted-foreground group-hover:text-green-500 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-14 left-[48.5%] transform -translate-x-1/2 animate-bounce">
            <div className="w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center modern-card">
              <ChevronDown className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
