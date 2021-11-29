
export const validateFormSearch = (values)=>{ 
    let errors={};
    if(!(values.wordSearch)){
        errors.wordSearch = "Please,enter a hero name"
    }

    return errors;
}