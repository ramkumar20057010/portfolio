

function SingleSkill(props){
    const style ={
            width:`${props.percent}%`
        }
    return(
        <div className="singleskill">
            <div className="front">
                <img src={props.img} />
            </div>
            <div className="back">
                <h2>{props.percent}%</h2>
                <div className="percent">
                    <p style={style}></p>
                </div>
            </div>
        </div>
    );
}

export default SingleSkill;