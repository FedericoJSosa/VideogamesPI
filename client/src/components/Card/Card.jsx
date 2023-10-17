import { Link } from "react-router-dom";

const Card = ({id, img, name, genres, platforms, description, releaseDate, rating})=>{
    return(
        <div> 
            <Link to={`/detail/${id}`}><img src={img} alt="Not found"/></Link>
            <h2>Name: {name}</h2>
            <p>Genres: {genres}</p>  
            <p>Platforms: {platforms}</p>
            <p>Description: {description}</p> no lo tira
            <p>Release Date: {releaseDate}</p>  no lo tira
            <p>Rating: {rating}</p>
        </div>
    )
}


export default Card;