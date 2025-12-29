import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Folder, Calendar, Code2, Lightbulb } from 'lucide-react';

const projects = [
  {
    id: 'powerpoint-automation',
    title: 'Automated PowerPoint Reporting System',
    period: 'Bain Capital IT',
    description: 'End-to-end automation script for generating dynamic, data-driven PowerPoint reports with minimal manual intervention.',
    overview: 'Designed and built an end-to-end automation script to generate dynamic, data-driven PowerPoint reports for Bain Capital IT department. The tool consolidates data from multiple sources—including ServiceNow APIs, Excel/CSV files, images, and PDFs—and programmatically updates presentation slides using Microsoft Office COM automation.',
    features: [
      'Intelligent slide selection based on business logic (e.g., weekday-specific decks)',
      'Automatic placeholder replacement with latest charts, tables, and KPIs',
      'PDF parsing for SLA metrics extraction',
      'Interactive hyperlink injection into tables for seamless navigation',
      'Windows Forms GUI for non-technical user customization',
      'Robust error handling, backups, and modular function architecture',
    ],
    technologies: ['PowerShell', 'Microsoft Office COM', 'API Integration', 'Windows Forms', 'Data Parsing', 'Process Automation'],
    challenges: 'Integrating multiple data sources (ServiceNow APIs, Excel, PDFs) into a cohesive pipeline while ensuring reliability through error handling and maintaining modularity for future enhancements.',
    outcome: 'Significantly reduced manual reporting time, improved accuracy, and demonstrated how automation and tooling can drive efficiency and scalability in operational workflows.',
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    period: 'May 2025',
    description: 'A full-stack personal portfolio website with AI-powered chatbot functionality for enhanced user interaction.',
    overview: 'Developed a comprehensive personal portfolio website that showcases my work and skills. The project features a modern React frontend with a Flask backend, integrating Google Gemini API to provide an intelligent chatbot that can answer questions about my experience and projects.',
    features: [
      'Responsive React frontend with modern UI/UX design',
      'Flask backend API for handling requests',
      'Google Gemini API integration for AI-powered chatbot',
      'Interactive user engagement features',
      'Dynamic content loading and smooth animations',
    ],
    technologies: ['React', 'Flask', 'Python', 'Google Gemini API', 'Tailwind CSS'],
    challenges: 'Integrating the Gemini API required careful prompt engineering to ensure the chatbot provided accurate and relevant responses about my professional background.',
    outcome: 'Created an engaging portfolio that stands out with its interactive AI features, improving visitor engagement and time spent on the site.',
  },
  {
    id: 'ticket-resale',
    title: 'Ticket Resale Platform',
    period: 'Sept 2024',
    description: 'A customer-to-customer (C2C) ticket marketplace with secure transaction handling.',
    overview: 'Initiated and collaborated on the development of a peer-to-peer ticket resale platform, designed to provide a secure and user-friendly marketplace for buying and selling event tickets.',
    features: [
      'Customer-to-customer ticket marketplace functionality',
      'Secure SQL database design for data handling',
      'Django backend for robust API endpoints',
      'User authentication and authorization',
      'Transaction management system',
    ],
    technologies: ['Django', 'Python', 'SQL', 'PostgreSQL', 'REST API'],
    challenges: 'Designing a database schema that could handle complex relationships between users, tickets, events, and transactions while maintaining data integrity and security.',
    outcome: 'Successfully built a functional marketplace prototype with secure data handling practices.',
  },
  {
    id: 'ready-prototype',
    title: '"Ready" Prototype - Paws Hackathon',
    period: 'March 2024',
    description: 'A study app prototype addressing test anxiety and exam preparation for college students.',
    overview: 'Developed within a 24-hour hackathon, "Ready" is a study app prototype designed to help students manage test anxiety, improve exam preparation, and develop better time management skills.',
    features: [
      'Research-backed study habit recommendations',
      'Time management tools and reminders',
      'Anxiety management techniques and resources',
      'Progress tracking and analytics',
      'User-centered design based on behavioral research',
    ],
    technologies: ['Prototype', 'Figma', 'UX Research', 'User Testing'],
    challenges: 'Conducting rapid user research and synthesizing findings into actionable design decisions within the 24-hour hackathon timeframe.',
    outcome: 'Created a validated prototype that addressed real pain points for students aged 18-23, incorporating research on study habits and behavioral patterns.',
  },
];

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-2">
            <span className="text-primary">//</span> Projects
          </h1>
          <p className="text-muted-foreground mb-12">
            A detailed look at the projects I've built and contributed to.
          </p>

          <div className="space-y-16">
            {projects.map((project) => (
              <section
                key={project.id}
                id={project.id}
                className="scroll-mt-24 opacity-0 animate-fade-in"
                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
              >
                <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Folder className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-mono font-semibold text-foreground">
                          {project.title}
                        </h2>
                        <p className="text-primary text-sm">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.overview}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground leading-relaxed pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-primary"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Outcome */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-secondary/50 rounded-lg border border-border/50">
                      <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-2">
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.challenges}</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg border border-border/50">
                      <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-2">
                        Outcome
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
