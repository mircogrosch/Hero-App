import React from 'react'
import {Formik,Field,Form} from 'formik'
import {validateFormSearch} from '../../controllers/SearchBar/index'
import { getHerosByName } from '../../redux/actions'
import {useDispatch} from 'react-redux';
import Search from '@mui/icons-material/Search';
import style from './SearchBar.module.css'
const SearchBar = () => {
    const dispatch = useDispatch()
    return (
        <Formik
        initialValues={{wordSearch:''}}
        validate={(values)=>validateFormSearch(values)}
        onSubmit={(values)=>dispatch(getHerosByName(values))}
        > 
        {   
            ({errors})=>(
                <Form className={style.form}>
               <button className={style.button}> <Search /></button>
               <Field type="text" name='wordSearch' placeholder="Search Hero" className={style.searchField}/>
                {errors.wordSearch && <p className="error">{errors.wordSearch}</p>}
                </Form>
            )
        
        }
       

        </Formik>
    )
}

export default SearchBar
