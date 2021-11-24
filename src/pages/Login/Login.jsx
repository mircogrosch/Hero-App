import React from "react";
import LoginForm from "../../components/Login/LoginForm/LoginForm.jsx";
import style from './Login.module.css'
const Login = () => {
  return (
    <div className={`container-fluid ${style.root}`}>
      <div className={`row align-items-center`}>
        <div className="col-md-4 col-xs-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
