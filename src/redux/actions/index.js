import axios from 'axios';
import dotenv from 'dotenv';
import types from './types';
dotenv.config();
const URL = `https://superheroapi.com/api.php/${process.env.REACT_APP_ACCESS_TOKEN}`;

export const getHerosByName = (heroName)=>{ 
    return async function(dispatch){ 
        try{
            const {wordSearch} = heroName
            const {data}= await axios.get(`${URL}/search/${wordSearch}`);
            if(data.response !== "success"){
                alert(data.error)
            }
            dispatch({type:types.GET_HEROS_BY_NAME, payload:data});
        }
        catch(error){
            alert(error);
        }
    }
}
export const getHeroDetail=(idHero) =>{
    return async function(dispatch) { 
        try{
            const {data} = await axios.get(`${URL}/${idHero}`)
            dispatch({type:types.GET_HERO_DETAIL, payload:data})
        }catch(error){
            console.log(error);
        }
    }
}
export const clearSearch = ()=> { 
    return {
        type: types.CLEAR_SEARCH
    }
}
export const addHeroToMyTeam = (idHero)=>{ 
    return {
        type:types.ADD_HERO_TO_MY_TEAM, payload:idHero
    }
}

export const deleteHero = (idHero)=> { 
    return{ 
        type: types.DELETE_HERO, payload: idHero
    }
}