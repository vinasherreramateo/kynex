/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UniverseBackground from './components/UniverseBackground';

// Pages
import Home from './pages/Home';
import Technology from './pages/Technology';
import Products from './pages/Products';
import AppPage from './pages/AppPage';
import Film from './pages/Film';
import Buy from './pages/Buy';
import Support from './pages/Support';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
      <Route path="/technology" element={<PageWrapper><Technology /></PageWrapper>} />
      <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
      <Route path="/app" element={<PageWrapper><AppPage /></PageWrapper>} />
      <Route path="/film" element={<PageWrapper><Film /></PageWrapper>} />
      <Route path="/buy" element={<PageWrapper><Buy /></PageWrapper>} />
      <Route path="/support" element={<PageWrapper><Support /></PageWrapper>} />
      
      {/* Supporting .html extensions as requested */}
      <Route path="/index.html" element={<PageWrapper><Home /></PageWrapper>} />
      <Route path="/technology.html" element={<PageWrapper><Technology /></PageWrapper>} />
      <Route path="/products.html" element={<PageWrapper><Products /></PageWrapper>} />
      <Route path="/app.html" element={<PageWrapper><AppPage /></PageWrapper>} />
      <Route path="/film.html" element={<PageWrapper><Film /></PageWrapper>} />
      <Route path="/buy.html" element={<PageWrapper><Buy /></PageWrapper>} />
      <Route path="/support.html" element={<PageWrapper><Support /></PageWrapper>} />
    </Routes>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <UniverseBackground />
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <AnimatedRoutes />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

