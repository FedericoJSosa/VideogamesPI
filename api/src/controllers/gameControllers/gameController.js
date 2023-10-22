const axios= require("axios");


const gameController= async ()=>{
    const URL= "https://api.rawg.io/api/games?key=c04b4a64ff0440188fe0868ada142f37&page=";
    const request=[];

    for (let i=1 ; i<=5 ; i++){
        request.push(axios.get("https://api.rawg.io/api/games?key=c04b4a64ff0440188fe0868ada142f37&page=" + i));
    }

    
    return Promise.all(request)
    .then((response)=>{ return response.map((obj)=>obj.data.results)})
    .catch(error=>{
        throw new Error("Error al obtener datos de la API externa.")
    });
}


module.exports=gameController; 


