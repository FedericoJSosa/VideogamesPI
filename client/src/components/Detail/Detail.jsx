import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getVideogamesById } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const videogamesId = useSelector((state) => state.videogamesId)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogamesById(id))
    }, [id]);
    
    const videogamesIdAux=videogamesId

    if (videogamesId.name) {
        console.log("hola1")
        console.log("hola", videogamesIdAux)
        console.log("hola2")
        return(
            < div >
            
                <img src={videogamesId.background_image} alt="Not found" />
                <h2>Name: {videogamesId.name}</h2>
                <p>Genres: {videogamesId.genres.map(genres => genres.name).join(", ")}</p>
                <p>Platforms: {videogamesId.platforms.map(platforms => platforms.platform.name)}</p>
                <p>Description: {videogamesId.description_raw}</p>
                <p>Release Date: {videogamesId.released}</p>
                <p>Rating: {videogamesId.rating}</p>
                <br></br><br></br><br></br><br></br>
                <Link to= "/home"><button>Atras</button></Link> 
            </div >
        )
    } else {
    return <p> CARGANDO </p>
    }
}


export default Detail;

/* .map(genres => genres.name).join(", ")
.map(platforms => platforms.platform.name) */