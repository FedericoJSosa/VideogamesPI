const {Videogame} = require("../../db"); 

const newGameController= async(gameInfo)=>{

const newGame= await Videogame.create(gameInfo);
return newGame;
}


module.exports=newGameController;