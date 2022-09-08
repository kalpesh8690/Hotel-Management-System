import React from "react";
import "../App.css"
import { FaUserCircle } from "react-icons/fa";
import { MdCreate } from "react-icons/md";


const EditProfile =() =>{
  return (
  <div className="loginapp">
      
    <div className="Login">
    <div className="shadow-lg p-5 mb-5 bg-white rounded">
        <h1 className="pico"><FaUserCircle/></h1>
        <div className="loginpr">
            <h1 className="loginfd">Edit Profile</h1>
        </div>
        <form>
            <div>
                <label>First Name:</label><MdCreate/>
            </div>
            <div>
                <label>Middle Name:</label><MdCreate/>
            </div>
            <div>
                <label>Last Name:</label><MdCreate/>
            </div>
            <div>
                <label>Email:</label><MdCreate/>
            </div>
            <div>
                <label>Mobile No:</label><MdCreate/>
            </div>
            <div>
                <label>Address:</label><MdCreate/>
            </div>
        
    
    
    <button type="submit" className="btn btn-primary">Save</button>
</form>
    
    </div>
    </div>
    </div>
    
  )
}
export default EditProfile