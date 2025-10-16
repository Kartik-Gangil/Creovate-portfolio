import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
// import PortfolioModel from './3d/PortfolioModel';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string ;
  description: string;
  link: string;
  model: string;
}



const projects: Project[] = [
  {
    id: 1,
    title: "RED MARCH",
    category: "Web Development",
    image: "./Redmarch1.webp",
    description: "A dynamic E-commerce website focused on making personal brand, showcasing their luxurious shoes and variants.",
    link: "https://ecommerce-redmarch.vercel.app/",
    model: "web",
  },
  {
    id: 2,
    title: "Varsha Research Organization",
    category: "Web Development",
    image: "./Varsha_research_org_banner.webp",
    description: "A dynamic website for a research organization, showcasing their research papers and publications.",
    link: "https://varsharesearchorganization.com/",
    model: "web",
  },
  {
    id: 3,
    title: "Readme Up",
    category: "AI Agent",
    image: "https://repository-images.githubusercontent.com/589727205/85f06633-1c3e-4d07-a653-650ad141f460",
    description: "AI powered tool to generate README files for GitHub projects, enhancing project visibility and documentation.",
    link: "https://readmeup.vercel.app/",
    model: "web",
  },
  {
    id: 4,
    title: "E-commerce SEO Campaign",
    category: "SEO Optimization",
    image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A comprehensive SEO strategy that increased organic traffic by 200%.",
    link: "#",
    model: "seo",
  },
  {
    id: 5,
    title: "Ubon Case study Video Edit",
    category: "Video Editing",
    image: "./Ubon_case_study_thumbnail.webp",
    description: "A comprehensive video editing project that showcases the Ubon case study.",
    link: "https://www.instagram.com/reel/DLPjwQONlCr/?igsh=MXhmNTFmMHNuNXl3eA==",
    model: "video",
  }
];

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Development','Video Editing', 'SEO Optimization' , 'AI Agent'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Products we <span className="heading-gradient">Delivered</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their goals.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-200 text-gray-300 hover:bg-dark-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer "
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  loading='lazy'
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-primary-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-400 text-sm font-medium">{project.category}</span>
                  <a href={project.link} className="text-white hover:text-primary-400 transition-colors duration-300">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-300/80 backdrop-blur-sm "
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-200 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[200px] md:h-full relative">
                <div className="absolute inset-0 bg-[#E2E0DC] md:bg-transparent object-contain flex justify-center">
                  {/* <PortfolioModel modelType={selectedProject.model} /> */}
                  <img src={selectedProject.image} className='max-w-full max-h-full object-contain' alt="" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-primary-400 text-sm font-medium">{selectedProject.category}</span>
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                {/* <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li><span className="text-primary-400">Client:</span> Confidential</li>
                    <li><span className="text-primary-400">Duration:</span> 8 weeks</li>
                    <li><span className="text-primary-400">Technologies:</span> React, Three.js, Tailwind CSS</li>
                  </ul>
                </div> */}
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;