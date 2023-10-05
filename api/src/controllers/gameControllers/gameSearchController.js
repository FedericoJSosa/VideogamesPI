const axios= require("axios");
const { Op } = require("sequelize");
const {Videogame} = require("/Users/Federico/Desktop/PI-Videogames-main/api/src/models/Videogame"); 

 const gameSearchController= async (name)=>{
     try {
         const nameUniv= name.toLowerCase();
         if (Videogame.count() !== 0){
               dataBaseGame= await Videogame.findAll({
                 where: {
                     name: {[Op.iLike]: `%${nameUniv}`}
                 }, limit: 15
             });
         };
     
         const response= await axios.get(`https://api.rawg.io/api/games?key=c04b4a64ff0440188fe0868ada142f37&search=${name}`);
         const apiGame= response.data.results.slice(0 , 15);
     
         const unitGame=[...dataBaseGame, ...apiGame];
         const result= unitGame.slice(0, 15);
         
         if (result.length === 0){
            throw new Error ("No hay juegos que coincidan con la busqueda.")
         }

         return result;
         
    } catch (error) {
        throw new Error({error: error.message})
    }
}


module.exports=gameSearchController; 



