import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Varsha Rajpoot",
    role: "Director",
    company: " Varsha Research Organization",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Working with this team has transformed our online presence. Their website development skills are exceptional, and the SEO optimization has driven significant traffic to our site.",
    rating: 5,
  },
  {
    name: "Satyam Sharma",
    role: "Product Engineer",
    company: "Innovative Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "They delivered our project on time and fullfilled our expectations.",
    rating: 5,
  },
];

const TestimonialCard: React.FC<TestimonialProps & { index: number; active: boolean }> = ({ 
  name, role, company, image, content, rating, index, active 
}) => {
  return (
    <motion.div 
      className={`glass-card p-6 md:p-8 transition-all duration-500 ${active ? 'scale-100 opacity-100 z-10' : 'scale-95 opacity-50 -z-10'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: active ? 1 : 0.5, y: 0, scale: active ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-500"
        />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}, {company}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-300 italic">{content}</p>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Client <span className="heading-gradient">Testimonials</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - see what our clients have to say about our services.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`absolute top-0 left-0 right-0 transition-all duration-500 ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 -z-10'
                }`}
              >
                <TestimonialCard 
                  {...testimonial} 
                  index={index} 
                  active={index === activeIndex} 
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary-500 w-6' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;