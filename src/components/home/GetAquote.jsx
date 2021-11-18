import React,{useEffect} from 'react'
import {Typography}  from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CommentIcon from '@mui/icons-material/Comment';

import Aos from "aos"

const GetAquote = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])


    return (
        <>
 <div className="container" id="getQuote" style={{backgroundColor:"#f2f2f2" , marginTop:"40px" , marginBottom:"40px"  }}>

        <div className="row"  >
            <div className="col-md-12 text-center" style={{marginTop:"10px"}}>
            <Typography variant="h2">Get a Quote</Typography>
            </div>

            <div className="col-12">
            <Typography variant="h5">Your Details!</Typography>
                
            </div>
            <div className="col-md-6">
                <div data-aos="fade-up" data-aos-once='true' >
                <input name="fname" type="text" className="form-control form-inline" placeholder="First Name *" required />
                </div>
            </div>
            <div className="col-md-6" >
                <div data-aos="fade-up" data-aos-once='true' >
                <input name="lname" type="text" className="form-control form-inline" placeholder="Last Name *" required />
                </div>
            </div>

        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="input-group mb-2 mr-sm-2" data-aos="fade-up" data-aos-once='true' >
                    <div className="input-group-prepend">
                        <div className="input-group-text"> <EmailIcon/></div>
                    </div>
                    <input name="email" type="email" className="form-control" placeholder="E-mail *" />
                </div>
            </div>

            <div className="col-md-6">
                <div className="input-group mb-2 mr-sm-2" data-aos="fade-up" data-aos-once='true' >
                    <div className="input-group-prepend">
                        <div className="input-group-text"> <PhoneAndroidIcon/></div>
                    </div>
                    <input name="cnumber" type="number" className="form-control" placeholder="Phone Number *" required />
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div data-aos="fade-up" data-aos-once='true'>
                    <label>Departure</label><br/>
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><LocationCityIcon/></div>
                        </div>
                        <select name="dep" className="form-control " required>

                            <option value="">Select City...</option>
                            <option>Sialkot</option>
                            <option>Sambrial</option>
                            <option>Gujranwala</option>
                            <option>Wazirabad</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div data-aos="fade-up" data-aos-once='true'>
                    <label>Destination</label><br/>
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text"> <LocationCityIcon/></div>
                        </div>
                        <select name="des" className="form-control" required>
                            <option value="">Select City...</option>
                            <option>Sialkot</option>
                            <option>Sambrial</option>
                            <option>Gujranwala</option>
                            <option>Wazirabad</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div data-aos="fade-up" data-aos-once='true'>
                    <label>About Your Removals</label>
                    <input type="date" name="moveDate" id="datepicker" className="form-control calendar hasDatepicker"
                        placeholder="Scheduled Date" required />
                </div>
            </div>
        </div>

        <br/>

        <div data-aos="fade-up" data-aos-once='true'>
        <Typography>Is this a Professional Transfer?</Typography>
            <input type="radio" name="palla" value="Yes" required /> Yes
            <input type="radio" name="palla" value="No" required /> No
        </div>
        <div data-aos="fade-up" data-aos-once='true'>
            <Typography>Will you need storage facilities?</Typography>
            <input type="radio" name="palla1" value="Yes" required /> Yes
            <input type="radio" name="palla1" value="No" required /> No
        </div>
        <div data-aos="fade-up" data-aos-once='true'>
            <Typography>Will you move with your vehicle ? </Typography>
            <input type="radio" name="palla2" value="Yes" required /> Yes
            <input type="radio" name="palla2" value="No" required /> No
        </div><br/>

        <div className="form-group" >
            <div className="input-group mb-2 mr-sm-2" data-aos="fade-up" data-aos-once='true'>
                <div className="input-group-prepend">
                    <div className="input-group-text"> <CommentIcon/></div>
                </div>
                <textarea name="cmnts" placeholder="Comments" id="cmnt" className="form-control" rows="1"></textarea>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6" style={{marginBottom:"20px" , marginTop:"20px"}} data-aos="fade-up" data-aos-once='true'>
                <center><button className="btn btn-sm btn-outline-danger">Send Quote</button></center>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-6" style={{marginBottom:"20px" , marginTop:"20px"}} data-aos="fade-up" data-aos-once='true'>
                <center><button className='btn btn-sm btn-outline-danger'>Edit Quote</button></center>
            </div>
        </div>

    


</div>

            
        </>
    )
}

export default GetAquote;