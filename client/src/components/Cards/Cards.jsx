import { useEffect } from "react";
import Card from "../Card/Card";

const Cards = ({videogames, onSearch})=>{
    useEffect(()=>{
        onSearch();
    }, [onSearch]);
    return(
        <div>{videogames.map((vigame)=>{
            return(
                <div>
                    <Card
                    key={videogames.id}
                    id={videogames.id}
                    img={videogames.img}
                    name={videogames.name}
                    genre={videogames.genre}
                    platforms={videogames.platforms}
                    description={videogames.description}
                    releseDate={videogames.releseDate}
                    rating={videogames.rating}
                    />
                </div>
                )})
            }
        </div>
    )
}



export default Cards;