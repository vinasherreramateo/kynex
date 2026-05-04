/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Card } from '../ui/card';
import { Spotlight } from '../ui/spotlight';
import { SplineScene } from '../ui/spline-scene';
import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';

export default function KynexSplineShowcase() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <Card className="relative w-full overflow-hidden border-white/10 bg-black/40 backdrop-blur-3xl group">
        <Spotlight fill="rgba(159, 211, 255, 0.2)" />
        
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Content */}
          <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative z-10">
            <span className="section-label mb-6">Interactive Programable Matter</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              A living 3D interface.
            </h2>
            <p className="text-muted text-lg font-light mb-10 max-w-lg leading-relaxed">
              Explore the Kynex nanobot system as a living 3D interface. Each nanobot connects magnetically to become helmets, gloves, suits, and adaptive garments. Witness the swarm in high-resolution volumetric space.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-auto lg:mt-0">
              <Link to="/technology" className="btn btn-primary px-8 py-4 gap-2">
                Explore Technology <ChevronRight size={18} />
              </Link>
              <Link to="/film" className="btn btn-secondary px-8 py-4 gap-2">
                <Play size={18} /> Watch Film
              </Link>
            </div>
          </div>

          {/* Right Side - Spline Scene */}
          <div className="flex-1 relative min-h-[500px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#05070a] overflow-hidden">
            {/* Background / Fallback Layer */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(159,211,255,0.08)_0%,transparent_70%)]" />
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center -z-20 transition-opacity duration-1000 group-hover:opacity-20" 
              style={{ backgroundImage: "url('/assets/nanobot-transparent.png')" }} 
            />
            
            {/* The 3D Scene Layer */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
               <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
               />
            </div>
            
            {/* Cybernetic details overlay */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-1 items-end pointer-events-none">
              <span className="text-[8px] font-mono text-accent/40 uppercase tracking-tighter">System: Active</span>
              <span className="text-[8px] font-mono text-accent/40 uppercase tracking-tighter">View: Volumetric</span>
            </div>
            <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
              <div className="w-12 h-1 border-r border-b border-white/20" />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
