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
  const message = `Hi%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20profile%20and%20wanted%20to%20know%20more%20about%20the%20services%20you%20offer.%20I%E2%80%99m%20looking%20for%20help%20with%20improving%20my%20online%20presence%20and%20possibly%20getting%20more%20clients.%0A%0ACan%20you%20share%20details%20about%20what%20you%20provide%20and%20how%20it%20works%3F
`
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
      {/* whatsapp icon */}
      {/* <div className='sticky'> */}
      <div className='absolute sticky bottom-0 right-0 z-50  '>
        <a href={`http:///wa.me/918871596881?text=${message}`} rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
            className="bi bi-whatsapp cursor-pointer rounded-full p-1.5 hover:bg-green-500 transition-all transition-discrete m-2" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
      </div>
      {/* </div> */}
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;