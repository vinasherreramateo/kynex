import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={className}>
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black/40 p-8 text-center">
          <p className="text-accent text-[10px] font-mono mb-2 uppercase tracking-[0.2em]">Neural Link Error</p>
          <p className="text-muted text-[10px] max-w-[200px] leading-relaxed uppercase tracking-tighter">
            Unable to initialize volumetric projection. Please refresh interface or check system status.
          </p>
        </div>
      ) : (
        <Suspense 
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-4 text-center p-8">
                <div className="w-10 h-10 border-2 border-accent/20 border-t-accent rounded-full animate-spin shadow-[0_0_15px_rgba(159,211,255,0.3)]" />
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-accent uppercase tracking-widest animate-pulse">Constructing System</p>
                  <p className="text-[9px] font-mono text-muted uppercase tracking-wider opacity-60">Syncing Nanobots...</p>
                </div>
              </div>
            </div>
          }
        >
          <Spline 
            scene={scene} 
            style={{ width: '100%', height: '100%' }}
            onError={() => setHasError(true)}
          />
        </Suspense>
      )}
    </div>
  );
}
