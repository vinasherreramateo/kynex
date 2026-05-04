/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Zap, Radio, Maximize2, Thermometer, UserCheck, Layers } from 'lucide-react';
import KynexSplineShowcase from '../components/sections/KynexSplineShowcase';

export default function Technology() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Core Mechanics</span>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] mb-8">
            The science of <br /> programmable matter.
          </h1>
          <p className="text-muted text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            Kynex combines swarm robotics, magnetic self-assembly, and programmable textile logic to create adaptive clothing on demand.
          </p>
        </motion.div>
      </section>

      {/* Principles Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-y border-white/5 bg-bg-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group perspective-1000">
            <motion.div 
              whileHover={{ rotateY: 5, rotateX: -5 }}
              className="aspect-square bg-black/60 rounded-[2.5rem] border border-white/10 overflow-hidden group shadow-2xl relative"
            >
              <img 
                src="/assets/nanobot-mesh.png" 
                alt="Macro view of the Kynex silver programmable matter mesh" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
              
              {/* Animated glow border */}
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 transition-all duration-700 rounded-[2.5rem]" />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 glass-panel p-6 max-w-xs z-10 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <span className="text-[10px] font-mono text-accent block mb-2 uppercase tracking-widest">Macro-Mesh Architecture</span>
              <div className="space-y-1 mb-2">
                {["12-Point Magnetic Handshake", "Micro-modular silver chassis", "Programmable Haptic surface", "Self-repairing geometry"].map((label, i) => (
                  <div key={i} className="text-[9px] font-mono uppercase tracking-tighter flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full" /> {label}
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted font-light leading-relaxed">Nanobot NX-1 units in coordinated Ready-State, forming a continuous 0.4mm silver surface.</p>
            </div>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "From Unit to Mesh",
                desc: "When thousands of Kynex units connect magnetically, they create a flexible mesh. At human scale, the separations nearly disappear, producing a continuous surface that behaves like intelligent textile.",
                icon: <Cpu size={24} className="text-accent" />
              },
              {
                title: "The Swarm Layer",
                desc: "Kynex is not a single object. It is a coordinated field of microscopic units capable of assembling, dissolving, and reforming into functional wearable structures.",
                icon: <Zap size={24} className="text-accent" />
              },
              {
                title: "App-Controlled Logic",
                desc: "Every connection point is software-authorized. The Kynex OS manages billion-point magnetic handshake protocols simultaneously.",
                icon: <Radio size={24} className="text-accent" />
              }
            ].map((tech, i) => (
              <div key={i} className="flex gap-8">
                <div className="pt-2">{tech.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
                  <p className="text-muted leading-relaxed font-light">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Showcase */}
      <div className="bg-bg">
        <KynexSplineShowcase />
      </div>

      {/* Swarm Image Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="relative rounded-[3rem] overflow-hidden group border border-white/10">
          <img 
            src="/assets/nanobot-swarm-floor.png" 
            alt="Thousands of Kynex nanobots across a futuristic white floor" 
            className="w-full h-auto transition-transform duration-[3000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-transparent opacity-60" />
          <div className="absolute top-1/2 left-12 -translate-y-1/2 max-w-md">
            <span className="section-label">Field of Matter</span>
            <h2 className="text-4xl font-display font-bold mb-4">Coordinated Assembly.</h2>
            <p className="text-muted font-light">Millions of independent NX-1 units awaiting instructions to form your next wardrobe.</p>
          </div>
        </div>
      </section>

      {/* How it Works Timeline */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-24">
          <span className="section-label">The Process</span>
          <h2 className="text-4xl font-display font-bold">Execution Sequence</h2>
        </div>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "01", label: "Select", desc: "User chooses garment form in the interactive app dashboard." },
              { step: "02", label: "Signal", desc: "Encoded instructions transmitted to the nanobot swarm via encrypted link." },
              { step: "03", label: "Assemble", desc: "Nanobots engage magnetic locks to form a structural textile mesh." },
              { step: "04", label: "Adapt", desc: "The mesh dynamically conforms to the user's body profile in real-time." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 text-center md:text-left relative"
              >
                <div className="text-5xl font-display font-black text-white/5 absolute -top-4 -left-4 select-none">{item.step}</div>
                <h4 className="text-xl font-bold mb-4 relative">{item.label}</h4>
                <p className="text-muted text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Swarm Logic", icon: <Layers size={20} /> },
              { title: "Magnetic Docking", icon: <Zap size={20} /> },
              { title: "Thermal Reg", icon: <Thermometer size={20} /> },
              { title: "Bio Monitor", icon: <UserCheck size={20} /> },
              { title: "Terrain Adapt", icon: <Maximize2 size={20} /> },
              { title: "Micro Modular", icon: <Cpu size={20} /> },
              { title: "Memory Shape", icon: <Layers size={20} /> },
              { title: "Impact Shield", icon: <Shield size={20} /> }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors group">
                <div className="text-accent group-hover:scale-110 transition-transform">{feature.icon}</div>
                <span className="text-xs font-mono uppercase tracking-widest">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Shield(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
