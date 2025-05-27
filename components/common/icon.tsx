import type React from "react"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface IconProps {
  icon: LucideIcon
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "accent" | "muted" | "gradient"
  className?: string
}

export function Icon({ icon: IconComponent, size = "md", variant = "default", className }: IconProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  }

  const variantClasses = {
    default: "text-foreground",
    accent: "text-orange-500",
    muted: "text-muted-foreground",
    gradient: "bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent",
  }

  return (
    <IconComponent
      className={cn(sizeClasses[size], variantClasses[variant], "transition-colors duration-200", className)}
    />
  )
}

export function AnimatedIcon({
  children,
  animation = "hover:scale-110",
}: {
  children: React.ReactNode
  animation?: string
}) {
  return <div className={cn("transition-transform duration-200", animation)}>{children}</div>
}

export function GlowIcon({
  icon: IconComponent,
  glowColor = "orange",
}: {
  icon: LucideIcon
  glowColor?: "orange" | "red" | "blue"
}) {
  const glowClasses = {
    orange: "drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]",
    red: "drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]",
    blue: "drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]",
  }

  return <IconComponent className={cn("w-6 h-6 text-orange-400 transition-all duration-300", glowClasses[glowColor])} />
}
