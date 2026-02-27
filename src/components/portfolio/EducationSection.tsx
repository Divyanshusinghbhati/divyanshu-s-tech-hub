import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Poornima University",
    period: "2022 - 2025",
    gpa: "7.82",
    description: "Comprehensive study of computer science fundamentals, software development, and IT management.",
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "K.V No.1, Bikaner",
    period: "2020 - 2021",
    gpa: "7.96",
    description: "Science stream with focus on Mathematics and Computer Science.",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">MY JOURNEY</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 glow z-10" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="glass p-6 rounded-xl hover-glow">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-primary font-mono text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                    <p className="text-primary mb-2">{item.institution}</p>
                    <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono">
                      GPA: {item.gpa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
