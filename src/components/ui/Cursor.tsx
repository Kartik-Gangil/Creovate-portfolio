import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover (not touch-only)
    const mediaQuery = window.matchMedia('(hover: hover)');
    setIsVisible(mediaQuery.matches);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    
    const handleMouseEnter = () => {
      setIsVisible(mediaQuery.matches);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`custom-cursor ${isActive ? 'active' : ''}`} 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
};

export default Cursor;