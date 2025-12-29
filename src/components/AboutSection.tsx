import { Code2, Coffee, Rocket } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Code2, label: 'Software', desc: 'Engineer' },
    { icon: Coffee, label: '10+', desc: 'Projects' },
    { icon: Rocket, label: 'Scalable', desc: 'Solutions' },
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
              I'm a software engineer focused on building clean, efficient, and human-centered 
              digital experiences. My work revolves around creating intuitive, accessible products 
              grounded in real user needs, while also automating processes and building tools 
              that drive efficiency and innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in computer science and years of hands-on experience, 
              I enjoy turning complex problems into simple, scalable solutions through 
              thoughtful design and well-crafted code.
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
  "name": "Ripan",
  "role": "Full Stack Developer",
  "email": "kaur.ri@northeastern.edu",
  "interests": [
    "Human-Centered Design",
    "Process Automation",
    "Scalable Solutions",
    "Developer Tools"
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
