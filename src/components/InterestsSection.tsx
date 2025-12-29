import { Dribbble, Palette, Trophy, Timer } from 'lucide-react';

const interests = [
  {
    icon: Dribbble,
    name: 'Soccer',
    description: 'Love the beautiful game, both playing and watching.',
  },
  {
    icon: Palette,
    name: 'Design',
    description: 'Passionate about creating visually appealing experiences.',
  },
  {
    icon: Trophy,
    name: 'Hackathons',
    description: 'Thrive in fast-paced, creative problem-solving environments.',
  },
  {
    icon: Timer,
    name: 'Running',
    description: 'Staying active and pushing personal limits.',
  },
];

const InterestsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title flex items-center gap-3">
          <span className="text-primary">//</span>
          interests
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, idx) => (
            <div
              key={interest.name}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-lg p-6 card-hover h-full text-center group">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <interest.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-mono font-semibold text-foreground mb-2">
                  {interest.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
