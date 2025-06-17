import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import { 
  MeshDistortMaterial, 
  Box, 
  Sphere, 
  Torus, 
  Text3D, 
  PerspectiveCamera 
} from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  modelType: string;
}

const WebModel: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (!group.current) return;
    
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.5;
  });
  
  return (
    <group ref={group}>
      <Box args={[3, 2, 0.2]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#0ea5e9"
          attach="material"
          distort={0.1}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Box>
      <Box args={[2.5, 0.3, 0.1]} position={[0, -0.9, 0.2]}>
        <meshStandardMaterial color="#0c4a6e" />
      </Box>
      <Box args={[0.3, 0.3, 0.1]} position={[0, 0.8, 0.2]}>
        <meshStandardMaterial color="#075985" />
      </Box>
      <Box args={[0.5, 0.1, 0.1]} position={[-1, 0.4, 0.2]}>
        <meshStandardMaterial color="#075985" />
      </Box>
      <Box args={[0.8, 0.1, 0.1]} position={[0.8, 0.4, 0.2]}>
        <meshStandardMaterial color="#075985" />
      </Box>
    </group>
  );
};

const AppModel: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (!group.current) return;
    
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.5;
  });
  
  return (
    <group ref={group}>
      <Box args={[1.2, 2.2, 0.1]} position={[0, 0, 0]} radius={0.2}>
        <meshStandardMaterial color="#0c4a6e" />
      </Box>
      <Box args={[1, 1.6, 0.05]} position={[0, -0.1, 0.1]}>
        <MeshDistortMaterial
          color="#0ea5e9"
          attach="material"
          distort={0.1}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Box>
      <Box args={[0.6, 0.1, 0.05]} position={[0, -1, 0.1]}>
        <meshStandardMaterial color="#d946ef" />
      </Box>
      <Box args={[0.15, 0.15, 0.05]} position={[0, 0.9, 0.1]} radius={0.05}>
        <meshStandardMaterial color="#075985" />
      </Box>
    </group>
  );
};

const VideoModel: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (!group.current) return;
    
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.5;
  });
  
  return (
    <group ref={group}>
      <Box args={[3, 2, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0c4a6e" />
      </Box>
      <Box args={[2.8, 1.6, 0.05]} position={[0, 0.1, 0.1]}>
        <MeshDistortMaterial
          color="#d946ef"
          attach="material"
          distort={0.1}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Box>
      <Torus args={[0.3, 0.1, 16, 32]} position={[-1, -0.6, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#0ea5e9" />
      </Torus>
      <Box args={[0.6, 0.2, 0.05]} position={[1, -0.6, 0.1]}>
        <meshStandardMaterial color="#10b981" />
      </Box>
    </group>
  );
};

const SeoModel: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (!group.current) return;
    
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.5;
  });
  
  return (
    <group ref={group}>
      <Sphere args={[1.2, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
      <Torus args={[1.8, 0.1, 16, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#0ea5e9" />
      </Torus>
      <Torus args={[1.8, 0.1, 16, 32]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <meshStandardMaterial color="#d946ef" />
      </Torus>
    </group>
  );
};

const CopyModel: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (!group.current) return;
    
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.5;
  });
  
  return (
    <group ref={group}>
      <Box args={[2.5, 0.2, 0.1]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#d946ef" />
      </Box>
      <Box args={[2, 0.2, 0.1]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Box>
      <Box args={[1.8, 0.2, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0ea5e9" />
      </Box>
      <Box args={[2.2, 0.2, 0.1]} position={[0, -0.4, 0]}>
        <meshStandardMaterial color="#d946ef" />
      </Box>
      <Box args={[1.5, 0.2, 0.1]} position={[0, -0.8, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Box>
    </group>
  );
};

const Scene: React.FC<ModelProps> = ({ modelType }) => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d946ef" />
      
      {modelType === 'web' && <WebModel />}
      {modelType === 'app' && <AppModel />}
      {modelType === 'video' && <VideoModel />}
      {modelType === 'seo' && <SeoModel />}
      {modelType === 'copy' && <CopyModel />}
      
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
    </>
  );
};

const PortfolioModel: React.FC<ModelProps> = ({ modelType }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div ref={ref} className="w-full h-full">
      {inView && (
        <Canvas>
          <Scene modelType={modelType} />
        </Canvas>
      )}
    </div>
  );
};

export default PortfolioModel;