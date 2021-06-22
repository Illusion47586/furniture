import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Plane,
  useHelper,
} from "@react-three/drei";

import {
  Vector3,
  Euler,
  SpotLightHelper,
  MeshStandardMaterial,
  MeshBasicMaterial,
} from "three";

const ThreeModel = ({ children }) => {
  const light = useRef();
  // useHelper(light, SpotLightHelper, "cyan");
  return (
    <Canvas
      // color="black"
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 50,
        near: 1,
        far: 1000,
        position: [-6, 4, 4],
        // rotateY: Math.PI * 0.25,
        zoom: 1.75,
      }}
    >
      <ambientLight intensity={0.7} />
      <spotLight
        ref={light}
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[-5, 17, 20]}
        castShadow
      />
      <Suspense fallback={null}>
        {/* <group
          castShadow
          dispose={null}
          scale={new Vector3(2, 2, 2)}
          rotation={new Euler(0, 0, 0)}
          position={new Vector3(-0.5, 0, 0.75)}
          animations={[]}
        > */}
        {children}
        {/* </group> */}
        {/* <Environment preset="apartment" /> */}

        <Plane
          receiveShadow
          material={new MeshBasicMaterial({ color: "white" })}
          scale={new Vector3(20, 20, 20)}
          rotation={new Euler(-Math.PI / 2, 0, 0)}
          position={new Vector3(0, -0.002, 0)}
        />
      </Suspense>
      <OrbitControls
        // autoRotate
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
      />
    </Canvas>
  );
};

export default ThreeModel;
