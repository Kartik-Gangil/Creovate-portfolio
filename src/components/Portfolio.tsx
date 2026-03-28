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
    link: "https://redmarch.creovateio.in/",
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
    link: "https://readmeup.creovateio.in/",
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
  },
  {
    id: 6,
    title: "Modi Eye Care",
    category: "Web Development",
    image: "./modi-care.png",
    description: "A hospital management system for Modi Care Hospital to manage their hospital and appointments. ",
    link: "http://66.116.204.196/",
    model: "web",
  },
  {
    id: 7,
    title: "Leela Marriage Bureau",
    category: "Web Development",
    image: "https://leelafacility.in/assets/logo-C0TCjoYr.png",
    description: "A matrimonial platform designed to help individuals find their life partners with ease and security.",
    link: "https://leelafacility.in",
    model: "web",
  },
  {
    id: 8,
    title: "HORIZON 3D",
    category: "Web Development",
    image: "https://horizon3d.creovateio.in/favicon.ico",
    description: "A 3D website for real estate builders who are making good stuff and want to make their online presence.",
    link: "https://horizon3d.creovateio.in",
    model: "web",
  },
  {
    id: 9,
    title: "N8N AUTOMATIONS",
    category: "AI Agent",
    image: "data:image/jpeg;base64,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",
    description: "N8N automations which automate your 90% of work at ground level and give you free space to do other work.",
    link: "#",
    model: "web",
  },

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