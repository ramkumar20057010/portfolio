
import { useState, useEffect } from "react";
import axios from "axios";
import SingleSkill from "./singleskill.jsx";


function Skills() {
    const [skills, setSkills] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            axios.get("/data/data.json")
                .then((data) => {
                    console.log(data.data.skillLevel);
                    setSkills(data.data.skillLevel);
                })
                .catch((er) => {
                    console.log(er.message);
                })
        }, 3000)
    }, []);
    return (
        <section className="secskills" id="skills">
            <center><h1>SKILLS</h1></center>
            <div className="skills">
                {
                    skills ? skills.map((s) => <SingleSkill key={s.sid} name={s.sname}
                        img={s.image} percent={s.percentage} />
                    ) : (
                        <center><p className="load" /></center>
                    )
                }
            </div>
        </section>
    );


}

export default Skills;