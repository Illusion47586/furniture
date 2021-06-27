import React, { Suspense } from "react";

import {
  Box,
  Center,
  Html,
  OrbitControls,
  Environment,
  Plane,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Color, Euler, MeshBasicMaterial, Vector3 } from "three";

import ChildModel from "./ChildModel";
import Loader from "./Loader";

const ThreeModel = ({ path }) => {
  return (
    <Canvas
      // color="black"
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 50,
        near: 1,
        far: 1000,
        // position: [-6, 4, 4],
        // rotateY: Math.PI * 0.25,
        zoom: focus ? 1.75 : 2,
      }}
    >
      <Suspense
        fallback={
          <Html div>
            <Loader />
          </Html>
        }
      >
        <Center>
          <ambientLight intensity={0.7} />
          <spotLight
            color={new Color("white")}
            intensity={1}
            angle={0.1}
            penumbra={2}
            position={[-5, 17, 20]}
            castShadow
          />
          <spotLight
            color={new Color("white")}
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[5, 17, -20]}
            castShadow
          />
          {/* <group
          castShadow
          dispose={null}
          scale={new Vector3(2, 2, 2)}
          rotation={new Euler(0, 0, 0)}
          position={new Vector3(-0.5, 0, 0.75)}
          animations={[]}
        > */}

          {/* </group> */}
          <ChildModel path={path} />

          <Environment preset="apartment" />
          <OrbitControls
            autoRotate
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
          />
        </Center>
      </Suspense>
    </Canvas>
  );
};

export default ThreeModel;
