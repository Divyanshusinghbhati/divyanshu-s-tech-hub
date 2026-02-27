import { 
  Code, 
  Database, 
  Server, 
  Wrench, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Lightbulb,
  Network,
  Smartphone,
  Megaphone,
  Target
} from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Flutter Development", icon: Smartphone, level: 85 },
      { name: "Firebase", icon: Database, level: 80 },
      { name: "Network Administration", icon: Network, level: 75 },
      { name: "IT Support", icon: Wrench, level: 90 },
      { name: "System Maintenance", icon: Server, level: 85 },
      { name: "Troubleshooting", icon: Code, level: 90 },
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      { name: "Project Management", icon: Target, level: 80 },
      { name: "Marketing", icon: Megaphone, level: 75 },
      { name: "Budget Planning", icon: BarChart3, level: 70 },
      { name: "Communication", icon: MessageSquare, level: 90 },
      { name: "Problem Solving", icon: Lightbulb, level: 95 },
      { name: "Team Collaboration", icon: Users, level: 85 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">MY EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass p-4 rounded-xl hover-glow group cursor-default text-center"
                  >
                    <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground mb-2">{skill.name}</p>
                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{skill.level}%</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
