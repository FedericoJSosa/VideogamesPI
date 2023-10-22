import React from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName} from "../../redux/actions";



    
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
    <div>
            <button onClick={handleHomeClick}>Home</button> 
            <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchGame}
            onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
      );
    };
    
    export default SearchBar;
     









