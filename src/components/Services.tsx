import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Film, Smartphone, Search, PenTool } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="glass-card p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4 text-primary-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Code size={28} />,
      title: "Website Development",
      description: "From simple landing pages to complex web applications, we create responsive and engaging websites tailored to your needs.",
    },
    {
      icon: <Film size={28} />,
      title: "Video Editing",
      description: "Professional video editing services to help you tell your story with stunning visuals and seamless transitions.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "App Development",
      description: "Native and cross-platform mobile applications that provide exceptional user experiences and functionality.",
    },
    {
      icon: <Search size={28} />,
      title: "SEO Optimization",
      description: "Improve your online visibility and reach your target audience through our comprehensive SEO strategies.",
    },
    {
      icon: <PenTool size={28} />,
      title: "Copywriting",
      description: "Compelling and persuasive content that engages your audience and drives conversions.",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our <span className="heading-gradient">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of digital services to help businesses thrive in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;