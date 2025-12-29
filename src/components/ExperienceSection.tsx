import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    title: 'ITSM Co-op',
    company: 'Bain Capital',
    location: 'Boston, MA',
    period: 'July 2025 - Present',
    summary: 'Delivered multi-division IT support and automated internal workflows.',
    details: [
      'Delivered multi-division IT support through ServiceNow, partnering with Network Infrastructure, Desktop Engineering, Asset Management, and Access & Refresh teams to resolve technical issues effectively.',
      'Independently designed and implemented a PowerShell script that automated a manual internal workflow.',
    ],
  },
  {
    title: 'Project Lead',
    company: 'Scout',
    location: 'Boston, MA',
    period: 'Sept 2025 - Present',
    summary: 'Led a semester-long client project managing developers and designers.',
    details: [
      'Led a semester-long client project, managing a team of developers and designers to deliver a functional website while organizing meetings and serving as the primary communication link between the client and the team.',
    ],
  },
  {
    title: 'Marketing Director',
    company: 'Oasis',
    location: 'Boston, MA',
    period: 'May 2025 - Present',
    summary: "Led marketing strategy for Northeastern's tech and web development club.",
    details: [
      "Led marketing strategy and execution for Oasis, Northeastern's tech and web development club, increasing member engagement through targeted campaigns, social media management, and event promotion.",
    ],
  },
  {
    title: 'BIRDS Program Mentor',
    company: "Women's Research Engagement Network (WREN)",
    location: 'Boston, MA',
    period: 'Jan 2025 - April 2025',
    summary: 'Co-mentored 40 high school students in research skills and innovation.',
    details: [
      'Co-mentored 40 high school students as part of the Bringing Innovation, Research, and Development to Students (BIRDS) program through biweekly sessions, enhancing their research skills and innovation mindset.',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'Fundamentals of CS II, Northeastern University',
    location: 'Oakland, CA',
    period: 'Jan 2024 - April 2024',
    summary: 'Held weekly drop-in sessions and provided programming assistance.',
    details: [
      'Held 10 hours of drop-in sessions every week, assisting with assignments, projects, and quiz preparation.',
      'Provided programming assistance in Java and Git, explaining concepts, offering support, and debugging issues.',
    ],
  },
  {
    title: 'Intern',
    company: 'Nurture AI, Carbon Accounting Firm',
    location: 'New Delhi, India',
    period: 'May 2022 - July 2022',
    summary: 'Conducted research on carbon accounting and assisted in product development.',
    details: [
      'Conducted in-depth research on carbon accounting provisions and thoroughly analyzed 7 competitor models, collaborating closely with company founders to develop and refine data-driven product strategies.',
      'Assisted in product development by creating user stories, proposing models to improve product efficiency.',
    ],
  },
];

const ExperienceCard = ({ exp, idx }: { exp: typeof experiences[0]; idx: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
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
          
          {/* Summary (always visible) */}
          <p className="text-sm text-muted-foreground ml-8 mb-3">{exp.summary}</p>
          
          {/* Expandable details */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="space-y-2 ml-8 pt-2 border-t border-border/50">
              {exp.details.map((detail, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed relative before:content-['▹'] before:absolute before:-left-4 before:text-primary"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Know More button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 ml-8 flex items-center gap-1 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? (
              <>
                Show less <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                Know more <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

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
              <ExperienceCard key={`${exp.company}-${exp.title}`} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
