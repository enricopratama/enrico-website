"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Page() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true; // Enable shadow maps
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Scene and Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(4, 5, 11);
    camera.lookAt(0, 0, 0);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      side: THREE.DoubleSide,
    });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.receiveShadow = true; // Enable shadow receiving
    scene.add(groundMesh);

    // SpotLight
    const spotLight = new THREE.SpotLight(0xffffff, 5, 100, Math.PI / 4, 0.1);
    spotLight.position.set(0, 10, 0); // Position the light
    spotLight.castShadow = true; // Enable shadow casting
    spotLight.target.position.set(0, 0, 0); // Point at the origin
    scene.add(spotLight);
    scene.add(spotLight.target);

    // SpotLight Helper
    const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(spotLightHelper); // Debugging helper for light

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Soft overall lighting
    scene.add(ambientLight);

    // Resize Handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
