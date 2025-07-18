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
import StatsCounter from './components/StatsCounter';
import ServedIndustries from './components/Served_Industries';
import { Analytics } from "@vercel/analytics/react"

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
        <StatsCounter />
        <Services />
        <Portfolio />
        <ServedIndustries />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;