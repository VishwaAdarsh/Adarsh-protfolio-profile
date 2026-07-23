import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  useEffect(() => {
    // Check if device supports pointer (exclude touch-only devices)
    const handlePointerMove = (e) => {
      if (!glowRef.current) return;

      // Skip if it's a touch event
      if (e.pointerType === 'touch') {
        glowRef.current.classList.remove('active');
        return;
      }

      const { clientX, clientY } = e;
      glowRef.current.style.left = clientX + 'px';
      glowRef.current.style.top = clientY + 'px';
      glowRef.current.classList.add('active');
    };

    const handlePointerLeave = () => {
      if (glowRef.current) {
        glowRef.current.classList.remove('active');
      }
    };

    // Detect touch device
    const touchHandler = () => {
      setIsPointerDevice(false);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerleave', handlePointerLeave);
    document.addEventListener('touch', touchHandler);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('touch', touchHandler);
    };
  }, []);

  // Don't render on touch devices
  if (!isPointerDevice) return null;

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
