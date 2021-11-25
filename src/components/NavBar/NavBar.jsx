import React from "react";
import {IconButton} from '@mui/material'
import Logout from '@mui/icons-material/Logout';
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <h1 className={`navbar-brand ${style.text}`}>Hero App</h1>
        <IconButton> 
            <Logout className={style.logout} />
          </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;
