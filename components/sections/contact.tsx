"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "sonner"
import axios from 'axios'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  // Form validation
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!validateForm()) {
      toast.error("Please fix the errors in the form", {
        description: "Check all required fields and try again",
        icon: <AlertCircle className="w-4 h-4" />,
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Check if Telegram Bot is properly configured
      const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

      if (!botToken || !chatId) {
        throw new Error('Telegram Bot configuration missing. Please check your environment variables.')
      }

      if (botToken === 'your_bot_token' || chatId === 'your_chat_id') {
        // Fallback: Show success message but log that Telegram isn't configured
        console.warn('Telegram Bot not configured yet. Form data:', formData)
        
        // Show success toast (temporary until Telegram is set up)
        toast.success("Message received!", {
          description: "Telegram Bot not configured yet, but your message was logged. Please contact me directly for now.",
          icon: <CheckCircle className="w-4 h-4" />,
          duration: 7000,
        })
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setErrors({})
        return
      }

      // Format message for Telegram
      const telegramMessage = `
🔥 *New Contact Form Message*

👤 *From:* ${formData.name}
📧 *Email:* ${formData.email}
📝 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

---
📅 *Sent:* ${new Date().toLocaleString()}
🌐 *From:* artvandeth.vercel.app
      `.trim()

      // Send to Telegram
      const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
      
      const response = await axios.post(telegramApiUrl, {
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown'
      })

      console.log('Message sent to Telegram successfully:', response.data)
      
      // Show success toast
      toast.success("Message sent successfully!", {
        description: "Thank you for your message. I'll get back to you soon via Telegram!",
        icon: <CheckCircle className="w-4 h-4" />,
        duration: 5000,
      })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setErrors({})
      
    } catch (error) {
      console.error('Failed to send message to Telegram:', error)
      
      // Show specific error message based on the error type
      let errorMessage = "Something went wrong. Please try again or contact me directly."
      
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          errorMessage = "Telegram Bot token is invalid. Please contact me directly."
        } else if (error.response?.status === 400) {
          errorMessage = "Invalid chat ID or message format. Please contact me directly."
        } else if (error.code === 'NETWORK_ERROR') {
          errorMessage = "Network error. Please check your connection and try again."
        } else {
          errorMessage = `Telegram API Error: ${error.response?.data?.description || error.message}`
        }
      } else if (error instanceof Error) {
        errorMessage = error.message
      }
      
      // Show error toast
      toast.error("Failed to send message", {
        description: errorMessage,
        icon: <AlertCircle className="w-4 h-4" />,
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
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
      href: "https://maps.app.goo.gl/5WcKMFgU5F3N7aT6A",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@artvandeth",
      href: "https://t.me/artvandeth",
    },
  ]

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <Mail className="w-8 h-8 text-green-500 animate-bounce" />
            <h2 className="text-5xl md:text-6xl font-bold text-green-500">Get In</h2>
            <Phone className="w-8 h-8 text-green-500 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">Touch</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Let's start a conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: IconComponent, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">{label}</div>
                    <a 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-green-500 transition-colors"
                    >
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`bg-muted/50 border-border focus:border-green-500 dark:focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 ${
                        errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`bg-muted/50 border-border focus:border-green-500 dark:focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 ${
                        errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`bg-muted/50 border-border focus:border-green-500 dark:focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 ${
                      errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`bg-muted/50 border-border focus:border-green-500 dark:focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none ${
                      errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 text-white font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
