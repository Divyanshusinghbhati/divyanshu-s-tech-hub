import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Public Speaking",
    issuer: "NPTEL",
    icon: "🎤",
  },
  {
    title: "Flutter and Firebase Development",
    issuer: "Udemy",
    icon: "📱",
  },
  {
    title: "Prompt Engineering Course",
    issuer: "DeepLearning AI",
    icon: "🤖",
  },
  {
    title: "Innovation in Artificial Intelligence",
    issuer: "Certificate Program",
    icon: "🧠",
  },
  {
    title: "PepsiCo Sales Certificate",
    issuer: "PepsiCo",
    icon: "📊",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">ACHIEVEMENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass p-6 rounded-xl hover-glow group cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
