import React from 'react'
import Freights from './Freights'
import WeOfferServices from './WeOfferServices'
import Contact from './Contact'
import SocialIcons from './SocialIcons'

import {Typography}  from '@mui/material'
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <>
        
        <footer className="page-footer font-small" style={{background: "#f2f2f2" , marginBottom :"0px"}}>

               
            <div className="container text-center text-md-left" >
                <div className="row text-center text-md-left mt-3 pb-3">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <div className="logo">
                            <h2>
                            <center><NavLink exact to="/" className="nav-logo"><img src="images/home/logo.png" alt="Logo" />
                            <Typography variant="h2" style={{fontSize:"50px" , color:"red"}} >Movers.com</Typography></NavLink></center>
                            </h2>
                        </div>
                        {/* <a className="btn btn-danger" style={{marginLeft: "30px"}}>Get A
                            Quote</a> */}
                    </div>
                        
                    <hr className="w-100 clearfix d-md-none"/>
                    <WeOfferServices/>
                    <hr className="w-100 clearfix d-md-none"/>
                    <Freights/>
                    <hr className="w-100 clearfix d-md-none"/>
                    <Contact/>
                </div>
                   <hr/>
                <div className="row d-flex align-items-center">                      
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-left">© 2020 Copyright:<NavLink exact to="/" className="nav-logo"><span style={{fontSize:"17px" , color:"red"}}>Movers.com</span></NavLink>
                            
                        </p>   
                    </div>
                        
                    <SocialIcons/>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;
