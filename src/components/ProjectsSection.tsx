import { Link } from 'react-router-dom';
import { Folder, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    summary: 'Full-stack portfolio with AI-powered chatbot using React, Flask, and Google Gemini API.',
    tech: ['React', 'Flask', 'Google Gemini API'],
    period: 'May 2025',
  },
  {
    id: 'ticket-resale',
    title: 'Ticket Resale Platform',
    summary: 'C2C ticket marketplace with Django backend and secure SQL database design.',
    tech: ['Django', 'SQL', 'Python'],
    period: 'Sept 2024',
  },
  {
    id: 'ready-prototype',
    title: '"Ready" Prototype - Paws Hackathon',
    summary: 'Study app prototype addressing test anxiety and time management for college students.',
    tech: ['Prototype', 'UX Research', 'Hackathon'],
    period: 'March 2024',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-lg p-6 card-hover h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
                </div>

                <h3 className="font-mono font-semibold text-lg text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects#${project.id}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-primary/80 transition-colors group"
                >
                  View details
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
