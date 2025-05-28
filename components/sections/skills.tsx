import { Badge } from "@/components/ui/badge"
import { Code, Zap, Database, Cloud, Settings, GitBranch, Coffee, Braces, Webhook } from "lucide-react"
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript,
  SiBootstrap, 
  SiTailwindcss,
  SiReact, 
  SiNextdotjs,
  SiSharp,
  SiDotnet,
  SiDart,
  SiFlutter,
  SiSpring,
  SiSpringboot,
  SiApachetomcat,
  SiPython,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiGo,
  SiApachekafka,
  SiRabbitmq,
  SiJsonwebtokens,
  SiAuth0,
  SiJquery,
  SiAxios,
  SiShadcnui,
  SiNextui,
  SiNginx,
  SiAmazon,
  SiGooglecloud,
  SiDigitalocean,
  SiElasticsearch,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiOracle,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLinux,
  SiDocker,
  SiPostman,
  SiAdobexd,
  SiFigma
} from "react-icons/si"
import type { IconType } from "react-icons"

export function SkillsSection() {
  const designTools = [
    { name: "Adobe XD", icon: SiAdobexd, color: "bg-[#FF61F6]" },
    { name: "Figma", icon: SiFigma, color: "bg-[#F24E1E]" },
  ]

  const frontendTechnologies = [
    { name: "HTML5", icon: SiHtml5, color: "bg-[#E34F26]" },
    { name: "CSS3", icon: SiCss3, color: "bg-[#1572B6]" },
    { name: "JavaScript", icon: SiJavascript, color: "bg-[#F7DF1E]" },
    { name: "TypeScript", icon: SiTypescript, color: "bg-[#3178C6]" },
    { name: "jQuery", icon: SiJquery, color: "bg-[#0769AD]" },
    { name: "Bootstrap 5", icon: SiBootstrap, color: "bg-[#7952B3]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "bg-[#06B6D4]" },
    { name: "React.js", icon: SiReact, color: "bg-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "bg-[#000000]" },
    { name: "Dart", icon: SiDart, color: "bg-[#0175C2]" },
    { name: "Flutter", icon: SiFlutter, color: "bg-[#02569B]" },
    { name: "Axios", icon: SiAxios, color: "bg-[#5A29E4]" },
    { name: "shadcn/ui", icon: SiShadcnui, color: "bg-[#000000]" },
    { name: "NextUI", icon: SiNextui, color: "bg-[#0070F3]" },
  ]

  const backendTechnologies = [
    { name: "Java", icon: Coffee, color: "bg-[#ED8B00]" },
    { name: "C#", icon: SiSharp, color: "bg-[#239120]" },
    { name: "ASP.NET Core", icon: SiDotnet, color: "bg-[#0078D4]" },
    { name: "Python", icon: SiPython, color: "bg-[#3776AB]" },
    { name: "Go", icon: SiGo, color: "bg-[#00ADD8]" },
    { name: "Apache Tomcat", icon: SiApachetomcat, color: "bg-[#F8DC75]" },
    { name: "Spring Framework", icon: SiSpring, color: "bg-[#6DB33F]" },
    { name: "Spring Boot", icon: SiSpringboot, color: "bg-[#6DB33F]" },
    { name: "Spring Security", icon: SiSpring, color: "bg-[#6DB33F]" },
    { name: "Spring Data JPA", icon: SiSpring, color: "bg-[#6DB33F]" },
    { name: "Spring WebFlux", icon: SiSpring, color: "bg-[#6DB33F]" },
    { name: "Spring Cloud", icon: SiSpring, color: "bg-[#6DB33F]" },
    { name: "Django", icon: SiDjango, color: "bg-[#092E20]" },
    { name: "FastAPI", icon: SiFastapi, color: "bg-[#009688]" },
    { name: "Flask", icon: SiFlask, color: "bg-[#000000]" },
    { name: "Microservices", icon: Cloud, color: "bg-[#4A90E2]" },
  ]

  const databases = [
    { name: "PostgreSQL", icon: SiPostgresql, color: "bg-[#336791]" },
    { name: "MySQL", icon: SiMysql, color: "bg-[#4479A1]" },
    { name: "SQL Server", icon: Database, color: "bg-[#CC2927]" },
    { name: "Oracle", icon: SiOracle, color: "bg-[#F80000]" },
    { name: "MongoDB", icon: SiMongodb, color: "bg-[#47A248]" },
    { name: "Elasticsearch", icon: SiElasticsearch, color: "bg-[#005571]" },
    { name: "SQL", icon: Database, color: "bg-[#CC2927]" },
  ]

  const messagingAndCommunication = [
    { name: "Apache Kafka", icon: SiApachekafka, color: "bg-[#231F20]" },
    { name: "WebSocket", icon: Zap, color: "bg-[#010101]" },
    { name: "Webhook", icon: Webhook, color: "bg-[#4A90E2]" },
    { name: "RabbitMQ", icon: SiRabbitmq, color: "bg-[#FF6600]" },
    { name: "REST APIs", icon: Braces, color: "bg-[#25D366]" },
    { name: "OAuth2", icon: SiAuth0, color: "bg-[#EB5424]" },
    { name: "JWT", icon: SiJsonwebtokens, color: "bg-[#000000]" },
  ]

  const cloudAndDevOps = [
    { name: "AWS", icon: SiAmazon, color: "bg-[#FF9900]" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "bg-[#4285F4]" },
    { name: "Digital Ocean", icon: SiDigitalocean, color: "bg-[#0080FF]" },
    { name: "Docker", icon: SiDocker, color: "bg-[#2496ED]" },
    { name: "Nginx", icon: SiNginx, color: "bg-[#009639]" },
    { name: "Linux", icon: SiLinux, color: "bg-[#FCC624]" },
    { name: "CI/CD", icon: GitBranch, color: "bg-[#326CE5]" },
  ]

  const devTools = [
    { name: "Git", icon: SiGit, color: "bg-[#F05032]" },
    { name: "GitHub", icon: SiGithub, color: "bg-[#181717]" },
    { name: "GitLab", icon: SiGitlab, color: "bg-[#FC6D26]" },
    { name: "Postman", icon: SiPostman, color: "bg-[#FF6C37]" },
    { name: "Docker Compose", icon: SiDocker, color: "bg-[#2496ED]" },
  ]

  return (
    <section id="skills" className="py-16 bg-background transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-green-500 animate-bounce" />
            <h2 className="text-5xl md:text-6xl font-bold text-green-500">Skills</h2>
            <Zap className="w-8 h-8 text-green-500 animate-pulse" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Design Tools */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-8">UX & UI Design</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {designTools.map(({ name, icon: IconComponent, color }) => (
                <Badge
                  key={name}
                  className={`${color} text-white px-6 py-3 text-lg font-medium rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0`}
                >
                  <IconComponent className="mr-2 text-xl" />
                  {name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Frontend Technologies */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-8">Frontend Development</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frontendTechnologies.map(({ name, icon: IconComponent, color }, index) => {
                const isDark = [
                  "bg-[#000000]", "bg-[#1572B6]", "bg-[#7952B3]", "bg-[#3178C6]", "bg-[#0769AD]", "bg-[#5A29E4]", "bg-[#0070F3]"
                ].includes(color);
                const textColor = isDark ? "text-white" : "text-black";
                
                return (
                  <Badge
                    key={name}
                    className={`${color} ${textColor} px-5 py-2 text-base font-medium rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <IconComponent className="mr-2 text-lg" />
                    {name}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Backend Technologies */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-8">Backend & Enterprise Development</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {backendTechnologies.map(({ name, icon: IconComponent, color }, index) => {
                const isDark = [
                  "bg-[#0078D4]", "bg-[#3776AB]", "bg-[#092E20]", "bg-[#000000]"
                ].includes(color);
                const textColor = isDark ? "text-white" : "text-black";
                
                return (
                  <Badge
                    key={name}
                    className={`${color} ${textColor} px-5 py-2 text-base font-medium rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <IconComponent className="mr-2 text-lg" />
                    {name}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-8">Databases & Data Modeling</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {databases.map(({ name, icon: IconComponent, color }) => {
                const isDark = ["bg-[#336791]", "bg-[#005571]", "bg-[#CC2927]", "bg-[#4479A1]"].includes(color);
                const textColor = isDark ? "text-white" : "text-black";
                
                return (
                  <Badge
                    key={name}
                    className={`${color} ${textColor} px-6 py-3 text-lg font-medium rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0`}
                  >
                    <IconComponent className="mr-2 text-xl" />
                    {name}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Messaging & Communication */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-8">Messaging & Communication</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {messagingAndCommunication.map(({ name, icon: IconComponent, color }, index) => {
                const isDark = [
                  "bg-[#231F20]", "bg-[#010101]", "bg-[#000000]"
                ].includes(color);
                const textColor = isDark ? "text-white" : "text-black";
                
                return (
                  <Badge
                    key={name}
                    className={`${color} ${textColor} px-5 py-2 text-base font-medium rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <IconComponent className="mr-2 text-lg" />
                    {name}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-8">Cloud & DevOps</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cloudAndDevOps.map(({ name, icon: IconComponent, color }, index) => {
                const isDark = [
                  "bg-[#2496ED]", "bg-[#326CE5]"
                ].includes(color);
                const textColor = isDark ? "text-white" : "text-black";
                
                return (
                  <Badge
                    key={name}
                    className={`${color} ${textColor} px-5 py-2 text-base font-medium rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0`}
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
            <h3 className="text-4xl font-bold text-green-500 text-center mb-8">
              Development Tools & Version Control
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {devTools.map(({ name, icon: IconComponent, color }) => {
                const isDark = ["bg-[#181717]", "bg-[#2496ED]"].includes(color);
                const textColor = isDark ? "text-white" : "text-black";
                
                return (
                  <Badge
                    key={name}
                    className={`${color} ${textColor} px-6 py-3 text-lg font-medium rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-0`}
                  >
                    <IconComponent className="mr-2 text-xl" />
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
