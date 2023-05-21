import React from "react";
import "./Login.css";
import googleImg from "../images/google3.png";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="loginPage" style={{ background: "black" }}>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form>
        <h3>Login Here</h3>
        <img src={googleImg} alt="image"  className="login-img"/>
        <button className="login-btn" onClick={() => loginWithRedirect()}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
