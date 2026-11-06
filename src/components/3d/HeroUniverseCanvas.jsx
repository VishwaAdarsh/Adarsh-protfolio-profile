import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import FloatingPlanet from './FloatingPlanet';
import ParticleField from './ParticleField';

function CameraRig({ mouse }) {
  useFrame((state) => {
    // Smooth lerp camera towards mouse
    const targetX = mouse.current.x * 0.8;
    const targetY = mouse.current.y * 0.6;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function WebGLFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
    </div>
  );
}

export default function HeroUniverseCanvas({ interactive = true, className = "" }) {
  const [hasWebGL, setHasWebGL] = useState(true);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect WebGL capability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }

    if (!interactive) return;

    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [interactive]);

  if (!hasWebGL) {
    return <WebGLFallback />;
  }

  return (
    <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 6, 5]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[-5, -4, -2]} intensity={0.6} color="#8b5cf6" />

          {/* Primary 3D Space Elements */}
          <FloatingPlanet position={[2.4, 0.2, -0.5]} scale={1.05} />
          <ParticleField count={600} color="#00D9FF" />
          <ParticleField count={300} color="#B794F6" />

          <CameraRig mouse={mouseRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
