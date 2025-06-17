import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import { MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface SphereMeshProps {
  position: [number, number, number];
  color: string;
  distort: number;
  speed: number;
  size: number;
  rotationFactor?: number;
}

const SphereMesh: React.FC<SphereMeshProps> = ({ 
  position, 
  color, 
  distort, 
  speed, 
  size,
  rotationFactor = 1
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    
    const t = clock.getElapsedTime() * speed;
    
    mesh.current.rotation.x = Math.sin(t / 4) * rotationFactor;
    mesh.current.rotation.y = Math.sin(t / 2) * rotationFactor;
    
    // Subtle position animation
    mesh.current.position.y = position[1] + Math.sin(t) * 0.1;
  });
  
  return (
    <Sphere ref={mesh} args={[size, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d946ef" />
      
      <SphereMesh 
        position={[0, 0, 0]} 
        color="#0ea5e9" 
        distort={0.3} 
        speed={2} 
        size={1.5} 
      />
      
      <SphereMesh 
        position={[1.8, 0.5, -1]} 
        color="#d946ef" 
        distort={0.4} 
        speed={3} 
        size={0.6} 
        rotationFactor={1.5}
      />
      
      <SphereMesh 
        position={[-1.5, -0.8, -0.5]} 
        color="#10b981" 
        distort={0.2} 
        speed={2.5} 
        size={0.8} 
        rotationFactor={0.8}
      />
      
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
    </>
  );
};

const HeroModel: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div ref={ref} className="w-full h-full">
      {inView && (
        <Canvas>
          <Scene />
        </Canvas>
      )}
    </div>
  );
};

export default HeroModel;