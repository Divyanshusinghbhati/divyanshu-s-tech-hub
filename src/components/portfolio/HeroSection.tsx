import { ArrowRight, Linkedin, Mail, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-float">
            <div className="w-64 h-72 lg:w-80 lg:h-96 hexagon-clip bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <div className="w-full h-full hexagon-clip overflow-hidden">
                <img src={profileImage} alt="Divyanshu Singh Bhati" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="absolute -inset-4 hexagon-clip bg-gradient-to-br from-primary/30 to-transparent blur-xl -z-10 animate-pulse-glow" />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Divyanshu Singh</span>
              <br />
              <span className="text-foreground">Bhati</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              IT Professional | Operation Executive
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tech-driven BCA graduate with experience in software engineering, 
              IT management, and operational coordination, focused on delivering 
              reliable technical solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hover-glow group" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="hover-glow" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="hover:text-primary" asChild>
                <a
                  href="https://www.linkedin.com/in/divyanshu-singh-bhati-389012362"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
