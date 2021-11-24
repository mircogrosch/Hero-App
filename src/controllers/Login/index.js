import axios from 'axios';
/**
 * Validate login fields
 * @param {*} obj object with fields name
 */
export const  validateForm = (values)=>{
    let errors = {}
    if(!(values.email && values.password)){ 
         errors.emptyFields = "There can be no empty fields, enter email and password"
    }
    return errors;
} 
/**
 * Submit credentials and save a user token
 * @param {*} obj object with credentials user(email,password)
 */
export const submitCredentials= async (credentials,history)=>{ 
    try{ 
       const {data} =  await axios.post("http://challenge-react.alkemy.org",credentials); 
        window.localStorage.setItem('user',data.token);
        history.push("/home");
    }catch(error){
        alert("Ingrese creedenciales validas")
    }
}