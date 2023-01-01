import React from 'react';
import logo from "../img/logo.png";
import './NavBar.css';
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
      <div className="navbar">
          <img src={logo} alt="" />
          <ul className="nav-menu">
              <Link to="/signup">
                  <li>SignUp</li>
              </Link>
              <Link to="/signin">
                  <li>SignIn</li>
              </Link>
              <Link to="/profile">
                  <li>Profile</li>
              </Link>
              <Link to="/createPost">
                  <li>Create Post</li>
              </Link>

           
          </ul>
   </div>
  )
}
