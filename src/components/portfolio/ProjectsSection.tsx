import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Royal Baisa App",
    description:
      "A mobile application showcasing women's Rajputi traditional dresses. Built with Flutter and Firebase, featuring elegant UI design, product catalog, and seamless user experience.",
    tags: ["Flutter", "Firebase", "Mobile App", "E-commerce"],
    image: null, // Placeholder for project image
    links: {
      demo: "#",
      github: "#",
    },
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden hover-glow"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image/Placeholder */}
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                      <Smartphone className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm">Project Preview</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">
                      Upload screenshots to showcase
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 gradient-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="hover-glow">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:text-primary">
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* More Projects Coming */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              More projects coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
