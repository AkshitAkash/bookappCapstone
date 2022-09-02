import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  
  // <img src = {logoImg} alt = "site logo" />
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">MyBookAPP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Favourites</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Authors</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Recommendations</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="Registration" >Registration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Login">Login</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar