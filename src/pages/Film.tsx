/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Play, Download, Share2 } from 'lucide-react';

export default function Film() {
  return (
    <div className="pt-32 pb-40">
      <section className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
        >
          <span className="section-label">Cinema</span>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] mb-8">
            The Concept Film.
          </h1>
          <p className="text-muted text-xl max-w-3xl mx-auto font-light">
            Watch programmable matter come alive. Witness the evolution of garments from the first nanobot to the final structural form.
          </p>
        </motion.div>
      </section>

      {/* Main Video Container */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="glass-panel rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)] relative group">
          <div className="aspect-video relative">
            <iframe
              className="commercial-video"
              src="https://www.youtube.com/embed/eGY9WweRUK8?rel=0&modestbranding=1&playsinline=1"
              title="Kynex Concept Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            
            {/* Top Overlay label */}
            <div className="absolute top-8 left-8 z-20 pointer-events-none">
              <span className="section-label">Official Concept Film</span>
              <h2 className="text-3xl font-display font-bold">See programmable matter come alive.</h2>
            </div>

            {/* Bottom info section only visible if not playing/pausing or on hover */}
            <div className="absolute bottom-8 left-8 max-w-lg z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm font-light leading-relaxed">
                Watch the Nanobot NX-1 transform from a single suspended unit into a swarm, a mesh, a helmet, a glove, and a full adaptive suit.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center mt-12 gap-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button className="btn btn-secondary px-10 gap-2"><Download size={18} /> Download Press Kit</button>
            <a 
              href="https://youtu.be/eGY9WweRUK8" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-primary px-10"
            >
              Open on YouTube
            </a>
          </div>
          <p className="text-xs font-mono text-muted">
            If the film does not load, open it directly on YouTube.
          </p>
        </div>
      </section>

      {/* Film Storyboard */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="section-label">The 30-second transformation</span>
          <h2 className="text-4xl font-display font-bold">Storyboard Sequence</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "01. One Unit", img: "/assets/nanobot-hero.png", desc: "A single nanobot floats alone in a vacuum." },
            { name: "02. The Swarm", img: "/assets/nanobot-swarm-floor.png", desc: "Gravity shifts. Thousands awaken and coordinate." },
            { name: "03. The Mesh", img: "/assets/nanobot-mesh.png", desc: "Units connect into a flexible programmable textile." },
            { name: "04. The Helmet", img: "/assets/helmet-assembly.png", desc: "The swarm manifests into precision safety protection." },
            { name: "05. The Glove", img: "/assets/glove-assembly.png", desc: "The system adapts into high-performance haptic control." },
            { name: "06. The Product", img: "/assets/kynex-ad-poster.png", desc: "Kynex. Just for the real ones." }
          ].map((item, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -5 }}
               className="glass-panel flex flex-col border border-white/5 overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden bg-white/5">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent opacity-60" />
                <div className="absolute top-4 left-4 font-mono text-[9px] text-accent tracking-[0.3em] uppercase">{item.name.split('. ')[0]} Phase</div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">{item.name.split('. ')[1]}</h4>
                <p className="text-muted text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Launch Actions */}
      <section className="mt-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
         <div className="text-left">
            <h3 className="text-3xl font-display font-bold mb-4">Experience the transformation.</h3>
            <p className="text-muted font-light">Join the press kit waitlist for exclusive 8K cinematic assets and technical breakdown.</p>
         </div>
         <div className="flex gap-4">
            <button className="btn btn-secondary px-8">Download Press Kit</button>
            <button className="btn btn-primary px-8">Join the Launch</button>
         </div>
      </section>
    </div>
  );
}
