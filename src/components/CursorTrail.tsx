import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  timestamp: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      });
    };

    const draw = () => {
      const now = Date.now();
      const fadeTime = 1000; // 1 second

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter out old points
      pointsRef.current = pointsRef.current.filter(
        (point) => now - point.timestamp < fadeTime
      );

      if (pointsRef.current.length < 2) {
        animationFrameRef.current = requestAnimationFrame(draw);
        return;
      }

      // Draw trail
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 0; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i];
        const age = now - point.timestamp;
        const opacity = 1 - age / fadeTime;
        const size = 2 + (1 - age / fadeTime) * 3; // Larger when newer

        // Draw dot - using primary teal color (175, 80%, 50%)
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(175, 80%, 50%, ${opacity * 0.8})`;
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(point.x, point.y, size + 4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(175, 80%, 50%, ${opacity * 0.2})`;
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;
