import { useEffect, useState } from 'react';

interface TypewriterKeyboardProps {
  onKeyPress: (key: string) => void;
  disabled?: boolean;
}

const TypewriterKeyboard = ({ onKeyPress, disabled = false }: TypewriterKeyboardProps) => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const rows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?'],
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;
      
      const key = e.key.toUpperCase();
      
      if (e.key === 'Backspace') {
        setPressedKey('BACKSPACE');
        onKeyPress('BACKSPACE');
      } else if (e.key === 'Enter') {
        setPressedKey('ENTER');
        onKeyPress('ENTER');
      } else if (e.key === ' ') {
        e.preventDefault();
        setPressedKey('SPACE');
        onKeyPress('SPACE');
      } else if (rows.flat().includes(key) || key === '!' || key === '@' || key === '#') {
        setPressedKey(key);
        onKeyPress(key);
      }
    };

    const handleKeyUp = () => {
      setPressedKey(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [onKeyPress, disabled]);

  const handleClick = (key: string) => {
    if (disabled) return;
    
    setPressedKey(key);
    onKeyPress(key);
    setTimeout(() => setPressedKey(null), 100);
  };

  const TypewriterKey = ({ keyValue, wide = false }: { keyValue: string; wide?: boolean }) => {
    const isPressed = pressedKey === keyValue;
    
    return (
      <button
        onClick={() => handleClick(keyValue)}
        disabled={disabled}
        className={`
          relative font-mono text-sm font-semibold
          ${wide ? 'px-6 min-w-[80px]' : 'w-10 h-10 sm:w-12 sm:h-12'}
          ${wide ? 'h-10 sm:h-12' : ''}
          rounded-full
          bg-gradient-to-b from-secondary to-muted
          border-2 border-border
          text-foreground
          transition-all duration-75
          ${isPressed ? 'transform translate-y-1 shadow-inner' : 'shadow-lg hover:shadow-xl'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary/50 active:translate-y-1'}
          before:absolute before:inset-1 before:rounded-full before:bg-gradient-to-b before:from-muted/50 before:to-transparent before:pointer-events-none
        `}
      >
        <span className="relative z-10">{keyValue === 'BACKSPACE' ? '⌫' : keyValue === 'ENTER' ? '↵' : keyValue === 'SPACE' ? '␣' : keyValue}</span>
      </button>
    );
  };

  return (
    <div className="bg-secondary/50 border-t border-border py-6 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Typewriter body decoration */}
        <div className="bg-gradient-to-b from-muted to-secondary rounded-t-3xl pt-4 pb-2 px-4 border border-border border-b-0">
          <div className="flex justify-center gap-4 mb-2">
            <div className="w-3 h-3 rounded-full bg-primary/30" />
            <div className="w-3 h-3 rounded-full bg-primary/30" />
            <div className="w-3 h-3 rounded-full bg-primary/30" />
          </div>
        </div>
        
        {/* Keys container */}
        <div className="bg-secondary border border-border rounded-b-xl p-4 space-y-2">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center gap-1 sm:gap-2"
              style={{ marginLeft: rowIndex === 2 ? '12px' : rowIndex === 3 ? '24px' : '0' }}
            >
              {row.map((key) => (
                <TypewriterKey key={key} keyValue={key} />
              ))}
            </div>
          ))}
          
          {/* Bottom row with special keys */}
          <div className="flex justify-center gap-2 pt-2">
            <TypewriterKey keyValue="BACKSPACE" wide />
            <button
              onClick={() => handleClick('SPACE')}
              disabled={disabled}
              className={`
                font-mono text-xs
                h-10 sm:h-12 min-w-[200px] sm:min-w-[300px]
                rounded-full
                bg-gradient-to-b from-secondary to-muted
                border-2 border-border
                text-muted-foreground
                transition-all duration-75
                ${pressedKey === 'SPACE' ? 'transform translate-y-1 shadow-inner' : 'shadow-lg hover:shadow-xl'}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary/50 active:translate-y-1'}
              `}
            >
              SPACE
            </button>
            <TypewriterKey keyValue="ENTER" wide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypewriterKeyboard;
