import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
        <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Bachelor's Degree in Information System and Software Engineering
              </h3>
              <p className="text-primary font-medium mb-1">The University of Algeria Batna 2</p>
              <p className="text-sm text-muted-foreground">Jan 2022 - May 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
