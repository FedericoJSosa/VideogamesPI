import { GET_VID, ADD_VID } from "./actionTypes";
import axios from "axios";

const URL="http://localhost:3001/videogames";

export const getVideogames= ()=>{
    return (dispatch)=>{
        return axios(URL)
        .then((response)=>{
          const data =response.data.data
            if(data){
              const allData= data.slice(0,100);
              dispatch({
                type: GET_VID,
                payload: allData
              })
              }
        })
    }
}


export const addVid= (newGame)=>{
    return {
        type: ADD_VID,
         payload: newGame
    }
}