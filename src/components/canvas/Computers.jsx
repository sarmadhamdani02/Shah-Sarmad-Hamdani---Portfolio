import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Rotation state
  const [rotationX, setRotationX] = useState(0);

  // Update rotation
  useEffect(() => {
    const updateRotation = () => {
      setRotationX((rotationX) => rotationX + 0.01); // Adjust rotation speed as needed
    };

    const frameId = requestAnimationFrame(updateRotation);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <mesh position={[-1, -1.2, -1.5]} scale={isMobile ? 0.9 : 1.2} rotation={[rotationX, 0, 0]}>
      <hemisphereLight intensity={1} groundColor="black" color={"#915eff"} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
        decay={0}
        color={"#915eff"}
      />
      <pointLight intensity={5} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="demand" shadows dpr={[1, 2]} camera={{ position: [3, 5, 5], fov: 30 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI / 2.1} minAzimuthAngle={-Math.PI / 18} maxAzimuthAngle={Math.PI / 3} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
