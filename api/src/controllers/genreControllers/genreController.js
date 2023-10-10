const axios= require("axios");
const {Genre}= require("../../db");

const genreController= async()=>{    
    if (await Genre.count() === 0){
        const response= await axios.get("https://api.rawg.io/api/genres?key=c04b4a64ff0440188fe0868ada142f37");
        const respData= response.data.results;
        await Genre.bulkCreate(respData);
        const allGenre= await Genre.findAll();
        return allGenre;
    }
    if (await Genre.count() !== 0){
        const allGenre= await Genre.findAll();
        return allGenre;
    }
}


module.exports=genreController;
