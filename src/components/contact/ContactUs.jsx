import React,{useEffect} from 'react'
import {Typography}  from '@mui/material';

import Aos from 'aos'

const ContactUs = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])


    return (
        <>
        <br/>
    <div className="container" >
        <div className="row" >
            <div className="col-md-5 mx-auto">
                <div className="myform form " id="cntct" style={{margin:"10px" , padding:"10px"}}>
                    <div className="col-md-12 text-center">
                        <Typography variant="h2">Contact Us</Typography>
                    </div>
                    {/* <br/> */}

                    <form>
                        <div className="form-group">
                            <div data-aos="fade-up"  data-aos-once='true'>
                                <label for="name" > Enter your Name:</label> 
                                <input type="text" name="fname" className="form-control mb-2 " placeholder="Full Name" id="name" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div data-aos="fade-up"  data-aos-once='true'>
                                <label for="email">Enter Your Contact Number:</label>
                                <div className="input-group mb-2 mr-sm-2">
                                        <input type="number" name="cnmbr"  className="form-control" id="email" aria-describedby="emailHelp"
                                        placeholder="03226466869" required/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group" >
                            <div data-aos="fade-up"  data-aos-once='true'>
                                <label for="msg" >Message:</label>
                                <textarea name="mmsg" placeholder="Enter your message here!" id="msg" className="form-control" rows="2" required></textarea>
                            </div>
                        </div>
                        {/* <br/> */}
                        <div className="col-md-12 text-center" style={{paddingTop:"10px"}} >
                        <div data-aos="fade-up"  data-aos-once='true'>
                            <button className=" btn btn-sm btn-outline-danger ">SEND</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>   
    <br/>
        </>
    )
}

export default ContactUs;