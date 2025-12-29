import { Code2, Coffee, Rocket } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Code2, label: '5+ Years', desc: 'Experience' },
    { icon: Coffee, label: '50+', desc: 'Projects' },
    { icon: Rocket, label: '99%', desc: 'Uptime' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-primary">//</span>
          about
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a software engineer specializing in building exceptional digital experiences. 
              Currently focused on creating accessible, human-centered products using modern 
              web technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a background in computer science and years of hands-on experience, 
              I bring ideas to life through clean, efficient code. I believe in the 
              power of simplicity and the beauty of well-crafted software.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="p-4 rounded-lg bg-card border border-border card-hover text-center"
                >
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-mono font-semibold text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Card */}
          <div className="bg-card border border-border rounded-lg overflow-hidden card-hover">
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-xs font-mono text-muted-foreground ml-2">about.json</span>
            </div>
            <pre className="p-4 text-sm font-mono overflow-x-auto">
              <code className="text-muted-foreground">
{`{
  "name": "Alex Chen",
  "role": "Full Stack Developer",
  "location": "San Francisco, CA",
  "interests": [
    "Open Source",
    "System Design",
    "Developer Tools",
    "Cloud Architecture"
  ],
  "available": true
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
