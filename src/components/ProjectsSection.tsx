import { Folder } from 'lucide-react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'Developed a full-stack personal portfolio website using React for the frontend and Flask for the backend. Integrated Google Gemini API to enhance functionality improving interactivity and user engagement.',
    tech: ['React', 'Flask', 'Google Gemini API'],
    period: 'May 2025',
  },
  {
    title: 'Ticket Resale Platform',
    description: 'Initiated the development of a customer-to-customer (C2C) ticket marketplace, collaborating on backend systems using Django and designing the SQL database for secure data handling.',
    tech: ['Django', 'SQL', 'Python'],
    period: 'Sept 2024',
  },
  {
    title: '"Ready" Prototype - Paws Hackathon',
    description: 'Developed a study app prototype within 24 hours to address test anxiety, exam preparation, and time management, integrating research on study habits and behavioral patterns among individuals aged 18 to 23.',
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
                  <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
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
