import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Smartphone, Monitor, Tablet, Zap, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';

export const TechVisual3D: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'visual' | 'telemetry'>('visual');
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Dynamic Rotating Torus Knot Hologram
    const group = new THREE.Group();
    scene.add(group);

    const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 100, 16);
    const knotMat = new THREE.MeshNormalMaterial({ wireframe: true });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    group.add(knotMesh);

    // Subtle points cluster
    const clusterGeo = new THREE.BufferGeometry();
    const clusterCount = 200;
    const positions = new Float32Array(clusterCount * 3);
    for (let i = 0; i < clusterCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 6;
    }
    clusterGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const clusterMat = new THREE.PointsMaterial({ color: 0x38bdf8, size: 0.04, transparent: true, opacity: 0.6 });
    const clusterPoints = new THREE.Points(clusterGeo, clusterMat);
    scene.add(clusterPoints);

    let frameId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      if (!prefersReducedMotion) {
        group.rotation.x += 0.008;
        group.rotation.y += 0.012;
        clusterPoints.rotation.y -= 0.002;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(frameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      knotGeo.dispose();
      knotMat.dispose();
      clusterGeo.dispose();
      clusterMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl glass-card overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-[#0c0d15]/90 via-[#10121d]/80 to-[#07080d]/90 p-5 md:p-6">
      {/* Top HUD Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">MK Engine: Active</span>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab('visual')}
            className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
              activeTab === 'visual' ? 'bg-blue-600/30 text-blue-300 border border-blue-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3D Holo
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
              activeTab === 'telemetry' ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture
          </button>
        </div>
      </div>

      {/* Main Display Area */}
      <div className="relative h-64 md:h-72 my-4 rounded-xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center">
        {activeTab === 'visual' ? (
          <>
            <div ref={canvasRef} className="absolute inset-0 w-full h-full" />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-slate-300 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>Real-Time WebGL Matrix</span>
            </div>
            <div className="absolute top-3 right-3 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] px-2.5 py-1 rounded-full font-mono">
              60 FPS FLUID
            </div>
          </>
        ) : (
          <div className="p-4 w-full h-full flex flex-col justify-between font-mono text-xs">
            <div className="space-y-2">
              <div className="text-slate-400 text-[11px]">// MK Web Studio Technical Blueprint</div>
              <div className="text-blue-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Next-Gen React 19 + TypeScript Strict Mode</span>
              </div>
              <div className="text-purple-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Tailwind CSS v4 Utility Architecture</span>
              </div>
              <div className="text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Three.js Hardware Accelerated WebGL Engine</span>
              </div>
              <div className="text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Layout-Shift (CLS 0.00) Semantic Layouts</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center justify-between text-[11px]">
              <span>Core Web Vitals Pass Rate</span>
              <span className="font-bold">100% Grade A</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Telemetry & Device Breakpoint Simulator */}
      <div className="pt-2">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>Responsive Engine Preview</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveDevice('desktop')}
              className={`p-1.5 rounded transition-colors ${activeDevice === 'desktop' ? 'bg-blue-600/30 text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
              title="Desktop viewport"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveDevice('tablet')}
              className={`p-1.5 rounded transition-colors ${activeDevice === 'tablet' ? 'bg-blue-600/30 text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
              title="Tablet viewport"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveDevice('mobile')}
              className={`p-1.5 rounded transition-colors ${activeDevice === 'mobile' ? 'bg-blue-600/30 text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
              title="Mobile viewport"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Metric Mini Pills */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" /> Speed
            </span>
            <span className="text-sm font-bold text-white mt-1">0.38s FCP</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Security
            </span>
            <span className="text-sm font-bold text-white mt-1">SSL &amp; CSP</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-blue-400" /> SEO
            </span>
            <span className="text-sm font-bold text-white mt-1">100 / 100</span>
          </div>
        </div>
      </div>
    </div>
  );
};
