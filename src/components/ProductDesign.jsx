import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Car from "./Car";

const ProductDesign = () => {
  return (
    <Canvas>
      <Stage intensity={0.6} environment="city">
        <Car />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ProductDesign;
