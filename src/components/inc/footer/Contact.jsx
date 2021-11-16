import React from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PrintIcon from '@mui/icons-material/Print';

import {Typography}  from '@mui/material'

const Contact = () => {
    return (
        <>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
           
            <Typography className="card-title mb-3" variant="h4"  >Contact</Typography>
            <p>
               <HomeWorkIcon style={{fontSize:"20px"}} /> NTU , FSD Pakistan</p>
            <p>
                <AttachEmailIcon style={{fontSize:"20px"}} /> info@movers.com</p>
            <p>
                <PhoneInTalkIcon style={{fontSize:"20px"}} /> +92 322 6466869</p>
            <p>
                <PrintIcon style={{fontSize:"20px"}} /> 052 6466869</p>
        </div>
            
        </>
    )
}

export default Contact;