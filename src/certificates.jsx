
import { useState, useEffect } from "react";
import axios from "axios";

function Certificates() {
    const [certificate, setCertificate] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            axios.get("/data/data.json")
                .then((data) => {
                    setCertificate(data.data.certificates);
                    console.log(data.data.certificates);
                })
                .catch((er) => {
                    console.log(er.message);
                })
        }, 5000)
    }, [])
    return (
        <section className="certificates" id="certificates">
            <center><h2>CERTIFICATES</h2></center>
            <div className="cert">
                {
                    certificate ? certificate.map((c) => (
                        <div className="singlecertificate" key={c.id}>
                            <img src={c.image} />
                            <div className="certdetails">
                                <h3><a href={c.link} target="_blank" rel="noopener">{c.cname}<i className="ri-links-line"></i></a> </h3>
                                <p>{c.description}</p>
                                
                            </div>
                        </div>
                    )
                    ) : (
                        <p className="load" />
                    )
                }
            </div>
        </section>
    );

}

export default Certificates;