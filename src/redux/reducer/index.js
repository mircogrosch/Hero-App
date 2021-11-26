import types from "../actions/types";
import { addHero,deleteHero } from "./controllers";
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
        case types.ADD_HERO_TO_MY_TEAM:
            
            return{
                ...state, myTeam: addHero(state.hereosSearch,state.myTeam,action.payload)
            }
        case types.CLEAR_SEARCH:{
            return{
                ...state, hereosSearch:[]
            }
        }
        case types.DELETE_HERO:{
            return{
                ...state, myTeam:deleteHero(state.myTeam,action.payload)
            }
        }

        default: return {...state}
    }
}

export default reducer;