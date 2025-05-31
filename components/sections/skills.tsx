import { Badge } from "@/components/ui/badge"
import { Code, Zap, Database, Cloud, Settings, GitBranch, Coffee, Braces, Webhook, CodeXmlIcon } from "lucide-react"
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
  // Frontend Development & Design
  const frontendAndDesign = [
    // { name: "HTML5", icon: SiHtml5 },
    // { name: "CSS3", icon: SiCss3 },
    // { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    // { name: "jQuery", icon: SiJquery },
    // { name: "Bootstrap 5", icon: SiBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Dart", icon: SiDart },
    { name: "Flutter", icon: SiFlutter },
    // { name: "Axios", icon: SiAxios },
    { name: "shadcn/ui", icon: SiShadcnui },
    { name: "NextUI", icon: SiNextui },
    // { name: "Adobe XD", icon: SiAdobexd },
    { name: "Figma", icon: SiFigma },
  ]

  // Backend Development & Databases
  const backendAndDatabases = [
    { name: "Java", icon: Coffee },
    // { name: "C#", icon: SiSharp },
    { name: "ASP.NET Core", icon: SiDotnet },
    // { name: "Python", icon: SiPython },
    // { name: "Go", icon: SiGo },
    { name: "Spring Framework", icon: SiSpring },
    { name: "Spring Boot", icon: SiSpringboot },
    // { name: "Spring Security", icon: SiSpring },
    // { name: "Spring Data JPA", icon: SiSpring },
    // { name: "Spring WebFlux", icon: SiSpring },
    // { name: "Spring Cloud", icon: SiSpring },
    // { name: "Django", icon: SiDjango },
    // { name: "FastAPI", icon: SiFastapi },
    // { name: "Flask", icon: SiFlask },
    // { name: "Apache Tomcat", icon: SiApachetomcat },
    { name: "Microservices", icon: Cloud },
    { name: "PostgreSQL", icon: SiPostgresql },
    // { name: "MySQL", icon: SiMysql },
    // { name: "SQL Server", icon: Database },
    // { name: "Oracle", icon: SiOracle },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Elasticsearch", icon: SiElasticsearch },
    { name: "Redis", icon: Database },
    { name: "NoSQL", icon: Database },
    // { name: "GraphQL", icon: Settings },
    { name: "RESTful APIs", icon: Braces },
    { name: "WebSockets", icon: Zap },
    // { name: "SQL", icon: Database },
    { name: "Apache Kafka", icon: SiApachekafka },
    { name: "WebSocket", icon: Zap },
    // { name: "Webhook", icon: Webhook },
    { name: "RabbitMQ", icon: SiRabbitmq },
    { name: "OAuth2", icon: SiAuth0 },
    { name: "JWT", icon: SiJsonwebtokens },
  ]

  // Cloud, DevOps & Development Tools
  const cloudDevOpsAndTools = [
    { name: "AWS", icon: SiAmazon },
    // { name: "Google Cloud", icon: SiGooglecloud },
    // { name: "Digital Ocean", icon: SiDigitalocean },
    { name: "Docker", icon: SiDocker },
    // { name: "Docker Compose", icon: SiDocker },
    { name: "Nginx", icon: SiNginx },
    { name: "Linux", icon: SiLinux },
    { name: "CI/CD", icon: GitBranch },
    // { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "GitLab", icon: SiGitlab },
    { name: "Postman", icon: SiPostman },
  ]

  return (
    <section id="skills" className="py-16 bg-white dark:bg-background transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <CodeXmlIcon className="w-8 h-8 text-green-500 animate-bounce" />
            <h2 className="text-5xl md:text-6xl font-bold text-green-500">Skills</h2>
            <Zap className="w-8 h-8 text-green-500 animate-pulse" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Frontend Development & Design */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-8">Frontend Development & Design</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frontendAndDesign.map(({ name, icon: IconComponent }, index) => (
                <Badge
                  key={name}
                  variant="outline"
                  className="border-color-modern-card px-6 py-4 dark:text-gray-200 text-gray-800 hover:text-green-500 dark:hover:text-green-500 text-base font-medium rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <IconComponent className="mr-2 text-lg" />
                  {name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Backend Development & Databases */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-8">Backend Development & Databases</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {backendAndDatabases.map(({ name, icon: IconComponent }, index) => (
                <Badge
                  key={name}
                  variant="outline"
                  className="border-color-modern-card px-6 py-4 dark:text-gray-200 text-gray-800 hover:text-green-500 dark:hover:text-green-500 text-base font-medium rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <IconComponent className="mr-2 text-lg" />
                  {name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Cloud, DevOps & Development Tools */}
          <div>
            <h3 className="text-4xl font-bold text-green-500 text-center mb-8">Cloud, DevOps & Development Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cloudDevOpsAndTools.map(({ name, icon: IconComponent }, index) => (
                <Badge
                  key={name}
                  variant="outline"
                  className="border-color-modern-card px-6 py-4 dark:text-gray-200 text-gray-800 hover:text-green-500 dark:hover:text-green-500 text-base font-medium rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <IconComponent className="mr-2 text-lg" />
                  {name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
