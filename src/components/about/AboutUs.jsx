import React,{useEffect} from 'react'
import Aos from 'aos'


import {Typography}  from '@mui/material';

const AboutUs = () => {


    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])


    return (
        <>
        <br/>
            <div className="container pg" style={{backgroundColor: "#f2f2f2"}}>
                <br/>
                <center><Typography variant="h2">WE CARE FOR YOUR WORK</Typography></center>
              
                <br/>
                <div data-aos="fade-up"  data-aos-once='true'>
                <Typography >
                    Movers.com in Dubai have the honor to be premier movers in Dubai, removal and storage specialist UAE.
                    We offer packing, movers and packers in Dubai, UAE. Our Company provides to customers with equaled moving
                    services business and houses through domestic or International Movers relocation.
                </Typography>
                <br/>
                <Typography > We provide Quality Services with the professional skilled moving and self-storage. We provide services in twenty-four
                    hours daily, seven days in a very week. In other words, flexibility with very little notification – eleventh-hour
                    relocation is our specialty. Therefore, innovative packing materials as well as crating and specialist packing to
                    fulfill international standards.</Typography>
                </div>
                <br/>
                <Typography data-aos="fade-up"  data-aos-once='true'>
                    <b>In conclusion,</b> client’s needs is a keystone of our Dubai movers company in Dubai’s. We can arrange to unpack your
                    belongings and set up your home underneath your instructions.
                    </Typography>
                <br/>
                <Typography data-aos="fade-up"  data-aos-once='true'>
                    When you are moving your valunmle possessions, it pays to use the services of super professional packers and movers
                    who values your house or office and your belongings as highly as you do. When you choose Super Movers, you can be
                    confident that you have the backup of the latest skill and highly trained staff.
                    </Typography>
                <br/><br/>
                <Typography data-aos="fade-up"  data-aos-once='true' variant="h4">Dubai Movers</Typography>
                
                <Typography data-aos="fade-up"  data-aos-once='true'>
                    You can without much of a stretch store your matter. Therefore, acknowledge them up or you can appoint your
                    organization things with us for warehousing.
                </Typography>
                <br/>
                <Typography data-aos="fade-up"  data-aos-once='true'>
                    Movers and packers in Dubai that is immaculate movers UAE can adjust capacity and warehousing arrangement that
                    is appropriate for your inclinations and necessities.
                </Typography>
                <br/>
                <Typography data-aos="fade-up"  data-aos-once='true'>
                    Best movers in Dubai, a whole tidy up of the additional stuffing material and trash will be finished by our
                    group. When you have built up that the entire movers in Dubai thing is sorted out, you could begin the strategy
                    to withdraw all utilities affiliations and memberships.
                </Typography>
                <br/>
                <Typography data-aos="fade-up"  data-aos-once='true'>
                    nmove all, we utilize cutting edge and modified following frameworks to keep a safe watch on your shipment.
                </Typography>
                <br/>


            </div>
            <br/>
        </>
    )
}

export default AboutUs;