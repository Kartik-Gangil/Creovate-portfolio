import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLElement | null>(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Products" },
    { id: "ServedIndustries", label: "Industries" },
    { id: "testimonials", label: "Testimonials" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      for (const section of [...navItems].reverse()) {
        const element = document.getElementById(section.id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        // consider the fixed header when deciding the active section
        const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 120;

        if (rect.top <= headerHeight + 12) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // run once on mount so the initial active section is correct
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 80;

      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

      window.scrollTo({ top, behavior: "smooth" });

      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={headerRef}
      className="fixed top-5 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div
        className={`relative rounded-2xl border border-white/10 backdrop-blur-2xl transition-all duration-300 ${isScrolled
          ? "bg-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "bg-white/[0.03]"
          }`}
      >
        <div className="flex items-center px-6 py-4 gap-4">
          {/* LEFT NAV */}
          <div className="flex-1">
            <nav className="hidden lg:flex items-center gap-8 justify-start">
              {navItems.slice(0, 3).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={`relative text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? "text-primary-400"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.label}

                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-primary-400"
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* CENTER LOGO */}
          <div className="flex-none">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center gap-3"
            >
              <img
                src="/android-chrome-512x512.png"
                alt="logo"
                className="h-10 w-10 object-contain"
              />

              <h1 className="text-2xl font-bold tracking-wide text-white">
                CREO<span className="text-primary-400">VATE.IO</span>
              </h1>
            </a>
          </div>

          {/* RIGHT NAV + MOBILE BUTTON */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <nav className="hidden lg:flex items-center gap-8 justify-end">
              {navItems.slice(3).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={`relative text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? "text-primary-400"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.label}

                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-primary-400"
                    />
                  )}
                </button>
              ))}
            </nav>

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10"
            >
              <div className="flex flex-col gap-2 p-5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    aria-current={activeSection === item.id ? "page" : undefined}
                    className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${activeSection === item.id
                      ? "bg-primary-500/20 text-primary-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;