import { Mail, MapPin, Send, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-primary">//</span>
          contact
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground mb-8">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">kaur.ri@northeastern.edu</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">Boston, MA</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:kaur.ri@northeastern.edu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 glow"
            >
              <Send className="w-4 h-4" />
              Get in Touch
            </a>
            <Link
              to="/guestbook"
              className="group relative inline-flex items-center gap-2 px-6 py-3 font-mono font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]" />
              
              {/* Glow pulse effect */}
              <div className="absolute inset-0 bg-primary/20 animate-pulse" />
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-lg border-2 border-primary/50 group-hover:border-primary transition-colors duration-300" />
              
              {/* Content */}
              <span className="relative z-10 flex items-center gap-2 text-primary-foreground">
                <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:tracking-wider transition-all duration-300">Sign Guestbook</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
