import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideogames } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const allGenres = useSelector((state) => state.allGenres);


  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectGenre, setGenre] = React.useState("all");
  const [selectOrigin, setOrigin] = React.useState("all");
  const [orderType, setOrderType] = React.useState("name"); 
  const [orderDirection, setOrderDirection] = React.useState("asc"); 

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  const indexOfLastCard = currentPage * 15;
  const indexOfFirstCard = indexOfLastCard - 15;

  const sortGames = (games) => {
    return games.sort((a, b) => {
      if (orderType === "name") {
        return orderDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (orderType === "rating") {
        return orderDirection === "asc" ? a.rating - b.rating : b.rating - a.rating;
      }
    });
  };

  const filteredVideogames = useMemo(() => {
  
    let filteredGames = [...videogames];

    if (selectGenre !== "all") {
      const selectedGenreObject = allGenres.data.find((genre) => genre.name === selectGenre);
      if (selectedGenreObject) {
        filteredGames = filteredGames.filter((game) =>
          game.genres.some((genre) => genre.name === selectedGenreObject.name)
        );
      }
    }

    if (selectOrigin !== "all") {
      if (selectOrigin === "api") {
        filteredGames = filteredGames.filter((game) => game.slug);
      } else {
        filteredGames = filteredGames.filter((game) => !game.slug);
      }
    }

    return filteredGames;
  }, [videogames, selectGenre, selectOrigin, allGenres]);

  const sortedVideogames = useMemo(() => {
    return sortGames(filteredVideogames);
  }, [filteredVideogames, orderType, orderDirection]);

  const currentCards = sortedVideogames.slice(indexOfFirstCard, indexOfLastCard);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  if (!currentCards || currentCards.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.background}>
      <div className={style.backgroundfilters} >
        <div>
          <select className={style.button} value={selectGenre} onChange={(event) => setGenre(event.target.value)}>
            <option value="all">Género</option>
            {allGenres.data.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
          <select className={style.button} value={selectOrigin} onChange={(event) => setOrigin(event.target.value)}>
            <option value="all">Origen</option>
            <option value="api">API</option>
            <option value="db">DB</option>
          </select>
        </div>


        <div>
          <select className={style.button} value={orderType} onChange={(event) => setOrderType(event.target.value)}>
            <option value="name">Nombre (A-Z)</option>
            <option value="rating">Rating</option>
          </select>
          <select className={style.button} value={orderDirection} onChange={(event) => setOrderDirection(event.target.value)}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
      </div>


      <div className={style.container}>
        {currentCards.map((vigame) => (
          <div key={vigame.id}>
            <Card
              id={vigame.id}
              img={vigame.background_image}
              name={vigame.name}
              genres={Array.isArray(vigame.genres) ? vigame.genres.map((genre) => genre.name).join(", ") : vigame.genres}            
              platforms={Array.isArray(vigame.platforms) ? vigame.platforms.map((platforms) => platforms.name).join(", ") : vigame.platforms}
              description={vigame.description}
              releaseDate={vigame.releaseDate}
              rating={vigame.rating}
            />
          </div>
        ))}
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
  );
};

export default Cards;
