const axios= require("axios");
const {Videogame}= require("../../db");
const {Genre}= require("../../db");

const gameSearchByIdController= async(id)=>{
    try {
        
           let dataBaseGame=[];
         
         if (await Videogame.count() > 0){
            dataBaseGame= await Videogame.findOne({
                where: {
                    id: id
                } ,
                include:{
                    model: Genre,
                    attributes: ["name"],
                    through:{
                        attributes: []
                    }
                } 
            });
            return dataBaseGame
        };    

        const result= await axios.get(`https://api.rawg.io/api/games/${id}?key=c04b4a64ff0440188fe0868ada142f37`);
        return result.data

    } catch (error) {
        throw new Error("Hubo un problema encontrando el juego.")
    }

}

module.exports=gameSearchByIdController;