"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Eye, Award, X, ExternalLink, Calendar, User, Sparkles, Download, Star } from "lucide-react"

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

  const certificates = [
    {
      platform: "CSTAD",
      title: "Spring Microservices",
      instructor: "CSTAD Advanced Team",
      completedDate: "February 2025",
      duration: "6 months",
      skills: ["Spring Boot", "Microservices", "Apache Kafka", "WebSocket", "Docker", "API Gateway", "Spring Cloud", "OAuth2", "PostgreSQL", "MongoDB", "Elasticsearch", "Debezium", "BFF Pattern"],
      description:
        "Advanced microservices training covering decomposition patterns, communication styles, and deployment strategies.",
      certificateUrl: "#",
      previewImage: "/certificates/spring_microservices.jpg",
      color: "from-blue-500 to-blue-700",
      platformIcon: "/images/istad.jpg",
    },
    {
      platform: "CSTAD",
      title: "Full Stack Web Development",
      instructor: "CSTAD Expert Team",
      completedDate: "August 2024",
      duration: "8 months",
      skills: ["Spring Boot", "ReactJS", "NextJS", "PostgreSQL", "Docker", "Git", "JWT", "RESTful APIs"],
      description:
        "Comprehensive full-stack development program covering modern web technologies, microservices architecture, and deployment strategies.",
      certificateUrl: "#",
      previewImage: "/certificates/full_stack.jpg",
      color: "from-orange-500 to-orange-700",
      platformIcon: "/images/istad.jpg",
    },
    {
      platform: "RUPP",
      title: "Computer Science and Engineering",
      instructor: "RUPP Faculty",
      completedDate: "May 2024",
      duration: "4 years",
      skills: ["Java", "C++", "Data Structures", "Algorithms", "Database Systems", "Software Engineering"],
      description:
        "Bachelor's degree in Computer Science and Engineering with a focus on software development, algorithms, and database systems.",
      certificateUrl: "#",
      previewImage: "/certificates/computer_science.jpg",
      color: "from-blue-400 to-blue-600",
      platformIcon: "/images/rupp.jpg",
    },
    {
      platform: "Instinct Institute",
      title: "Flutter Development",
      instructor: "Instinct Team",
      completedDate: "December 2023",
      duration: "90 hours",
      skills: ["Flutter", "Dart", "Firebase", "API Integration"],
      description: "Comprehensive Flutter development course covering mobile app development and best practices.",
      certificateUrl: "#",
      previewImage: "/certificates/flutter.jpg",
      color: "from-green-500 to-green-700",
      platformIcon: "/images/instinct.jpg",
    },
    {
      platform: "ETEC",
      title: "Java Programming",
      instructor: "Eve Porcello",
      completedDate: "November 2023",
      duration: "4 hours",
      skills: ["React", "JSX", "Components", "State Management", "Hooks"],
      description: "Essential React.js training covering components, state management, and modern React patterns.",
      certificateUrl: "#",
      previewImage: "/certificates/java_programming.jpg",
      color: "from-blue-600 to-blue-800",
      platformIcon: "/images/etec.png",
    },
    {
      platform: "ETEC",
      title: "Basic Computer and Installation",
      instructor: "CSTAD Team",
      completedDate: "October 2023",
      duration: "40 hours",
      skills: ["Java", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PostgreSQL", "Git"],
      description:
        "Foundational web development course covering HTML, CSS, JavaScript, and PostgreSQL with a focus on modern web practices.",
      certificateUrl: "#",
      previewImage: "/certificates/basic_computer.jpg",
      color: "from-orange-400 to-orange-600",
      platformIcon: "/images/etec.png",
    },
  ]

  return (
    <section
      id="certificates"
      className="py-16 bg-background dark:bg-background relative overflow-hidden transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-green-500 animate-bounce" />
            <h2 className="text-5xl md:text-6xl font-bold text-green-500">Certificates</h2>
            <Star className="w-8 h-8 text-green-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-500">
            Professional certifications and courses that showcase my commitment to continuous learning and skill
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] group overflow-hidden rounded-2xl cursor-pointer relative shadow-lg hover:shadow-xl"
              onClick={() => setSelectedCertificate(cert)}
            >
              <CardContent className="p-6 relative">
                {/* Platform Badge with Circular Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`bg-gradient-to-r ${cert.color} text-white px-6 py-2 rounded-2xl flex items-center gap-4 shadow-lg`}
                  >
                    {/* Large Circular Icon Background */}
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg overflow-hidden">
                      <Image
                        src={cert.platformIcon}
                        alt="Profile"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-bold text-lg">{cert.platform}</span>
                  </div>

                  {/* Green Award Ribbon */}
                  <div className="text-green-500">
                    <Award className="w-7 h-7" />
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4 leading-tight min-h-[1.5rem] line-clamp-3 transition-colors duration-500">
                  {cert.title}
                </h3>

                {/* Instructor */}
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-500">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.instructor}</span>
                </div>

                {/* Certificate Image with Centered Eye Icon */}
                <div className="relative h-56 bg-gray-100 dark:bg-slate-700 rounded-xl overflow-hidden group/image transition-colors duration-500">
                  <Image
                    src={cert.previewImage || "/placeholder.svg"}
                    alt={`${cert.title} Certificate`}
                    width={400}
                    height={350}
                    className="w-full h-full object-cover opacity-80"
                  />

                  {/* Centered Eye Icon - Only visible on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-green-400 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Certificate Preview Dialog */}
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-7xl max-h-[95vh] overflow-hidden bg-white dark:bg-slate-900 p-0 border-0 shadow-2xl rounded-3xl transition-colors duration-500">
            <DialogTitle className="sr-only">
              {selectedCertificate?.title} Certificate Preview
            </DialogTitle>
            {selectedCertificate && (
              <div className="relative flex flex-col h-full">
                {/* Close Button */}
                {/* <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 z-30 rounded-full w-12 h-12 p-0 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm border border-white/20 transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </Button> */}

                {/* Certificate Preview Image - Full Size */}
                <div className="relative overflow-hidden flex-shrink-0 rounded-t-3xl">
                  <Image
                    src={selectedCertificate.previewImage || "/placeholder.svg"}
                    alt={`${selectedCertificate.title} Certificate`}
                    width={1400}
                    height={900}
                    className="w-full h-auto object-contain max-h-[90vh]"
                    priority
                  />
                  
                  {/* Overlay for badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                  {/* Platform Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm">
                        <Star className="w-4 h-4" />
                        <span className="font-medium text-sm">Certified</span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Info Badge */}
                  {/* <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-gray-900 dark:text-white px-6 py-3 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-600">
                      <h3 className="font-bold text-lg">{selectedCertificate.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{selectedCertificate.platform} • {selectedCertificate.completedDate}</p>
                    </div>
                  </div> */}
                </div>

                {/* Minimal Content Footer */}
                <div className="bg-white dark:bg-slate-900 transition-colors duration-500 p-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-green-500 mb-4">
                      <Award className="w-5 h-5" />
                      <span className="font-medium">Professional Certificate</span>
                    </div>
                    
                    {/* Action Buttons */}
                    {/* <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        variant="outline"
                        className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
                        asChild
                      >
                        <a href={selectedCertificate.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Original
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
                        onClick={() => {
                          // Create a link to download the image
                          const link = document.createElement('a');
                          link.href = selectedCertificate.previewImage;
                          link.download = `${selectedCertificate.title.replace(/\s+/g, '_')}_Certificate.jpg`;
                          link.click();
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Image
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
