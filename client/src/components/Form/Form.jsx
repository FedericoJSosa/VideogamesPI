import React from "react";
import { connect } from "react-redux";
import {addVid} from "../../redux/actions"
import style from "./Form.module.css"




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
    const [errors, setErrors] = React.useState({});

    const handleOnChange = (event)=>{
        let prop= event.target.name;
        let value= event.target.value;
        let error= "";
        
        if (prop === "name" && value.length >20){
            error= "El nombre no puede tener mas de 20 caracteres"
        }
        if (prop === "image" && value.length >150){
            error= "La imagen no puede tener mas de 150 caracteres"
        }
        if (prop === "description" && value.length >200){
            error= "La descripcion no puede tener mas de 200 caracteres"
        }
        if (prop === "platforms" && value.length >40){
            error= "Las plataformas no pueden tener mas de 40 caracteres"
        }
        if (prop === "releasedate" &&  !/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(value)){
            error= "La fecha debe ser valida"
        }
        if (prop === "rating" && isNaN(parseInt(value))){     
            error= "Debe ser un numero valido"
        }
        if (prop === "genres" && value.length >20){
            error= "Los generos no pueden tener mas de 20 caracteres"
        }
       
        setErrors({ ...errors, [prop]: error });
        setNewGame({...newGame, [prop]:value});
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const { name, description, platforms, image, releaseDate, rating } = newGame;
    
        
        if (!name || !description || !platforms || !image || !releaseDate || !rating) {
           alert("Todos los campos son obligatorios");
        } else {
            add(newGame);
            setGuardado(true);
            setNewGame(initLocalState);
        }
    };
    


    return(
        <div className={style.container}>

            <form onSubmit={handleOnSubmit} className={style.containerform}>
                <div>
                    <label htmlFor="name">Name:  </label>
                    <input type="text" name="name" value={newGame.name} onChange={handleOnChange} />
                    {errors.name && <div className={style.error}>{errors.name}</div>}
                </div>
                <div>
                    <label htmlFor="image">Image:  </label>
                    <input type="text" name="image" value={newGame.image}onChange={handleOnChange} />
                    {errors.image && <div className={style.error}>{errors.image}</div>}
                </div>
                <div>
                    <label htmlFor="description">Description:  </label>
                    <input type="text" name="description" value={newGame.description}onChange={handleOnChange} /> 
                    {errors.description && <div className={style.error}>{errors.description}</div>}
                </div>
                <div>
                    <label htmlFor="platforms">Platforms:  </label>
                    <input type="text" name="platforms" value={newGame.platforms}onChange={handleOnChange} /> 
                    {errors.platforms && <div className={style.error}>{errors.platforms}</div>}
                </div>
                <div>
                    <label htmlFor="releasedate">ReleaseDate:  </label>
                    <input type="text" name="releaseDate" value={newGame.releaseDate}onChange={handleOnChange} />
                    {errors.releaseDate && <div className={style.error}>{errors.releaseDate}</div>} 
                </div>
                <div>
                    <label htmlFor="rating">Rating:  </label>
                    <input type="text" name="rating" value={newGame.rating}onChange={handleOnChange} />
                    {errors.rating && <div className={style.error}>{errors.rating}</div>} 
                </div>
                <div>
                    <label htmlFor="genres">Genre/s:  </label>
                    <input type="text" name= "genres" value={newGame.genres}onChange={handleOnChange} />
                    {errors.genres && <div className={style.error}>{errors.genres}</div>} 
                </div>
                <br></br><br></br>
                <button type="submit" className={style.button}>Guardar</button>{guardado && <p>Personaje guardado correctamente!!</p>}
                <br></br><br></br>
            </form>
        </div>
    )
}

    const mapDispatchToProps= (dispatch)=>{
        return{
            add: videogame=> dispatch(addVid(videogame))   
        }
    }

export default connect(null, mapDispatchToProps) (Form);

