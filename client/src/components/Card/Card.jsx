import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({id, img, name, genres})=>{
    return(
        <div className={style.cardContainer}> 
            <Link to={`/home/detail/${id}`}><img src={img} alt="Not found"/></Link>
            <h2> {name}</h2>
            <p>Genres: {genres}</p>  
        </div>
    )
}


export default Card;