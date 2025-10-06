import { ExperienceItem } from "@/components/experience-item"

const experiences = [
  {
    title: "Frontend Developer",
    company: "YASSIR",
    location: "Alger, Algeria",
    period: "May 2025 – Oct 2025",
    description: [
      "Developed scalable web apps with React.js, Next.js, and Typescript, improving performance and reducing load time by 15%",
      "Delivered 10+ new features in 6 months, including scheduled rides, real-time tracking, and loyalty rewards, boosting user engagement",
      "Worked in a distributed Agile team, contributing to sprint planning and daily standups to ensure consistent delivery",
      "Managed tasks through Jira and collaborated with cross-functional teams via Slack and code reviews for smooth releases",
      "Resolved performance bottlenecks by implementing React Query caching, cutting API calls and enhancing responsiveness",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "SONATRACH TRC",
    location: "Tebessa, Algeria",
    period: "Dec 2024 - Jan 2025",
    description: [
      "Supported frontend development tasks, improving UI consistency with HTML, CSS, and JavaScript",
      "Learned and applied SAP ERP concepts for enterprise resource planning and workflow optimization",
      "Gained experience in database design and SQL, assisting with data management and reporting",
      "Collaborated with software engineers to document processes and support system integration",
    ],
  },
  {
    title: "Frontend & Network Intern",
    company: "Algeria Telecom",
    location: "Bir El Ater, Tebessa, Algeria",
    period: "Nov 2023 - Jan 2024",
    description: [
      "Assisted in developing and testing frontend interfaces using HTML, CSS, and JavaScript to improve usability",
      "Gained hands-on experience with network configuration and troubleshooting, ensuring stable connectivity",
      "Collaborated with engineers to integrate web applications with network systems, enhancing internal tools",
    ],
  },
  {
    title: "Tech Club Member",
    company: "GDG Batna",
    location: "Batna, Algeria",
    period: "Sep 2023 - Jun 2025",
    description: [
      "Developed & Maintained the official website for DeVest 2024 (a tech event) using HTML/CSS, JavaScript, React",
      "Orchestrated five tech competitions, Hackathons, and workshops, attracting 300+ participants",
      "Managed event logistics, participant registrations, and live technical support during events",
      "Promoted events through social media, email campaigns, and partnerships with tech communities",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
