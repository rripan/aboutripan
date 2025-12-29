import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Trophy, Plane, Goal, Lightbulb, Instagram, Users, Timer, Shield, BookOpen, Mic, Globe, MessageCircle, Medal, Snowflake, UserCheck } from 'lucide-react';

const sidequests = [
  {
    id: 'sq-18',
    title: 'Green Decor Internship',
    subtitle: 'Team Lead for Interns',
    period: 'December 2025',
    description: 'Managed 3 high school interns for WhatsApp drops project, guiding marketing and client coordination while attending school.',
    skills: ['Leadership', 'Mentorship'],
    icon: UserCheck,
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/greendecorhandicrafts/' },
      { label: 'Website', url: 'https://www.greendecor.co.in' },
    ],
  },
  {
    id: 'sq-17',
    title: 'Cambridge Classic Winter 5K',
    subtitle: 'Post-Marathon Fun Run',
    period: 'December 9, 2025',
    description: 'Ran the Cambridge Classic Winter 5K, finishing in 31:02. Fun, post-marathon run.',
    skills: ['Fitness Maintenance', 'Enjoyment'],
    icon: Snowflake,
  },
  {
    id: 'sq-16',
    title: '7-a-side Intramural Football',
    subtitle: 'Fall 2025 Season — Quarter Finals',
    period: 'Fall 2025',
    description: 'Participated in intramurals, reached quarter finals.',
    skills: ['Team Coordination', 'Leadership'],
    icon: Trophy,
  },
  {
    id: 'sq-15',
    title: 'Boston Half Marathon',
    subtitle: 'PR Attempt — 2:16:00',
    period: 'November 2025',
    description: 'Ran Boston Half Marathon again with proper training, finished in 2:16:00 (20-minute improvement). Enjoyed the experience much more.',
    skills: ['Consistency', 'Endurance'],
    icon: Medal,
  },
  {
    id: 'sq-14',
    title: 'Cambridge 5K',
    subtitle: 'Sub-28 Goal Achieved',
    period: 'November 1, 2025',
    description: 'Completed the Cambridge 5K in 27:59, achieving my goal of running under 28 minutes.',
    skills: ['Goal Setting', 'Discipline'],
    icon: Timer,
  },
  {
    id: 'sq-13',
    title: 'Green Decor Internship',
    subtitle: 'WhatsApp Domestic Sales',
    period: 'Summer 2025',
    description: 'Developed WhatsApp broadcast drops workflow for domestic sales, creating a full pipeline from production to shipping.',
    skills: ['Digital Sales Strategy', 'Workflow Design'],
    icon: MessageCircle,
  },
  {
    id: 'sq-12',
    title: '2-Hour Website Build',
    subtitle: 'CPA FinTax',
    period: 'April 2025',
    description: 'Built a website in under 2 hours for a chartered accountancy firm using Google Sites (free). Fast, functional, delivered under constraints.',
    skills: ['Shipping Under Pressure', 'Prioritization'],
    icon: Globe,
    link: 'https://cpafintax.ca',
  },
  {
    id: 'sq-11',
    title: 'Global Alumni Ambassador',
    subtitle: 'Northeastern University',
    period: 'February – May 2025',
    description: 'Served as a Global Alumni Ambassador, sharing experiences with incoming students in the London study abroad program. Activities included tabling, panels, and one-on-one communication. Returning in Jan 2026 as a senior ambassador.',
    skills: ['Public Speaking', 'Mentoring'],
    icon: Mic,
  },
  {
    id: 'sq-10',
    title: 'Oasis Cohort',
    subtitle: 'AI Mood Compliment Website',
    period: 'Spring 2025',
    description: 'Built a website that generated AI-powered compliments based on user mood and read them out loud in a chosen voice. Fun, interactive project focused on AI integration.',
    skills: ['Web Development', 'AI Integration'],
    icon: Sparkles,
  },
  {
    id: 'sq-09',
    title: 'Tutor — Knack',
    subtitle: 'Boston, Massachusetts',
    period: 'May 2024 – March 2025',
    description: 'Part-time tutor for college courses: Database Design, Fundamentals of CS II, Discrete Structures, Introduction to Mathematical Reasoning. Provided one-on-one sessions (~6 hrs/week).',
    skills: ['Teaching', 'Communication'],
    icon: BookOpen,
  },
  {
    id: 'sq-08',
    title: 'Physical Security Challenge',
    subtitle: 'Cybersecurity Class Extra Credit',
    period: 'December 2024',
    description: "Attempted a physical security extra credit challenge, gained access to the professor's office via a TA. Scored 0.01%, but it was a fun hands-on learning experience.",
    skills: ['Ethical Hacking', 'Creative Problem Solving'],
    icon: Shield,
  },
  {
    id: 'sq-07',
    title: 'Boston Half Marathon',
    subtitle: 'First Attempt',
    period: 'November 2024',
    description: 'Ran the Boston Half Marathon with almost no training. Finished in 2:36:00, proud to complete the race.',
    skills: ['Mental Toughness', 'Endurance'],
    icon: Timer,
  },
  {
    id: 'sq-06',
    title: '7-a-side Intramural Football',
    subtitle: 'Fall 2024 Season',
    period: 'Fall 2024',
    description: 'Participated in 7-a-side football intramurals, lost after 3 games.',
    skills: ['Teamwork', 'Sportsmanship'],
    icon: Users,
  },
  {
    id: 'sq-05',
    title: 'Green Decor Internship',
    subtitle: 'Instagram & Graphics',
    period: 'Summer 2024',
    description: "Built Green Decor's Instagram presence, created graphics on Canva, and worked to increase engagement.",
    skills: ['Social Media Marketing', 'Content Creation'],
    icon: Instagram,
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/greendecorhandicrafts/' },
      { label: 'Website', url: 'https://www.greendecor.co.in' },
    ],
  },
  {
    id: 'sq-04',
    title: 'Buildspace Cohort',
    subtitle: 'App Prototyping & Exploration',
    period: 'May – June 2024',
    description: 'Participated in a Buildspace cohort under Farza Ahmed. Prototyped two app ideas — a family-tree app (paused for privacy) and Gadabout, a travel journaling app. Focused on user feedback and iteration.',
    skills: ['Product Thinking', 'Rapid Prototyping'],
    icon: Lightbulb,
    link: 'https://www.figma.com/board/pfrtu3xLnDU4rC15PsM2pn/Gadabout',
  },
  {
    id: 'sq-03',
    title: 'Football Pilgrimage — Study Abroad',
    subtitle: 'London, UK',
    period: 'Fall 2023',
    description: 'Attended five football matches at iconic stadiums while studying abroad in London. Traveled to Manchester for Man City vs Tottenham, sitting in the away section. Visited Etihad, London Stadium, Stamford Bridge, Emirates, White Hart Lane.',
    skills: ['Cultural Immersion', 'Solo Travel'],
    icon: Goal,
  },
  {
    id: 'sq-02',
    title: 'Solo-ish Australia Trip',
    subtitle: 'A Pre-College Reset',
    period: 'April 2023',
    description: 'Traveled across Australia, hopping city to city while staying with family. Gained independence and confidence, marking a personal growth moment before college.',
    skills: ['Independence', 'Adaptability'],
    icon: Plane,
    link: 'https://vsco.co/rripan/gallery',
  },
  {
    id: 'sq-01',
    title: 'YOHO — Carpool for Students',
    subtitle: '🏆 1st Place — Girls In Tech Code/No-Code Hack 2022',
    period: 'May 2022',
    description: 'Built YOHO, a carpooling app for children to ensure safety, reduce CO₂ emissions, and create job opportunities for women drivers. Prototype designed in Figma and pitched successfully.',
    skills: ['UI/UX Design', 'Pitching'],
    icon: Trophy,
    link: 'https://devpost.com/software/the-yoho-app-carpool-for-students',
  },
];

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <div 
    className={`absolute rounded-full opacity-20 blur-xl animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

const Sidequests = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Fun animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <FloatingShape className="w-96 h-96 bg-primary -top-20 -left-20" delay={0} />
        <FloatingShape className="w-80 h-80 bg-pink-500 top-1/4 -right-20" delay={1} />
        <FloatingShape className="w-64 h-64 bg-orange-400 top-1/2 left-1/4" delay={2} />
        <FloatingShape className="w-72 h-72 bg-purple-500 bottom-1/4 right-1/4" delay={1.5} />
        <FloatingShape className="w-56 h-56 bg-cyan-400 bottom-20 -left-10" delay={0.5} />
        <FloatingShape className="w-48 h-48 bg-yellow-400 top-3/4 right-10" delay={2.5} />
        
        {/* Animated stars/sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          back to home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 flex items-center gap-4">
            <Sparkles className="w-10 h-10 text-primary animate-pulse" />
            <span className="bg-gradient-to-r from-primary via-pink-500 to-orange-400 bg-clip-text text-transparent">
              sidequests
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Everything I've been working on apart from the main story. Side projects, hobbies, and random adventures that keep life interesting.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-pink-500 to-orange-400 md:-translate-x-px" />

          <div className="space-y-8">
            {sidequests.map((quest, idx) => {
              const IconComponent = quest.icon;
              return (
                <div
                  key={quest.id}
                  className={`opacity-0 relative ${idx % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    {/* Timeline dot with glow */}
                    <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-gradient-to-r from-primary to-pink-500 rounded-full -translate-x-1 md:-translate-x-1.5 mt-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    
                    <div className="ml-6 md:ml-0 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-5 card-hover group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-pink-500/20 group-hover:from-primary/30 group-hover:to-pink-500/30 transition-all">
                          <IconComponent className="w-5 h-5 text-primary shrink-0" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-mono font-semibold text-foreground">{quest.title}</h3>
                          {quest.subtitle && (
                            <p className="text-xs text-primary mt-0.5">{quest.subtitle}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">{quest.period}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground ml-12 mb-3">{quest.description}</p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 ml-12 mb-3">
                        {quest.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      {quest.link && (
                        <a
                          href={quest.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:text-pink-500 transition-colors ml-12 font-mono"
                        >
                          View Project →
                        </a>
                      )}
                      {quest.links && (
                        <div className="flex gap-4 ml-12">
                          {quest.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-primary hover:text-pink-500 transition-colors font-mono"
                            >
                              {link.label} →
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">//</span> more quests loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidequests;
