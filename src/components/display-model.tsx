import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { FBXLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "@react-three/drei";

function FbxModel({ url }: { url: string }) {
  const fbx = useLoader(FBXLoader, url);
  return <primitive object={fbx} scale={0.005} />;
}

const DisplayModel = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <FbxModel url="/models/Excretory.fbx" /> {/* Path to your FBX file */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default DisplayModel;
