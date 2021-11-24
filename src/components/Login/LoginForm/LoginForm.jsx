import React from 'react'
import {Formik, Form, Field} from 'formik'
import {validateForm,submitCredentials} from '../../../controllers/Login/index'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from './loginForm.module.css'
import {useHistory} from 'react-router-dom'
const LoginForm = ()=> {
   const  history = useHistory()
    return (
        <div className={style.container}>
            <Formik
             initialValues={{email:'',password:''}}
             validate={(values)=>validateForm(values)}
             onSubmit={(values)=>submitCredentials(values,history)}
            >
                { 
                ({errors})=>(
                        <Form> 
                            <div className={style.containerCenter}> 
                                <AccountCircleIcon className={style.icon} style={{fontSize:"10em"}}/>
                            </div>
                            <div>  
                              <Field type='email' name='email' className={style.fields} placeholder="Email"/>
                              <Field type='password' name='password' className={style.fields} placeholder="Password"/> 
                            </div>
                            <div className={style.containerCenter}>   
                            <button className={style.btnPrimary} type="submit">Login</button>
                            </div>
                              {errors.emptyFields && <p className={style.error}>{errors.emptyFields}</p>}
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}

export default LoginForm
