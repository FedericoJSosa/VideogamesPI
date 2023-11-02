const axios = require("axios");
const { Videogame } = require("../../db");
const { Genre } = require("../../db");

const gameSearchByIdController = (id) => {
    return axios
        .get(`https://api.rawg.io/api/games/${id}?key=c04b4a64ff0440188fe0868ada142f37`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
            return Videogame.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Genre,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            }).then((databaseGame) => {
                if (databaseGame) {
                    return databaseGame;
                }
                throw new Error("Juego no encontrado.");
            });
        })
        .catch((error) => {
            throw new Error("Hubo un problema encontrando el juego.");
        });
};

module.exports = gameSearchByIdController;
