import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ArrowLeft, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import TypewriterKeyboard from '@/components/TypewriterKeyboard';
import GuestbookTerminal from '@/components/GuestbookTerminal';

interface GuestbookEntry {
  id: string;
  name: string | null;
  message: string;
  created_at: string;
}

const Guestbook = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch existing entries
    const fetchEntries = async () => {
      const { data, error } = await supabase
        .from('guestbook_entries')
        .select('*')
        .order('created_at', { ascending: true });

      if (data) {
        setEntries(data);
      }
    };

    fetchEntries();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('guestbook-realtime')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'guestbook_entries'
        },
        (payload) => {
          setEntries((prev) => [...prev, payload.new as GuestbookEntry]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Scroll to bottom when user submits
  useEffect(() => {
    if (hasSubmitted && terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [entries, hasSubmitted]);

  const handleKeyPress = (key: string) => {
    if (key === 'BACKSPACE') {
      setMessage((prev) => prev.slice(0, -1));
    } else if (key === 'ENTER') {
      handleSubmit();
    } else if (key === 'SPACE') {
      setMessage((prev) => prev + ' ');
    } else {
      setMessage((prev) => prev + key);
    }
  };

  const handleSubmit = async () => {
    const trimmedMessage = message.trim();
    
    if (trimmedMessage.length < 10) {
      setError('Message must be at least 10 characters');
      return;
    }

    setError('');
    setIsSubmitting(true);

    const { error: insertError } = await supabase
      .from('guestbook_entries')
      .insert({
        message: trimmedMessage,
        name: name.trim() || null
      });

    if (insertError) {
      setError('Failed to submit. Please try again.');
      console.error('Insert error:', insertError);
    } else {
      setMessage('');
      setHasSubmitted(true);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-primary">
              <Terminal className="w-5 h-5" />
              <span className="font-mono font-semibold text-sm">./guestbook</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-sm">back</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 flex flex-col">
        {/* Terminal Display */}
        <GuestbookTerminal
          ref={terminalRef}
          entries={entries}
          hasSubmitted={hasSubmitted}
        />

        {/* Input Area */}
        <div className="bg-card border-t border-border p-4">
          <div className="container mx-auto max-w-4xl">
            {/* Name Input */}
            <div className="mb-4">
              <label className="font-mono text-xs text-muted-foreground mb-2 block">
                // optional: your name or alias
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="anonymous"
                maxLength={50}
                className="w-full bg-background border border-border rounded-lg px-4 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Message Display */}
            <div className="bg-background border border-border rounded-lg p-4 mb-4 min-h-[80px]">
              <div className="font-mono text-sm text-muted-foreground mb-1">
                {'>'} message:
              </div>
              <div className="font-mono text-foreground">
                {message}
                <span className="animate-pulse text-primary">▊</span>
              </div>
              {error && (
                <div className="text-destructive font-mono text-xs mt-2">
                  {error}
                </div>
              )}
              <div className="text-muted-foreground font-mono text-xs mt-2">
                {message.length}/10 min characters
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || message.trim().length < 10}
              className="w-full mb-4 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed glow"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'Sending...' : 'Sign Guestbook (Enter)'}
            </button>

            {/* Scroll hint */}
            {entries.length > 0 && (
              <div className="text-center text-xs text-muted-foreground/60 animate-pulse">
                ↑ scroll up to see previous entries
              </div>
            )}
          </div>
        </div>

        {/* Typewriter Keyboard */}
        <TypewriterKeyboard onKeyPress={handleKeyPress} disabled={isSubmitting} />
      </main>
    </div>
  );
};

export default Guestbook;
