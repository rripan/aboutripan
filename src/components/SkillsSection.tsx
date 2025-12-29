const skills = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'Rust', 'Go'],
  frontend: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'GraphQL'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-primary">//</span>
          skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={category}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-lg p-5 card-hover h-full">
                <h3 className="font-mono text-sm text-primary mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
