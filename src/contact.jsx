
import { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
    const [details, setDetails] = useState(null);
    const [form,setForm] = useState({
        name:"",email:"",message:""
    });
    useEffect(() => {
        setTimeout(() => {
            axios.get("/data/data.json")
                .then((data) => {
                    console.log(data.data.contact);
                    setDetails(data.data.contact);
                })
                .catch((er) => {
                    console.log(er.message);
                })
        }, 5000)
    }, []);
    const handleForm =(ev) =>{
        console.log(ev.target.value);
        setForm((prev) =>({
            ...prev,
            [ev.target.name]:ev.target.value}));
    }
    return (
        <section className="contact" id="contact">
            <center><h1>Get In Touch</h1></center>
            <div className="cont">
                {
                    details?(
                    <div className="contdetails">
                        <h3>{details.head}</h3>
                        <p>{details.about}</p>
                        <h4><i className="ri-mail-fill"></i> {details.email}</h4>
                        <h4><i className="ri-phone-fill"></i> {details.phone}</h4>
                        <h4><i className="ri-map-pin-2-fill"></i> {details.location}</h4>
                        <ul className="contlink">
                            <li><a href={details.git} target="_blank" rel="noopener"><i className="ri-github-line"></i></a></li>
                            <li><a href={details.linkedin} target="_blank" rel="noopener"><i className="ri-linkedin-fill"></i></a></li>
                        </ul>
                    </div>
                    ):(
                        <center><p className="load"></p></center>
                    )
                }
                <div className="contform">
                    <form>
                        <center><h3>CONTACT ME</h3></center>
                        <label>YOUR NAME</label><br /><br />
                        <input type="text" name="name" onChange={ handleForm } value={form.name} type="text" required /><br /><br />
                        <label>YOUR EMAIL</label><br /><br />
                        <input type="text" name="email" onChange={ handleForm } value={form.email} type="email" required /><br /><br />
                        <label>YOUR MESSAGE</label><br /><br />
                        <textarea name="message" onChange={ handleForm } value={form.message} placeholder="Message" cols="35" rows="8"><br /><br />
                        </textarea><br /><br />
                        <center><button>Send</button></center>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default Contact;