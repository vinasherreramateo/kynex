/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Shield, Maximize2 } from 'lucide-react';

const PACKAGES = [
  {
    id: "core",
    name: "Kynex Core",
    price: "$999",
    desc: "For early adopters and creators exploring the fundamentals of matter control.",
    features: [
       "Nanobot NX-1 starter swarm",
       "Basic OS access",
       "Precision Glove configuration",
       "Standard mesh demo mode",
       "Limited firmware updates"
    ],
    recommended: false,
    icon: <Zap size={24} className="text-white" />
  },
  {
    id: "pro",
    name: "Kynex Pro",
    price: "$1,899",
    desc: "The complete wearable transformation system. Enhanced swarm for full apparel forms.",
    features: [
       "Expanded nanobot swarm",
       "Full Suit configuration",
       "Structural Helmet mode",
       "Dynamic Thermal regulation",
       "Post-launch beta access",
       "Premium OS dashboard"
    ],
    recommended: true,
    icon: <Shield size={24} className="text-black" />
  },
  {
    id: "apex",
    name: "Kynex Apex",
    price: "$3,499",
    desc: "Elite performance and extreme durability. Engineered for high-risk environments.",
    features: [
       "Full adaptive swarm capacity",
       "Tactical & Mountain shells",
       "Real-time bio-analytics",
       "Emergency protective mode",
       "Lifetime OS updates",
       "Physical storage capsule"
    ],
    recommended: false,
    icon: <Maximize2 size={24} className="text-white" />
  }
];

export default function Buy() {
  return (
    <div className="pt-32 pb-40">
      <section className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="section-label">Order</span>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] mb-8">
            Choose your <br /> Kynex system.
          </h1>
          <p className="text-muted text-xl max-w-3xl mx-auto font-light">
            From individual nanobot units to full adaptive wearable systems. Select the tier that matches your future.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-panel p-10 flex flex-col items-start border relative overflow-hidden transition-all ${pkg.recommended ? 'scale-105 border-accent bg-accent/[0.03] z-10 lg:min-h-[700px]' : 'border-white/5 lg:min-h-[650px]'}`}
            >
              {pkg.recommended && (
                <div className="absolute top-6 right-6 bg-accent text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Recommended
                </div>
              )}
              
              <div className={`p-4 rounded-xl mb-10 ${pkg.recommended ? 'bg-white' : 'bg-white/5'}`}>
                 {pkg.icon}
              </div>

              <span className="text-sm font-mono text-muted mb-2 uppercase tracking-widest">{pkg.name}</span>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-display font-black">{pkg.price}</span>
                <span className="text-muted text-sm uppercase">USD</span>
              </div>

              <p className="text-muted text-sm font-light leading-relaxed mb-10">
                {pkg.desc}
              </p>

              <div className="space-y-4 mb-12 flex-1 w-full">
                {pkg.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3 text-sm font-light">
                    <Check size={16} className={pkg.recommended ? "text-accent mt-0.5" : "text-white/40 mt-0.5"} />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 w-full">
                <button className={`btn w-full py-5 text-sm uppercase tracking-widest font-black ${pkg.recommended ? 'bg-accent text-black hover:bg-white shadow-[0_0_30px_rgba(159,211,255,0.4)]' : 'btn-primary'}`}>
                  Buy Now
                </button>
                <button className="btn btn-secondary w-full py-4 text-xs uppercase tracking-widest">
                  Reserve for 2027
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mt-40 max-w-4xl mx-auto px-6 text-center">
         <span className="section-label">The Journey</span>
         <h2 className="text-4xl font-display font-bold mb-16 uppercase tracking-tight">What happens after purchase?</h2>
         
         <div className="space-y-12">
            {[
              { step: "01", title: "Reservation Confirmed", desc: "Your unique Kynex serial ID is generated and allocated to your body profile." },
              { step: "02", title: "Body Scan Profile", desc: "Download the Kynex app and perform a high-resolution 3D body scan for nanobot calibration." },
              { step: "03", title: "Activation Pulse", desc: "Link your controller to your swarm units to begin your first matter transformation." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-8 md:text-left bg-white/5 p-8 rounded-3xl border border-white/5">
                <div className="text-6xl font-display font-black text-white/5">{item.step}</div>
                <div>
                   <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{item.title}</h3>
                   <p className="text-muted font-light">{item.desc}</p>
                </div>
                <div className="ml-auto p-4 rounded-full bg-white/5">
                   <ArrowRight size={24} className="text-accent" />
                </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
