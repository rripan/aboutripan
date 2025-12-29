import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Gamepad2, Music, Camera, Palette, Code, Coffee } from 'lucide-react';

const sidequests = [
  {
    id: 'sidequest-1',
    title: 'Learning Guitar',
    category: 'Music',
    period: 'Ongoing',
    description: 'Teaching myself acoustic guitar through YouTube tutorials and late-night practice sessions. Currently working on fingerpicking patterns.',
    icon: Music,
  },
  {
    id: 'sidequest-2',
    title: 'Photography Adventures',
    category: 'Creative',
    period: 'Summer 2024',
    description: 'Exploring street photography around Boston. Building a portfolio of urban landscapes and candid moments.',
    icon: Camera,
  },
  {
    id: 'sidequest-3',
    title: 'Game Development',
    category: 'Tech',
    period: 'Fall 2024',
    description: 'Building a small indie game using Unity. Learning C# and game design principles along the way.',
    icon: Gamepad2,
  },
  {
    id: 'sidequest-4',
    title: 'Digital Art Journey',
    category: 'Creative',
    period: 'Spring 2024',
    description: 'Picked up digital illustration on my iPad. Experimenting with character design and concept art.',
    icon: Palette,
  },
  {
    id: 'sidequest-5',
    title: 'Open Source Contributions',
    category: 'Tech',
    period: 'Ongoing',
    description: 'Contributing to open source projects on GitHub. Learning from the community and giving back.',
    icon: Code,
  },
  {
    id: 'sidequest-6',
    title: 'Coffee Brewing Experiments',
    category: 'Hobby',
    period: 'Ongoing',
    description: 'Diving deep into specialty coffee. Exploring different brewing methods from pour-over to espresso.',
    icon: Coffee,
  },
];

const Sidequests = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
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
                  className="opacity-0 animate-fade-in-up relative"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    {/* Timeline dot with glow */}
                    <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-gradient-to-r from-primary to-pink-500 rounded-full -translate-x-1 md:-translate-x-1.5 mt-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    
                    <div className="ml-6 md:ml-0 bg-card border border-border rounded-lg p-5 card-hover group hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-pink-500/20 group-hover:from-primary/30 group-hover:to-pink-500/30 transition-all">
                          <IconComponent className="w-5 h-5 text-primary shrink-0" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-mono font-semibold text-foreground">{quest.title}</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {quest.period} • <span className="text-primary">{quest.category}</span>
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground ml-12">{quest.description}</p>
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
