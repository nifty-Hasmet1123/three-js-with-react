import "./css/style.css";

export default function NavBar() {
    return (
        <div id="nav-section">
            <div id="container">
                <div id="links">
                    <img  id="logo" src="./assets/pinterest_profile_image.png" alt="lama" />
                    <ul className="list-items">
                        <li className="item">Home</li>
                        <li className="item">Studio</li>
                        <li className="item">Works</li>
                        <li className="item">Contact</li>
                    </ul>
                </div>
                <div id="icons">
                    <img id="search" src="./assets/search.png" alt="search" />
                    <button id="hire-now">Hire Now</button>
                </div>
            </div>
        </div>
    )
}