import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";
import { Vector3, Euler } from "three";

const state = proxy({
  current: null,
  items: {
    fabric: "#4595FF",
  },
});

const Sofa = () => {
  const ref = useRef();
  const snap = useSnapshot(state);

  const { nodes, materials } = useGLTF("/models/GlamVelvetSofa.glb");

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   // ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
  //   // ref.current.rotation.x = Math.cos(t / 4) / 8;
  //   // ref.current.rotation.y = Math.sin(t / 4) / 8;
  //   // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  // });

  return (
    <group castShadow>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.GlamVelvetSofa_fabric.geometry}
        material={materials.GlamVelvetSofa_fabric_navy}
        material-color={snap.items.fabric}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.GlamVelvetSofa_feet.geometry}
        material={materials.GlamVelvetSofa_feet}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.GlamVelvetSofa_legs.geometry}
        material={materials.GlamVelvetSofa_legs}
      />
    </group>
  );
};

export default Sofa;
