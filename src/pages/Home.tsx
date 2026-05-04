/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Layers, Shield, Cpu, Zap, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import KynexSplineShowcase from '../components/sections/KynexSplineShowcase';

const TRANSFORMS = [
  { id: 'suit', name: 'Suit', description: 'Complete body coverage with adaptive thermal regulation.' },
  { id: 'helmet', name: 'Helmet', description: 'Impact-responsive structural protection for extreme safety.' },
  { id: 'glove', name: 'Glove', description: 'Precision haptic feedback and enhanced grip strength.' },
  { id: 'mountain', name: 'Mountain Gear', description: 'Thermal insulation and terrain-adaptive outer shell.' },
  { id: 'performance', name: 'Performance Layer', description: 'Muscle-reactive compression and biometric monitoring.' },
];

export default function Home() {
  const [activeTransform, setActiveTransform] = useState(TRANSFORMS[0]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="section-label">One Unit. Infinite Forms.</span>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] mb-6 max-w-4xl mx-auto">
            Programmable Matter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Wearable Future.</span>
          </h1>
          <p className="text-muted text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A nanobot-powered clothing system that transforms into any garment, instantly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/buy" className="btn btn-primary text-lg px-10">Buy Kynex</Link>
            <Link to="/film" className="btn btn-secondary text-lg px-10">Watch Film</Link>
            <Link to="/technology" className="flex items-center gap-2 text-white hover:text-accent font-medium uppercase tracking-widest text-sm ml-4 group">
              Explore Tech <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Hero Product Visual */}
        <div className="mt-16 relative flex items-center justify-center">
          <motion.div 
            animate={{ 
              rotate: [0, 5, -5, 0],
              y: [0, -15, 0]
            }}
            transition={{ 
              rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10 w-full max-w-2xl px-6"
          >
            <motion.div
              whileHover={{ rotateY: -10, rotateX: 5 }}
              className="relative"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full opacity-40 group-hover:opacity-70 transition-opacity" />
              <img 
                src="/assets/nanobot-transparent.png" 
                alt="Kynex Nanobot NX-1 floating in space" 
                className="w-full h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700"
              />
            </motion.div>
            
            {/* Orbiting particles recreated with CSS */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.4, 0.1],
                  x: [0, Math.random() * 20 - 10, 0],
                  y: [0, Math.random() * 20 - 10, 0],
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3, 
                  repeat: Infinity,
                  delay: i * 0.1
                }}
                className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3D Showcase */}
      <KynexSplineShowcase />

      {/* Featured Campaign Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="glass-panel p-8 md:p-16 border border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Campaign 2026</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The Object That Becomes Everything</h2>
            <p className="text-muted text-lg mb-10 font-light leading-relaxed">
              Nanobot NX-1 is the first unit of the Kynex programmable matter system. Alone, it is precision engineering. Together, millions become a wearable universe.
            </p>
            <div className="text-xl font-display font-bold italic tracking-tighter text-white/40 mb-8 border-l-2 border-accent pl-6">
              "Just for the real ones."
            </div>
            <Link to="/technology" className="btn btn-secondary px-8">Technical Deep Dive</Link>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02, rotateY: 5 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.5)] perspective-1000"
          >
            <img 
              src="/assets/kynex-ad-poster.png" 
              alt="Kynex Nanobot NX-1 advertising macroshot" 
              className="w-full h-auto transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute top-1/2 left-12 -translate-y-1/2 max-w-sm">
              <span className="section-label">Campaign 2026</span>
              <h2 className="text-4xl font-display font-bold mb-4">Just for the real ones.</h2>
              <p className="text-muted font-light leading-relaxed">
                The Kynex NX-1 system represents a paradigm shift in personal technology. It is not just clothing; it is the final object you will ever need.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section with Lifestyle Image */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="/assets/helmet-holding.png" 
              alt="The Kynex Lifestyle - Integration of technology and human form" 
              className="w-full h-auto"
            />
          </motion.div>
          <div>
            <span className="section-label">Vision</span>
            <h2 className="text-4xl font-display font-bold mb-8">Refining the Human Silhouette.</h2>
            <p className="text-muted text-lg font-light leading-relaxed mb-8">
              Kynex matter adapts to your life, not the other way around. From a formal suit to an impact-resistant shell, the transition is silent, seamless, and absolute.
            </p>
            <div className="space-y-4">
              {[
                "Neural-link authorization required",
                "Silver-series modular chassis",
                "Infinite reconfiguration cycles",
                "Zero-waste production loop"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-mono text-accent uppercase tracking-[0.2em]">
                  <div className="w-1 h-1 bg-accent rounded-full" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Teaser Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Beyond Textile</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Matter that thinks.</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto font-light">
            Kynex is a programmable clothing system made from microscopic modular nanobots. Each unit connects magnetically with thousands of others, forming a continuous wearable surface that behaves like textile but thinks like technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Nanobot NX-1", 
              desc: "The individual programmable unit. The building block of the future.",
              icon: <Cpu className="text-accent" />,
              link: "/technology"
            },
            { 
              title: "Adaptive Mesh", 
              desc: "Billions of units forming a seamless textile-like surface that adapts to you.",
              icon: <Layers className="text-accent" />,
              link: "/products"
            },
            { 
              title: "Instant Garments", 
              desc: "Suits, helmets, gloves, and performance layers. Any form, one unit.",
              icon: <Shield className="text-accent" />,
              link: "/products"
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.4)" }}
              className="glass-panel p-8 border border-white/5 group relative overflow-hidden"
            >
              <div className="p-4 rounded-xl bg-white/5 w-fit mb-6 group-hover:bg-accent transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-muted mb-8 font-light text-sm leading-relaxed">{card.desc}</p>
              <Link to={card.link} className="flex items-center gap-2 text-white text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors">
                Learn More <ChevronRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transformation Demo Section */}
      <section className="py-24 bg-bg-2 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="section-label">Interactive Demo</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">One system. <br />Infinite product forms.</h2>
            
            <div className="flex flex-col gap-4">
              {TRANSFORMS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTransform(t)}
                  className={`flex items-center justify-between p-6 rounded-2xl border transition-all text-left group ${activeTransform.id === t.id ? 'bg-white text-black border-white' : 'bg-transparent border-white/10 hover:border-white/30 text-white'}`}
                >
                  <span className="font-display font-bold text-lg uppercase tracking-tight">{t.name}</span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${activeTransform.id === t.id ? 'border-black' : 'border-white/20 group-hover:border-white/40'}`}>
                    <ChevronRight size={16} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div 
              key={activeTransform.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-12 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden"
            >
              {/* Particle burst animation on change */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={`${activeTransform.id}-${i}`}
                    initial={{ x: 0, y: 0, opacity: i % 2 === 0 ? 0 : 0.8 }}
                    animate={{ 
                      x: (Math.random() - 0.5) * 600, 
                      y: (Math.random() - 0.5) * 600, 
                      opacity: 0,
                      scale: 0
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute w-1 h-1 bg-white rounded-full"
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 mx-auto border border-white/10 shadow-[0_0_30px_rgba(159,211,255,0.1)]">
                  <Zap className="text-accent" size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{activeTransform.name}</h3>
                <p className="text-muted text-lg font-light leading-relaxed max-w-sm">
                  {activeTransform.description}
                </p>
                <div className="mt-10 flex gap-4 justify-center">
                   <div className="h-1 w-12 bg-accent rounded-full" />
                   <div className="h-1 w-4 bg-white/10 rounded-full" />
                   <div className="h-1 w-4 bg-white/10 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Home CTA */}
      <section className="py-40 text-center px-6">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-12 max-w-4xl mx-auto leading-[1.1]">
            Not clothing. Not technology. <br />
            A new form of matter.
          </h2>
          <Link to="/products" className="btn btn-primary text-xl px-12 py-5">
            Enter the Future
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
