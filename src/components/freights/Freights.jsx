import React,{useState ,useEffect} from 'react'
import FreightData from './FreightsData'
import Aos from 'aos'

import {Typography}  from '@mui/material';

const Freights = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])



    let[frData,setFrData]=useState(FreightData);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);

    return (
        <>
        <br/>
        <div className="container">
            <center><Typography variant="h2">Our Freight Services</Typography></center>
        </div>

        <div className="jumbotron" data-aos="zoom-out"  style={{backgroundColor:"#f2f2f2" , paddingTop:"50px" , paddingBottom:"40px"}}>
            <center><Typography variant="h5" style={{textTransform:"capitalize"}} >WE PROVIDE INTERNATIONAL FREIGHT & LOGISTICS SERVICE WORLDWIDE</Typography></center>
            <center><a  type="button" className="btn btn-outline-danger" style={{marginTop:"10px"}}>GET A  QUOTE</a></center>
        </div>
        <br/><br/>
        <div className="container">
            <div className="row">
            {
                frData.map((dataFr)=>{
                    let{imageFr,titleFr,descriptionFr}=dataFr;
                    return(
                        <>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"  data-aos="zoom-in" data-aos-once='true'>
                            <div className="card " style={{overflow: "hidden"}}  id="air">
                                <img src={imageFr} alt="Freight Image" className="cards1" />
                                <div className="card-body">
                                    <Typography variant="h5">{titleFr}</Typography>
                                    <Typography variant="subtitle1" style={{fontSize:"14px" ,   color:" rgba(0, 0, 3, 0.8)"}}>{descriptionFr}</Typography>
                                <center><button type="button" className="btn btn-outline-danger  btncd">See Detail...</button></center>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }

            </div>
        </div>
        <br/>
            
        </>
    )
}

export default Freights;
