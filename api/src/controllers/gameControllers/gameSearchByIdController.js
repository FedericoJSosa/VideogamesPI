const axios= require("axios");
const { Op } = require("sequelize");
const {Videogame}= require("/Users/Federico/Desktop/PI-Videogames-main/api/src/models/Videogame");
const {Genre}= require("/Users/Federico/Desktop/PI-Videogames-main/api/src/models/Genres");

const gameSearchByIdController= async(id)=>{
    try {
        let dataBaseGame=[];

        if (await Videogame.count() !== 0){
            dataBaseGame= await Videogame.find({
                where: {
                    id: {[Op.like]: id}
                },
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
        return result

    } catch (error) {
        throw new Error("Hubo un problema encontrando el juego.")
    }

}

module.exports=gameSearchByIdController;