import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-dark-300 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-display font-bold mb-8 heading-gradient"
      >
        FUTURE<span className="text-white">VISION</span>
      </motion.div>
      
      <div className="w-64 h-1 bg-dark-100 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>
      
      <motion.p 
        className="mt-4 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading {Math.round(progress)}%
      </motion.p>
    </div>
  );
};

export default Loader;