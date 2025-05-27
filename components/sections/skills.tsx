import { Badge } from "@/components/ui/badge"
import { Code, Zap, Code2 } from "lucide-react"
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiJquery, 
  SiSass, 
  SiBootstrap, 
  SiReact, 
  SiRedux, 
  SiFirebase, 
  SiNextdotjs, 
  SiAmp, 
  SiReacthookform, 
  SiTailwindcss, 
  SiMui, 
  SiChakraui, 
  SiSemanticui, 
  SiAntdesign, 
  SiGraphql, 
  SiApollographql, 
  SiFramer, 
  SiStyledcomponents, 
  SiReactquery, 
  SiGit,
  SiGitlab,
  SiGithub,
  SiNotion,
  SiPostman,
  SiAdobexd,
  SiFigma
} from "react-icons/si"
import type { IconType } from "react-icons"

export function SkillsSection() {
  const designTools = [
    { name: "Adobe XD", icon: SiAdobexd, color: "bg-[#FF61F6]" }, // Adobe XD brand purple/pink
    { name: "Figma", icon: SiFigma, color: "bg-[#F24E1E]" }, // Figma brand orange
  ]

  const technologies = [
    { name: "HTML5", icon: SiHtml5, color: "bg-[#E34F26]" }, // HTML5 official orange
    { name: "CSS3", icon: SiCss3, color: "bg-[#1572B6]" }, // CSS3 official blue
    { name: "JavaScript", icon: SiJavascript, color: "bg-[#F7DF1E]" }, // JavaScript official yellow
    { name: "jQuery", icon: SiJquery, color: "bg-[#0769AD]" }, // jQuery official blue
    { name: "SCSS", icon: SiSass, color: "bg-[#CC6699]" }, // Sass official pink
    { name: "Bootstrap", icon: SiBootstrap, color: "bg-[#7952B3]" }, // Bootstrap official purple
    { name: "ReactJS", icon: SiReact, color: "bg-[#61DAFB]" }, // React official cyan
    { name: "Redux", icon: SiRedux, color: "bg-[#764ABC]" }, // Redux official purple
    { name: "Firebase", icon: SiFirebase, color: "bg-[#FFCA28]" }, // Firebase official yellow
    { name: "NextJS", icon: SiNextdotjs, color: "bg-[#000000]" }, // Next.js official black
    { name: "AMP", icon: SiAmp, color: "bg-[#005AF0]" }, // AMP official blue
    { name: "React Hook Forms", icon: SiReacthookform, color: "bg-[#EC5990]" }, // React Hook Form official pink
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "bg-[#06B6D4]" }, // Tailwind official cyan
    { name: "Material UI", icon: SiMui, color: "bg-[#007FFF]" }, // MUI official blue
    { name: "Chakra UI", icon: SiChakraui, color: "bg-[#319795]" }, // Chakra UI official teal
    { name: "Semantic UI", icon: SiSemanticui, color: "bg-[#35BDB2]" }, // Semantic UI official teal
    { name: "Ant Design", icon: SiAntdesign, color: "bg-[#1890FF]" }, // Ant Design official blue
    { name: "GraphQL", icon: SiGraphql, color: "bg-[#E10098]" }, // GraphQL official pink
    { name: "Apollo GraphQL", icon: SiApollographql, color: "bg-[#311C87]" }, // Apollo official purple
    { name: "Framer Motion", icon: SiFramer, color: "bg-[#0055FF]" }, // Framer official blue
    { name: "Styled Components", icon: SiStyledcomponents, color: "bg-[#DB7093]" }, // Styled Components official pink
    { name: "React Query", icon: SiReactquery, color: "bg-[#FF4154]" }, // React Query official red
    { name: "Git", icon: SiGit, color: "bg-[#F05032]" }, // Git official orange
  ]

  const devTools = [
    { name: "Visual Studio Code", icon: Code2, color: "bg-[#007ACC]" }, // VS Code official blue
    { name: "GitLab", icon: SiGitlab, color: "bg-[#FC6D26]" }, // GitLab official orange
    { name: "GitHub", icon: SiGithub, color: "bg-[#181717]" }, // GitHub official dark
    { name: "Notion", icon: SiNotion, color: "bg-[#000000]" }, // Notion official black
    { name: "Postman", icon: SiPostman, color: "bg-[#FF6C37]" }, // Postman official orange
  ]

  return (
    <section id="skills" className="py-24 bg-background transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-green-500 animate-bounce" />
            <h2 className="text-5xl md:text-6xl font-bold text-green-500">Skills</h2>
            <Zap className="w-8 h-8 text-green-500 animate-pulse" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {/* Design Tools */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-12">Design Tools I Use</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {designTools.map(({ name, icon: IconComponent, color }) => (
                <Badge
                  key={name}
                  className={`${color} text-white px-8 py-4 text-lg font-medium rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0`}
                >
                  <IconComponent className="mr-3 text-xl" />
                  {name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-12">Technologies I Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map(({ name, icon: IconComponent, color }, index) => {
                // Determine text color based on background brightness
                const isDark = [
                  "bg-[#000000]", "bg-[#181717]", "bg-[#311C87]", "bg-[#1572B6]", 
                  "bg-[#0769AD]", "bg-[#7952B3]", "bg-[#764ABC]", "bg-[#005AF0]", 
                  "bg-[#007FFF]", "bg-[#319795]", "bg-[#35BDB2]", "bg-[#1890FF]", 
                  "bg-[#0055FF]", "bg-[#007ACC]"
                ].includes(color);
                const textColor = isDark ? "text-white" : "text-black";
                
                return (
                  <Badge
                    key={name}
                    className={`${color} ${textColor} px-6 py-3 text-base font-medium rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <IconComponent className="mr-2 text-lg" />
                    {name}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-12">
              Development & Productivity Tools I Use
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {devTools.map(({ name, icon: IconComponent, color }) => {
                // Determine text color based on background
                const isDark = ["bg-[#007ACC]", "bg-[#181717]", "bg-[#000000]"].includes(color);
                const textColor = isDark ? "text-white" : "text-black";
                
                return (
                  <Badge
                    key={name}
                    className={`${color} ${textColor} px-8 py-4 text-lg font-medium rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0`}
                  >
                    <IconComponent className="mr-3 text-xl" />
                    {name}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
