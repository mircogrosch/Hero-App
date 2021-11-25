import React from 'react'
import NavBar from '../../components/NavBar/NavBar.jsx'
import style from './Home.module.css'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
const  Home = () => {
    return (
        <div className={`container-fluid ${style.root}`}>
            <NavBar />  
            <SearchBar />
        </div>
    )
}

export default Home
