"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Eye, Award, X, ExternalLink, Calendar, User, Sparkles, Download, Star } from "lucide-react"

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

  const certificates = [
    {
      platform: "CSTAD",
      title: "Full Stack Web Development Certificate",
      instructor: "CSTAD Expert Team",
      completedDate: "August 2024",
      duration: "8 months",
      skills: ["Spring Boot", "ReactJS", "NextJS", "PostgreSQL", "Docker", "Microservices"],
      description:
        "Comprehensive full-stack development program covering modern web technologies, microservices architecture, and deployment strategies.",
      certificateUrl: "#",
      previewImage: "/images/full-stack-web-development.jpg",
      color: "from-blue-500 to-blue-700",
      platformIcon: "/images/istad.jpg",
    },
    {
      platform: "CSTAD",
      title: "Spring Microservices Architecture",
      instructor: "CSTAD Advanced Team",
      completedDate: "February 2025",
      duration: "6 months",
      skills: ["Spring Boot", "Microservices", "Apache Kafka", "Docker", "API Gateway", "OAuth2"],
      description:
        "Advanced microservices architecture training covering decomposition patterns, communication styles, and deployment strategies.",
      certificateUrl: "#",
      previewImage: "/placeholder.svg?height=200&width=300",
      color: "from-orange-500 to-orange-700",
      platformIcon: "/images/istad.jpg",
    },
    {
      platform: "Coursera",
      title: "Google UX Design Certificate",
      instructor: "Google",
      completedDate: "May 2024",
      duration: "6 months",
      skills: ["UX Design", "Figma", "Prototyping", "User Research", "Wireframing"],
      description:
        "Comprehensive UX design program covering user research, wireframing, prototyping, and design systems.",
      certificateUrl: "#",
      previewImage: "/placeholder.svg?height=200&width=300",
      color: "from-blue-400 to-blue-600",
      platformIcon: "/images/istad.jpg",
    },
    {
      platform: "FreeCodeCamp",
      title: "Front End Development Libraries",
      instructor: "FreeCodeCamp",
      completedDate: "December 2023",
      duration: "300 hours",
      skills: ["React", "Redux", "Bootstrap", "Sass", "jQuery"],
      description: "Comprehensive front-end development course covering modern JavaScript libraries and frameworks.",
      certificateUrl: "#",
      previewImage: "/placeholder.svg?height=200&width=300",
      color: "from-green-500 to-green-700",
      platformIcon: "/images/istad.jpg",
    },
    {
      platform: "LinkedIn",
      title: "React.js Essential Training",
      instructor: "Eve Porcello",
      completedDate: "November 2023",
      duration: "4 hours",
      skills: ["React", "JSX", "Components", "State Management", "Hooks"],
      description: "Essential React.js training covering components, state management, and modern React patterns.",
      certificateUrl: "#",
      previewImage: "/placeholder.svg?height=200&width=300",
      color: "from-blue-600 to-blue-800",
      platformIcon: "/images/istad.jpg",
    },
    {
      platform: "Educative",
      title: "Understanding Redux: A Beginner's Guide To State Management",
      instructor: "Educative Team",
      completedDate: "October 2023",
      duration: "8 hours",
      skills: ["Redux", "State Management", "React-Redux", "Middleware", "DevTools"],
      description:
        "Comprehensive Redux course covering state management patterns and best practices for React applications.",
      certificateUrl: "#",
      previewImage: "/placeholder.svg?height=200&width=300",
      color: "from-orange-400 to-orange-600",
      platformIcon: "/images/istad.jpg",
    },
  ]

  return (
    <section
      id="certificates"
      className="py-16 bg-gray-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500"
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
                    className={`bg-gradient-to-r ${cert.color} text-white px-6 py-3 rounded-2xl flex items-center gap-4 shadow-lg`}
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
                <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4 leading-tight min-h-[3.5rem] line-clamp-3 transition-colors duration-500">
                  {cert.title}
                </h3>

                {/* Instructor */}
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-500">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.instructor}</span>
                </div>

                {/* Certificate Image with Centered Eye Icon */}
                <div className="relative h-32 bg-gray-100 dark:bg-slate-700 rounded-xl overflow-hidden group/image transition-colors duration-500">
                  <Image
                    src={cert.previewImage || "/placeholder.svg"}
                    alt={`${cert.title} Certificate`}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover opacity-80"
                  />

                  {/* Centered Eye Icon - Only visible on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-green-500/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-green-400 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
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
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden bg-white dark:bg-slate-900 p-0 border-0 shadow-2xl rounded-3xl transition-colors duration-500">
            {selectedCertificate && (
              <div className="relative flex flex-col h-full">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 z-30 rounded-full w-12 h-12 p-0 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm border border-white/20 transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Certificate Preview Image with Enhanced Design */}
                <div className="relative h-80 rounded-t-3xl overflow-hidden flex-shrink-0">
                  <Image
                    src={selectedCertificate.previewImage || "/placeholder.svg?height=400&width=800"}
                    alt={`${selectedCertificate.title} Certificate`}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Platform Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`bg-gradient-to-r ${selectedCertificate.color} text-white px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl backdrop-blur-sm border border-white/20`}
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold border-2 border-white/30 overflow-hidden">
                          <Image
                            src={selectedCertificate.platformIcon}
                            alt="Profile"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-bold text-xl">{selectedCertificate.platform}</span>
                      </div>
                      <div className="bg-yellow-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4" />
                        <span className="font-medium text-sm">Certified</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="absolute bottom-6 right-6">
                    <div className="bg-green-500 text-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl backdrop-blur-sm">
                      <Award className="w-6 h-6" />
                      <span className="font-semibold">Achievement Unlocked</span>
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-900 transition-colors duration-500">
                  <div className="p-6 space-y-6">
                    {/* Title Section */}
                    <div className="text-center space-y-3">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
                        {selectedCertificate.title}
                      </h2>
                      <div className="flex items-center justify-center gap-2 text-green-500">
                        <Award className="w-5 h-5" />
                        <span className="font-medium">Professional Certificate</span>
                      </div>
                    </div>

                    {/* Certificate Details Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700/50 transition-colors duration-500">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-600 dark:text-gray-400 font-medium transition-colors duration-500">
                            Instructor
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm truncate transition-colors duration-500">
                            {selectedCertificate.instructor}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/30 rounded-xl border border-green-200 dark:border-green-700/50 transition-colors duration-500">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-600 dark:text-gray-400 font-medium transition-colors duration-500">
                            Completed
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm truncate transition-colors duration-500">
                            {selectedCertificate.completedDate}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl border border-purple-200 dark:border-purple-700/50 sm:col-span-2 lg:col-span-1 transition-colors duration-500">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-600 dark:text-gray-400 font-medium transition-colors duration-500">
                            Duration
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm truncate transition-colors duration-500">
                            {selectedCertificate.duration}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills and Description */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 transition-colors duration-500">
                          <Sparkles className="w-4 h-4 text-green-500" />
                          Skills Acquired
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCertificate.skills.map((skill: string) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium hover:scale-105 transition-all duration-200 border border-green-300 dark:border-green-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-500">
                          Description
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm transition-colors duration-500">
                          {selectedCertificate.description}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-500">
                      <Button
                        variant="outline"
                        className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
                        asChild
                      >
                        <a href={selectedCertificate.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
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
