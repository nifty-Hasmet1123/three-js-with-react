import { RenderTexture, Text, PerspectiveCamera } from "@react-three/drei"; // built in styled components 
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// width, height, depth
// const dimensionArray = [ 2, 2, 2 ];

// Text
const textAttribute = {
    fontSize: "1",
    color: "#555"
};

// PerspectiveCamera
const perspectiveCameraAttributes = {
    position: [0, 0, 5]
};

const Cube = () => {
    // use useRef Hook
    const textRef = useRef();

    useFrame(state => {
        return textRef.current.position.x = Math.sin(state.clock.elapsedTime * 2);
    });

    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach={"map"}>
                    <PerspectiveCamera makeDefault {...perspectiveCameraAttributes} />
                    <color attach="background" args={["pink"]}/>
                    <Text ref={textRef} {...textAttribute}> 
                        Hello World!
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
}

export default Cube;