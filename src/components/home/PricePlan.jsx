import React,{useState , useEffect} from 'react'
import PricePlanData from "./PricePlanData";

import Aos from "aos"


import {Typography , Container , Grid , Paper , Button}  from '@mui/material';
import Box from '@mui/material/Box';


const PricePlan = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    let[priceData,setPriceData]=useState(PricePlanData);


    return (
        <>
        <br/><br/>
        <div className="row">
            <div >

            </div>
        </div>
        <div className="container">
        <Box textAlign="center">
            <Typography variant="h2"  >Our Price Plan</Typography>
            <Typography className="priceDes" variant="subtitle1"  align="center" color="red"   >The price that you’ll need to pay for
             residential relocation dependend upon the items you want to move, and the location
              where you want to move.This is our basic price plan.</Typography>
        </Box>
        </div>
        <br/>

        <Container > 
            <Grid container spacing="10">
                    {
                        priceData.map((ddt,index)=>{
                            let{name,price}=ddt;
                            return(
                                <  >
                                <Grid item lg="3" md="6" sm="6" xs="12" className="priceBox" data-aos="flip-left"  data-aos-once='true'>
                                    <Paper  elevation={5} className="priceBoxM">
                                        <Box p={3}  >
                                            <Typography key={index}  variant="h5" align="center" >{name}</Typography>
                                            <Typography key={index}  variant="h6" align="center" color="red">{price}</Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                                </>
                            )
                        })
                    }
                
            </Grid>
        </Container>

        <br/>




        </>
    )
}

export default PricePlan;