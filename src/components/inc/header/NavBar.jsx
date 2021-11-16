import React, { useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import ClearIcon from '@mui/icons-material/Clear';

import {animateScroll as scroll} from 'react-scroll';
import {Link} from 'react-scroll';



function NavBar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

 
  return (
    <>
    {/* <ScrollTop {...props}> */}
    {/* <Toolbar id="back-to-top-anchor" /> */}
      <nav className="navbar shadow" >
        <div className="nav-container">
            <NavLink exact to="/" className="nav-logo" onClick={()=> scroll.scrollToTop()}><img src="images/home/logo.png" alt="Logo"  /></NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-links"  onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact  to="/freights" activeClassName="active" className="nav-links" onClick={handleClick} >
                Freights
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact  to="/about"  activeClassName="active"  className="nav-links"  onClick={handleClick} >
              About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" activeClassName="active" className="nav-links"  onClick={handleClick} >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/getQuote" activeClassName="active" className="nav-links shadow gqNavBtn"  onClick={handleClick} >
                Get a Quote
              </NavLink>
            </li>
            {/* <li className="nav-item shadow gqNavBtn" style={{paddingLeft:"3px" ,paddingRight:"3px" , borderRadius:"0px 10 0px 10"}}>
              <Link to="getQuote" smooth={true} duration={300} > Get A Quote</Link>
            </li> */}
        </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <ClearIcon style={{color:"black"}} /> : <FormatLineSpacingIcon style={{color:"black"}} />}
          </div>
        </div>
      </nav>


    </>
  );
}














export default NavBar;
