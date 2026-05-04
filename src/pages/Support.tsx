/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Plus, Minus, Send, Mail, MapPin, Globe } from 'lucide-react';

const FAQS = [
  { 
    q: "What is Kynex?", 
    a: "Kynex is a programmable matter clothing system made from billions of microscopic modular nanobots. It allows users to transform their clothing into different forms instantly via a mobile app." 
  },
  { 
    q: "Is Kynex real?", 
    a: "Kynex is a fictional cinematic product concept created for research and aesthetic storytelling purposes." 
  },
  { 
    q: "How do the nanobots connect?", 
    a: "The nanobots use programmable magnetic docking points that can engage and disengage at high frequency, allowing for fluid motion and structural integrity." 
  },
  { 
    q: "Can Kynex become any garment?", 
    a: "Within its current development phase, Kynex can manifest as suits, helmets, gloves, and basic performance layers. More complex structures are being added to our cloud wardrobe continuously." 
  },
  { 
    q: "Is the suit comfortable?", 
    a: "The nanobots are programmed to mimic the haptic properties of high-end textiles like silk or wool while maintaining structural protection when needed." 
  },
  { 
    q: "How is it controlled?", 
    a: "The system is controlled via the Kynex OS app, which communicates with the nanobot swarm through a secure near-field link." 
  },
  { 
    q: "Does it work without the app?", 
    a: "Kynex requires a synced controller for structural transformations, but it maintains its last known form once the connection is severed." 
  }
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-40">
      <section className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="section-label">Assistance</span>
          <h1 className="text-5xl md:text-8xl font-display font-black leading-[0.9] mb-8">
            Support Center.
          </h1>
          <p className="text-muted text-xl max-w-3xl mx-auto font-light">
            Everything you need to understand, activate, and maintain your Kynex system. The future of matter comes with dedicated guidance.
          </p>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-6 mb-40">
        <h2 className="text-3xl font-display font-bold mb-10 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass-panel border border-white/5 overflow-hidden">
               <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
               >
                  <span className="text-lg font-bold">{faq.q}</span>
                  {openFaq === i ? <Minus size={20} className="text-accent" /> : <Plus size={20} className="text-muted" />}
               </button>
               <AnimatePresence>
                  {openFaq === i && (
                     <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="p-6 pt-0 text-muted font-light leading-relaxed border-t border-white/5"
                     >
                        {faq.a}
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
         <div>
            <span className="section-label">Connect</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">Reach the swarm.</h2>
            <p className="text-muted text-lg font-light mb-12">
               Our technical support teams are available for synchronization diagnostics, body scan assistance, and firmware maintenance.
            </p>

            <div className="space-y-8">
               <div className="flex items-center gap-6 p-6 glass-panel border border-white/5">
                  <div className="p-4 rounded-xl bg-accent/20 text-accent"><Mail size={24} /></div>
                  <div>
                     <div className="text-xs font-mono uppercase tracking-widest text-muted">Support Email</div>
                     <div className="font-bold">support@kynex.com</div>
                  </div>
               </div>
               <div className="flex items-center gap-6 p-6 glass-panel border border-white/5">
                  <div className="p-4 rounded-xl bg-accent/20 text-accent"><Globe size={24} /></div>
                  <div>
                     <div className="text-xs font-mono uppercase tracking-widest text-muted">Global Operations</div>
                     <div className="font-bold">San Francisco / Tokyo / Berlin</div>
                  </div>
               </div>
               <div className="flex items-center gap-6 p-6 glass-panel border border-white/5">
                  <div className="p-4 rounded-xl bg-accent/20 text-accent"><MapPin size={24} /></div>
                  <div>
                     <div className="text-xs font-mono uppercase tracking-widest text-muted">Headquarters</div>
                     <div className="font-bold">100 Nanobot Pl, Neo San Francisco</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="glass-panel p-10 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-mono uppercase tracking-widest text-muted">Full Name</label>
                     <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-mono uppercase tracking-widest text-muted">Email Address</label>
                     <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent outline-none transition-colors appearance-none">
                     <option>Technical Support</option>
                     <option>Order Inquiry</option>
                     <option>Body Scan Help</option>
                     <option>Press Inquiry</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted">Message</label>
                  <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent outline-none transition-colors resize-none" placeholder="How can the swarm help you?"></textarea>
               </div>

               <button 
                  disabled={formStatus !== 'idle'}
                  className="btn btn-primary w-full py-5 text-sm uppercase tracking-widest font-black flex items-center justify-center gap-2"
               >
                  {formStatus === 'idle' && <><Send size={16} /> Send Signal</>}
                  {formStatus === 'sending' && "Transmitting..."}
                  {formStatus === 'success' && "Signal Received"}
               </button>
            </form>
         </div>
      </section>
    </div>
  );
}
