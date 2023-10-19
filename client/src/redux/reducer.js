import { GET_VID, ADD_VID, GET_VID_BY_ID } from "./actionTypes";

const initialST= {
    videogames: [],
    videogamesId: []
};


const reducer= (state= initialST, {type, payload}) =>{
    switch(type){
        case GET_VID:
            return {
                ...state,
                videogames: payload
            };
        case GET_VID_BY_ID:
                return {
                    ...state,
                videogamesId: payload
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
