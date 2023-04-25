/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";

import Banana from "./Banana";

export default function CanvasScreen({ count, depth, blur }) {
  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
      <color attach="background" args={["#F3D779"]} />
      <Suspense fallback={null}>
        <spotLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="sunset" />
        {Array.from({ length: count }, (_, i) => (
          <Banana key={i} z={-(i / count) * depth - 15} />
        ))}
        <EffectComposer>
          <DepthOfField
            position={[0, 0, depth / 2]}
            focalLength={0.5}
            bokehScale={blur}
            height={700}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
