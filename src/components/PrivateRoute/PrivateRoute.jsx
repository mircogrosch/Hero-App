import React from "react";
import { Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ path, Component }) => {
    
  return (
   <Route exact path={path} render={()=>{
       return window.localStorage.getItem("user") ? <Component/> : <Redirect to="/"/>
   }} />
   )
}
export default PrivateRoute;