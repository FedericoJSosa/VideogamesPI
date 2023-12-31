const { Router } = require('express');
const gameRouter= require("./games-rt")
const genresRouter= require("./genres-rt")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use("/genres", genresRouter);
router.use("/videogames", gameRouter);
router.use("*", (req, res)=>{
    res.status(404).json({error:"Not found chinguenguencha 2"})
})



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
