import { Link } from "react-router-dom";

const LandingPage = ()=>{
    return(
        <div> Bienvenido a la LandingPage
        <br></br><br></br><br></br><br></br><br></br>
        <Link to="/home"><button>Home</button></Link> 
        </div>
    )
}


export default LandingPage;