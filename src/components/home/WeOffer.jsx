import React,{useState,useEffect} from 'react'
import WeOfferData from './WeOfferData'
import Aos from "aos"

import {Typography}  from '@mui/material'

const WeOffer = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])


    let [offerData,setOfferData]=useState(WeOfferData);


   


    return (
        <>
        <br/><br/>
        <div className="jumbotron weoffer" >
        <center><Typography variant="h2"  >We Offer</Typography></center>
            
        </div>
       

        <section>
            <div className="container"  >
                <div className="row justify-content-center" >
                    {/* <!--Profile Card 5--> */}
                    {
                        offerData.map((offDat)=>{
                            let {image,title,description}=offDat;
                            return (
                                <>
                                {/* data-aos="flip-up" data-aos-once='true' */}
                                <div className="col-md-3 mt-4" data-aos="zoom-in" data-aos-once='true' data-aos-duration="1000">
                                    <div className="card profile-card-5 shadow" >
                                        <div className="card-img-block">
                                            <img className="card-img-top cards1" src={image} alt="Card Image " />
                                        </div>
                                        <div className="card-body pt-0">
                                        <Typography className="card-title" variant="h5"  >{title}</Typography>
                                        <Typography className="scroll" variant="subtitle1" style={{fontSize:"14px" ,   color:" rgba(0, 0, 3, 0.8)"}} >{description} </Typography>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
       <br/>
                </div>
            </div>
        </section>


            
        </>
    )
}

export default WeOffer;
