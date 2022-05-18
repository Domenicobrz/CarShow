import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CarShow from "./CarShow";
import "./style.css";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
};

export default App;
