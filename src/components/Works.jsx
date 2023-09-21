import "./css/style.css";

const data = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media"
]

const content = data.map(item => {
    return (
        <li key={item} className="work-item" data-text={item}>
            {item}
        </li>
    )
})

export default function Works() {
    return (
        <div id="section" className="works">
            <div className="works-container">
                <div id="left-works">
                    <ul id="works-items">
                        {content}
                    </ul>
                </div>
                <div id="right-works">

                </div>
            </div>
            
        </div>
    )
}