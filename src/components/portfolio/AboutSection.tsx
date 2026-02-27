import { Code, Server, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Software Development",
    description: "Experience with Flutter, Firebase, and mobile app development",
  },
  {
    icon: Server,
    title: "IT Operations",
    description: "System maintenance, troubleshooting, and technical support",
  },
  {
    icon: Users,
    title: "Team Coordination",
    description: "Workflow management, vendor handling, and process optimization",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical approach to technical challenges and solutions",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">GET TO KNOW</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a <span className="text-primary">BCA graduate</span> with a strong foundation 
              in software engineering, IT support, and operational coordination. My journey in 
              technology has equipped me with hands-on experience in developing mobile applications, 
              managing IT infrastructure, and streamlining business workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise in <span className="text-primary">Flutter</span> and{" "}
              <span className="text-primary">Firebase</span>, I've contributed to building 
              real-world applications. My experience extends to system maintenance, 
              troubleshooting, documentation, and vendor management.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am passionate about securing an IT-focused role that combines my 
              technical skills with operational efficiency, where I can contribute to 
              building reliable and innovative solutions.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass p-6 rounded-xl hover-glow cursor-default group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
