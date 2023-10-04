const { Router } = require('express');
const gameRouter= require("./games-rt")
const genresRouter= require("./genres-rt")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
