import { GET_VID, NEW_VID, GET_VID_BY_ID, GET_VID_BY_NAME, CLEAN, ERROR_OCCURRED } from "./actionTypes";
import axios from "axios";

const URL="http://localhost:3001/videogames";

export const getVideogames= ()=>{
    return (dispatch)=>{
        return axios(URL)
        .then((response)=>{
          const data= response.data.data.flat();
            if(data){
              dispatch({
                type: GET_VID,
                payload: data
              })
              }
        })
        .catch(() => {
          dispatch({
            type: ERROR_OCCURRED,
          });
        });
       
    }
};


export const getVideogamesById= (id)=>{
  return (dispatch)=>{
      return axios(`${URL}/${id}`)
      .then((response)=>{
        const data= response.data.data
          if(data){
            dispatch({
              type: GET_VID_BY_ID,
              payload: data
            })
            }
      })
      .catch(() => {
        dispatch({
          type: ERROR_OCCURRED,
        });
      });
  
  }
};

export const getVideogamesByName=(name)=>{
  return (dispatch)=>{
    return axios(`${URL}/search?searchGameByName=${name}`)
    .then((response)=>{
      const data= response.data.data
        if(data){
          dispatch({
            type: GET_VID_BY_NAME,
            payload: data
          })
          }
    })
    .catch(() => {
      dispatch({
        type: ERROR_OCCURRED,
      });
    });
   
}
};

export const addVid= (payload)=>{
  return (dispatch)=>{
    return axios.post(URL, payload)
    .then((response)=>{
      dispatch({
        type: NEW_VID,
        payload: response.data
      })
    })
    .catch(() => {
      dispatch({
        type: ERROR_OCCURRED,
      });
    });
  }
};

export const clean= ()=>{
  return {type: CLEAN}
};