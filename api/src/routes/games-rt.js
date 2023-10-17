const {Router}= require("express");
const gameController= require("../controllers/gameControllers/gameController");
const gameSearchController= require("../controllers/gameControllers/gameSearchController");
const gameSearchByIdController= require("../controllers/gameControllers/gameSearchByIdController");
const newGameController= require("../controllers/gameControllers/newGameController");


//ACORDATE DE IMPORTAR LOS CONTROLLERS
const gameRouter= Router();

//GET/videojuegos
gameRouter.get("/", async(req, res)=>{
    try {
        const allGames= await gameController(); 
        res.status(200).json({data:allGames})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

//GET/videojuegos/name?=...
gameRouter.get("/search", async(req, res)=>{
    try {
        const {searchGameByName}= req.query
        const foundGame= await gameSearchController(searchGameByName); 
         res.status(200).json({data:foundGame}) 
    } catch (error) {
        res.status(500).json({error: error.message}) 
    }
});

//GET/videojuegos/:ID videojuegos
gameRouter.get("/:id", async(req, res)=>{
    try {
        const {id}= req.params;
      /*   return id */
        const foundGameById= await gameSearchByIdController(id); 
        res.status(200).json({data:foundGameById})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

//POST/videojuegos
gameRouter.post("/", async(req, res)=>{
    try {
        const {name, img, platforms, description, releaseDate, rating, genres}= req.body;
        const gameData={name, img, platforms, description, releaseDate, rating, genres};
        const newGame= await newGameController(gameData);
        res.status(200).json({message:"Game added succesfuly", newGame}); 
    } catch (error) {
        res.status(400).json({error: error.message})
    }

});


module.exports=gameRouter;