import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";



const Register =() =>{
  return (
  <div className="loginapp">
      
    <div className="Login">
    <div className="shadow-lg p-5 mb-5 bg-white rounded">
        <div className="loginpr">
            <h1 className="loginfd">SignUp</h1>
        </div>
        <form>
        
    <div className="form-group mb-2">
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
        
    </div>
	<div className="form-group mb-2">
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Middle Name"/>
        
    </div>
	<div className="form-group mb-2">
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
        
    </div>
	<div className="form-group mb-2">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User ID"/>
        
    </div>
	<div className="form-group mb-2">
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+91"/>
        
    </div>
    <div className="form-group mb-2">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
	<div className="form-group mb-2">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
    </div>
    <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Signup</button>
</form>
    <a>I have have account </a>
    <Link to={"./login"}  >Click Me</Link>
    <div class="social-container">
      <h3>Sign in with</h3>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="google social">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
</div>
    </div>
    </div>
    </div>
    
  )
}
export default Register