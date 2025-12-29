import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';

const experiences = [
  {
    id: 'bain-capital',
    title: 'ITSM Co-op',
    company: 'Bain Capital',
    location: 'Boston, MA',
    period: 'July 2025 - Present',
    summary: 'Delivered multi-division IT support and automated internal workflows.',
  },
  {
    id: 'scout',
    title: 'Project Lead',
    company: 'Scout',
    location: 'Boston, MA',
    period: 'Sept 2025 - Present',
    summary: 'Led a semester-long client project managing developers and designers.',
  },
  {
    id: 'oasis',
    title: 'Marketing Director',
    company: 'Oasis',
    location: 'Boston, MA',
    period: 'May 2025 - Present',
    summary: "Led marketing strategy for Northeastern's tech and web development club.",
  },
  {
    id: 'wren',
    title: 'BIRDS Program Mentor',
    company: "Women's Research Engagement Network (WREN)",
    location: 'Boston, MA',
    period: 'Jan 2025 - April 2025',
    summary: 'Co-mentored 40 high school students in research skills and innovation.',
  },
  {
    id: 'northeastern-ta',
    title: 'Teaching Assistant',
    company: 'Fundamentals of CS II, Northeastern University',
    location: 'Oakland, CA',
    period: 'Jan 2024 - April 2024',
    summary: 'Held weekly drop-in sessions and provided programming assistance.',
  },
  {
    id: 'nurture-ai',
    title: 'Intern',
    company: 'Nurture AI, Carbon Accounting Firm',
    location: 'New Delhi, India',
    period: 'May 2022 - July 2022',
    summary: 'Conducted research on carbon accounting and assisted in product development.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-primary">//</span>
          experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className="opacity-0 animate-fade-in-up relative"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1 md:-translate-x-1.5 mt-2" />
                  
                  <div className="ml-6 md:ml-0 bg-card border border-border rounded-lg p-5 card-hover">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-mono font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {exp.period} • {exp.location}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground ml-8 mb-3">{exp.summary}</p>
                    
                    <Link
                      to={`/experience#${exp.id}`}
                      className="ml-8 inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-primary/80 transition-colors group"
                    >
                      Know more
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
