import Who from "./components/Who";
import Hero from "./components/Hero";
import Contacts from "./components/Contacts";
// import Works from "./components/Works";
import "./App.css";


export default function App() {
    return (
        <div className="container">
            <Hero />
            <Who />
            <Contacts />
            {/* <Works /> */}
            {/* <Test /> */}
        </div>
    )
}