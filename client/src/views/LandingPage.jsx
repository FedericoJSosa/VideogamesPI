import { Link } from "react-router-dom";
import "./LandingStyle.css";

const LandingPage = ()=>{
    return(
        <div className="landing-page"> Bienvenido a la LandingPage
        <br></br><br></br><br></br><br></br><br></br>
        <Link to="/home"><button>Home</button></Link> 
        </div>
    )
}


export default LandingPage;