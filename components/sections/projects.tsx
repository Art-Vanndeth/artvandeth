"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Sparkles, Info } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "CricTracker",
      description:
        "Comprehensive cricket tracking platform with live scores, player statistics, and match analysis. Built with modern React ecosystem and real-time data integration.",
      image: "/placeholder.svg?height=400&width=600",
      workedOn: ["Website", "Admin Panel"],
      technologies: [
        "JavaScript",
        "Bootstrap",
        "SCSS",
        "ReactJS",
        "NextJS",
        "AMP",
        "React Hook Form",
        "GraphQL",
        "Apollo GraphQL",
        "Git",
      ],
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      demoLink: "https://crictracker.com",
      codeLink: "https://github.com/artvandeth/crictracker",
      featured: true,
    },
    {
      id: 2,
      title: "DealKh",
      description:
        "E-commerce platform connecting buyers and sellers with advanced search functionality, secure payment integration, and real-time messaging system.",
      image: "/placeholder.svg?height=400&width=600",
      workedOn: ["Website", "Mobile App"],
      technologies: [
        "Spring Boot",
        "ReactJS",
        "PostgreSQL",
        "JWT",
        "Spring Security",
        "Tailwind CSS",
        "Docker",
        "NGINX",
      ],
      gradient: "from-purple-500 via-pink-500 to-red-500",
      demoLink: "https://dealkh.com",
      codeLink: "https://github.com/artvandeth/dealkh",
      featured: true,
    },
    {
      id: 3,
      title: "Sala Learning Platform",
      description:
        "Educational platform with course management, interactive learning modules, progress tracking, and collaborative features for students and instructors.",
      image: "/placeholder.svg?height=400&width=600",
      workedOn: ["Website", "Admin Dashboard"],
      technologies: [
        "Spring Boot",
        "NextJS",
        "MongoDB",
        "Spring WebFlux",
        "TypeScript",
        "OAuth2",
        "Microservices",
        "Apache Kafka",
      ],
      gradient: "from-green-500 via-teal-500 to-blue-600",
      demoLink: "https://sala-learning.com",
      codeLink: "https://github.com/artvandeth/sala-learning",
      featured: false,
    },
    {
      id: 4,
      title: "Library Management System",
      description:
        "Complete library management solution with book cataloging, member management, borrowing system, and automated notifications.",
      image: "/placeholder.svg?height=400&width=600",
      workedOn: ["Desktop App", "Web Portal"],
      technologies: ["Java", "Spring Framework", "MySQL", "Thymeleaf", "Bootstrap", "JPA", "Spring MVC"],
      gradient: "from-orange-500 via-red-500 to-pink-600",
      demoLink: "https://library-system.com",
      codeLink: "https://github.com/artvandeth/library-management",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-200 dark:bg-green-800 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-60 h-60 bg-green-300 dark:bg-green-700 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-green-500 animate-spin" />
            <h2 className="text-5xl md:text-6xl font-bold text-green-500">Projects I've</h2>
            <Sparkles className="w-8 h-8 text-green-500 animate-spin" style={{ animationDirection: "reverse" }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-8">Worked on</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects that demonstrate my expertise in full-stack development
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            return (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-700 group transform hover:scale-[1.02] rounded-3xl modern-card"
              >
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
                    {/* Project Image with Hover Effects */}
                    <div
                      className={`relative h-80 lg:h-[500px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 group ${!isEven ? "lg:col-start-2" : ""}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 border-4 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Project placeholder"
                            width={48}
                            height={48}
                            className="opacity-50"
                          />
                        </div>
                      </div>

                      {/* Hover Overlay with Demo and Code Buttons */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-2 border-green-500 bg-transparent text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm text-lg"
                          asChild
                        >
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-2 border-green-500 bg-transparent text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm text-lg"
                          asChild
                        >
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-yellow-500 text-white px-4 py-2 backdrop-blur-sm">⭐ Featured</Badge>
                        </div>
                      )}
                    </div>

                    {/* Project Details */}
                    <div
                      className={`p-6 lg:p-8 bg-gradient-to-r ${project.gradient} text-white flex flex-col justify-center ${!isEven ? "lg:col-start-1" : ""}`}
                    >
                      <div className="space-y-6">
                        {/* Title and Info Button */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-3xl lg:text-4xl font-bold group-hover:scale-105 transition-transform duration-300">
                            {project.title}
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/20 rounded-full w-12 h-12 p-0 transform group-hover:rotate-12 transition-transform duration-300"
                          >
                            <Info className="w-6 h-6" />
                          </Button>
                        </div>

                        {/* Description */}
                        <p className="text-white/90 leading-relaxed text-base lg:text-lg">{project.description}</p>

                        {/* Worked On */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">🚀 Worked on</h4>
                          <div className="flex gap-3">
                            {project.workedOn.map((item) => (
                              <span
                                key={item}
                                className="bg-white/20 text-white px-4 py-2 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 rounded-full text-sm font-medium hover:bg-white/30"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            ⚡ Technologies I have used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={tech}
                                className="bg-white/20 text-white px-3 py-1 text-xs backdrop-blur-sm transform hover:scale-105 transition-all duration-300 rounded-full font-medium hover:bg-white/30"
                                style={{ animationDelay: `${techIndex * 0.1}s` }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-20">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Github className="w-6 h-6 mr-3" />
            See Github
          </Button>
        </div>
      </div>
    </section>
  )
}
