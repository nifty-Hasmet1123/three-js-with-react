import "./css/style.css";
// import Map from "./Map";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contacts() {
    // useRef hook usage
    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            // used .env variables prefix with REACT_APP_<Variable Name>
            process.env.REACT_APP_SERVICE_KEY, 
            process.env.REACT_APP_TEMPLATE_KEY, 
            ref.current, 
            process.env.REACT_APP_PUBLIC_KEY )
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
    }
    
    return (
        <div id="section" className="contacts">
            <div className="contacts-container">
                <div id="left-contacts">
                    <form ref={ref} onSubmit={handleSubmit} id="form-contacts">
                        <h1 id="title-contacts">Contact Me</h1>
                        <input name="name" type="text" className="input-contacts" placeholder="Your Name"/>
                        <input name="email" type="text" className="input-contacts" placeholder="Your Email"/>
                        
                        <label style={{textAlign: "center"}}>Your Message will be directly send on my email :)</label>
                        <textarea
                        name="message" 
                        id="textarea" 
                        rows="10" 
                        placeholder="Write Your Message Here."
                        >
                        </textarea>
                        {/* add email here using email.js */}
                        <button id="button-contacts" type="submit">Send</button>
                        {success && "Your message has been sent. We'll get back to you soon :)"}
                    </form>
                </div>
                <div id="right-contacts">
                    {/* <Map /> */}
                </div>
            </div>
        </div>
    );
}       