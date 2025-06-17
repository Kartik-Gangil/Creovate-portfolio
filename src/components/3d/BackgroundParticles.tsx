import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

interface ParticleProps {
  count: number;
}

const Particles: React.FC<ParticleProps> = ({ count }) => {
  const mesh = useRef<THREE.Points>(null);
  const dummy = new THREE.Object3D();
  
  // Generate particles
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      
      temp.push({
        t,
        factor,
        speed,
        xFactor,
        yFactor,
        zFactor,
        mx: 0,
        my: 0,
      });
    }
    return temp;
  }, [count]);
  
  // Create instances
  const [positions, colors] = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      const primaryColor = new THREE.Color('#0ea5e9');
      const secondaryColor = new THREE.Color('#d946ef');
      const color = primaryColor.lerp(secondaryColor, Math.random());
      
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, [count]);
  
  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Update positions based on time
      positions[i3] = Math.sin(time * particles[i].speed + particles[i].t) * particles[i].xFactor;
      positions[i3 + 1] = Math.cos(time * particles[i].speed + particles[i].t) * particles[i].yFactor;
      positions[i3 + 2] = Math.sin(time * particles[i].speed + particles[i].t) * particles[i].zFactor;
    }
    
    (mesh.current.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
};

const BackgroundParticles: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  
  return (
    <div ref={ref} className="w-full h-full">
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.1} />
          <Particles count={200} />
        </Canvas>
      )}
    </div>
  );
};

export default BackgroundParticles;