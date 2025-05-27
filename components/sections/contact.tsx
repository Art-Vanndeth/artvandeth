"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "artvandeth@gmail.com",
      href: "mailto:artvandeth@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+855) 98 789 847",
      href: "tel:+85598789847",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tuol Kouk, Phnom Penh",
      href: "#",
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "artvandeth.vercel.app",
      href: "https://artvandeth.vercel.app",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <Mail className="w-8 h-8 text-green-500 animate-bounce" />
            <h2 className="text-5xl md:text-6xl font-bold text-green-500">Get In</h2>
            <Phone className="w-8 h-8 text-green-500 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-8">Touch</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's start a conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map(({ icon: IconComponent, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">{label}</div>
                    <a href={href} className="text-foreground font-medium hover:text-green-500 transition-colors">
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-700/50 modern-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-green-700 dark:text-green-300">Available for new projects</span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                  Currently accepting new client work and interesting collaborations
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="modern-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border focus:border-green-500 dark:focus:border-green-400"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border focus:border-green-500 dark:focus:border-green-400"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-border focus:border-green-500 dark:focus:border-green-400"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-muted/50 border-border focus:border-green-500 dark:focus:border-green-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
