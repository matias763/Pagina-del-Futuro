'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SpacecraftCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1.3, 0.34, 180, 24);
    const material = new THREE.MeshStandardMaterial({
      color: 0x62ccff,
      emissive: 0x200056,
      metalness: 0.9,
      roughness: 0.2
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.1, 0.03, 16, 120),
      new THREE.MeshBasicMaterial({ color: 0x7b61ff })
    );
    ring.rotation.x = Math.PI / 2.4;
    scene.add(ring);

    const light = new THREE.PointLight(0x8de3ff, 22, 30);
    light.position.set(1, 2, 4);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x3050ff, 0.6));

    let frame = 0;
    const onResize = () => {
      if (!mountRef.current) return;
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);

    const animate = () => {
      frame = requestAnimationFrame(animate);
      mesh.rotation.x += 0.004;
      mesh.rotation.y += 0.006;
      ring.rotation.z += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="h-[360px] w-full md:h-[460px]" />;
}
