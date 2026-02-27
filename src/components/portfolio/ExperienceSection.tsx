import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Operation Executive",
    company: "Elbow Grease Business Solutions Pvt. Ltd",
    period: "Oct 2025 – Present",
    type: "Full-time",
    responsibilities: [
      "Managing operational processes and workflow coordination",
      "Vendor handling and stakeholder communication",
      "Process optimization and documentation",
      "Budget planning and resource management",
    ],
  },
  {
    title: "IT Manager",
    company: "Smart Circle Group",
    period: "Jun 2025 – Sep 2025",
    type: "Full-time",
    responsibilities: [
      "IT support and technical troubleshooting",
      "System maintenance and network administration",
      "Managing IT infrastructure and security",
      "Team coordination and technical documentation",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Ethereal Softech Pvt. Ltd",
    period: "May 2024 – Jul 2024",
    type: "Internship",
    responsibilities: [
      "Mobile app development using Flutter and Firebase",
      "UI/UX implementation and testing",
      "Code review and version control with Git",
      "Collaborative development in agile environment",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">WHERE I'VE WORKED</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <div key={exp.title + exp.company} className="relative pl-16 mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-4 w-5 h-5 bg-background border-2 border-primary rounded-full transform -translate-x-1/2 z-10">
                  <div className="absolute inset-1 bg-primary rounded-full animate-pulse-glow" />
                </div>

                {/* Content Card */}
                <div className="glass p-6 rounded-xl hover-glow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
