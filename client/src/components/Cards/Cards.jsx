import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import Card from "../Card/Card";

const Cards = ()=>{
    const dispatch= useDispatch();
    const videogames= useSelector(state=>state.videogames);

    useEffect(()=>{
        dispatch(getVideogames())
    },[]);

    return(
        <div>
            
            {videogames.map((vigame)=>{
            return(
                <div>
                    <Card
                    key={vigame.id}
                    id={vigame.id}
                    img={vigame.background_image}
                    name={vigame.name}
                    genres={vigame.genres.map(genres => genres.name).join(", ")}
                    platforms={vigame.platforms.map(platform => platform.platform.name).join(", ")}
                    description={vigame.description}
                    releaseDate={vigame.releaseDate}
                    rating={vigame.rating}
                    />
                </div>
                )})
            }
        </div>
    )
}



export default Cards;