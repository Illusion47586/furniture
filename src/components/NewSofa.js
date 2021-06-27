import React, { Suspense } from "react";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const NewSofa = () => {
  const gltf = useLoader(GLTFLoader, "/models/sofa.glb");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};

export default NewSofa;
