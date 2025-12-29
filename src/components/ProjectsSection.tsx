import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'DevFlow',
    description: 'A developer productivity tool for managing workflows and automating repetitive tasks.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'CloudSync',
    description: 'Real-time file synchronization service with end-to-end encryption.',
    tech: ['TypeScript', 'AWS', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'CodeMetrics',
    description: 'Analytics dashboard for tracking code quality and team performance.',
    tech: ['Next.js', 'GraphQL', 'D3.js'],
    github: 'https://github.com',
  },
  {
    title: 'APIForge',
    description: 'API testing and documentation platform with collaborative features.',
    tech: ['Vue', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-primary">//</span>
          projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-lg p-6 card-hover h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-mono font-semibold text-lg text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
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

export default ProjectsSection;
