import { Code, Monitor, Users, TestTube, BarChart3, Search, Layers } from "lucide-react"

export default function AdditionalInfoSection() {
  const additionalSkills = [
    {
      category: "Development Tools",
      icon: Code,
      items: ["PyCharm", "VSCode", "Vim", "Jupyter Notebook", "Replit", "SublimeText", "Atom"],
    },
    {
      category: "Operating Systems",
      icon: Monitor,
      items: ["Linux (Fedora, Ubuntu)", "Termux"],
    },
    {
      category: "Project Management",
      icon: Users,
      items: ["Jira", "Trello", "Slack", "Agile", "SCRUM"],
    },
    {
      category: "Testing",
      icon: TestTube,
      items: ["Unit Testing", "Integration Testing", "Functional Testing", "Selenium"],
    },
    {
      category: "Monitoring & Analytics",
      icon: BarChart3,
      items: ["Jaeger", "Prometheus", "Grafana", "K6", "Locust", "Sentry"],
    },
    {
      category: "Search & Analytics",
      icon: Search,
      items: ["Elasticsearch", "Logstash", "Kibana (ELK Stack)"],
    },
    {
      category: "Architecture & Design",
      icon: Layers,
      items: ["GOF Design Patterns", "Data Structures", "DDD", "TDD"],
    },
  ]

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ali-mohammadnia/" },
    { name: "GitHub", url: "https://github.com/ali-mohammadnia" },
    { name: "StackOverflow", url: "#" },
    { name: "SoloLearn", url: "#" },
    { name: "GitLab", url: "#" },
  ]

  return (
    <section id="additional-info" className="py-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Additional Expertise</h3>
        <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {additionalSkills.map((skillGroup, index) => {
          const IconComponent = skillGroup.icon
          return (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-black">{skillGroup.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-effect rounded-2xl p-8 shadow-elegant-lg">
          <h4 className="text-2xl font-bold text-black mb-6 text-center">Professional Links</h4>
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 text-center font-medium hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-8 shadow-elegant-lg">
          <h4 className="text-2xl font-bold text-black mb-6 text-center">Personal Information</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Phone:</span>
              <span className="text-black font-medium">+989102001647</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Birth Date:</span>
              <span className="text-black font-medium">May 21, 1997</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Location:</span>
              <span className="text-black font-medium">Tehran, Iran</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Experience:</span>
              <span className="text-black font-medium">4+ years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
