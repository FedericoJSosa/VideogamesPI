const {Router}= require("express");
const {genreController}=require("../controllers/genreControllers/genreController")
//ACORDATE DE IMPORTAR EL CONTROLLER
const genresRouter= Router();

//GET/genres
genresRouter.get("/", async (req, res)=>{
        try {
            const allGenre= await genreController(); 
            res.status(200).json({data:allGenre})
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    });

module.exports=genresRouter;