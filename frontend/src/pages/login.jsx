import React from "react";
import "../App.css"
import "./Register" 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";




const login =() =>{
  return (
  <div className="loginapp">
      
    <div className="Login">
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <div className="loginpr">
            <h1 className="loginfd">Login</h1>
        </div>
        <form>
        <div class="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"checked/>
            <label className="form-check-label" for="flexRadioDefault1">User</label>
        </div>
        <div class="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" for="flexRadioDefault2">Manager</label>
</div>
    <div className="form-group">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User ID"/>
        
    </div>
    <div className="form-group">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
</form>
    <a>Don't have account </a>
    <Link to={"./Register"}  >Click Me</Link>
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
export default login