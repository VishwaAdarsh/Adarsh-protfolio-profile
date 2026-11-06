import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingPlanet({ position = [0, 0, 0], scale = 1 }) {
  const planetRef = useRef();
  const ringRef = useRef();
  const outerRingRef = useRef();
  const moonsRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.15;
      planetRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
      planetRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.08;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.3) * 0.05;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.05;
      outerRingRef.current.rotation.x = Math.PI / 2.8;
    }

    if (moonsRef.current) {
      moonsRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Central Holographic Planet Sphere */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.4, 48, 48]} />
        <meshStandardMaterial
          color="#1e1b4b"
          roughness={0.25}
          metalness={0.8}
          emissive="#4338ca"
          emissiveIntensity={0.6}
          wireframe={false}
        />
      </mesh>

      {/* Cyber Grid Wireframe Overlay */}
      <mesh>
        <sphereGeometry args={[1.43, 24, 24]} />
        <meshBasicMaterial
          color="#818cf8"
          wireframe={true}
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Primary Planetary Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[1.9, 2.5, 64]} />
        <meshBasicMaterial
          color="#00d9ff"
          side={THREE.DoubleSide}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer Cyan Ring */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2.8, 0, 0]}>
        <ringGeometry args={[2.7, 2.85, 64]} />
        <meshBasicMaterial
          color="#8b5cf6"
          side={THREE.DoubleSide}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbiting Tech Nodes */}
      <group ref={moonsRef}>
        <mesh position={[2.9, 0.4, 0]}>
          <octahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={0.8}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[-2.6, -0.5, 0.8]}>
          <icosahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial
            color="#c084fc"
            emissive="#a855f7"
            emissiveIntensity={0.8}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Soft Glow Light */}
      <pointLight color="#2563ff" intensity={3} distance={8} />
      <pointLight color="#8b5cf6" intensity={2} distance={6} position={[0, -1, 1]} />
    </group>
  );
}
