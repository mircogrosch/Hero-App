import types from "../actions/types";
const initialState = { 
    myTeam:[],
    hereosSearch:[],   
} 

const reducer = (state=initialState, action)=>{ 
    switch(action.type){ 
        case types.GET_HEROS_BY_NAME:
            return{
                ...state,hereosSearch:action.payload
            }
        default: return {...state}
    }
}

export default reducer;