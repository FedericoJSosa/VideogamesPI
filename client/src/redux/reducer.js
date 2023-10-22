import { GET_VID, NEW_VID, GET_VID_BY_ID, GET_VID_BY_NAME, CLEAN } from "./actionTypes";

const initialST= {
    videogames: [],
    videogamesId: [],
    newGame: []
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
        
        case GET_VID_BY_NAME:
                return{
                    ...state,
                    
                videogames: payload
                };

        case NEW_VID:
            return {
                ...state,
                newGame: [...state.newGame, payload]
            };
        case CLEAN:
            return{
                ...state,
                videogamesId: []
            }
        default:
            return {...state};
    }
}

export default reducer;
