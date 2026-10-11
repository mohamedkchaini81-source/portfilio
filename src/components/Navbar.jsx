import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiArrowDownTray } from 'react-icons/hi2';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-[3px] left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0b]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#home" onClick={e => handleNav(e, '#home')} className="flex items-center">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="MK Portfolio" className="h-20 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                className={`relative text-sm font-semibold uppercase tracking-widest transition-colors duration-200 group ${
                  isActive ? 'text-white' : 'text-[#9ca3af] hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#e8192c] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Download CV */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download
            className="flex items-center gap-2 px-5 py-2 bg-[#e8192c] text-white text-sm font-bold uppercase tracking-widest rounded hover:bg-[#c8101f] transition-all duration-200 glow-red"
          >
            <HiArrowDownTray className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0d0d0e]/98 backdrop-blur-md border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={e => handleNav(e, link.href)}
                  className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
                    active === link.href.replace('#', '') ? 'text-[#e8192c]' : 'text-[#9ca3af]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download
                className="flex items-center gap-2 px-5 py-2.5 bg-[#e8192c] text-white text-sm font-bold uppercase tracking-widest rounded w-fit mt-2"
              >
                <HiArrowDownTray className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
