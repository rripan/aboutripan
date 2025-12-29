import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import InteractiveBackground from "./InteractiveBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive Particle Background */}
      <InteractiveBackground />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="font-mono text-primary text-sm mb-4">Hello, I'm</p>
        </div>

        <h1 className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-foreground">Ripan</span>
        </h1>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="mt-4 text-xl md:text-2xl font-mono text-gradient glow-text">
            Full Stack Developer
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-cursor-blink" />
          </p>
        </div>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Building elegant solutions with clean code. Passionate about creating performant web applications and
            developer tools.
          </p>
        </div>

        {/* Social Links */}
        <div
          className="opacity-0 animate-fade-in flex items-center justify-center gap-4 mt-6"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="https://github.com/rripan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-200 group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/ripandeep-kaur-003b341b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-200 group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:kaur.ri@northeastern.edu"
            className="p-3 rounded-lg bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-200 group"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className="opacity-0 animate-fade-in mt-10"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono">scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
