import { GraduationCap, Briefcase, MapPin, Calendar, Award, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const education = [
    {
      degree: "Spring Microservices",
      field: "Advanced Microservices Architecture",
      institution: "Center of Science and Technology Advanced Development",
      location: "Phnom Penh, Cambodia",
      period: "Aug 2024 - Feb 2025",
      type: "Advanced Training",
      icon: "🎓",
    },
    {
      degree: "Full Stack Web Development",
      field: "Complete Web Development Program",
      institution: "Center of Science and Technology Advanced Development",
      location: "Phnom Penh, Cambodia",
      period: "Jan 2024 - Aug 2024",
      type: "Professional Training",
      icon: "💻",
    },
    {
      degree: "Bachelor of Computer Science",
      field: "Computer Science and Engineering",
      institution: "Royal University of Phnom Penh",
      location: "Phnom Penh, Cambodia",
      period: "Dec 2019 - May 2024",
      type: "Bachelor's Degree",
      icon: "🎓",
    },
    {
      degree: "BacII National Certificate",
      field: "High School Diploma",
      institution: "Prek Sleng High School",
      location: "Kandal, Cambodia",
      period: "Jan 2018 - Aug 2019",
      type: "High School",
      icon: "📚",
    },
  ]

  const experience = [
    {
      company: "CSTAD IT Expert Scholarship and Outsourcing Services",
      location: "Phnom Penh, Cambodia",
      position: "Full Stack Developer",
      period: "JAN 2024 - FEB 2025",
      logo: "🚀",
      achievements: [
        "Developed full-stack web applications using Spring Boot, ReactJS, and NextJS",
        "Designed and implemented secure, scalable RESTful APIs with proper authentication",
        "Integrated and managed both relational (PostgreSQL) and NoSQL (MongoDB) databases",
        "Built responsive and user-friendly frontend interfaces with modern frameworks",
        "Implemented microservices architecture with decomposition patterns and API communication",
        "Worked with Apache Kafka, WebSocket, and various deployment patterns",
        "Utilized Spring Advanced features including Spring Data JPA, OAuth2, and Spring WebFlux",
        "Deployed applications using Docker Compose and CI/CD tools with NGINX configuration",
      ],
    },
    {
      company: "The Fortune Tower",
      location: "Phnom Penh, Cambodia",
      position: "Customer Service Officer",
      period: "DEC 2021 - FEB 2023",
      logo: "🏢",
      achievements: [
        "Provided excellent customer service and support to clients and visitors",
        "Managed customer inquiries and resolved issues efficiently",
        "Maintained professional communication with diverse clientele",
        "Developed strong interpersonal and problem-solving skills",
        "Collaborated with team members to ensure smooth operations",
      ],
    },
  ]

  const projectTrainings = [
    {
      name: "Code Advisors",
      description: "Advanced coding mentorship and project development",
      period: "Oct 2019 - Nov 2023",
      location: "Phnom Penh, Cambodia",
    },
    {
      name: "DealKh E-commerce Platform",
      description: "Full-stack e-commerce development project",
      period: "Oct 2019 - Nov 2023",
      location: "Phnom Penh, Cambodia",
    },
    {
      name: "Sala Learning Platform",
      description: "Educational platform development and management",
      period: "Oct 2019 - Nov 2023",
      location: "Phnom Penh, Cambodia",
    },
    {
      name: "Library Management System",
      description: "Complete library management solution development",
      period: "Oct 2019 - Nov 2023",
      location: "Phnom Penh, Cambodia",
    },
  ]

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-green-500 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold text-green-500">Experience</h2>
              <Code className="w-8 h-8 text-green-500 animate-pulse" />
            </div>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {experience.map((item, index) => (
              <Card
                key={index}
                className="modern-card hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                        {item.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{item.company}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-medium w-fit">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-5 h-5 text-green-500" />
                      <h4 className="text-lg font-semibold text-foreground">{item.position}</h4>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-green-500 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold text-green-500">Education</h2>
              <Award className="w-8 h-8 text-green-500 animate-pulse" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {education.map((item, index) => (
              <Card
                key={index}
                className="modern-card hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </Badge>
                    <Badge variant="outline" className="border-green-500 text-green-500 px-4 py-2 text-sm font-medium">
                      <Award className="w-4 h-4 mr-2" />
                      {item.type}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">{item.degree}</p>
                        <h3 className="text-xl font-bold text-foreground">{item.field}</h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-green-500">
                      <GraduationCap className="w-5 h-5" />
                      <span className="font-medium">{item.institution}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-5 h-5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        

        {/* Project Trainings Section */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-green-500 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold text-green-500">Project</h2>
              <Award className="w-8 h-8 text-green-500 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-8">Trainings</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectTrainings.map((project, index) => (
              <Card
                key={index}
                className="modern-card hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <Code className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
