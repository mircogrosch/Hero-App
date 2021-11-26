import React from 'react'
import NavBar from '../../components/NavBar/NavBar.jsx'
import style from './Home.module.css'
import ContainerResults from '../../components/Home/ContainerResults'
const  Home = () => {
    return (
        <div className={`container-fluid ${style.root}`}>
            <NavBar />  
           <ContainerResults />
        </div>
    )
}

export default Home
