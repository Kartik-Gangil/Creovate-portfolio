import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/ui/Cursor';
import Loader from './components/ui/Loader';
import BackgroundParticles from './components/3d/BackgroundParticles';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App relative min-h-screen">
      <Cursor />
      <div className="fixed inset-0 z-0">
        <BackgroundParticles />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;