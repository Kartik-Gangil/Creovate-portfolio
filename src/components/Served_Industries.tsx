import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



interface Project {
    id: number;
    category: string;
    image: string;
    description: string;
    link: string;
    model: string;
}



const projects: Project[] = [
    {
        id: 1,
        category: "ED-TECH",
        image: "https://static.vecteezy.com/system/resources/previews/009/535/653/non_2x/e-learning-concept-hexagonal-with-education-icons-such-as-dna-earth-wifi-and-flask-bottle-on-blue-technology-background-vector.jpg",
        description: "A dynamic website for a research organization, showcasing their research papers and publications.",
        link: "https://varsharesearchorganization.com/",
        model: "web",
    },
    {
        id: 2,
        category: "Healthcare",
        image: "data:image/jpeg;base64,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",
        description: "AI powered tool to generate README files for GitHub projects, enhancing project visibility and documentation.",
        link: "https://readmeup.vercel.app/",
        model: "web",
    },
    {
        id: 3,
        category: "Restaurant",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bb695_Lr8Bu2ifOwupEwWIykMnfBXtMnTw&s",
        description: "A comprehensive SEO strategy that increased organic traffic by 200%.",
        link: "#",
        model: "seo",
    }
];

const ServedIndustries: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });



    return (
        <section id="ServedIndustries" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Industries we <span className="heading-gradient">Served</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Delivering experties across a range of Industries
                    </p>
                </motion.div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card overflow-hidden group cursor-pointer "
                        >
                            <div className="relative h-60 overflow-hidden group">
                                <img
                                    loading="lazy"
                                    src={project.image}
                                    alt="."
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-dark-300/60 flex items-center justify-center p-4">
                                    <div className="relative w-full flex justify-center items-center">

                                        {/* Centered h2, fades out on hover */}
                                        <h2 className="absolute text-white drop-shadow-[0_2px_4px_rgba(255,105,180,0.3)] text-3xl font-bold transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                                            {project.category}
                                        </h2>

                                        {/* Centered ul, fades in on hover */}
                                        <ul className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-white space-y-1 text-center">
                                            <li>{project.description}</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>


                            {/* <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-primary-400 text-sm font-medium">{project.category}</span>
                                    <a href={project.link} className="text-white hover:text-primary-400 transition-colors duration-300">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div> */}
                        </motion.div>
                    ))}
                </div>
            </div>


          
        </section >
    );
};

export default ServedIndustries;