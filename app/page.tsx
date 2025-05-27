import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ExperienceSection } from "@/components/sections/experience"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { CertificatesSection } from "@/components/sections/certificates"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </div>
    </main>
  )
}
