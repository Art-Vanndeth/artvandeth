import Image from "next/image"
import { Headphones, Plane, Mountain, Briefcase, Heart, Coffee, User,FolderOpen } from "lucide-react"

export function AboutSection() {
  const interests = [
    { name: "Listening to Music", icon: Headphones, color: "bg-blue-500", hoverColor: "hover:bg-blue-600" },
    { name: "Travelling", icon: Plane, color: "bg-orange-500", hoverColor: "hover:bg-orange-600" },
    { name: "Mountains", icon: Mountain, color: "bg-green-500", hoverColor: "hover:bg-green-600" },
    { name: "Coffee", icon: Coffee, color: "bg-amber-600", hoverColor: "hover:bg-amber-700" },
  ]

  const stats = [
    { label: "Years Experience", value: "2+", icon: Briefcase },
    { label: "Project Completed", value: "18+", icon: FolderOpen },
  ]

  return (
    <section id="about" className="py-16 bg-background relative overflow-hidden transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-green-500 rounded-full animate-spin-slow"></div>
        <div
          className="absolute bottom-32 right-72 w-80 h-80 border border-green-400 rounded-full animate-spin-slow"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <User className="w-8 h-8 text-green-500 animate-bounce-slow" />
            <h2 className="text-5xl md:text-6xl font-bold text-green-500">About</h2>
            <Heart className="w-8 h-8 text-green-500 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-8">Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile and Interests */}
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-500 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile Picture"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-pulse" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-green-500 mb-2">I Love</h3>
                <p className="text-lg text-muted-foreground italic">"Try to know your enemies you will know how to kill them"</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map(({ name, icon: IconComponent, color, hoverColor }) => (
                <div
                  key={name}
                  className={`modern-card px-6 py-4 flex items-center gap-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer`}
                >
                  <div
                    className={`w-10 h-10 ${color} ${hoverColor} rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{name}</span>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a passionate full-stack developer with a love for creating beautiful, functional applications. When
                I'm not coding, you'll find me exploring new places, listening to music, or planning my next mountain
                adventure. I believe in continuous learning and staying curious about new technologies.
              </p>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="space-y-12">
            {stats.map(({ label, value, icon: IconComponent }) => (
              <div key={label} className="text-right group mr-2">
                <div className="relative inline-block">
                  <div className="text-8xl md:text-9xl font-bold text-green-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value}
                  </div>
                  <div className="absolute -top-4 -right-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center animate-bounce">
                      <IconComponent className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                </div>
                <div className="text-2xl text-muted-foreground font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
