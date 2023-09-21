import "./css/style.css";
import Cube from "./Cube";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"; // built in styled components

// orbit controls attributes
const orBitControlAttributes = {
    enableZoom: false,
    // autoRotate: true
};

// mesh standardMaterial properties
// const orbitMeshMaterial = {
//     color: "red"
// };

const Test = () => {
    return (
        <div id="test">
            <Canvas>
                <OrbitControls {...orBitControlAttributes} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]}/>
                {/* import cube component */}
                <Cube />
            </Canvas>
        </div>
    );
}

export default Test;