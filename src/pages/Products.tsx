/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Smartphone, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: "nx-1",
    name: "Nanobot NX-1",
    category: "The Unit",
    desc: "The microscopic building block. Individual modular unit with 12 magnetic docking points.",
    link: "/technology",
    type: "Technology"
  },
  {
    id: "helmet",
    name: "Adaptive Helmet",
    category: "Protective",
    desc: "A structural shell that maintains flexibility until impact, instantly hardening to protect the user.",
    link: "/buy",
    type: "Configuration"
  },
  {
    id: "glove",
    name: "Precision Glove",
    category: "Performance",
    desc: "Second-skin haptic surface with muscle-augmenting mesh for enhanced grip and sensitivity.",
    link: "/buy",
    type: "Configuration"
  },
  {
    id: "suit",
    name: "Programmable Suit",
    category: "Apparel",
    desc: "The ultimate wearable form. A tailored surface that morphs texture and thermal behavior on demand.",
    link: "/buy",
    type: "Configuration"
  },
  {
    id: "mountain",
    name: "Mountain Shell",
    category: "Extreme",
    desc: "Terrain-adaptive outer layer with active wind protection and altitude thermal shielding.",
    link: "/buy",
    type: "Configuration"
  },
  {
    id: "performance",
    name: "Performance Layer",
    category: "Athletic",
    desc: "Ultra-thin compression mesh that tracks biometrics and reinforces posture during movement.",
    link: "/buy",
    type: "Configuration"
  }
];

export default function Products() {
  return (
    <div className="pt-32">
      <section className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="section-label">Inventory</span>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] mb-8">
            One system. <br /> Infinite products.
          </h1>
          <p className="text-muted text-xl max-w-3xl mx-auto font-light">
            Kynex does not replace one garment. It replaces the idea of fixed garments. Once you own the nanobots, you own the wardrobe.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: "nx-1",
              name: "Nanobot NX-1",
              category: "The Unit",
              desc: "The microscopic modular building block of the Kynex system. Silver geometric unit with 12 magnetic docking points.",
              img: "/assets/nanobot-transparent.png"
            },
            {
              id: "mesh",
              name: "Active Mesh",
              category: "Core Tech",
              desc: "A programmable silver textile mesh formed by coordinated nanobot arrays. Dynamic and self-healing.",
              img: "/assets/nanobot-mesh.png"
            },
            {
              id: "helmet",
              name: "Adaptive Helmet",
              category: "Personal Security",
              desc: "A full-coverage protective shell that transitions from flexible mesh to rigid structural impact shield.",
              img: "/assets/helmet-product.png"
            },
            {
              id: "glove",
              name: "Haptic Glove",
              category: "Interface",
              desc: "Enhanced grip and precision feedback. The nanobots form a second-skin interface with muscle augmentation.",
              img: "/assets/glove-assembly.png"
            },
            {
              id: "lifestyle",
              name: "Kynex Lifestyle",
              category: "Branding",
              desc: "The future of human-matter integration. Refined, technical, and uncompromising.",
              img: "/assets/helmet-holding.png"
            },
            {
              id: "campaign",
              name: "Kynex Campaign",
              category: "Statement",
              desc: "Just for the real ones.",
              img: "/assets/kynex-ad-poster.png"
            }
          ].map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel group flex flex-col border border-white/5 hover:border-accent/40 transition-all overflow-hidden"
            >
              {/* Product Image */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-[4/3] relative overflow-hidden bg-black/40 border-b border-white/5"
              >
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] shadow-sm">View Concept Specification</span>
                </div>
                
                {/* Silver glow border on hover */}
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 transition-all duration-500 rounded-2xl pointer-events-none" />
              </motion.div>

              <div className="p-8 flex flex-col flex-1">
                <div className="text-[10px] font-mono text-accent mb-2 uppercase tracking-widest">{product.category}</div>
                <h3 className="text-2xl font-display font-bold mb-4">{product.name}</h3>
                <p className="text-muted text-sm font-light mb-8 leading-relaxed flex-1">
                  {product.desc}
                </p>

                <div className="flex items-center gap-4">
                  <Link to="/buy" className="btn btn-primary flex-1 py-3 text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                    <ShoppingCart size={14} /> Buy
                  </Link>
                  <Link to="/app" className="btn btn-secondary flex-1 py-3 text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                    <Smartphone size={14} /> Design
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Exploded View Section */}
      <section className="py-32 bg-bg-2 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <span className="section-label">Assembly Logic</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">From unit to mesh. <br /> To matter.</h2>
              <p className="text-muted text-lg font-light mb-10 max-w-lg">
                The nanobots self-organize into a high-density structural mesh. This phase-shifting matter allows for instant reconfiguration between rigid and flexible states.
              </p>
              <div className="space-y-6">
                {[
                  "NX-1: The Individual Unit",
                  "Modular Swarm: Dynamic Connection",
                  "Kynex Mesh: The Flexible Surface",
                  "The Garment: Your Final Form"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-mono tracking-widest text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
           </div>

           <div className="relative h-[500px]">
              {/* CSS Exploded View Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="relative w-80 h-80 border border-white/10 rounded-full"
                 >
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.8, 0.2]
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                          className="absolute w-8 h-8 glass-panel flex items-center justify-center"
                          style={{
                            top: `${50 + 40 * Math.sin((i * Math.PI) / 3)}%`,
                            left: `${50 + 40 * Math.cos((i * Math.PI) / 3)}%`,
                          }}
                        >
                           <ArrowRight size={10} className="text-accent" />
                        </motion.div>
                    ))}
                 </motion.div>
                 
                 <div className="absolute w-40 h-40 glass-panel flex flex-col items-center justify-center shadow-[0_0_50px_rgba(159,211,255,0.2)]">
                    <span className="text-[10px] font-mono text-accent mb-2">OUTPUT</span>
                    <span className="font-display font-bold text-lg">SUIT_v2</span>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
