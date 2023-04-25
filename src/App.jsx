/* eslint-disable react/prop-types */
import { useControls } from "leva";

import CanvasScreen from "./Canvas";

export default function App() {
  const { count, depth, blur } = useControls({
    count: { value: 100, min: 10, max: 500, step: 10 },
    depth: { value: 80, min: 0, max: 120, step: 1 },
    blur: { value: 11, min: 0, max: 50, step: 0.1 },
  })
  return (
    <CanvasScreen count={ count } depth={ depth } blur={ blur }  />
  );
}
