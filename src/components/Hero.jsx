import "./css/style.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import NavBar from "./NavBar";

export default function Hero() {
    return (
        <div id="section" className="hero">
            {/* <NavBar /> */}
            <div className="hero-container">
                <div id="left-hero">
                    <h1 id="title">My React Application!</h1>
                    <div id="whatwedo">
                        <img id="line" src="./assets/line.png" alt="line" />
                        <h2 id="subtitle">Sculpting Tomorrow's Connection Today!</h2>
                    </div>
                    <p id="description">
                        Hello I am <strong>Maximo Ignacio</strong>, <br />
                        Welcome to my Three.js + React.js! project, 
                        where innovation fuels progress. 
                        I am dedicated to creating cutting-edge solutions that enhance lives and businesses. 
                        Explore my portfolio and let me help you in shaping the future.
                    </p>
                    {/* <button id="learn-more" style={{cursor: "pointer"}}>Learn More</button> */}
                </div>
                <div id="right-hero">
                    <Canvas>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]}/>
                        <Sphere args={[1, 100, 200]} scale={2.4}>
                            <MeshDistortMaterial 
                                color="#3d1c56"
                                attach="material"
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <img id="moon" src="./assets/moon.png" alt="moon" />
                </div>
            </div>
        </div>
    );
}