import qrcodepic from "./assets/Office.png"
function Card(){
    return(
        <div className = "card">
            <img className = "card-image"src={qrcodepic} alt = "profile picture"></img>
            <h2 className = "card-tittle">Bro Code</h2>
            <p className="card-text">I learn the React</p>
        </div>
    );
}

export default Card