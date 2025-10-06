interface ExperienceItemProps {
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

export function ExperienceItem({ title, company, location, period, description }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
          <p className="text-sm text-muted-foreground">
            {location} • {period}
          </p>
        </div>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-muted-foreground leading-relaxed flex gap-3">
              <span className="text-primary mt-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
