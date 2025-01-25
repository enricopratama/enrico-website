"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Page() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current || undefined,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth controls
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 100;

    // Add Lighting
    // 1. Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);

    // 2. Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Strong white light
    directionalLight.position.set(5, 10, 7.5); // Position the light
    directionalLight.castShadow = true; // Enable shadows
    scene.add(directionalLight);

    // 3. Point Light (Optional for localized effects)
    const pointLight = new THREE.PointLight(0xff6347, 1, 50); // Warm light with a range
    pointLight.position.set(10, 20, 10);
    scene.add(pointLight);

    // Add a helper for the directional light (optional for debugging)
    const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
    scene.add(lightHelper);

    // Load .glb Model
    const loader = new GLTFLoader();
    loader.load(
      "/public/testShirtISAUW.glb", // Replace with your .glb file path
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(5, 5, 5); // Adjust the scale of your model
        model.position.set(0, 0, 0); // Set the position of your model
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the .glb file:", error);
      }
    );

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      // Update Controls
      controls.update();

      // Render Scene
      renderer.render(scene, camera);
    }

    animate();

    // Handle Window Resizing
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      // Cleanup listeners when component unmounts
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div>
      <canvas id="bg" ref={canvasRef}></canvas>
    </div>
  );
}
