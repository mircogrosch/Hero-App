import React,{useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar.jsx'
import style from './Home.module.css'
import ContainerResults from '../../components/Home/ContainerResults'
import { useDispatch } from 'react-redux'
import { clearSearch } from '../../redux/actions/index.js'
import { useLocation } from 'react-router-dom'
const  Home = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    useEffect(()=>{ 
        dispatch(clearSearch())
    },[location,dispatch])
    return (
        <div className={`container-fluid ${style.root}`}>
            <NavBar />  
           <ContainerResults />
        </div>
    )
}

export default Home
