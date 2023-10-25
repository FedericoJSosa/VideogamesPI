const axios= require("axios");
const {Videogame}=require("../../db");
const {PASSWORD}=process.env;

const gameController= async ()=>{

    const request=[];
    const URL= `https://api.rawg.io/api/games?key=${PASSWORD}&page=`;

    if (await Videogame.count() > 0 ){
        request= await Videogame.findAll();
   };   


    for (let i=1 ; i<=5 ; i++){
        request.push(axios.get(`${URL}` + i));
    }

    
    return Promise.all(request)
    .then((response)=>{ return response.map((obj)=>obj.data.results)})
    .catch(error=>{
        throw new Error("Error al obtener datos de la API externa.")
    });
}


module.exports=gameController; 


