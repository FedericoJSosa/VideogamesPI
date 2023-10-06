const {Videogame} = require("/Users/Federico/Desktop/PI-Videogames-main/api/src/models/Videogame"); 

const newGameController= async(gameInfo)=>{
const newGame= await Videogame.create(gameInfo);
return newGame;
}


module.exports=newGameController;