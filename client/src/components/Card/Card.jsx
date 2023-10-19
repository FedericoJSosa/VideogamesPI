import { Link } from "react-router-dom";

const Card = ({id, img, name, genres})=>{
    return(
        <div> 
            <Link to={`/home/detail/${id}`}><img src={img} alt="Not found"/></Link>
            <h2>Name: {name}</h2>
            <p>Genres: {genres}</p>  
        </div>
    )
}


export default Card;