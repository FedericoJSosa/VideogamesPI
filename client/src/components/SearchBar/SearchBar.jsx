import React from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName} from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";



    
    const SearchBar = () => {
      const [searchGame, setSearchGame] = React.useState("");
      const dispatch = useDispatch();
    
      const handleInputChange = (event) => {
        setSearchGame(event.target.value);
      };
    
      const handleSearch = () => {
        if (searchGame.trim() !== "") {
            dispatch(getVideogamesByName(searchGame));
        }
      };
    

      const handleHomeClick = () => {
    window.location.href="/home";
    };

return (
    <div className={style.backgroundbutton}>
            <button onClick={handleHomeClick} className={style.button}>Home</button> 
            <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchGame}
            onChange={handleInputChange}
            />
            <button onClick={handleSearch} className={style.button}>Buscar</button>
            <Link to="/home/form"><button className={style.button}>Crear</button></Link>
        </div>
      );
    };
    
    export default SearchBar;
     









