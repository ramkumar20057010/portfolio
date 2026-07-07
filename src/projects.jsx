
import { useState, useEffect } from "react";
import axios from "axios";
import SingleProject from "./singleproject.jsx";

function Projects() {
    const [projectImage, setProjectImage] = useState(null);
    const [project, setProject] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            axios.get("/data/data.json")
                .then((data) => {
                    setProjectImage(data.data.projectimage);
                    console.log(data.data.projectimage);
                    setProject(data.data.projects);
                    console.log(data.data.projects);
                })
                .catch((er) => {
                    console.log(er.message);
                })
        }, 3000)
    }, []);
    return (
        <section className="projects" id="projects">
            <h1>PROJECTS</h1>
            <div className="projectlist">
                {
                    projectImage ? (
                        <div className="wrapper">
                            <div className="slider">
                                <div className="slide" style={{ backgroundImage: `url('${projectImage.img1}')` }}>
                                    <center><a href="#mobile">VIEW</a></center>
                                </div>
                                <div className="slide" style={{ backgroundImage: `url('${projectImage.img2}')` }}>
                                    <center><a href="#tour">VIEW</a></center>
                                </div>

                                <div className="slide" style={{ backgroundImage: `url('${projectImage.img3}')` }}>
                                    <center><a href="#bank">VIEW</a></center>
                                </div>

                                <div className="slide" style={{ backgroundImage: `url('${projectImage.img4}')` }}>
                                    <center><a href="#insta">VIEW</a></center>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="load"></p>
                    )
                }
                </div>
                <div className="prjdescr">
                    {
                        project ? ( project.map((p) => <SingleProject sname={p.sname} name={p.pname} img={p.image}
                         descr={p.description} git={p.git} linkedin={p.linkedin} key={p.id}  />)
                            
                        ):(
                                <p className = "load" />
                    )
                    }
                </div>
        </section>
    );
}

export default Projects;