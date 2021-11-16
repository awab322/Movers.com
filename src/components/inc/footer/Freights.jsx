import React from 'react'

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import {Typography}  from '@mui/material'

const Freights = () => {
    return (
        <>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <Typography className="card-title mb-3" variant="h4"  >Freights</Typography>
            <p>
                <FlightTakeoffIcon style={{fontSize:"20px"}}/> Air Freight
            </p>
            <p>
                <DirectionsBoatIcon style={{fontSize:"20px"}}/> Ocean Freight
            </p>
            <p>
               <LocalShippingIcon style={{fontSize:"20px"}} /> Road Freight
            </p>
        </div>

        </>
    )
}

export default Freights;