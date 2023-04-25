/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function Banana({ z }) {
    const ref = useRef();
    const { viewport, camera } = useThree();
    const { height, width } = viewport.getCurrentViewport(camera, [0, 0, z]);
  
    const { nodes, materials } = useGLTF("/banana-transformed.glb");
  
    const [data] = useState({
      x: THREE.MathUtils.randFloatSpread(2),
      y: THREE.MathUtils.randFloatSpread(height),
      rX: Math.random() * Math.PI,
      rY: Math.random() * Math.PI,
      rZ: Math.random() * Math.PI,
    });
  
    useFrame(() => {
      ref.current.rotation.set(
        (data.rX += 0.001),
        (data.rY += 0.001),
        (data.rZ += 0.0001)
      );
      ref.current.position.set(data.x * width, (data.y += 0.025), z);
      if (data.y > height) data.y = -height;
    });
  
    return (
      <mesh
        ref={ref}
        geometry={nodes.Object_2.geometry}
        material={materials.Banana_High}
        material-emissive="orange"
      />
    );
  }