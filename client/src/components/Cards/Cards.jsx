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
  const [orderType, setOrderType] = React.useState("name"); // "name" o "rating"
  const [orderDirection, setOrderDirection] = React.useState("asc"); // "asc" o "desc"

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
      return 0;
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
    <div>
      {/* Filtros */}
      <div>
        <select value={selectGenre} onChange={(e) => setGenre(e.target.value)}>
          <option value="all">Género</option>
          {allGenres.data.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
        <select value={selectOrigin} onChange={(e) => setOrigin(e.target.value)}>
          <option value="all">Todos</option>
          <option value="api">API</option>
          <option value="db">DB</option>
        </select>
      </div>

      {/* Select de Ordenamiento */}
      <div>
        <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
          <option value="name">Nombre (A-Z)</option>
          <option value="rating">Rating</option>
        </select>
        <select value={orderDirection} onChange={(e) => setOrderDirection(e.target.value)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>

      {/* Tarjetas de Videojuegos */}
      <div className={style.container}>
        {currentCards.map((vigame) => (
          <div key={vigame.id}>
            <Card
              id={vigame.id}
              img={vigame.background_image}
              name={vigame.name}
              genres={vigame.genres.map((genre) => genre.name).join(", ")}
              platforms={vigame.platforms.map((platform) => platform.platform.name).join(", ")}
              description={vigame.description}
              releaseDate={vigame.releaseDate}
              rating={vigame.rating}
            />
          </div>
        ))}
      </div>

      {/* Botones de Paginación */}
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
