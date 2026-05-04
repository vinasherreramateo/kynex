/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-display font-bold uppercase tracking-tighter mb-4 block">Kynex</Link>
            <p className="text-muted text-lg mb-8 max-w-sm">
              Programmable Matter. Wearable Future. Just for the real ones.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Youtube size={20} /></a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-accent">Navigation</h4>
            <ul className="space-y-4 text-muted">
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/app" className="hover:text-white transition-colors">App</Link></li>
              <li><Link to="/film" className="hover:text-white transition-colors">Film</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-accent">Contact</h4>
            <ul className="space-y-4 text-muted">
              <li><Link to="/buy" className="hover:text-white transition-colors">Buy</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><a href="mailto:support@kynex.com" className="hover:text-white transition-colors">support@kynex.com</a></li>
              <li><a href="mailto:press@kynex.com" className="hover:text-white transition-colors">press@kynex.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-xs text-muted font-mono uppercase tracking-widest">
          <p>© 2026 Kynex. Concept product website. Kynex is a fictional future-tech brand.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
