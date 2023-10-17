import { GET_VID, ADD_VID } from "./actionTypes";

const initialST= {
    videogames: []
};


const reducer= (state= initialST, {type, payload}) =>{
    switch(type){
        case GET_VID:
            return {
                ...state,
                videogames: payload
            };
        case ADD_VID:
            return {
                ...state,
                videogames: [...state.videogames, payload]
            };
        default:
            return {...state};
    }
}

export default reducer;
