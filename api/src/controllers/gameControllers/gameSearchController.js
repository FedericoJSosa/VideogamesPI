const axios= require("axios");
const { Op } = require("sequelize");
const {Videogame} = require("../../db"); 

 const gameSearchController= async (name)=>{
     try {
        let dataBaseGame=[];
          if (await Videogame.count() > 0 ){
              dataBaseGame= await Videogame.findAll( {
                 where: {
                     name: {[Op.iLike]: `%${name}%`}
                 }, limit: 15
             });
         }; 
     
         const response= await axios.get(`https://api.rawg.io/api/games?search=${name}&key=c04b4a64ff0440188fe0868ada142f37`);
         const apiGame= response.data.results.slice(0 , 15);
     
         const unitGame=[...dataBaseGame, ...apiGame];
         const result= unitGame.slice(0, 15);
         
         if (result.length === 0){
            throw new Error ("No hay juegos que coincidan con la busqueda.")
         }

         return result;
         
    } catch (error) {
        throw new Error(error.message);
    }
}


module.exports=gameSearchController; 



