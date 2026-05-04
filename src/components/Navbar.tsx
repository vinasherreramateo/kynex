/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Technology', path: '/technology' },
  { name: 'Products', path: '/products' },
  { name: 'App', path: '/app' },
  { name: 'Film', path: '/film' },
  { name: 'Support', path: '/support' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-black font-bold text-xl">K</span>
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter uppercase transition-colors">Kynex</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-medium tracking-wide uppercase transition-all hover:text-accent ${location.pathname === link.path ? 'text-white border-b-2 border-accent pb-1' : 'text-muted'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/buy" className="btn btn-primary px-6 py-2 text-sm">
            Buy Kynex
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg/95 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-6">
              {LINKS.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-xl font-display font-medium uppercase ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/buy" className="btn btn-primary w-full py-4 text-lg">
                Buy Kynex
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
