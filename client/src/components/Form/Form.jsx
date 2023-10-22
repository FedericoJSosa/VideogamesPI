import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import {addVid} from "../../redux/actions"

const Form = ({add})=>{
    
    const initLocalState= 
    {
        name:"",
        image:"",
        description:"",
        platforms:"",
        releaseDate:"",
        rating:"",
        genres:"",
    };

    const [newGame, setNewGame ] = React.useState(initLocalState);
    const [guardado, setGuardado] = React.useState(false);

    const handleOnChange = (event)=>{
        
        let prop= event.target.name;
        let value= event.target.value;
        setNewGame({...newGame, [prop]:value});
    }

    const handleOnSubmit=(event)=>{
        event.preventDefault();
        add(newGame);
        setGuardado(true);
        setNewGame(initLocalState);
    }


    return(
        <div>

            <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor="name">Name:  </label>
                    <input type="text" name="name" value={newGame.name} onChange={handleOnChange}/> 
                </div>
                <div>
                    <label htmlFor="image">Image:  </label>
                    <input type="text" name="image" value={newGame.image}onChange={handleOnChange}/> 
                </div>
                <div>
                    <label htmlFor="description">Description:  </label>
                    <input type="text" name="description" value={newGame.description}onChange={handleOnChange}/> 
                </div>
                <div>
                    <label htmlFor="platforms">Platforms:  </label>
                    <input type="text" name="platforms" value={newGame.platforms}onChange={handleOnChange}/> 
                </div>
                <div>
                    <label htmlFor="releasedate">ReleaseDate:  </label>
                    <input type="text" name="releaseDate" value={newGame.releaseDate}onChange={handleOnChange}/> 
                </div>
                <div>
                    <label htmlFor="rating">Rating:  </label>
                    <input type="text" name="rating" value={newGame.rating}onChange={handleOnChange}/> 
                </div>
                <div>
                    <label htmlFor="genres">Genre/s:  </label>
                    <input type="text" name= "genres" value={newGame.genres}onChange={handleOnChange}/> 
                </div>
                <br></br><br></br>
                <button type="submit">Guardar</button>{guardado && <p>Personaje guardado correctamente!!</p>}
                <br></br><br></br>
            </form>
            <Link to="/home"><button>Home</button></Link> 
        </div>
    )
}

    const mapDispatchToProps= (dispatch)=>{
        return{
            add: videogame=> dispatch(addVid(videogame))
        }
    }

export default connect(null, mapDispatchToProps) (Form);

