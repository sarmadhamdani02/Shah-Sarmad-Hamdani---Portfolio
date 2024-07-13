import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <mesh scale={[1.2, 1.2, 1.2]}>
      <primitive object={earth.scene} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 900,
        position: [0, 5, 0], // Top-down view
        rotation: [-Math.PI / 0, 0, 0] // Rotate camera to look down
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={5} // Adjust auto rotation speed as needed
          enableZoom={false}
          minPolarAngle={Math.PI / 2} // Minimum polar angle (45 degrees)
          maxPolarAngle={Math.PI / 2} // Maximum polar angle (90 degrees, looking straight down)
        />
        <Earth />

        <ambientLight intensity={1} color={"#915eff"}/>
       <pointLight intensity={8} color={"#317fff"}/>

        
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
