// Fallback data for when API is unavailable
import type { ResumeData } from "./api"

export const fallbackResumeData: ResumeData = {
  personal_info: {
    id: 1,
    name: "Ali Mohammadnia",
    title: "Back-end Engineer | DevOps",
    description:
      "Eager Software Engineer Candidate with 4 years of programming experience. Possesses a passion for learning new technologies and a strong foundation in coding principles. Driven to contribute to challenging projects and collaborate effectively within a team.",
    email: "alimohammadnia127@gmail.com",
    github_url: "https://github.com/ali-mohammadnia",
    linkedin_url: "https://www.linkedin.com/in/ali-mohammadnia/",
  },
  experiences: [
    {
      id: 1,
      title: "Software Engineer | DevOps",
      company: "Raydad",
      start_date: "2023-05-01",
      end_date: null,
      is_current: true,
      achievements: [
        "Designed and managed a master-slave PostgreSQL architecture, enhancing database performance by 20%",
        "Planned secure user authentication using JWT and SSO solutions by FastAPI, including OTP verification via Redis, resulting in a 30% reduction in security incidents",
        "Leveraged Redis, RabbitMQ, and Celery to handle tasks and uploads, reducing system response times by 25%",
        "Established CI/CD pipelines using GitHub Actions and Docker Compose, improving deployment efficiency by 40%",
        "Set up Prometheus and Grafana for comprehensive monitoring and implemented request tracing with Jaeger, boosting system reliability",
        "Configured Metabase for data analysis and reporting from PostgreSQL and MS-SQL databases, providing actionable insights to stakeholders",
        "Worked on projects: Hamresan, Hamresan_khadamat, Payeshino, etozie",
      ],
    },
    {
      id: 2,
      title: "Remote Backend Developer",
      company: "Lexico Novin System",
      start_date: "2024-05-01",
      end_date: "2024-09-01",
      is_current: false,
      achievements: [
        "Developed English Learning Application with focus on backend architecture",
        "Implemented OAuth 2.0 login via Google Cloud Console, increasing application security",
        "Integrated MINIO for multimedia file storage, optimizing the retrieval speed of media assets",
        "Supported multilingual user experience by customizing API responses and error messages",
      ],
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Makeen Academy",
      start_date: "2023-01-01",
      end_date: "2024-05-01",
      is_current: false,
      achievements: [
        "Gained foundational experience in software development",
        "Participated in collaborative development projects",
        "Enhanced programming skills through practical application",
      ],
    },
  ],
  skills: [
    { id: 1, name: "Python", years_experience: 4, proficiency_level: 9, category: "programming" },
    { id: 2, name: "JavaScript", years_experience: 3, proficiency_level: 7, category: "programming" },
    { id: 3, name: "Kotlin", years_experience: 2, proficiency_level: 6, category: "programming" },
    { id: 4, name: "Django", years_experience: 4, proficiency_level: 8, category: "framework" },
    { id: 5, name: "Django REST Framework", years_experience: 3, proficiency_level: 8, category: "framework" },
    { id: 6, name: "FastAPI", years_experience: 2, proficiency_level: 7, category: "framework" },
    { id: 7, name: "PostgreSQL", years_experience: 3, proficiency_level: 8, category: "database" },
    { id: 8, name: "Redis", years_experience: 3, proficiency_level: 7, category: "database" },
    { id: 9, name: "MongoDB", years_experience: 2, proficiency_level: 6, category: "database" },
    { id: 10, name: "Docker", years_experience: 2, proficiency_level: 7, category: "tool" },
    { id: 11, name: "RabbitMQ", years_experience: 2, proficiency_level: 6, category: "tool" },
    { id: 12, name: "Celery", years_experience: 2, proficiency_level: 7, category: "tool" },
    { id: 13, name: "Prometheus", years_experience: 1, proficiency_level: 6, category: "tool" },
    { id: 14, name: "Grafana", years_experience: 1, proficiency_level: 6, category: "tool" },
    { id: 15, name: "Elasticsearch", years_experience: 1, proficiency_level: 5, category: "tool" },
  ],
  projects: [
    {
      id: 1,
      name: "Real-Time Online Chat Application",
      description:
        "Developed a real-time online chat application using Django Channels and WebSockets with automated testing using Selenium.",
      url: "",
      github_url: "",
      tags: ["Django", "WebSockets", "Django Channels", "Selenium", "Real-time"],
      featured: true,
    },
    {
      id: 2,
      name: "Hamresan Platform",
      description:
        "Enterprise-level platform with master-slave PostgreSQL architecture, JWT authentication, and comprehensive monitoring.",
      url: "",
      github_url: "",
      tags: ["FastAPI", "PostgreSQL", "JWT", "Redis", "Prometheus"],
      featured: true,
    },
    {
      id: 3,
      name: "English Learning Application",
      description: "Multilingual learning platform with OAuth 2.0 authentication and MINIO file storage integration.",
      url: "",
      github_url: "",
      tags: ["OAuth 2.0", "MINIO", "Multilingual", "Google Cloud"],
      featured: true,
    },
  ],
  education: [
    {
      id: 1,
      degree: "Python Certificate",
      institution: "Tehran University",
      field_of_study: "Python Programming",
      start_year: 2023,
      end_year: 2023,
    },
    {
      id: 2,
      degree: "Python Programming Certificates",
      institution: "SoloLearn",
      field_of_study: "Beginner, Intermediate, Core Python",
      start_year: 2022,
      end_year: 2023,
    },
  ],
  languages: [
    { id: 1, name: "English", proficiency: "IELTS 6.5" },
    { id: 2, name: "Russian", proficiency: "Basic" },
    { id: 3, name: "Persian", proficiency: "Native" },
  ],
  value_propositions: [
    {
      id: 1,
      role_type: "backend",
      title: "Backend Engineer",
      description:
        "As a <strong>Backend Engineer</strong>, I bring 4 years of hands-on experience in Python development with Django and FastAPI. I've successfully designed master-slave PostgreSQL architectures, implemented secure JWT authentication systems, and built scalable applications handling real-time communications. My expertise in asynchronous task management with Redis, RabbitMQ, and Celery has consistently reduced system response times by 25%.",
    },
    {
      id: 2,
      role_type: "devops",
      title: "DevOps Specialist",
      description:
        "As a <strong>DevOps Specialist</strong>, I have proven experience in establishing CI/CD pipelines using GitHub Actions and Docker Compose, improving deployment efficiency by 40%. I've set up comprehensive monitoring solutions with Prometheus and Grafana, implemented request tracing with Jaeger, and managed containerized applications. My focus is on automation, reliability, and creating robust deployment workflows.",
    },
    {
      id: 3,
      role_type: "fullstack",
      title: "Full-Stack Developer",
      description:
        "As a <strong>Full-Stack Developer</strong>, I combine strong backend expertise with frontend capabilities. I've built real-time chat applications using WebSockets, integrated OAuth 2.0 authentication, and created multilingual user experiences. My experience spans from database design to user interface implementation, with a focus on creating seamless, secure, and performant applications.",
    },
  ],
  testimonials: [
    {
      id: 1,
      quote:
        "Ali is an exceptional backend engineer. His deep understanding of system architecture and his ability to implement scalable solutions have been invaluable to our team. He consistently delivers high-quality code and is a pleasure to work with.",
      author_name: "Dr. Sarah Chen",
      author_title: "Lead Architect",
      author_company: "Tech Innovations Inc.",
      date: "2024-03-15",
    },
    {
      id: 2,
      quote:
        "I had the pleasure of collaborating with Ali on a complex microservices project. His expertise in Go and Kubernetes significantly accelerated our development cycles and improved system reliability. He's a true asset to any engineering team.",
      author_name: "Michael Lee",
      author_title: "Senior Software Engineer",
      author_company: "Global Solutions Co.",
      date: "2023-11-20",
    },
    {
      id: 3,
      quote:
        "Ali's problem-solving skills are outstanding. He tackled some of our most challenging performance bottlenecks with innovative solutions, leading to a noticeable improvement in user experience. Highly recommend!",
      author_name: "Emily Rodriguez",
      author_title: "Product Manager",
      author_company: "Digital Ventures LLC",
      date: "2024-01-10",
    },
  ],
}
