import "./css/style.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"; // built in styled components
import Cube from "./Cube";

export default function Who() {
    return (
        <div id="section" className="who">
            <div className="who-container">
                <div id="left-who">
                    <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
                        <OrbitControls enableZoom={false} autoRotate/>
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]}/>
                        <Cube />
                    </Canvas>
                </div>
                <div id="right-who">
                    <h1 id="title" className="hero-title">A 3d Library using Three JS Framework</h1>
                    <div id="whatwedo">
                        <img id="line" src="./assets/line.png" alt="line" />
                        <h2 id="subtitle">Passionate Programmer</h2>
                    </div>
                    <p id="description">
                        I am passionate programmer with both knowledge on front-end and back-end 
                        development. Making me a good candidate for a Full-Stack Developer Role.
                    </p>
                    <a href="https://github.com/nifty-Hasmet1123/three-js-react" target="_blank" rel="noopener noreferrer">
                        <button id="see-our-works" style={{cursor: "pointer"}}>See our works</button>
                    </a>
                </div>
            </div>
        </div>
    );
}