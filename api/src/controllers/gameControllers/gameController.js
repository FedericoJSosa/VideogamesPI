const axios= require("axios");


const gameController= async ()=>{
    return await axios.get("https://api.rawg.io/api/games?key=c04b4a64ff0440188fe0868ada142f37")
    .then((response)=>{ return response.data})
    .catch(error=>{
        throw new Error("Error al obtener datos de la API externa.")
    });
}


module.exports=gameController; 


