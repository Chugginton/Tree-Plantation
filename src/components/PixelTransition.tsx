import React, { useEffect, useState } from 'react';

interface PixelTransitionProps {
  active: boolean;
  onComplete?: () => void;
}

export const PixelTransition: React.FC<PixelTransitionProps> = ({ active, onComplete }) => {
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    if (active) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [active, onComplete]);

  if (!visible) return null;

  const cols = 10;
  const rows = 6;
  const cells = Array.from({ length: cols * rows });

  return (
    <div className="fixed inset-0 pointer-events-none z-50 grid grid-cols-10 grid-rows-6">
      {cells.map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const delay = (col * 0.04 + row * 0.03).toFixed(2);
        
        return (
          <div
            key={i}
            className="bg-forest-900 border border-emerald-900/30 transition-all duration-300 ease-in-out"
            style={{
              animation: `pixelFade 0.8s ease-in-out forwards ${delay}s`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes pixelFade {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          40% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};
