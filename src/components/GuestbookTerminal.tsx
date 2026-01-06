import { forwardRef } from 'react';
import { format } from 'date-fns';

interface GuestbookEntry {
  id: string;
  name: string | null;
  message: string;
  created_at: string;
}

interface GuestbookTerminalProps {
  entries: GuestbookEntry[];
  hasSubmitted: boolean;
}

const GuestbookTerminal = forwardRef<HTMLDivElement, GuestbookTerminalProps>(
  ({ entries, hasSubmitted }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex-1 bg-background overflow-y-auto ${
          hasSubmitted ? '' : 'overflow-hidden'
        }`}
      >
        <div className="container mx-auto max-w-4xl px-6 py-8">
          {/* Terminal Header */}
          <div className="bg-card rounded-t-lg border border-border border-b-0 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 font-mono text-xs text-muted-foreground">
              ~/guestbook/entries.log
            </span>
          </div>

          {/* Terminal Body */}
          <div className="bg-card/50 rounded-b-lg border border-border p-6 min-h-[300px] font-mono text-sm">
            {/* Welcome message */}
            <div className="text-primary mb-4">
              <span className="text-muted-foreground">$</span> cat welcome.txt
            </div>
            <div className="text-foreground mb-6 pl-4 border-l-2 border-primary/30">
              <p className="text-muted-foreground">
                Welcome to the guestbook! Leave a message using the typewriter below.
              </p>
              <p className="text-muted-foreground mt-1">
                {hasSubmitted
                  ? 'Scroll up to see previous messages.'
                  : 'After you sign, you can scroll to see all messages.'}
              </p>
            </div>

            <div className="text-primary mb-4">
              <span className="text-muted-foreground">$</span> tail -f entries.log
            </div>

            {/* Entries */}
            {entries.length === 0 ? (
              <div className="text-muted-foreground pl-4 animate-pulse">
                Waiting for entries...
              </div>
            ) : (
              <div className="space-y-4">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="pl-4 border-l-2 border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span className="text-primary">
                        {entry.name || 'anonymous'}
                      </span>
                      <span>•</span>
                      <span>
                        {format(new Date(entry.created_at), 'MMM d, yyyy HH:mm')}
                      </span>
                    </div>
                    <div className="text-foreground break-words">
                      {entry.message}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Cursor */}
            <div className="mt-4 text-primary">
              <span className="text-muted-foreground">$</span>{' '}
              <span className="animate-pulse">▊</span>
            </div>

            {/* Scroll hint */}
            {entries.length > 3 && (
              <div className="mt-6 text-center text-xs text-muted-foreground/60 animate-pulse">
                ↑ scroll up to see more entries
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

GuestbookTerminal.displayName = 'GuestbookTerminal';

export default GuestbookTerminal;
