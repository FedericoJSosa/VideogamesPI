import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./Cards.module.css"

const Cards = ()=>{
    const dispatch= useDispatch();
    const videogames= useSelector(state=>state.videogames);

    const [currentPage, setCurrentPage] = React.useState(1);

    console.log(videogames);
    const indexOfLastCard = currentPage * 15;
    const indexOfFirstCard = indexOfLastCard - 15;
    const currentCards = videogames.slice(indexOfFirstCard, indexOfLastCard);

    useEffect(()=>{
        dispatch(getVideogames())
    },[]);

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
      };

      const handlePrev = () => {
        setCurrentPage(currentPage - 1);
      };

    if (!currentCards || currentCards.length === 0) {
        return <div>Loading...</div>
    }
    console.log(currentCards);
    return(
        <div>
            <div className={style.container}>
            {currentCards.map((vigame)=>{
            return(
                <div key={vigame.id}>
                    <Card
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
            <div className={style.backgroundbutton}>
                <button onClick={handlePrev} disabled={currentPage === 1} className={style.button}>
                    Anterior
                </button>
                <button onClick={handleNext} disabled={indexOfLastCard >= videogames.length} className={style.button}>
                    Siguiente
                </button>
            </div>
       
        </div>
    )
}



export default Cards;

