import React from "react";

import { Center } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ChildModel = ({ path }) => {
  const gltf = useLoader(GLTFLoader, path);

  return (
    <Center castShadow receiveShadow position={[0.5, 0.5, 1]}>
      <primitive
        castShadow
        receiveShadow
        onClick={() => console.log(gltf)}
        object={gltf.scene}
      />
      {/* <Preload all /> */}
    </Center>
  );
};

export default ChildModel;
