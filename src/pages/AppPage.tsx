/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Thermometer, Maximize2, Zap, User, Settings, Layers, Shield } from 'lucide-react';

const APP_MODES = [
  { id: 'suit', name: 'Suit', icon: <Layers size={18} /> },
  { id: 'helmet', name: 'Helmet', icon: <Shield size={18} /> },
  { id: 'glove', name: 'Glove', icon: <Zap size={18} /> },
];

export default function AppPage() {
  const [activeMode, setActiveMode] = useState(APP_MODES[0]);
  const [isAssembling, setIsAssembling] = useState(false);
  const [thermal, setThermal] = useState(24);
  const [flex, setFlex] = useState(70);

  const handleAssemble = () => {
    setIsAssembling(true);
    setTimeout(() => setIsAssembling(false), 2000);
  };

  return (
    <div className="pt-32">
      <section className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="section-label">Controller</span>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] mb-8">
            Control matter <br /> from your hand.
          </h1>
          <p className="text-muted text-xl max-w-3xl mx-auto font-light">
            The Kynex app transforms microscopic robots into wearable structures with one gesture. Precision control for a programmable world.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 bg-bg-2 border-y border-white/5 flex flex-col lg:flex-row items-center gap-20">
        {/* App Interface Mockup */}
        <div className="w-full max-w-md perspective-[2000px]">
          <motion.div
             whileHover={{ rotateY: -10, rotateX: 5 }}
             className="bg-[#0c1421] rounded-[3rem] border-[8px] border-[#1a2533] aspect-[9/19] relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
          >
             {/* Notch */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#1a2533] rounded-b-2xl z-20" />
             
             {/* App Content */}
             <div className="p-8 pt-16 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                         <span className="text-black font-bold">K</span>
                      </div>
                      <div>
                         <div className="text-xs font-bold text-white/50 uppercase">Kynex OS</div>
                         <div className="text-sm font-bold">ALPHA_v12.4</div>
                      </div>
                   </div>
                   <div className="p-2 bg-white/5 rounded-lg"><User size={18} /></div>
                </div>

                <div className="mb-10">
                   <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-4">Core Selection</div>
                   <div className="grid grid-cols-3 gap-2">
                      {APP_MODES.map(mode => (
                         <button 
                            key={mode.id}
                            onClick={() => setActiveMode(mode)}
                            className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${activeMode.id === mode.id ? 'bg-accent text-black' : 'bg-white/5 text-white'}`}
                         >
                            {mode.icon}
                            <span className="text-[9px] font-bold uppercase">{mode.name}</span>
                         </button>
                      ))}
                   </div>
                </div>

                <div className="space-y-8 flex-1">
                   <div>
                      <div className="flex justify-between items-center mb-4">
                         <div className="flex items-center gap-2 text-xs font-bold uppercase"><Thermometer size={14} /> Thermal</div>
                         <div className="text-xs font-mono">{thermal}°C</div>
                      </div>
                      <input 
                         type="range" min="10" max="40" value={thermal} 
                         onChange={(e) => setThermal(Number(e.target.value))}
                         className="w-full accent-accent h-1 bg-white/10 rounded-full appearance-none cursor-pointer" 
                      />
                   </div>

                   <div>
                      <div className="flex justify-between items-center mb-4">
                         <div className="flex items-center gap-2 text-xs font-bold uppercase"><Maximize2 size={14} /> Flexibility</div>
                         <div className="text-xs font-mono">{flex}%</div>
                      </div>
                      <input 
                         type="range" min="0" max="100" value={flex} 
                         onChange={(e) => setFlex(Number(e.target.value))}
                         className="w-full accent-accent h-1 bg-white/10 rounded-full appearance-none cursor-pointer" 
                      />
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 glass-panel flex flex-col gap-2">
                         <span className="text-[9px] font-mono text-white/40 uppercase">Sync</span>
                         <span className="text-sm font-bold text-accent">Active</span>
                      </div>
                      <div className="p-6 glass-panel flex flex-col gap-2">
                         <span className="text-[9px] font-mono text-white/40 uppercase">Energy</span>
                         <span className="text-sm font-bold">98%</span>
                      </div>
                   </div>
                </div>

                <motion.button 
                   whileTap={{ scale: 0.95 }}
                   onClick={handleAssemble}
                   className="mt-8 bg-white text-black py-5 rounded-2xl font-display font-black uppercase tracking-widest text-sm relative overflow-hidden"
                >
                   {isAssembling ? 'Assembling...' : 'Assemble Now'}
                   <AnimatePresence>
                      {isAssembling && (
                         <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 bg-accent/20"
                         />
                      )}
                   </AnimatePresence>
                </motion.button>
             </div>

             {/* UI Overlay on assemble */}
             {isAssembling && (
                <div className="absolute inset-0 z-30 bg-accent/10 flex items-center justify-center p-12 pointer-events-none">
                   <div className="w-full aspect-square border-2 border-accent rounded-full animate-ping" />
                </div>
             )}
          </motion.div>
        </div>

        <div className="lg:max-w-xl">
           <span className="section-label">Software Features</span>
           <h2 className="text-4xl font-display font-bold mb-8">Matter at the speed of thought.</h2>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Instant Creation", desc: "Select and form garments in under 3 seconds." },
                { title: "Personal Fit", desc: "Digital 3D body profile for perfect nanobot alignment." },
                { title: "Thermal Control", desc: "Active temperature management in any weather." },
                { title: "Bio Monitoring", desc: "Real-time health and performance diagnostics." },
                { title: "Emergency Mode", desc: "Instant structural rigidity for maximum protection." },
                { title: "Cloud Wardrobe", desc: "Access all your saved configurations anywhere." }
              ].map((feature, i) => (
                <motion.div 
                   key={i}
                   whileHover={{ x: 10 }}
                   className="p-6 rounded-2xl bg-white/5 border border-white/5"
                >
                   <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><div className="w-1 h-3 bg-accent" /> {feature.title}</h3>
                   <p className="text-muted text-sm font-light leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
           </div>

           <div className="mt-12 flex gap-4">
              <a href="#" className="btn btn-secondary flex items-center gap-2 py-4">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_logo_black.svg" className="w-5 h-5 invert" alt="Apple" /> Apple Store
              </a>
              <a href="#" className="btn btn-secondary flex items-center gap-2 py-4">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" className="w-24" alt="Google Play" />
              </a>
           </div>
        </div>
      </section>

      {/* Experience Intro */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
         <h2 className="text-4xl md:text-6xl font-display font-bold mb-10">One Gesture. Infinite Forms.</h2>
         <p className="text-muted text-xl max-w-2xl mx-auto font-light mb-16 leading-relaxed">
            The Kynex OS is built on advanced swarm-logic protocols, ensuring that your command is executed with absolute precision across billions of independent nanobots.
         </p>
         <Link to="/buy" className="btn btn-primary text-lg px-12 py-5">Get the Controller</Link>
      </section>
    </div>
  );
}
