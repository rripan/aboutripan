import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const coursework = [
    'Object Oriented Programming',
    'Foundations of Cyber Security',
    'Database Design',
    'Algorithms & Data',
    'Logic and Computation',
    'Mathematics of Data Structures',
    'Discrete Structures',
    'Fundamentals of CS I & II',
  ];

  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-primary">//</span>
          education
        </h2>

        <div className="max-w-3xl">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 card-hover opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-mono font-semibold text-foreground">
                    Northeastern University
                  </h3>
                  <p className="text-primary">Khoury College of Computer Sciences</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                <span className="flex items-center gap-2 md:justify-end">
                  <Calendar className="w-4 h-4" />
                  Sept. 2023 - May 2027
                </span>
                <span className="flex items-center gap-2 md:justify-end">
                  <MapPin className="w-4 h-4" />
                  Boston, MA
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">B.S. in Computer Science</span>, Concentration in Software
              </p>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">GPA: <span className="text-foreground font-mono">3.6</span></span>
              </div>
            </div>

            {/* Study Abroad */}
            <div className="mb-6 p-4 bg-secondary/50 rounded-lg border border-border/50">
              <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-2">
                Study Abroad
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-primary" />
                  London, UK <span className="text-xs">(Fall 2023)</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-primary" />
                  Oakland, CA <span className="text-xs">(Spring 2024)</span>
                </span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 className="font-mono text-sm text-primary uppercase tracking-wider mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span key={course} className="tech-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
