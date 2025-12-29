import { Mail, MapPin, Send } from 'lucide-react';

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

          <a
            href="mailto:kaur.ri@northeastern.edu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 glow"
          >
            <Send className="w-4 h-4" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
