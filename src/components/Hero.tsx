import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import HeroModel from './3d/HeroModel';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            Crafting <span className="heading-gradient text-shadow">Digital</span> Experiences
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
            We bring your vision to life with cutting-edge technology and innovative design.
            Transform your brand with our comprehensive digital solutions.
            <br></br>
            <span className='text-2xl font-bold'>"We Build Trust"</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={scrollToServices}
            >
              Explore Our Services
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-[400px] lg:h-[500px] relative"
        >
          <motion.div
            className="absolute flex h-full w-full z-10 flex-col items-center justify-center text-center"
            initial={{ y:10}}
            animate={{ y:0 }}
            transition={{
              duration: 1, delay: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <h1 className="text-gray-400 mb-2 font-bold text-3xl md:text-5xl lg:text-6xl"> <span className='heading-gradient text-shadow text-4xl md:text-6xl lg:text-7xl'>24</span> hrs </h1>
            <h3 className="text-gray-400 mb-2 text-2xl md:text-4xl lg:text-5xl">Callback </h3>
            <h2 className="text-gray-400 mb-2 text-4xl md:text-6xl lg:text-7xl font-bold">Guarantee</h2>
          </motion.div>
          <HeroModel />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <p className="text-gray-400 mb-2 text-sm">Scroll to explore</p>
        <ArrowDown className="mx-auto text-primary-400" />
      </motion.div>
    </section>
  );
};

export default Hero;