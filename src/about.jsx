
import m1 from "./assets/prof1.jpeg";

function About() {
    return (
        <section className="secabout" id="about">
            <h2>ABOUT ME</h2>
            <div className="about">
                <center>
                    <div className="ab1">
                        <img src={m1} />
                    </div>
                </center>
                <div className="ab2">

                    <p>Hi! I'm Ramkumar, a passionate and driven Web Developer based in Tirunelveli, Tamil Nadu.<br /><br />
                        I specialize in bridging the gap between clean frontend user experiences and powerful backend architecture.
                        <br /><br />
                         With a solid foundation in computer science, I focus on building responsive, secure, and user-centric web applications from the ground up.
                        </p>
                    <ul>
                        <li>React JS, JavaScript, and Responsive UI Components for creating interactive, modern frontend architectures.</li>
                        <li>Flask and MySQL to engineer robust backend systems, secure user authentication, and dynamic database solutions.</li>
                        <li>Building and Deploying real-world applications—ranging from full-stack e-commerce platforms to custom social media clones—to solve practical problems.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default About;