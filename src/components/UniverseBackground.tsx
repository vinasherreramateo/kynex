/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

export default function UniverseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const stars: Star[] = [];
    const numStars = 200;

    class Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.5;
        this.speed = Math.random() * 0.2;
        this.opacity = Math.random();
      }

      update() {
        this.y -= this.speed;
        if (this.y < 0) {
          this.y = h;
          this.x = Math.random() * w;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Gradient background
      const grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w);
      grad.addColorStop(0, '#0a1221');
      grad.addColorStop(1, '#02040a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
        glowRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas id="universe-canvas" ref={canvasRef} />
      <div className="cursor-glow" ref={glowRef} />
    </>
  );
}
