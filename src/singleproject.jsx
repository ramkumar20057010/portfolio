


function SingleProject(props) {
    return (
        <div className="singleproject" id={props.sname}>
            <div className="sp">
                <center><img src={props.img} /></center>
                <h3>{props.name}</h3>
                <p>{props.descr}</p>
                <div className="prjlink">
                    <a href={props.git} target="_blank" rel="noopener"><i className="ri-github-line"></i></a>
                    <a href={props.linkedin} target="_blank" rel="noopener"><i className="ri-linkedin-fill"></i></a>
                </div>
            </div>
        </div>

    );
}

export default SingleProject;
