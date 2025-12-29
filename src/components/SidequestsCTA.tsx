import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const SidequestsCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-orange-400/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider">bonus content</span>
            <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-pink-500 to-orange-400 bg-clip-text text-transparent animate-pulse">
              check out my sidequests
            </span>
          </h2>
          
          <p className="text-muted-foreground mb-8">
            everything i've been working on apart from the main story
          </p>

          <Link
            to="/sidequests"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm 
                       bg-gradient-to-r from-primary via-pink-500 to-orange-400 
                       text-white font-semibold
                       hover:shadow-[0_0_30px_rgba(59,130,246,0.4),0_0_60px_rgba(236,72,153,0.3)]
                       transition-all duration-300 hover:scale-105 group"
          >
            explore sidequests
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SidequestsCTA;
