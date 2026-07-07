
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import m1 from "./assets/RAMKUMAR-CV.pdf";


function Home() {
    const [skills, setSkills] = useState(null);
    const red = {
        background: "red",
        width: "7px",
        height: "7px",
        boxShadow: "0px 0px 10px red",
        borderRadius: "100%"
    }
    const yellow = {
        background: "yellow",
        width: "7px",
        height: "7px",
        boxShadow: "0px 0px 10px yellow",
        borderRadius: "100%"
    }
    const green = {
        background: "green",
        width: "7px",
        height: "7px",
        boxShadow: "0px 0px 10px green",
        borderRadius: "100%"
    }
    const [user, setUser] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            axios.get("/data/data.json")
                .then((data) => {
                    setUser(data.data.profile);
                    setSkills(data.data.profile.skills);
                    console.log(data.data.profile.skills);
                    console.log(data.data.profile);
                })
                .catch((er) => {
                    console.log(er);
                })
        }, 3000)
    }, []);
    return (
        <section className="home" id="home">
            <div className="me">
                <p><u>Open to opportunities</u></p>
                <h1><i className="ri-code-s-slash-fill"></i>Hi, I am <mark>Ramkumar S</mark></h1>
                <h2>Web Developer</h2>
                <p>I build responsive, functional, and user-centric web applications.
                    Combining a solid foundation in Comp. Sci with hands-on
                    development skills, I bring ideas to life through clean
                    code and thoughtful software design.</p>
                <span style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                    <p className="ri-map-pin-2-fill">Based in Tirunelveli, Tamilnadu</p>
                    <p className="ri-handbag-fill">Available Now</p>
                </span>
                <p className="download"><a download="RAMKUMAR-CV.pdf" href={m1}>Download CV</a></p>
                <div className="follow">
                    <p>Follow me:</p>
                    <a href="https://github.com/ramkumar20057010/" target="_blank" rel="noopener"> <i className="ri-github-line"></i> </a>
                    <a href="https://www.linkedin.com/in/ramkumar7010/" target="_blank" rel="noopener"><i className="ri-linkedin-fill"></i></a>
                </div>
            </div>


            <div className="meimg">
                <ul>
                    <li style={{ display: "flex", gap: "5px" }}>
                        <p style={red} />
                        <p style={yellow} />
                        <p style={green} />
                    </li>
                    <li>developer.json</li>
                </ul>
                {
                    user ? (

                        <div className="black">
                            <span>
                                <mark style={{ color: "lightskyblue" }}>const</mark> developer =
                                <br /> {"{"}<br />
                                <mark className="key">name</mark> :
                                <mark className="value">"{user.name}"</mark>,<br />
                                <mark className="key">role</mark> :
                                <mark className="value">"{user.role}"</mark>,<br />
                                <mark className="key">education</mark> :
                                <mark className="value">"{user.education}"</mark>,<br />
                                <mark className="key">skills</mark> :{"["}
                                {
                                    skills ? skills.map((s) =>
                                        <mark className="value" key={s.sid}>{s.sname} </mark>, <br />, <br />
                                    ) : (
                                        <p className="load" />
                                    )
                                }
                                {"]"}
                                <br /><br />

                                {"}"}
                            </span>
                        </div>
                    ) : (
                        <p className="load"></p>
                    )

                }
            </div>


        </section>
    );
}

export default Home;