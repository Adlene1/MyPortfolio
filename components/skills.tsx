const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Sass/Scss"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git/GitHub", "Vite", "npm", "APIs Integration", "UI/UX Design", "Jira", "Agile/Scrum"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem-Solving", "Teamwork", "Time Management", "Adaptability"],
  },
  {
    title: "Languages",
    skills: ["Arabic (Native)", "English (Fluent)", "French (Conversational)"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
