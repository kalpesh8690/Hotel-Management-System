import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import jquery from 'jquery';
import { FaUserCircle } from "react-icons/fa";

// for changing navbar  color
jquery(window).scroll(function() {
jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 1);
})

const Navbar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent py-1 fixed-top">
            <div className="container-fluid ">
                <div className="brname">
                <span className="brname">OM Hotel</span>
                </div>
                <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <FaAlignRight className="nav-icon" /></span>
                </a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link_1" activeClassName="active_class" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link_1" activeClassName="active_class" exact to="/rooms">Rooms</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link_1" activeClassName="active_class" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link_1" activeClassName="active_class" exact to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link_1" activeClassName="active_class" exact to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link_1" activeClassName="active_class" exact to="/Register">Register</NavLink>
                        </li>
                      
                    </ul>
                    <div className="btn-group dropleft">
                    <div class="dropdown show">
                        <h2 className="navico" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FaUserCircle/></h2>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <Link class="dropdown-item" to={"../Editprofile"}  >Edit Profile</Link>
                                <a class="dropdown-item" href="../pages/">Booked Rooms</a>
                                <Link class="dropdown-item" to={"../logout"}  >Logout</Link>
  </div>
</div>
                    </div>
                </div>
            </div>
        </nav>
    </>
    );
}
export default Navbar;