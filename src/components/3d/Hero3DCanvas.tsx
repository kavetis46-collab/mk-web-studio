import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold our 3D objects for coordinated rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Geometric Core: Icosahedron with Wireframe & Inner Core
    const geometry = new THREE.IcosahedronGeometry(1.6, 2);
    
    // Wireframe Outer Mesh
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
    mainGroup.add(wireframeMesh);

    // Inner Glowing Geometric Sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.3, 1);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1d1435,
      emissive: 0x581c87,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMaterial);
    mainGroup.add(innerMesh);

    // 2. Orbital Glowing Rings (Torus)
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.5, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 5;
    mainGroup.add(ring2);

    // 3. Floating Stardust Particles
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8); // electric cyan
    const color2 = new THREE.Color(0x8b5cf6); // violet
    const color3 = new THREE.Color(0xf43f5e); // pink accent

    for (let i = 0; i < particleCount; i++) {
      // Spread in a spherical radius around the center
      const radius = 2.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 
        ? color1.clone().lerp(color2, Math.random()) 
        : color2.clone().lerp(color3, Math.random());

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMaterial);
    scene.add(particles);

    // 4. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 3, 20);
    blueLight.position.set(4, 3, 4);
    scene.add(blueLight);

    const violetLight = new THREE.PointLight(0xa855f7, 3, 20);
    violetLight.position.set(-4, -3, 2);
    scene.add(violetLight);

    // Mouse Interaction Tracking with Smooth Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 1.2;
      targetY = (e.clientY / innerHeight - 0.5) * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Performance Optimization: IntersectionObserver to pause loop when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Ultra-smooth mouse lerping
        mouseX += (targetX - mouseX) * 0.035;
        mouseY += (targetY - mouseY) * 0.035;

        // Base idle rotation + subtle mouse tilt
        mainGroup.rotation.y = elapsedTime * 0.12 + mouseX * 0.6;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.12 + mouseY * 0.6;

        // Subtle organic breathing scale on inner core
        const breathe = 1 + Math.sin(elapsedTime * 0.8) * 0.03;
        innerMesh.scale.set(breathe, breathe, breathe);

        // Counter-rotations for multi-dimensional depth
        wireframeMesh.rotation.z = elapsedTime * 0.06;
        ring1.rotation.z = elapsedTime * 0.18;
        ring2.rotation.z = -elapsedTime * 0.15;

        // Stardust particle field subtle orbital spin
        particles.rotation.y = elapsedTime * 0.03;
        particles.rotation.x = Math.cos(elapsedTime * 0.02) * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries and materials
      geometry.dispose();
      wireframeMaterial.dispose();
      innerGeo.dispose();
      innerMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    />
  );
};
