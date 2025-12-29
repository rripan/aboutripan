import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 'bain-capital',
    title: 'ITSM Co-op',
    company: 'Bain Capital',
    location: 'Boston, MA',
    period: 'July 2025 - Present',
    description: 'Working in IT Service Management delivering multi-division support and driving automation initiatives.',
    responsibilities: [
      'Delivered multi-division IT support through ServiceNow, partnering with Network Infrastructure, Desktop Engineering, Asset Management, and Access & Refresh teams to resolve technical issues effectively.',
      'Independently designed and implemented a PowerShell script that automated a manual internal workflow.',
    ],
    skills: ['ServiceNow', 'PowerShell', 'IT Support', 'Process Automation'],
  },
  {
    id: 'scout',
    title: 'Project Lead',
    company: 'Scout',
    location: 'Boston, MA',
    period: 'Sept 2025 - Present',
    description: 'Leading client projects and managing cross-functional teams of developers and designers.',
    responsibilities: [
      'Led a semester-long client project, managing a team of developers and designers to deliver a functional website.',
      'Organized meetings and served as the primary communication link between the client and the team.',
      'Ensured project milestones were met on time while maintaining quality standards.',
    ],
    skills: ['Project Management', 'Team Leadership', 'Client Communication', 'Web Development'],
  },
  {
    id: 'oasis',
    title: 'Marketing Director',
    company: 'Oasis',
    location: 'Boston, MA',
    period: 'May 2025 - Present',
    description: "Driving marketing strategy and member engagement for Northeastern's premier tech and web development club.",
    responsibilities: [
      "Led marketing strategy and execution for Oasis, Northeastern's tech and web development club.",
      'Increased member engagement through targeted campaigns and social media management.',
      'Managed event promotion and brand presence across multiple platforms.',
    ],
    skills: ['Marketing Strategy', 'Social Media', 'Event Promotion', 'Brand Management'],
  },
  {
    id: 'wren',
    title: 'BIRDS Program Mentor',
    company: "Women's Research Engagement Network (WREN)",
    location: 'Boston, MA',
    period: 'Jan 2025 - April 2025',
    description: 'Mentoring high school students in research skills and fostering innovation mindset.',
    responsibilities: [
      'Co-mentored 40 high school students as part of the Bringing Innovation, Research, and Development to Students (BIRDS) program.',
      'Conducted biweekly sessions enhancing their research skills and innovation mindset.',
      'Guided students through the fundamentals of research methodology and critical thinking.',
    ],
    skills: ['Mentorship', 'Research', 'Teaching', 'Youth Development'],
  },
  {
    id: 'northeastern-ta',
    title: 'Teaching Assistant',
    company: 'Fundamentals of CS II, Northeastern University',
    location: 'Oakland, CA',
    period: 'Jan 2024 - April 2024',
    description: 'Supporting students in their computer science journey through hands-on assistance and guidance.',
    responsibilities: [
      'Held 10 hours of drop-in sessions every week, assisting with assignments, projects, and quiz preparation.',
      'Provided programming assistance in Java and Git, explaining concepts and debugging issues.',
      'Offered support to students struggling with object-oriented programming concepts.',
    ],
    skills: ['Java', 'Git', 'Teaching', 'Debugging', 'Object-Oriented Programming'],
  },
  {
    id: 'nurture-ai',
    title: 'Intern',
    company: 'Nurture AI, Carbon Accounting Firm',
    location: 'New Delhi, India',
    period: 'May 2022 - July 2022',
    description: 'Contributing to product development and market research in the carbon accounting space.',
    responsibilities: [
      'Conducted in-depth research on carbon accounting provisions and thoroughly analyzed 7 competitor models.',
      'Collaborated closely with company founders to develop and refine data-driven product strategies.',
      'Assisted in product development by creating user stories and proposing models to improve product efficiency.',
    ],
    skills: ['Market Research', 'Product Development', 'User Stories', 'Data Analysis'],
  },
];

const Experience = () => {
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
            <span className="text-primary">//</span> Work Experience
          </h1>
          <p className="text-muted-foreground mb-12">
            A detailed look at my professional journey and the impact I've made.
          </p>

          <div className="space-y-16">
            {experiences.map((exp) => (
              <section
                key={exp.id}
                id={exp.id}
                className="scroll-mt-24 opacity-0 animate-fade-in"
                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
              >
                <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-mono font-semibold text-foreground">
                          {exp.title}
                        </h2>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                      <span className="flex items-center gap-2 md:justify-end">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 md:justify-end">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-3">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground leading-relaxed pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-primary"
                        >
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-3">
                      Skills & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="tech-tag">
                          {skill}
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

export default Experience;
