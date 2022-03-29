import React from "react";
import { Redirect } from "react-router-dom";

const LoginMockup = ({ isLogged, onLogin }) => {
  if (isLogged) {
    return <Redirect to='/secret'/>
  }
  
  return (
    <div>
      <h4>You are not authorized</h4>
      <button className="btn btn-primary" onClick={onLogin}>Authorize me</button>
    </div>
  )
};

export default LoginMockup;