const {Router}= require("express");
//ACORDATE DE IMPORTAR EL CONTROLLER
const genresRouter= Router();

//GET/genres
genresRouter.get("/genres", async (req, res)=>{
        try {
            const allGenre= await genreController(); 
            res.status(200).json({data:allGenre})
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    });

module.exports=genresRouter;