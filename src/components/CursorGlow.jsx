import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with hover and fine pointer (non-touch)
    if (typeof window === 'undefined') return;
    const isHoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isHoverCapable) return;

    setEnabled(true);

    const handlePointerMove = (e) => {
      if (!glowRef.current) return;
      if (e.pointerType === 'touch') {
        glowRef.current.classList.remove('active');
        return;
      }
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
      glowRef.current.classList.add('active');
    };

    const handlePointerLeave = () => {
      if (glowRef.current) {
        glowRef.current.classList.remove('active');
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      className="cursor-glow w-32 h-32 -translate-x-1/2 -translate-y-1/2"
      style={{
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
}
