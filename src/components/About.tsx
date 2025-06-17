import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillProps {
  name: string;
  percentage: number;
  delay: number;
}

const SkillBar: React.FC<SkillProps> = ({ name, percentage, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-200 font-medium">{name}</span>
        <span className="text-primary-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-600 to-accent-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.2 }}
        />
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "Website Development", percentage: 95 },
    // { name: "Video Editing", percentage: 90 },
    { name: "App Development", percentage: 85 },
    // { name: "SEO Optimization", percentage: 88 },
    // { name: "Copywriting", percentage: 92 },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="heading-gradient">Us</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We are a team of passionate digital experts committed to delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300 mb-6">
              We envision a digital landscape where businesses of all sizes can thrive through innovative technology solutions and strategic digital presence. Our mission is to empower businesses with cutting-edge digital tools and services that drive growth and success.
            </p>
            <p className="text-gray-300 mb-6">
              Founded in 2018, our team brings together expertise in various digital disciplines to provide comprehensive solutions tailored to each client's unique needs. We believe in collaborative partnerships, transparent communication, and delivering exceptional results that exceed expectations.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Our Process
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
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Our Skills</h3>
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;