// "use client";
// import { useEffect } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import SceneInit from "../../lib/SceneInit.js";

// function App() {
//   useEffect(() => {
//     const test = new SceneInit("myThreeJsCanvas");
//     test.initialize();
//     test.animate();

//     // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
//     // const boxMaterial = new THREE.MeshNormalMaterial();
//     // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

//     // test.scene.add(boxMesh);

//     let loadedModel: any;
//     const glftLoader = new GLTFLoader();
//     glftLoader.load("./testShirtISAUW.glb", (gltfScene) => {
//       loadedModel = gltfScene;
//       // console.log(loadedModel);

//       // gltfScene.scene.rotation.y = Math.PI / 8;
//       // gltfScene.scene.position.y = 3;
//       gltfScene.scene.scale.set(5, 5, 5);
//       if (test.scene) {
//         test.scene.add(gltfScene.scene);
//       }
//     });

//     const animate = () => {
//       if (loadedModel) {
//         // loadedModel.scene.rotation.x += 0.01;
//         // loadedModel.scene.rotation.y += 0.01;
//         // loadedModel.scene.rotation.z += 0.01;
//       }
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => {
//       if (test.scene) {
//         test.scene.clear();
//       }
//       if (test.renderer) {
//         test.renderer.dispose();
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <canvas id="myThreeJsCanvas" />
//     </div>
//   );
// }

// export default App;
