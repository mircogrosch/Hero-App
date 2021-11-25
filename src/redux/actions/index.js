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