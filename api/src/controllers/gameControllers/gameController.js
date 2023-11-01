const axios = require("axios");
const { Videogame } = require("../../db");
const { PASSWORD } = process.env;

const gameController = async () => {
  try {
    const request = await Videogame.findAll();
    let requestCombined = [];

    if (request.length > 0) {
      requestCombined = request;
    }

    const apiRequests = [];
    const URL= `https://api.rawg.io/api/games?key=${PASSWORD}&page=`;


    for (let i = 1; i <= 5; i++) {
      apiRequests.push(axios.get(`${URL}+${i}`));
    }

    const apiResponses = await Promise.all(apiRequests);
    const apiResults = apiResponses.map((response) => response.data.results);

     requestCombined = [...requestCombined, ...apiResults];

    return apiResults;
  } catch (error) {
    throw new Error("Error al obtener datos.");
  }
};

module.exports = gameController;


